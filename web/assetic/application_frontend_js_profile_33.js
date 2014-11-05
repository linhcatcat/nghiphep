/**
 * Javascript of Profile Company Page
 * @author Rony <rony@likipe.se>
 */
jQuery(document).ready(function($) {
	if(typeof(bCheckJavascriptProfileCompany) !== "undefined" && bCheckJavascriptProfileCompany === true) {
		/**
		 * Render data
		 * @param {array} data json
		 * @author Rony <rony@likipe.se>
		 */
		function render_data_chart(data) {
			var currentYear = (new Date).getFullYear();
			var today = new Date();
			var $div = $("#scroll-candidates");
			// Loading templates embedded in the DOM. (HTML)
			var $listCandidate = $("#scroll-candidates .all-candidates");
			$listCandidate.html('');
			// Add all templates found in the DOM (it will search for blocks which 
			// are of type 'text/html'.  Nb: jQuery.onReady must have fired before calling.
			$.Mustache.addFromDom();
			// Render out one of the templates.
			for (var i in data) {
				//Age candidate
				var iAge = (data[i].candidate.length !== 0) ? (currentYear - data[i].candidate.year_of_birth) : 0;
				var index = false;
				if (i % 2 != 0) {
					index = true;
				}
				var sAvatar = '';
				var sAvatar2 = '';
				var sAvatar3 = '';
				var aPics = data[i].candidate.profile_picture;
				if (aPics.length != 0) {
					sAvatar = aPics[0].picture;
				}
				if (aPics.length >= 2) {
					sAvatar2 = aPics[1].picture;
				}
				if (aPics.length === 3) {
					sAvatar3 = aPics[2].picture;
				}
				if('' === sAvatar) {
					sAvatar = defaultCandidateAvatar;
				}
				
				var companyJobTitle = '';
				if (typeof data[i].original_company_job === 'undefined') {
					companyJobTitle = '';
				} else if (data[i].original_company_job.length === 0) {
					companyJobTitle = 'Spontanansökan';
				} else {
					companyJobTitle = data[i].original_company_job.title;
				}
				//List candidate by id
				$listCandidate.mustache('template-candidate-ajax', {
					avatar: assetUrl + sAvatar,
					name: data[i].candidate.first_name + ' ' + data[i].candidate.last_name,
					age: iAge,
					index: index,
					video: Routing.generate('videocv_frontend_company_profile_video', {iCandidateID: data[i].candidate.id}),
					jobCandidateId: data[i].id,
					companyJob: companyJobTitle,
					loop: i,
					id: (typeof data[i].company_job !== 'undefined') ? data[i].company_job.id : '',
					idJobCandidate: data[i].id,
					viewed: (data[i].viewed) ? 'profile-viewed' : '',
					unanswered: (!data[i].favourite && !data[i].no_interest) ? 'unanswered-profile' : '',
					idCandidate: data[i].candidate.id
				});
				var gender = false;
				if (1 == data[i].candidate.gender) {
					gender = true;
				}
				//Get profile Education
				var profileEducation = data[i].candidate.profile_education;
				var aProfileEducation = new Array();
				for (j in profileEducation) {
					var object = new Object();
					object.school = profileEducation[j].school;
					object.education = profileEducation[j].education;
					var from_date = new Date(profileEducation[j].from_date);
					object.from_date = from_date.getFullYear();
					var to_date = new Date(profileEducation[j].to_date);
					object.to_date = to_date.getFullYear();
					aProfileEducation[j] = object;
				}
				//Get profile Career
				var profileCareer = data[i].candidate.profile_career;
				var aProfileCareer = new Array();
				for (z in profileCareer) {
					var object = new Object();
					object.company = profileCareer[z].company;
					object.position = profileCareer[z].position;
					var from_date = new Date(profileCareer[z].from_date);
					object.from_date = from_date.getFullYear();
					var to_date = new Date(profileCareer[z].to_date);
					object.to_date = to_date.getFullYear();
					aProfileCareer[z] = object;
				}
			}
			$div.children('.ajax-loader').remove();
			$listCandidate.css('opacity', '1');
			//Load Video Colorbox
			var $recored_video = $('.recorded_video_candidate');
			if ($recored_video.length > 0) {
				$recored_video.each(function(){
					var $this = $(this);
					$this.colorbox({
						iframe: true,
						width: "1000px",
						height: "625px",
						close: '<i class="icon-remove"></i>'
					});
					var element = $this[0];
					Hammer(element).on("hold", function() {
						$this.colorbox({
							open: true
						});
					});
					return;
				});
			}
		}
		
		// Reset hidden input value when f5
		var $url_filter_job_Candidates = $("input#url_filter_job_candidates");
		$url_filter_job_Candidates.val(Routing.generate('videocv_api_company_getAllJobCandidate', {iCompanyID: iCompanyID}));
		$url_filter_job_Candidates.data('checkedSearch','false');
		// Configure jquery-Mustache to warn on missing templates (to aid debugging)
		$.Mustache.options.warnOnMissingTemplates = true;
		
		
		var $div = $("#scroll-candidates");
		var $allJobCandidates = $("#scroll-candidates .all-candidates");
		var $ulPaging = $('.pagination.pagination-centered > ul');
		
		/**
		 * Remove ajax when error
		 * @author Rony <rony@likipe.se>
		 */
		function reloadAjax() {
			//Update CustomScrollbar
			$div.children('.ajax-loader').remove();
			$allJobCandidates.css('opacity', '1');
			$ulPaging.empty();
		}
		
		/**
		 * Check key exists in array
		 * @param {array} array
		 * @param {key} id
		 * @return boolean
		 */
		function inArray(array, id) {
			return id in array;
		}
		
		/**
		 * Get chart with ajax
		 * @param {array} data json
		 * @author Rony<rony@likipe.se>
		 * @return {array} CandidateChart
		 */
		function render_data_chart_ajax(data) {
			var aCandidateChart = new Array();
			for (var i in data) {
				//Data for chart;
				var aYears = new Array();
				var aEvents = new Array();
				// Get Profile Education
				var aEducation = data[i].candidate.profile_education;
				var iTemp = 0;
				var iIndex = 0;
				if (0 < aEducation.length) {
					for (var j in aEducation) {
						var oStart = new Date(aEducation[j].from_date);
						var iStartYear = oStart.getFullYear();
						if (typeof aEducation[j].to_date === 'undefined' || !aEducation[j].to_date) {
							var oEnd = new Date();
						} else {
							var oEnd = new Date(aEducation[j].to_date);
						}
						var iEndYear = oEnd.getFullYear();
						var key = iEndYear - iStartYear;
						if (false === inArray(aEvents, key)) {
							aEvents[key] = new Array();
						}
						if (false === inArray(aEvents[key], iStartYear)) {
							aEvents[key][iStartYear] = new Array();
						}
						if (false === inArray(aEvents[key][iStartYear], iEndYear)) {
							aEvents[key][iStartYear][iEndYear] = new Array();
						}

						aEvents[key][iStartYear][iEndYear][iIndex] = aEducation[j].education + ' at ' + aEducation[j].school;
						iIndex = iIndex + 1;

						aYears[iTemp] = iStartYear;
						aYears[iTemp + 1] = iEndYear;
						iTemp = iTemp + 2;
					}
				}
				//Get Profile Career
				var aProfileCareer = data[i].candidate.profile_career;
				if (0 < aProfileCareer.length) {
					for (var z in aProfileCareer) {
						var oStart = new Date(aProfileCareer[z].from_date);
						var iStartYear = oStart.getFullYear();
						if (typeof aProfileCareer[z].to_date === 'undefined' || !aProfileCareer[z].to_date) {
							var oEnd = new Date();
						} else {
							var oEnd = new Date(aProfileCareer[z].to_date);
						}
						var iEndYear = oEnd.getFullYear();

						var key = iEndYear - iStartYear;
						if (false === inArray(aEvents, key)) {
							aEvents[key] = new Array();
						}
						if (false === inArray(aEvents[key], iStartYear)) {
							aEvents[key][iStartYear] = new Array();
						}
						if (false === inArray(aEvents[key][iStartYear], iEndYear)) {
							aEvents[key][iStartYear][iEndYear] = new Array();
						}

						aEvents[key][iStartYear][iEndYear][iIndex] = aProfileCareer[z].position + ' at ' + aProfileCareer[z].company;
						iIndex = iIndex + 1;

						aYears[iTemp] = iStartYear;
						aYears[iTemp + 1] = iEndYear;
						iTemp = iTemp + 2;
					}
				}
				var aRangeYear = new Array();
				var flag = false;
				if (2 <= aYears.length) {
					aYears.sort();
					aRangeYear['start'] = aYears[0];
					aRangeYear['end'] = aYears[(aYears.length) - 1];
					flag = true;
				}
				if (false === inArray(aCandidateChart, data[i].candidate.id)) {
					aCandidateChart[data[i].candidate.id] = new Array();
				}
				aCandidateChart[data[i].candidate.id]['aRangeYear'] = aRangeYear;
				aCandidateChart[data[i].candidate.id]['aEvents'] = aEvents;
				aCandidateChart[data[i].candidate.id]['flag'] = flag;
			}
			return aCandidateChart;
		}
		
		/**
		 * Render chart with ajax
		 * @param {array} CandidateChart
		 * @author Rony<rony@likipe.se>
		 */
		function show_candidate_chart_ajax(jobCandidateData) {
			for (var i in jobCandidateData) {
				var data = jobCandidateData[i].data_chart;
				var candidate = jobCandidateData[i].candidate;
				if (!data.draw_chart) {
					continue;
				}

				var aRangeMonth = data.range_month;
				var aChartEvents = data.events

				var aLabels = new Array();
				var aRealValues = new Array();
				for (var i = aRangeMonth.start - 8; i <= aRangeMonth.end + 4; i++) {
					aRealValues.push(i);
					var iYear = Math.floor(i / 12);
					var iMonth = i % 12;
					if (0 === iMonth) {
						iYear = iYear - 1;
						iMonth = 12;
					}
					aLabels.push(iMonth + '/' + iYear);
				}

				var aRelationships = new Array();
				var aChartEvents = data.events;
				$.each(aChartEvents, function(startYear, aEvents) {
					var iTemp02 = 1;
					$.each(aEvents, function(endYear, events) {
						var text = '';
						var textEducation = '';
						var textCareer = '';
						$.each(events, function(type, event) {
							$.each(event, function(key, sText) {
								if ('education' === type) {
									textEducation = textEducation + '<p class="info_' + type + '">' + sText + '</p>'
								} else {
									textCareer = textCareer + '<p class="info_' + type + '">' + sText + '</p>'
								}
							});
						});
						var item = new Object();
						item['pair'] = new Array(startYear, endYear);
						var oText = new Object();
						oText['education'] = textEducation;
						oText['career'] = textCareer;
						item['text'] = oText;
						aRelationships.push(item);
					});
				});
				var aChartData = new Object();
				aChartData['labels'] = aLabels;
				aChartData['real_values'] = aRealValues;
				aChartData['relationships'] = aRelationships;

				var classholderprofileajax = ".timeline-holder-ajax-" + candidate.id;
				$(classholderprofileajax).likipe_chart({
					data: aChartData,
					show_info: false
				});
			}
		}
		
		function render_pagination(pagingData) {
			$ulPaging.empty();
			var current_page = parseInt(pagingData['iCurrentPage']);
			var total_pages = parseInt(pagingData['iTotalPages']);
			var min = 1;
			var max = total_pages;
			if(total_pages > 9) {
				if(current_page > 4) {
					min = current_page - 4;
					if (total_pages - current_page < 4) {
						min = total_pages - 10;
					}
				}
				if(current_page < total_pages - 4) {
					max = current_page + 4;
					if (max < 9) {
						max = 9;
					}
				}
			}
			var sClass = (current_page == 1) ? 'disabled' : '';
			$ulPaging.append('<li data-page="' + 1  +'" class="page-click '+ sClass +'"><a>«</a></li>');
			for(var i = min; i <= max; i++) {
				var sClass = (i == current_page) ? 'active' : '';
				$ulPaging.append('<li data-page="' + i  +'" class="page-click '+ sClass +'"><a>' + i + '</a></li>');
			}
			var sClass = (current_page == total_pages) ? 'disabled' : '';
			$ulPaging.append('<li data-page="' + total_pages  +'" class="page-click '+ sClass +'"><a>»</a></li>');
		}
		
		$(document).on('click',".page-click", function(e) {
			var $this = $(this);
			dataFilter = {};
			dataFilter['page'] = $this.data('page');
			var $filterCategory =  $url_filter_job_Candidates.data('filterCategories');
			if ($filterCategory === "job_favourite") {
				dataFilter['job_favourite'] = 1;
			} else if ($filterCategory === "job_no_thanks") {
				dataFilter['job_no_thanks'] = 1;
			} else if("job_noanswer" === $filterCategory) {
				dataFilter['job_noanswer'] = 1;
			}
			getJobCandidatesByAjaxByFilter.call($this[0],$url_filter_job_Candidates, $searchForm, dataFilter);
		});
		
		/**
		 * Videocv\ApiBundle\Controller\CompanyController\getAllCandidate
		 * List all candidate with ajax
		 * When click to All candidate
		 * @author Rony <rony@likipe.se>
		 */
		$(document).on('click',".list-candidates .list-job h1.all-candidate", function(e) {
			$(img).appendTo($div);
			$(document).find('.checkbox.active').removeClass('active');
			$allJobCandidates.css('opacity', '0.5');
			$url_filter_job_Candidates.val(Routing.generate('videocv_api_company_getAllJobCandidate', {iCompanyID: iCompanyID}));
			$url_filter_job_Candidates.data('checkedSearch','false');
			$url_filter_job_Candidates.data('filterCategories','');
			$("ul.carousel-job .item-job").removeClass('tab-active');
			$('.list-candidates .list-job .all-spontaneous').removeClass('tab-active');
			$(this).addClass('tab-active');
			addClassActiveForAllCandidates();
			//addClassActive($(this), false);
			$.ajax({
				type: 'GET',
				url: Routing.generate('videocv_api_company_getAllJobCandidate', {iCompanyID: iCompanyID}),
				contentType: 'application/json',
				success: function(data) {
					var jobCandidateData = data['jobCandidate_data'];
					var pagingData = data['pagination_data'];
					if (0 == jobCandidateData.length) {
						reloadAjax();
						var sHtml = '<li class="item-candidate"><h1 class="candidates-not-found">Finns inga profiler i denna flik ännu</h1></li>';
						$("#scroll-candidates .all-candidates").html('');
						$("#scroll-candidates .all-candidates").append(sHtml);
						return;
					} else {
						render_data_chart(jobCandidateData);
						$("#scroll-candidates .all-candidates .item-candidate").each(function(){
							$(this).addClass('item-all-candidate');
						});
						show_candidate_chart_ajax(jobCandidateData);
						render_pagination(pagingData);
					}
					
					$('.total_job_candidates .total').html(pagingData.iTotalItems);
				},
				error: function(xhr, status, exception) {
					reloadAjax();
					return;
				}
			});
			e.preventDefault();
		});
		
		/**
		 * Videocv\ApiBundle\Controller\CompanyController\getSpontaneous
		 * Spontaneous/unspecified
		 * When click to "Spontaneous"
		 * @param {e} e
		 * @author Rony <rony@likipe.se>
		 */
		$(document).on('click',".list-candidates .list-job h1.all-spontaneous", function(e) {
			$(img).appendTo($div);
			$(document).find('.checkbox.active').removeClass('active');
			$allJobCandidates.css('opacity', '0.5');
			$url_filter_job_Candidates.val(Routing.generate('videocv_api_company_getSpontaneous', {iCompanyID: iCompanyID}));
			$url_filter_job_Candidates.data('checkedSearch','false');
			$url_filter_job_Candidates.data('filterCategories','');
			$("ul.carousel-job .item-job").removeClass('tab-active');
			addClassActiveForAllCandidates();
			$('.list-candidates .list-job .all-candidate').removeClass('tab-active');
			$(this).addClass('tab-active');
			//addClassActive($(this), false);
			$.ajax({
				type: 'GET',
				url: Routing.generate('videocv_api_company_getSpontaneous', {iCompanyID: iCompanyID}),
				contentType: 'application/json',
				success: function(data) {
					var jobCandidateData = data['jobCandidate_data'];
					var pagingData = data['pagination_data'];
					if (0 === jobCandidateData.length) {
						reloadAjax();
						var sHtml = '<li class="item-candidate"><h1 class="candidates-not-found">Finns inga profiler i denna flik ännu</h1></li>';
						$("#scroll-candidates .all-candidates").html('');
						$("#scroll-candidates .all-candidates").append(sHtml);
						return;
					} else {
						render_data_chart(jobCandidateData);
//						$("#scroll-candidates .all-candidates .item-candidate").each(function(){
//							$(this).addClass('item-all-candidate');
//						});
						show_candidate_chart_ajax(jobCandidateData);
						render_pagination(pagingData);
					}
					
					$('.total_job_candidates .total').html(pagingData.iTotalItems);
				},
				error: function(xhr, status, exception) {
					reloadAjax();
					return;
				}
			});
			e.preventDefault();
		});
		
		/**
		 * Inline Edit
		 * Double click to check box on Job Tab
		 * @param {type} name description
		 * @author Rony <rony@likipe.se>
		 */
		jQuery.fn.single_double_click = function(single_click_callback, double_click_callback, timeout) {
			return this.each(function() {
				var clicks = 0,
					self = this;
				jQuery(this).click(function(event) {
					clicks++;
					if (clicks == 1) {
						setTimeout(function() {
							if (clicks == 1) {
								single_click_callback.call(self, event);
							} else {
								double_click_callback.call(self, event);
							}
							clicks = 0;
						}, timeout || 300);
					}
				});
			});
		}
		
		
		/**
		 * Videocv\ApiBundle\Controller\CompanyController\listCandidate
		 * When click and double click job tab
		 * @author Rony <rony@likipe.se>
		 */
		function addClassActiveForAllCandidates() {
			$('.filter_job_candidate_of_job_company .list_category_filter a').removeClass('filter-active');
			$('#category_all_job_candidates').addClass('filter-active');
		}
		
		$("ul.carousel-job .item-job label.company-job").single_double_click(function(e) {
			
			$(img).appendTo($div);
			$allJobCandidates.css('opacity', '0.5');
			var $parent = $(this).parent('.item-job');
			$(document).find('.checkbox.active').removeClass('active');
			$parent.find('.checkbox').addClass('active');
			var iIdCompanyJob = parseInt($parent.data('id'));
			$url_filter_job_Candidates.val(Routing.generate('videocv_api_company_getJobCandidate', {iIdCompanyJob: iIdCompanyJob}));
			$url_filter_job_Candidates.data('checkedSearch','false');
			$url_filter_job_Candidates.data('filterCategories','');
			$("ul.carousel-job .item-job").removeClass('tab-active');
			$(this).parent('.item-job').addClass('tab-active');
			$('.list-candidates .list-job > h1').removeClass('tab-active');
			addClassActiveForAllCandidates();
			//addClassActive($(this), false);
			$.ajax({
				type: 'GET',
				url: Routing.generate('videocv_api_company_getJobCandidate', {iIdCompanyJob: iIdCompanyJob}),
				contentType: 'application/json',
				success: function(result) {
					var data = result.jobCandidate_data;
					var pagingData = result.pagination_data;
					if (0 == data.length) {
						reloadAjax();
						var sHtml = '<li class="item-candidate"><h1 class="candidates-not-found">Finns inga profiler i denna flik ännu</h1></li>';
						$("#scroll-candidates .all-candidates").html('');
						$("#scroll-candidates .all-candidates").append(sHtml);
						//return;
					} else {
						render_data_chart(data);
						show_candidate_chart_ajax(data);
						render_pagination(pagingData);
					}
					$('.total_job_candidates .total').html(pagingData.iTotalItems);
					return;
				},
				error: function(xhr, status, exception) {
					reloadAjax();
					var sHtml = '<li class="item-candidate"><h1 class="candidates-not-found">' + xhr.responseJSON.error + '</h1></li>';
					$("#scroll-candidates .all-candidates").html('');
					$("#scroll-candidates .all-candidates").append(sHtml);
					return;
				}
			});
			e.preventDefault();
			
		}, function() {
			var idEditJob = $(this).parent('li').data('editjobs');
			$(idEditJob).modal('show');
		});
		
		
		/**
		 * Remove item candidate after drap & drop
		 * @author Rony <rony@likipe.se>
		 * @param {id} id of job candidate
		 */
		function removeItemCandidateAfterDrap(id) {
			var $itemJobCandidate = $('#scroll-candidates .all-candidates .item-candidate');
			$itemJobCandidate.each(function(){
				var $this = $(this);
				var idJobCandidate = parseInt($this.children("input[name='iIdJobCandidate']").val());
				if (id === idJobCandidate) {
					$this.remove();
				}
			});
		}
		
		
		/**
		 * Videocv\ApiBundle\Controller\CompanyController\putJobCandidate
		 * Drap & drop candidate profile to jobs tab
		 * @author Rony <rony@likipe.se>
		 */
		var oldContainer;
		var group = $("ul.simple_with_animation").sortable({
			group: 'simple_with_animation',
			handle: 'div.move-job-candidate',
			drop: false,
			pullPlaceholder: false,
			exclude: '.thumb',
			afterMove: function (placeholder, container) {
				if(oldContainer != container){
				  if(oldContainer) {
					oldContainer.el.removeClass("active_sortable");
				  }
				  container.el.addClass("active_sortable");
				  oldContainer = container;
				}
			},
			// animation on drop
			onDrop: function  (item, targetContainer, _super) {
				$('.active_sortable').removeClass("active_sortable");
				if ($(item.context).hasClass('thumb')) {
					return;
				}
				var clonedItem = $('<li/>').css({height: 0})
				item.before(clonedItem)
				clonedItem.animate({'height': item.height()})
				
				item.animate(clonedItem.position(), function  () {
					clonedItem.detach()
					_super(item)
				});
				var $parentCategory = item.parent('a.my_custom_button');
				if($parentCategory.length > 0) {
					var iIdJobCandidate = parseInt(item.children("input[name='iIdJobCandidate']").val());
					var companyJobId = parseInt(item.children("input[name='deleteCompanyJob']").val());
					if (companyJobId) {
						var $unAnsweredJobCandidate = $("ul.carousel-job").find("[data-id='" + companyJobId + "']").find('span.number_not_viewed_job_candidate');
					} else {
						var $unAnsweredJobCandidate = $(".all-spontaneous .number_not_viewed_job_candidate");
					}
					var $allUnAnswerJobCandidates = $('.list-candidates .list-job h1.all-candidate .number_not_viewed_job_candidate');
					if($parentCategory.attr('id') == "category_favourite_job_candidates") {
						$.ajax({
							type: 'PUT',
							url: Routing.generate('videocv_api_company_edit_favourite_jobCandidate', {iIdJobCandidate: iIdJobCandidate}),
							contentType: 'application/json',
							beforeSend: function() {
								$(img).appendTo($div);
								$allJobCandidates.css('opacity', '0.5');
							},
							success: function(data) {
								if (item.hasClass('unanswered-profile')) {
									$unAnsweredJobCandidate.html(parseInt($unAnsweredJobCandidate.html()) - 1);
									$allUnAnswerJobCandidates.html(parseInt($allUnAnswerJobCandidates.html()) - 1);
									item.removeClass('unanswered-profile');
								}
								if (item.hasClass('item-all-candidate')) {
									item.appendTo("#scroll-candidates .all-candidates");
								} else {
									item.remove();
								}
								//Remove Button Favourite
								$(item.find('a.view-profile.btn').attr('href')).find('a.email-candidate').remove();
								removeItemCandidateAfterDrap(iIdJobCandidate);
							},
							error: function(xhr, status, exception) {
								return;
							},
							complete: function() {
								$div.children('.ajax-loader').remove();
								$allJobCandidates.css('opacity', '1');
							}
						});
					} else if ("category_unanswered_candidates" === $parentCategory.attr('id')) {
						$.ajax({
							type: 'PUT',
							url: Routing.generate('videocv_api_company_unanswered_jobCandidate', {idJobCandidate: iIdJobCandidate}),
							contentType: 'application/json',
							beforeSend: function() {
								$(img).appendTo($div);
								$allJobCandidates.css('opacity', '0.5');
							},
							success: function(data) {
								if (!item.hasClass('unanswered-profile')) {
									$unAnsweredJobCandidate.html(parseInt($unAnsweredJobCandidate.html()) + 1);
									$allUnAnswerJobCandidates.html(parseInt($allUnAnswerJobCandidates.html()) + 1);
									item.addClass('unanswered-profile');
								}
								if (item.hasClass('item-all-candidate')) {
									item.appendTo("#scroll-candidates .all-candidates");
								} else {
									item.remove();
								}
								//Remove Button Favourite
								$(item.find('a.view-profile.btn').attr('href')).find('a.email-candidate').remove();
								removeItemCandidateAfterDrap(iIdJobCandidate);
							},
							error: function(xhr, status, exception) {
								return;
							},
							complete: function() {
								$div.children('.ajax-loader').remove();
								$allJobCandidates.css('opacity', '1');
							}
						});
					} else {
						$.ajax({
							type: 'DELETE',
							url: Routing.generate('videocv_api_company_deleteNoInterest', {iIdJobCandidate: iIdJobCandidate}),
							contentType: 'application/json',
							beforeSend: function() {
								$(img).appendTo($div);
								$allJobCandidates.css('opacity', '0.5');
							},
							success: function(data) {
								if (item.hasClass('unanswered-profile')) {
									$unAnsweredJobCandidate.html(parseInt($unAnsweredJobCandidate.html()) - 1);
									$allUnAnswerJobCandidates.html(parseInt($allUnAnswerJobCandidates.html()) - 1);
									item.removeClass('unanswered-profile');
								}
								if (item.hasClass('item-all-candidate')) {
									item.appendTo("#scroll-candidates .all-candidates");
								} else {
									item.remove();
								}
								//Remove Button Favourite
								$(item.find('a.view-profile.btn').attr('href')).find('a.edit-candidate').remove();
								removeItemCandidateAfterDrap(iIdJobCandidate);
							},
							error: function(xhr, status, exception) {
								return;
							},
							complete: function() {
								$div.children('.ajax-loader').remove();
								$allJobCandidates.css('opacity', '1');
							}
						});
					}
				} else {
					var $parent = item.parents('.item-job');
					var iIdCompanyJob = parseInt($parent.data('id'));
					var iIdCompanyJobNew = isNaN(iIdCompanyJob) ? 0 : iIdCompanyJob;
					var iIdJobCandidate = parseInt(item.children("input[name='iIdJobCandidate']").val());
					var iIdCompanyJobOld = parseInt(item.children("input[name='deleteCompanyJob']").val());
					$.ajax({
						type: 'PUT',
						url: Routing.generate('videocv_api_company_drag_drop_jobCandidate', {iIdJobCandidate: iIdJobCandidate}),
						data: JSON.stringify({'iIdCompanyJobNew': iIdCompanyJobNew}),
						contentType: 'application/json',
						success: function(data) {
							if (item.hasClass('item-all-candidate')) {
								item.children('input[name="deleteCompanyJob"]').val(iIdCompanyJobNew);
								item.appendTo("#scroll-candidates .all-candidates");
							} else {
								item.remove();
							}
							if(item.hasClass('unanswered-profile')) {
								var $newUnAnsweredJobCandidate = $parent.find('span.number_not_viewed_job_candidate');
								$newUnAnsweredJobCandidate.html(parseInt($newUnAnsweredJobCandidate.html()) + 1);
								var $oldUnAnsweredJobCandidate = $("ul.carousel-job").find("[data-id='" + iIdCompanyJobOld + "']").find('span.number_not_viewed_job_candidate');
								if (0 < $oldUnAnsweredJobCandidate.length) {
									$oldUnAnsweredJobCandidate.html(parseInt($oldUnAnsweredJobCandidate.html()) - 1);
								} else {
									var $unAnsweredOfUnspecificedJob = $('.all-spontaneous .number_not_viewed_job_candidate');
									$unAnsweredOfUnspecificedJob.html(parseInt($unAnsweredOfUnspecificedJob.html()) - 1);
								}
							}
						},
						error: function(xhr, status, exception) {
							return;
						}
					});
				}
			},

			// set item relative to cursor position
			onDragStart: function ($item, container, _super) {
				var offset = $item.offset(),
				pointer = container.rootGroup.pointer

				adjustment = {
					left: pointer.left - offset.left,
					top: pointer.top - offset.top
				}

				_super($item, container)
			},
			onDrag: function ($item, position) {
				var top = position.top;
				var left = position.left;
				if (0 <= top || (620 <= left && -60 <= top)) {
					$(document).find('.active_sortable').each(function() {
						$(this).removeClass('active_sortable');
					});

					
				}
				$item.css({
					left: position.left - adjustment.left,
					top: position.top - adjustment.top
				});
			}
		});
		
		$("ul.carousel-job .item-job").sortable({
			group: 'simple_with_animation',
			drag: false
		});
		
		$("#category_favourite_job_candidates, #category_no_thanks_job_candidates, #category_unanswered_candidates").sortable({
			group: 'simple_with_animation',
			drag: false
		});
		
		/**
		 * Remove ajax loading when error.
		 * @author Rony<rony@likipe.se>
		 */
		function reloadAjaxPopup(selector) {
			selector.children('.ajax-loader-profile').remove();
			selector.css('opacity', '1');
			$('body').children('.modal-backdrop').remove();
		}
		
		/**
		 * Remove item in list candidate when update database
		 * @author Rony<rony@likipe.se>
		 */
		function removeItemCandidate(iIdJobCandidate) {
			$("#scroll-candidates .all-candidates .item-candidate").each(function(){
				var deleteJobCandidate = parseInt($(this).children("input[name='iIdJobCandidate']").val());
				if (deleteJobCandidate === iIdJobCandidate) {
					$(this).remove();
				}
			});
			$(".list-candidates .popup-profile .view-popup-profile").each(function(){
				var deleteJobCandidate = parseInt($(this).children("input[name='iIdJobCandidate']").val());
				if (deleteJobCandidate === iIdJobCandidate) {
					$(this).remove();
				}
			});
			$('body').children('.modal-backdrop').remove();
		}
		
		/**
		 * Videocv\ApiBundle\Controller\CompanyController\postSearchJobCandidate
		 * Employer/Company
		 * Search job candidate with ajax
		 * @author Rony<rony@likipe.se>
		 */
		var $searchForm = $('.company-info .company-other .company-search .form-search');
		$searchForm.submit(function(e) {
			$(img).appendTo($div);
			$allJobCandidates.css('opacity', '0.5');
			var $this = $(this);
			var aDataRequest = new Array();
			var filterCandidate = $this.find("input[name='company_filter_candidate']:checked").val();
			
			var oData = {};
			if ('age_DESC' === filterCandidate) {
				oData['age'] = 'DESC';
			} else if ('gender_male_1' === filterCandidate) {
				oData['gender'] = 1;
			} else if ('gender_female_2' === filterCandidate) {
				oData['gender'] = 2;
			} else if ('sort_education' === filterCandidate) {
				oData['sortRankEducation'] = 'checked';
			} else if ('sort_wage_subsidies' === filterCandidate) {
				oData['sortRankWageSubsidies'] = 'checked';
			} else if ('sort_language' === filterCandidate) {
				oData['sortLanguage'] = 'checked';
			} else if ('filter_car_b_licence' === filterCandidate) {
				oData['sortDrivingLicense'] = 'checked';
			} else if ('newest_desc' === filterCandidate) {
				oData['candidate_desc'] = 'DESC';
			} else if ('oldest_asc' === filterCandidate) {
				oData['select_filter'] = 'ASC';
			}
			var companyJobId = $('#company-name .list-job .jobs .carousel-job .item-job.tab-active').data('id');
			var jobId = parseInt(companyJobId);
			if ("" !== companyJobId && Math.floor(companyJobId) === jobId) {
				oData['job_id'] = jobId;
			}
            var $spontaneous = $('.list-candidates .list-job .all-spontaneous.tab-active');
            if (0 < $spontaneous.length) {
                oData['spontaneous'] = true;
            }
			var $categoryUnanswered = $('#category_unanswered_candidates.filter-active');
            var $categoryFavourite = $('#category_favourite_job_candidates.filter-active');
            var $categoryNoThanks = $('#category_no_thanks_job_candidates.filter-active');
            if (0 < $categoryUnanswered.length) {
                oData['job_noanswer'] = 1;
            } else if (0 < $categoryFavourite.length) {
                oData['job_favourite'] = 1;
            } else if (0 < $categoryNoThanks.length) {
                oData['job_no_thanks'] = 1;
            }
			aDataRequest[0] = oData;
			$url_filter_job_Candidates.val(Routing.generate('videocv_api_company_search_jobCandidate', {iCompanyID: iCompanyID}));
			$url_filter_job_Candidates.data('checkedSearch','true');
			
			$.ajax({
				type: 'POST',
				url: Routing.generate('videocv_api_company_search_jobCandidate', {iCompanyID: iCompanyID}),
				data: JSON.stringify(aDataRequest),
				contentType: 'application/json',
				success: function(result) {
					var data = result.jobCandidate_data;
					var pagingData = result['pagination_data'];
					render_data_chart(data);
					if (!jobId && !oData['spontaneous']) {
						$("#scroll-candidates .all-candidates .item-candidate").each(function(){
							$(this).addClass('item-all-candidate');
						});
					}
					show_candidate_chart_ajax(data);
					$('.total_job_candidates .total').html(pagingData.iTotalItems);
					if (0 === data.length) {
						reloadAjax();
					} else {
						render_pagination(pagingData);
					}
					var $jobActive = $("ul.carousel-job .item-job.tab-active");
					if (0 > $jobActive.length) {
						$("ul.carousel-job .item-job").removeClass('tab-active');
						$('.list-candidates .list-job .all-spontaneous').removeClass('tab-active');
						$('.list-candidates .list-job .all-candidate').addClass('tab-active');
					}
					//addClassActiveForAllCandidates();
				},
				error: function(xhr, status, exception) {
					reloadAjax();
					return;
				}
			});
			e.preventDefault();
		});
		
		/**
		* Remove Class custom_hide_modal when click View Profile
		* @author Harrison<harrison@likipe.se>
		*/
		$(document).on('click','.all-candidates .item-candidate .timeline-candidate',function(){
			//Run ajax set profile viewed
			var $this = $(this);
			var iJobCandidateID = $this.data('idJobcandidate');
			var $itemCandidate = $this.closest('li.item-candidate');
			if (!$itemCandidate.hasClass('profile-viewed')) {
				$.ajax({
					type: 'PUT',
					url: Routing.generate('videocv_api_company_view_candidate', {iIdJobCandidate: iJobCandidateID}),
					contentType: 'application/json',
					success: function(data) {
                        window.location.href = Routing.generate('videocv_frontend_job_candidate_profile', {idJobCandidate: iJobCandidateID});
					},
					error: function(xhr, status, exception) {
						return;
					}
				});
			} else {
				window.location.href = Routing.generate('videocv_frontend_job_candidate_profile', {idJobCandidate: iJobCandidateID});
			}
		});
		
		/**
		 * Sunmit form: Add new company job
		 * Validation - End date have to be after start date.
		 * @author Rony<rony@likipe.se>
		 */
		
		var $liFocus = $('.form-company-job-popup .li_transfer_job .data-transfer .job-transfer');
		$liFocus.each(function() {
			var $this = $(this);
			var $transferField = $this.find('.transfer-field');
			var $alert = $this.find('.informaiton-message');
			$transferField.focusin(function() {
				$alert.fadeOut(1000);
				if ($this.hasClass('li_numberofjobvacancies_transfer')) {
					$this.find('.check-is-number').fadeOut(1000);
				}
			});
		});
		var $form = $("form.form-company-job-popup");
		$form.submit(function( event ) {
			var $thisForm = $(this);
			var startDate = new Date($thisForm.find("#CompanyJobType_startDate").val()).getTime();
			var endDate = new Date($thisForm.find("#CompanyJobType_endDate").val()).getTime();
			if ( endDate <= startDate ) {
				showLightboxMessage('End date have to be after start date!');
				return false;
			}
			if(15552000000 < (endDate - startDate)) {
				showLightboxMessage('The difference between End Date and Start Date can not be more than 180!');
				return false;
			}
			var $transferJobCheck = $thisForm.find('#CompanyJobType_companyTransfer');
			var $li = $thisForm.find('.job-transfer');
			if ($transferJobCheck.is(":checked")) {
				var checkInputError = false;
				$li.each(function(){
					var $this = $(this);
					var $elementTransferField = $this.find('.transfer-field');
					if (!$this.hasClass('li_car_field_transfer') && !$this.hasClass('li_license_category_field_transfer')) {
						if (0 < $elementTransferField.length) {
							var transferField = $elementTransferField.val();
						} else if ($this.hasClass('li_renew_workads')) {
							var transferField = $this.find('input[type="radio"]').val();
						} else {
							var transferField = $this.find('.selecter_basic').val();
						}
						var $alert = $this.find('.informaiton-message');
						if ("" === transferField || !transferField) {
							$alert.css({'display': 'block'});
							checkInputError = true;
						} else {
							$alert.css({'display': 'none'});
						}
					} else if ($this.hasClass('li_car_field_transfer') && $this.find('#CompanyJobType_qualificationTypeCar').is(':checked')) {
						var $licenseCategory = $this.closest('.data-transfer').children('.li_license_category_field_transfer');
						var $listLicenseCategories = $licenseCategory.find('.checkbox-item input[type="checkbox"]');
						var checkValue = false;
						$listLicenseCategories.each(function(){
							if ($(this).is(':checked')) {
								checkValue = true;
								return false;
							}
						});
						if (!checkValue) {
							$licenseCategory.find('.informaiton-message').css({'display': 'block'});
							checkInputError = true;
						} else {
							$licenseCategory.find('.informaiton-message').css({'display': 'none'});
						}
					}
					if ($this.hasClass('li_numberofjobvacancies_transfer')) {
						var $checkIsNumber = $this.find('.check-is-number');
						if ("" !== transferField && (Math.floor(transferField) !== parseInt(transferField) || 1 > parseInt(transferField) || 999 < parseInt(transferField))) {
							$checkIsNumber.css({'display': 'block'});
							checkInputError = true;
						} else {
							$checkIsNumber.css({'display': 'none'});
						}
					}
				});
				if (checkInputError) {
					return false;
				}
				// Check Transfer Start Date and Transfer End Date
				var transferStartDate = new Date($thisForm.find("#CompanyJobType_startingDate").val()).getTime();
				var transferEndDate = new Date($thisForm.find("#CompanyJobType_transferredEndingDate").val()).getTime();
				if(transferEndDate <= transferStartDate) {
					showLightboxMessage('End date have to be after start date!');
					return false;
				}
				if(15552000000 < (transferEndDate - transferStartDate)) {
					showLightboxMessage('The difference between End Date and Start Date can not be more than 180!');
					return false;
				}
			}
			return true;
			event.preventDefault();
		});
		
		/**
		 * Edit logo
		 * @author Harrison
		 * @author Harrison <harrison@likipe.se>
		 */
		$(document).on('change', '#fileupload.edit_logo_company', function() {
			$('#form_upload_logo_company').submit();
		});
		$('#form_upload_logo_company').ajaxForm({
			data: { _method:'PUT' },
			success: function(data) {
				if (data) {
					showLightboxMessage("Edit Logo Successfully");
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {}
		});
		
		/**
		 * Filter Job Candidate
		 * When Select sort
		 * @author Harrison <harrison@likipe.se>
		 */
		$(document).on('change','.filter_job_candidate_of_job_company .select_filter select', function(){
			var $this = $(this);
			dataFilter = {};
			dataFilter['select_filter'] = $this.val();
			var $filterCategory =  $url_filter_job_Candidates.data('filterCategories');
			if ("job_favourite" == $filterCategory) {
				dataFilter['job_favourite'] = 1;
			} else if ("job_no_thanks" == $filterCategory) {
				dataFilter['job_no_thanks'] = 1;
			} else if("job_noanswer" == $filterCategory) {
				dataFilter['job_noanswer'] = 1;
			}
			getJobCandidatesByAjaxByFilter.call($this[0],$url_filter_job_Candidates, $searchForm, dataFilter);
		});
		
		/**
		 * Add class active
		 * @author Rony <rony@likipe.se>
		 * @param {element} $element
		 * @param {boolean} bFilter
		 */
		function addClassActive($element, bFilter) {
			var $div = $('.filter_job_candidate_of_job_company .list_category_filter a');
			$div.each(function(){
				if ($(this).hasClass('filter-active')) {
					$(this).removeClass('filter-active');
				}
			});
			if (bFilter) {
				$element.addClass('filter-active');
			}
		}
		
		/**
		 * Get Obesvarade JobCandidate
		 * When click Obesvarade
		 * @author Harrison <harrison@likipe.se>		 
		 */
		var $formSearch = $('.company-info .company-search .form-search');
		
		 $(document).on('click','.list-candidates #category_all_job_candidates', function(e){
			addClassActive($(this), true);
			$url_filter_job_Candidates.data('filterCategories','');
			dataFilter = {};
			getJobCandidatesByAjaxByFilter.call($(this)[0],$url_filter_job_Candidates, $searchForm, dataFilter);
			e.preventDefault();
		 });
		/**
		 * Get Favourite JobCandidates
		 * When click to Favoriter
		 * @author Harrison <harrison@likipe.se>
		 */
		$(document).on('click',".list-candidates #category_favourite_job_candidates", function(e) {
			addClassActive($(this), true);
			$url_filter_job_Candidates.data('filterCategories','job_favourite');
			dataFilter = {};
			dataFilter['job_favourite'] = 1;
			getJobCandidatesByAjaxByFilter.call($(this)[0],$url_filter_job_Candidates, $searchForm, dataFilter);
			e.preventDefault();
		});
		
		/**
		 * Get Favourite JobCandidates
		 * When click to Favoriter
		 * @author Harrison <harrison@likipe.se>
		 */
		$(document).on('click',".list-candidates #category_unanswered_candidates", function(e) {
			addClassActive($(this), true);
			$url_filter_job_Candidates.data('filterCategories','job_noanswer');
			dataFilter = {};
			dataFilter['job_noanswer'] = 1;
			getJobCandidatesByAjaxByFilter.call($(this)[0],$url_filter_job_Candidates, $searchForm, dataFilter);
			e.preventDefault();
		});
		
		/**
		 * Get No Thanks JobCandidates
		 * When click to Nej Tack
		 * @author Harrison <harrison@likipe.se>
		 */
		$(document).on('click',".list-candidates #category_no_thanks_job_candidates", function(e) {
			addClassActive($(this), true);
			$url_filter_job_Candidates.data('filterCategories','job_no_thanks');
			dataFilter = {};
			dataFilter['job_no_thanks'] = 1;
			getJobCandidatesByAjaxByFilter.call($(this)[0],$url_filter_job_Candidates, $searchForm, dataFilter);
			e.preventDefault();
		});
		
		function getJobCandidatesByAjaxByFilter($url_filter_job_Candidates, $searchForm, dataFilter){
			var $this = $(this);
			var $valueFilter = $this.val();
			var $checkAllItem = $("#scroll-candidates .all-candidates .item-candidate").hasClass('item-all-candidate');
			if($url_filter_job_Candidates.data('checkedSearch') == "false") {
				$.ajax({
					type: 'GET',
					url: $url_filter_job_Candidates.val(),
					data: dataFilter,
					beforeSend: function() {
						$(img).appendTo($div);
						$allJobCandidates.css('opacity', '0.5');
					},
					success: function(result) {
						var data = result.jobCandidate_data;
						var pagingData = result['pagination_data'];
						if (0 == data.length) {
							reloadAjax();
							var sHtml = '<li class="item-candidate"><h1 class="candidates-not-found">Finns inga profiler i denna flik ännu</h1></li>';
							$("#scroll-candidates .all-candidates").html('');
							$("#scroll-candidates .all-candidates").append(sHtml);
						} else {
							render_data_chart(data);
							if ($checkAllItem) {
								$("#scroll-candidates .all-candidates .item-candidate").each(function(){
									$(this).addClass('item-all-candidate');
								});
							}
							show_candidate_chart_ajax(data);
							render_pagination(pagingData);
						}
						$('.total_job_candidates .total').html(pagingData.iTotalItems);
						return;
					},
					error: function(xhr, status, exception) {
						reloadAjax();
						var sHtml = '<li class="item-candidate"><h1 class="candidates-not-found">' + xhr.responseJSON.error + '</h1></li>';
						$("#scroll-candidates .all-candidates").html('');
						$("#scroll-candidates .all-candidates").append(sHtml);
						return;
					},
					complete: function() {
						$div.children('.ajax-loader').remove();
						$allJobCandidates.css('opacity', '1');
					}
				});
			} else {
				var filterCandidate = $formSearch.find("input[name='company_filter_candidate']:checked").val();
				
				var oData = {};
				if ('age_DESC' === filterCandidate) {
					oData['age'] = 'DESC';
				} else if ('gender_male_1' === filterCandidate) {
					oData['gender'] = 1;
				} else if ('gender_female_2' === filterCandidate) {
					oData['gender'] = 2;
				} else if ('sort_education' === filterCandidate) {
					oData['sortRankEducation'] = 'checked';
				} else if ('sort_wage_subsidies' === filterCandidate) {
					oData['sortRankWageSubsidies'] = 'checked';
				} else if ('sort_language' === filterCandidate) {
					oData['sortLanguage'] = 'checked';
				} else if ('filter_car_b_licence' === filterCandidate) {
					oData['sortDrivingLicense'] = 'checked';
				} else if ('newest_desc' === filterCandidate) {
					oData['candidate_desc'] = 'DESC';
				} else if ('oldest_asc' === filterCandidate) {
					oData['select_filter'] = 'ASC';
				}
				var companyJobId = $('#company-name .list-job .jobs .carousel-job .item-job.tab-active').data('id');
				var jobId = parseInt(companyJobId);
				if ("" !== companyJobId && Math.floor(companyJobId) === jobId) {
					oData['job_id'] = jobId;
				}
                var $spontaneous = $('.list-candidates .list-job .all-spontaneous.tab-active');
                if (0 < $spontaneous.length) {
                    oData['spontaneous'] = true;
                }
				var $categoryUnanswered = $('#category_unanswered_candidates.filter-active');
                var $categoryFavourite = $('#category_favourite_job_candidates.filter-active');
                var $categoryNoThanks = $('#category_no_thanks_job_candidates.filter-active');
                if (0 < $categoryUnanswered.length) {
                    oData['job_noanswer'] = 1;
                } else if (0 < $categoryFavourite.length) {
                    oData['job_favourite'] = 1;
                } else if (0 < $categoryNoThanks.length) {
                    oData['job_no_thanks'] = 1;
                }
				var aDataRequest = new Array();
				for(var i in dataFilter) {
					oData[i] = dataFilter[i];
				}
				aDataRequest[0] = oData;
				$.ajax({
					type: 'POST',
					url: $url_filter_job_Candidates.val(),
					data: JSON.stringify(aDataRequest),
					contentType: 'application/json',
					beforeSend: function() {
						$(img).appendTo($div);
						$allJobCandidates.css('opacity', '0.5');
					},
					success: function(result) {
						var data = result.jobCandidate_data;
						var pagingData = result['pagination_data'];
						render_data_chart(data);
						if ($checkAllItem) {
							$("#scroll-candidates .all-candidates .item-candidate").each(function(){
								$(this).addClass('item-all-candidate');
							});
						}
						show_candidate_chart_ajax(data);
						render_pagination(pagingData);
						$('.total_job_candidates .total').html(pagingData.iTotalItems);
						if (0 === data.length) {
							reloadAjax();
						} else {
							render_pagination(pagingData);
						}
					},
					error: function(xhr, status, exception) {
						reloadAjax();
						return;
					},
					complete: function() {
						$div.children('.ajax-loader').remove();
						$allJobCandidates.css('opacity', '1');
					}
				});
			}
		}
		//Load JobCandidates and Pagination When Load Page
		$(".list-candidates .list-job h1.all-candidate").click();
		
		/**
		 * Alternative way for drag&drop in Touch Devices
		 * When click on "move" icon in touch-devices
		 * @author Rony <rony@likipe.se>
		 * @param {e} e
		 */
		var $modal = $('.popup-touch-devices #modal-touch-devices');
		var $itemMoveClick = '';
		var $modalBody = $modal.find('.modal-body');
		
		$(document).on('click',".item-candidate .drag-drop-in-touch-devices", function(e) {
			var $this = $(this);
			$itemMoveClick = $this;
			var $itemCandidate = $this.parents('.item-candidate');
			var idJobCandidate = parseInt($itemCandidate.find("input[name='iIdJobCandidate']").val());
			$modal.find(".jobcandidate-touch-devices").val(idJobCandidate);
			var $jobCandidate = $itemMoveClick.parents('.item-candidate');
			var companyJobCurrent = parseInt($jobCandidate.find("input[name='deleteCompanyJob']").val());
			$('.jobs-popup .list-jobs-popup .item-job-touch-devices').each(function(){
				var $input = $(this).find("input[name='drag_drop_touch_devices']");
				var $radio = $(this).find("span.radio");
				var id = parseInt($input.val());
				if (companyJobCurrent === id) {
					$input.prop('checked', true);
					$radio.css({'background-position': '0px -23px'});
				} else {
					$input.removeAttr('checked');
					$radio.css({'background-position': '0 0'});
				}
			});
			$modal.modal('show');
			e.preventDefault();
		});
		
		/**
		 * You need to select the job or category.
		 * @author Rony <rony@likipe.se>
		 * @param {e} e
		 */
		$(document).on('click',"#modal-touch-devices .save-touch-devices", function(e) {
			var $input = $("input[name='drag_drop_touch_devices']");
			var $itemCandidateClick = $itemMoveClick.parents('.item-candidate');;
			if (!$input.is(":checked")) {
				$modal.find('.move-candidate-message').css({'display': 'block'});
				return false;
			} else {
				var idJobCandidate = parseInt($modal.find("input[name='idJobCandidateTouchDevices']").val());
				var valueJobOrCategory = $modal.find("input[name='drag_drop_touch_devices']:checked").val();
				var idCompanyJobOld = parseInt($itemCandidateClick.children("input[name='deleteCompanyJob']").val());
				var $job = $("ul.carousel-job").find("[data-id='" + idCompanyJobOld + "']");
				if ( 0 < $job.length) {
					var $unAnsweredJobCandidateOfJob = $job.find('.number_not_viewed_job_candidate');
				} else {
					var $unAnsweredJobCandidateOfJob = $('.all-spontaneous .number_not_viewed_job_candidate');
				}
				var $allUnAnswerJobCandidates = $('.list-candidates .list-job h1.all-candidate .number_not_viewed_job_candidate');
				if ('unanswered' === valueJobOrCategory) {
					$.ajax({
						type: 'PUT',
						url: Routing.generate('videocv_api_company_unanswered_jobCandidate', {idJobCandidate: idJobCandidate}),
						contentType: 'application/json',
						beforeSend: function() {
							$(img).appendTo($modalBody);
							$modal.css('opacity', '0.5');
						},
						success: function(data) {
							if (!$itemCandidateClick.hasClass('unanswered-profile')) {
								$unAnsweredJobCandidateOfJob.html(parseInt($unAnsweredJobCandidateOfJob.html()) + 1);
								$allUnAnswerJobCandidates.html(parseInt($allUnAnswerJobCandidates.html()) + 1);
								$itemCandidateClick.removeClass('unanswered-profile');
							}
							if (!$itemCandidateClick.hasClass('item-all-candidate')) {
								$itemCandidateClick.remove();
							}
							removeItemCandidateAfterDrap(idJobCandidate);
						},
						error: function(xhr, status, exception) {
							return;
						},
						complete: function() {
							$modalBody.children('.ajax-loader').remove();
							$modal.css('opacity', '1');
							$modal.modal('hide');
						}
					});
				} else if ('favourite' === valueJobOrCategory) {
					$.ajax({
						type: 'PUT',
						url: Routing.generate('videocv_api_company_edit_favourite_jobCandidate', {iIdJobCandidate: idJobCandidate}),
						contentType: 'application/json',
						beforeSend: function() {
							$(img).appendTo($modalBody);
							$modal.css('opacity', '0.5');
						},
						success: function(data) {
							if ($itemCandidateClick.hasClass('unanswered-profile')) {
								$unAnsweredJobCandidateOfJob.html(parseInt($unAnsweredJobCandidateOfJob.html()) - 1);
								$allUnAnswerJobCandidates.html(parseInt($allUnAnswerJobCandidates.html()) - 1);
								$itemCandidateClick.removeClass('unanswered-profile');
							}
							if (!$itemCandidateClick.hasClass('item-all-candidate')) {
								$itemCandidateClick.remove();
							}
							removeItemCandidateAfterDrap(idJobCandidate);
						},
						error: function(xhr, status, exception) {
							return;
						},
						complete: function() {
							$modalBody.children('.ajax-loader').remove();
							$modal.css('opacity', '1');
							$modal.modal('hide');
						}
					});
				} else if ('nothanks' === valueJobOrCategory) {
					$.ajax({
						type: 'DELETE',
						url: Routing.generate('videocv_api_company_deleteNoInterest', {iIdJobCandidate: idJobCandidate}),
						contentType: 'application/json',
						beforeSend: function() {
							$(img).appendTo($modalBody);
							$modal.css('opacity', '0.5');
						},
						success: function(data) {
							if ($itemCandidateClick.hasClass('unanswered-profile')) {
								$unAnsweredJobCandidateOfJob.html(parseInt($unAnsweredJobCandidateOfJob.html()) - 1);
								$allUnAnswerJobCandidates.html(parseInt($allUnAnswerJobCandidates.html()) - 1);
								$itemCandidateClick.removeClass('unanswered-profile');
							}
							if (!$itemCandidateClick.hasClass('item-all-candidate')) {
								$itemCandidateClick.remove();
							}
							removeItemCandidateAfterDrap(idJobCandidate);
						},
						error: function(xhr, status, exception) {
							return;
						},
						complete: function() {
							$modalBody.children('.ajax-loader').remove();
							$modal.css('opacity', '1');
							$modal.modal('hide');
						}
					});
				} else {
					var idCompanyJob = parseInt(valueJobOrCategory);
					var idCompanyJobNew = isNaN(idCompanyJob) ? 0 : idCompanyJob;
					var $newjob = $("ul.carousel-job").find("[data-id='" + idCompanyJobNew + "']");
					$.ajax({
						type: 'PUT',
						url: Routing.generate('videocv_api_company_drag_drop_jobCandidate', {iIdJobCandidate: idJobCandidate}),
						data: JSON.stringify({'iIdCompanyJobNew': idCompanyJobNew}),
						contentType: 'application/json',
						beforeSend: function() {
							$(img).appendTo($modalBody);
							$modal.css('opacity', '0.5');
						},
						success: function(data) {
							if ($itemCandidateClick.hasClass('item-all-candidate')) {
								$itemCandidateClick.children('input[name="deleteCompanyJob"]').val(idCompanyJobNew);
							} else {
								$itemCandidateClick.remove();
							}
							if($itemCandidateClick.hasClass('unanswered-profile')) {
								var $newUnAnsweredJobCandidate = $newjob.find('span.number_not_viewed_job_candidate');
								$newUnAnsweredJobCandidate.html(parseInt($newUnAnsweredJobCandidate.html()) + 1);
								var $oldUnAnsweredJobCandidate = $job.find('span.number_not_viewed_job_candidate');
								if (0 < $oldUnAnsweredJobCandidate.length) {
									$oldUnAnsweredJobCandidate.html(parseInt($oldUnAnsweredJobCandidate.html()) - 1);
								} else {
									var $unAnsweredJobCandidateOfUnspecificedJob = $('.all-spontaneous .number_not_viewed_job_candidate');
									$unAnsweredJobCandidateOfUnspecificedJob.html(parseInt($unAnsweredJobCandidateOfUnspecificedJob.html()) - 1);
								}
							}
						},
						error: function(xhr, status, exception) {
							return;
						},
						complete: function() {
							$modalBody.children('.ajax-loader').remove();
							$modal.css('opacity', '1');
							$modal.modal('hide');
						}
					});
				}
			}
			e.preventDefault();
		});
		
		/**
		 * Update selector after updating its content
		 * @author Harrison <harrison@likipe.se>
		 * @param jquery selector
		 * @returns 
		 */
		function updateSelector(selector) {
			selector.parent('.pull-left').children('.selecter').remove();
			selector.selecter();
			return;
		}
		/**
		 * Get Ocupational Group when select occupational Field
		 * @author Harrison
		 */
		$(document).on('change','#CompanyJobType_occupationField', function(){
			var $this = $(this);
			var $valueOcupationField = $this.val();
			var $ulDataTransfer = $this.closest('ul.data-transfer');
			var $selectOccupationalGroup = $ulDataTransfer.find('#CompanyJobType_occupationGroup');
			$selectOccupationalGroup.empty();
			$selectOccupationalGroup.append('<option selected="selected" value="">Välj yrkesgrupp</option>');
			updateSelector($selectOccupationalGroup);
			var $selectOccupation = $ulDataTransfer.find('#CompanyJobType_occupationId');
			$selectOccupation.empty();
			$selectOccupation.append('<option selected="selected" value="">Välj yrke</option>');
			updateSelector($selectOccupation);
			if ('' !== $valueOcupationField) {
				$.ajax({
					type: 'GET',
					url: Routing.generate('videocv_api_company_getAllOccupationGroup', {idOccupationField: $valueOcupationField}),
					beforeSend: function() {
						$(img).appendTo($ulDataTransfer);
						$ulDataTransfer.css('opacity', '0.5');
					},
					success: function(data) {
						for (var i = 0; i < data.occupationalGroups.length; i++) {
							$selectOccupationalGroup.append('<option value="' +  data.occupationalGroups[i].id + '">' + data.occupationalGroups[i].name + '</option>');
						}
						updateSelector($selectOccupationalGroup);
						for (var i = 0; i < data.occupations.length; i++) {
							$selectOccupation.append('<option value="' +  data.occupations[i].id + '">' + data.occupations[i].name + '</option>');
						}
						updateSelector($selectOccupation);
					},
					error: function(xhr, status, exception) {
						//console.log(xhr)
						return;
					},
					complete: function() {
						$ulDataTransfer.children('.ajax-loader').remove();
						$ulDataTransfer.css('opacity', '1');
					}
				});
			}
		});
		
		/**
		 * Get Ocupation when select occupational Group
		 * @author Harrison
		 */
		$(document).on('change','#CompanyJobType_occupationGroup', function(){
			var $this = $(this);
			var $valueOcupationalGroup = $this.val();
			var $ulDataTransfer = $this.closest('ul.data-transfer');
			var $selectOccupation = $ulDataTransfer.find('#CompanyJobType_occupationId');
			$selectOccupation.empty();
			$selectOccupation.append('<option selected="selected" value="">Välj yrke</option>');
			updateSelector($selectOccupation);
			if ('' !== $valueOcupationalGroup) {
				$.ajax({
					type: 'GET',
					url: Routing.generate('videocv_api_company_getAllOccupationFromGroup', {idOccupationGroup: $valueOcupationalGroup}),
					beforeSend: function() {
						$(img).appendTo($ulDataTransfer);
						$ulDataTransfer.css('opacity', '0.5');
					},
					success: function(data) {
						
						for (var i = 0; i < data.length; i++) {
							$selectOccupation.append('<option value="' +  data[i].id + '">' + data[i].name + '</option>');
						}
						updateSelector($selectOccupation);
					},
					error: function(xhr, status, exception) {
						//console.log(xhr)
						return;
					},
					complete: function() {
						$ulDataTransfer.children('.ajax-loader').remove();
						$ulDataTransfer.css('opacity', '1');
					}
				});
			}
		});
		
		$(document).on('change', '#CompanyJobType_countryCode', function(){
			var $this = $(this);
			if ('SE' ===$this.val()) {
				$this.closest('ul.data-transfer').children('.li_municipality_location_transfer').removeClass('hide_municipality_location');
			} else {
				$this.closest('ul.data-transfer').children('.li_municipality_location_transfer').addClass('hide_municipality_location');
			}
			return;
		});
		
		$('#add_new_job, .edit_jobs_modal.modal').on('show', function () {
			$(this).find('#CompanyJobType_countryCode').trigger('change');
		});
    
        $('.item-license').on('click', 'li', function(e){
            var type = $(e.currentTarget).data('type');
            var list = new Array();
            switch(type) {
                case 'AM' : 
                    list = new Array('A1', 'A', 'B', 'C', 'D', 'BE', 'CE', 'DE');
                    break;
                case 'A1' : 
                    list = new Array('AM', 'A');
                    break;
                case 'A' : 
                    list = new Array('AM', 'A1');
                    break;
                case 'B' : 
                    list = new Array('AM', 'BE');
                    break;
                case 'C' : 
                    list = new Array('AM', 'CE');
                    break;
                case 'D' : 
                    list = new Array('AM', 'DE');
                    break;
                case 'BE' : 
                    list = new Array('AM', 'B');
                    break;
                case 'CE' : 
                    list = new Array('AM', 'C');
                    break;
                case 'DE' : 
                    list = new Array('AM', 'D');
                    break;
            }
            uncheckLicense(list);
        });
		//Show Message lightbox when transferred job is deleted from WorkAd
		if (showDeleteTransferredJobMessage) {
			showLightboxMessage(messageDeleteTransferredJob);
		}
	}
});

function uncheckLicense(list) {
    for (var i = 0; i < list.length; i++) {
        $('.item-' + list[i]).find('input').prop('checked', false);
        $('.item-' + list[i]).find('span.checkbox').css('background-position', '');
    }
}
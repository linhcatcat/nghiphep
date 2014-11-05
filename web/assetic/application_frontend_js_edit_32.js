/**
 * Javascript of Edit Candidate Page
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
    if (typeof (bCheckJavascriptEditCandidate) !== "undefined" && bCheckJavascriptEditCandidate === true) {
        // Add all templates found in the DOM (it will search for <script> blocks which 
        // are of type 'text/html'.  Nb: jQuery.onReady must have fired before calling.
        $.Mustache.addFromDom();
        /**
         * Add a Language
         * @author Harrison <harrison@likipe.se>
         */
        function addLanguage() {
            var $iCountInput = 0;
            var $language_select = $('.my_timeline .language_profile.language_driving_content li select');
            $language_select.each(function() {
                if ($(this).val()) {
                    $iCountInput++;
                }
                return;
            });
            if ($iCountInput == $language_select.length)
            {
                $('.my_timeline .language_profile.language_driving_content > ul').append($.Mustache.render('template-candidate-profile-language',
                    {aListSettingLanguage: aListSettingLanguage}
                ));

                var $added_lang_rating = $('.my_timeline .language_profile.language_driving_content > ul li .added_language_rating');
                $added_lang_rating.barrating({
                    showValues: false,
                    showSelectedRating: false
                });
                $added_lang_rating.removeClass('added_language_rating');

                var $added_lang_selecter = $('.my_timeline .language_profile.language_driving_content > ul li .added_language_selecter');
                $added_lang_selecter.selecter();
                $added_lang_selecter.removeClass('added_language_selecter');
            }
        }

        $(document).on('change', '.my_timeline .language_profile.language_driving_content li select', addLanguage);

        /**
         * Compare select
         * @param string valueCompare
         * @param array arrayCompare
         * @author Harrison <harrison@likipe.se>
         * @return boolean
         */
        function compareinArray(valueCompare, arrayCompare) {
            var countCompare = 0;
            arrayCompare.each(function() {
                if (valueCompare.val() === $(this).val()) {
                    countCompare++;
                }
                return;
            });
            if (countCompare === 2) {
                return true;
            } else {
                return false;
            }
        }

        /**
         * Validate Start Date and To Date of Education and Career when Form Submit
         * @author Harrison <harrison@likipe.se>
         */
        $('form.register_candidate_form').submit(function(event) {
            var $form_this = $(this);
            var $listEducation = $('.my_timeline .education.timeline_content ul li');
            $listEducation.each(function() {
                var $this = $(this);
                var $fromDate = parseInt($this.children('.input_date.from_date').val().replace('-', ''));
                var $toDate = parseInt($this.children('.input_date.to_date').val().replace('-', ''));
                if (!isNaN($fromDate) && !isNaN($toDate) && $fromDate > $toDate) {
                    $('<div class="alert alert-error error_register_message">\n\
				   <button class="close" data-dismiss="alert" type="button">×</button>\n' +
				   translations['profile-education-date'] + '\n\
				  </div>').insertBefore($form_this);
                    event.preventDefault();
                    return false;
                }
                var $input = $this.find("input[name='still_studying_candidate[]']");
                var $inputValue = $this.find("input[name='value_still_studying_candidate[]']");
                if ($input.is(':checked')) {
                    $inputValue.val('yes');
                } else {
                    $inputValue.val('no');
                }
            });
            var $listCareer = $('.my_timeline .career.timeline_content ul li');
            $listCareer.each(function() {
                var $this = $(this);
                var $fromDateCareer = parseInt($this.children('.input_date.from_date').val().replace('-', ''));
                var $toDateCareer = parseInt($this.children('.input_date.to_date').val().replace('-', ''));
                if (!isNaN($fromDateCareer) && !isNaN($toDateCareer) && $fromDateCareer > $toDateCareer) {
                    $('<div class="alert alert-error error_register_message">\n\
				   <button class="close" data-dismiss="alert" type="button">×</button>\n' +
				   translations['profile-career-date'] + '\n\
				  </div>').insertBefore($form_this);
                    event.preventDefault();
                    return false;
                }
                var $inputCareer = $this.find("input[name='still_working_candidate[]']");
                var $inputValueCareer = $this.find("input[name='value_still_working_candidate[]']");
                if ($inputCareer.is(':checked')) {
                    $inputValueCareer.val('yes');
                } else {
                    $inputValueCareer.val('no');
                }
            });
            //Check profile (language and driving)
            var aDataId = new Array();
            var key = 0;
            $(".language_profile ul li").each(function() {
                var sId = $(this).find("select[name='language_profile_candidate[]']").val();
                if (sId !== "") {
                    var id = parseInt($(this).find("select[name='language_profile_candidate[]']").val());
                    aDataId[key] = id;
                    key++;
                }
            });
            var iTotal = aDataId.length;
            if (0 !== iTotal) {
                var aCheck = new Array();
                $.each(aDataId, function(i, el) {
                    if ($.inArray(el, aCheck) === -1)
                        aCheck.push(el);
                });
                var $div = $(".my_timeline .language_driving .language_profile");
                if (aCheck.length < iTotal) {
                    var error = "";
                    error += "<div class='alert alert-error' style='margin-bottom: 0; margin-top: 20px;'>";
                    error += "<button title='Close' class='close' data-dismiss='alert' type='button'>×</button>";
                    error += "You should only be able to add the same Language once!";
                    error += "</div>";
                    $div.find(".alert-error").remove();
                    $div.append(error);
                    event.preventDefault();
                } else {
                    $div.find(".alert-error").remove();
                }
            }
        });

        /**
         * Ajax when send profile candidate
         * @author Harrison <harrison@likipe.se>
         */
        var $message = $('.send_profile .send_profile_form .informaiton-message-email');
        $("#mail_to_company").focusin(function() {
            $message.fadeOut(1000);
        });
        $('.send_profile_form .alert button.close').click(function() {
            $(this).parent().hide();
        });
        var iTicketCurrent = 0, bCheckFreeToApply = false, bCheckShowFacebookShare = false, bFstaCandidate = false, bCheckAddedJob = false;
        $("#btn_candidate_send_profile").click(function() {
            var $smailto = $("#mail_to_company").val();
            var $desc = $("#description_sended_profile").val();
            if (!$smailto) {
                $message.css({'display': 'block'});
                return;
            } else {
                $message.css({'display': 'none'});
            }
            
            // validate photo & video before sending CV
            var $checkRequirementSendCv = $('.check-requirement-send-cv').val();
            if ('yes' !== $checkRequirementSendCv) {
                $('.informaiton-message-no-requirement-send-cv').css({'display': 'block'});
                return;
            } else {
                $('.informaiton-message-no-requirement-send-cv').css({'display': 'none'});
            }

            var $check_profile = $('#check_profile');
            $check_profile.append($(ajaxLoader));
            $check_profile.css('opacity', '0.5');

            var $modal_job = $('#register_job_modal');
            var $modal_body = $("#register_job_modal .modal-body");
            $modal_job.on('hidden', function() {
                if (bCheckShowFacebookShare && bFstaCandidate && !bCheckAddedJob) {
                    var $eListContent = $('.buildprofile.main-content .list-content');
                    $.ajax({
                        type: 'POST',
                        url: Routing.generate('videocv_api_candidate_add_one_ticket', {iIdCandidate: $iIDCandidate}),
                        data:
                            {
                                'idCandidate': $iIDCandidate
                            },
                        dataType: 'json',
                        beforeSend: function() {
                            $eListContent.append($(ajaxLoader));
                            $eListContent.css('opacity', '0.5');
                        },
                        success: function(data)
                        {
                            bFstaCandidate = false;
                            var $eNumberTicket = $('.send_profile .my_credits .box_credits span.number_tickets_candidate');
                            var $iNumberTicket = parseInt($eNumberTicket.html()) + 1;
                            $eNumberTicket.html($iNumberTicket);
                            $("input[name='candidateticket']").val($iNumberTicket);
                            showLightboxMessage(data.message);
                        },
                        error: function(xhr, status, exception) {
                            return;
                        },
                        complete: function() {
                            $eListContent.children('.ajax-loader-profile').remove();
                            $eListContent.css('opacity', '1');
                        }
                    });
                }
            });
            $modal_body.empty();
            $.ajax({
                type: 'POST',
                url: Routing.generate('videocv_api_candidate_send_profile'),
                data:
                    {
                        'mail_to_company': $smailto,
                        'desc': $desc,
                        'idCandidate': $iIDCandidate
                    },
                dataType: 'json',
                success: function(data)
                {
                    $check_profile.children('.ajax-loader-profile').remove();
                    $check_profile.css('opacity', '1');
                    if (data) {
                        iTicketCurrent = data.iTicket;
                        bCheckFreeToApply = data.checkFta;
                        bCheckShowFacebookShare = data.checkShowFacebookShare;
                        if (!bCheckFreeToApply && 0 >= iTicketCurrent) {
                            $modal_body.append($.Mustache.render('template-company-register-job-no-ticket', {
                                companyID: data.company.id,
                                companyName: data.company.name,
                                aListJobs: data.jobs,
                                merchant_DIBS_payment: merchant_DIBS_payment,
                                checkShowFacebookShare: data.checkShowFacebookShare,
                                iOrderID: parseInt(new Date().getTime() / 1000),
                                acceptUrlDIBS: acceptUrlDIBS,
                                callbackUrlDIBS: callbackUrlDIBS,
                                cancelUrlDIBS: cancelUrlDIBS,
                                nameCandidate: nameCandidate,
                                priceOfOneTicket: priceOfOneTicket

                            }));
                            var $listLabelTicketRadios = $('.form-add-ticket-add-job .buy_ticket_radios div label');
                            var $listSpanTicketRadios = $('.form-add-ticket-add-job .buy_ticket_radios div span.radio');
                            $listLabelTicketRadios.click(function() {
                                $listSpanTicketRadios.css('background-position', '0 0');
                                $(this).parent('div').children('span.radio').css('background-position', '0 -23px');
                            });
                            $listSpanTicketRadios.click(function() {
                                $(this).parent('div').children('label').click();
                            });
                            $(document).off('submit').on('submit', '#register_job_modal form.form-add-ticket-add-job', function(event) {
                                var $thisForm = $(this);
                                var $listCheckedItemJobs = $('#register_job_modal .item-job input[name="multiplejobs[]"]:checked');
                                var numberCompanyJobs = $listCheckedItemJobs.length;
                                if (0 >= numberCompanyJobs) {
                                    showLightboxMessage(videoCVTranslationMessages['chooseAJob']);
                                    return false;
                                }
                                var $numberofFreeJobToApply = 0;
                                $listCheckedItemJobs.each(function() {
                                    if ($(this).data('companytransfer')) {
                                        $numberofFreeJobToApply++;
                                    }
                                    return;
                                });
                                if ($numberofFreeJobToApply === numberCompanyJobs) {
                                    var aIdJob = new Array();
                                    if ($listCheckedItemJobs.length > 0) {
                                        var index = 0;
                                        $listCheckedItemJobs.each(function() {
                                            aIdJob[index] = $(this).val();
                                            index++;
                                            return;
                                        });
                                    }
                                    var $idCompany = $("div.company_name > span.value_company").data('value');
                                    $.ajax({
                                        type: 'POST',
                                        url: Routing.generate('videocv_api_candidate_add_job'),
                                        data:
                                            {
                                                'idCompany': $idCompany,
                                                'aIdJob': aIdJob,
                                                'idCandidate': $iIDCandidate,
                                                'desc': $desc
                                            },
                                        dataType: 'json',
                                        beforeSend: function() {
                                            $modal_body.append($(ajaxLoader));
                                            $modal_body.css('opacity', '0.5');
                                        },
                                        success: function(data)
                                        {
                                            if (data.result) {
                                                bCheckAddedJob = data.added_jobs;
                                                $modal_body.empty();
                                                $modal_job.modal('hide');
                                                $(".box_credits .number_tickets_candidate").html(data.number_ticket);
                                                if (0 < data.number_ticket) {
                                                    $("#myModalLabel").html('Kryssa för vilka jobb du söker');
                                                } else {
                                                    $("#myModalLabel").html('Kryssa för&vilka jobb du söker och välj betalningsalternaBv');
                                                }
                                                $("input[name='candidateticket']").val(data.number_ticket);
                                                var $thankRegisterJob = $('#thank_you_candidate.thank_you_candidate_css');
                                                if (0 < $thankRegisterJob.length) {
                                                    $thankRegisterJob.modal('show');
                                                }
                                            }
                                        },
                                        error: function(xhr, status, exception) {
                                            $modal_body.empty();
                                            $modal_job.modal('hide');
                                            showLightboxMessage(xhr.responseJSON.error);
                                            if (xhr.responseJSON.enough_ticket) {
                                                window.location = url;
                                            }
                                        },
                                        complete: function() {
                                            $modal_body.children('.ajax-loader-profile').remove();
                                            $modal_body.css('opacity', '1');
                                            $('.send_profile_form #mail_to_company').val('');
                                            $('.send_profile_form #description_sended_profile').val('');
                                        }
                                    });
                                    return false;
                                } else {
                                    var $radioTicket = $thisForm.find('input[name="candidate_buy_ticket"]:checked');
                                    if (0 >= $radioTicket.length) {
                                        showLightboxMessage(videoCVTranslationMessages['please_choose_a_payment_type']);
                                        return false;
                                    }
                                    var valueRadioTicket = parseInt($radioTicket.val());
                                    if (0 === valueRadioTicket && true === bCheckShowFacebookShare) {
                                        event.preventDefault();
                                        fbshare(event, shareFacebookNoTicket);
                                    } else {
                                        if (1 < numberCompanyJobs && 1 === valueRadioTicket) {
                                            showLightboxMessage('Please choose "Köp tio ansökningar = 100kr" because you added more than one job!');
                                            return false;
                                        }
                                        addListJobsToDibs();
                                    }
                                }
                            });
                        } else {
                            $modal_body.append($.Mustache.render('template-company-register-job', {
                                companyID: data.company.id,
                                companyName: data.company.name,
                                aListJobs: data.jobs,
                                checkShowFacebookShare: data.checkShowFacebookShare
                            }));
                        }
                        $modal_job.modal('show');
                        var $added_Spancheckbox = $('.title_job .multiple-jobs li span.checkbox');
                        $added_Spancheckbox.click(function() {
                            var $thisSpan = $(this);
                            calculateMoneyTicket();
                            var $input_checkbox = $thisSpan.parent('li').children('input.styled');
                            $input_checkbox.click();
                            return;
                        });
                        var $added_input = $('.title_job .multiple-jobs li input');
                        $added_input.change(function() {
                            var $thisInput = $(this);
                            if ($thisInput.is(':checked')) {
                                $thisInput.parent('li').children('span.checkbox').css('background-position', '0 -24px');
                            } else {
                                $thisInput.parent('li').children('span.checkbox').css('background-position', '0 0');
                            }
                            return;
                        });
                        var $candidateBuyTicket = $('form #form_add_currency_add_job input[name="candidate_buy_ticket"]');
                        $candidateBuyTicket.change(calculateMoneyTicket);
                        $candidateBuyTicket.change();
                        //$('.send_profile_form #mail_to_company').val('');
                        //$('.send_profile_form #description_sended_profile').val('');
                    }
                },
                error: function(xhr, status, exception) {
                    $check_profile.children('.ajax-loader-profile').remove();
                    $check_profile.css('opacity', '1');
                    if (xhr.responseJSON.send_mail_company_register) {
                        $('#thank_you_candidate').modal('show');
                    } else {
                        showLightboxMessage('Error: ' + xhr.responseJSON.error);
                    }
                }
            });
            return;
        });

        $("input[name='candidateticket']").val(iPriceTicket);
        var url = Routing.generate('videocv_frontend_candidate_ticket');
        $(document).on("click", "#register_job_save_btn", function() {
            var $aListInputs = $("div.title_job .multiple-jobs .item-job input[name='multiplejobs[]']:checked");
            var aIdJob = new Array();
            if ($aListInputs.length > 0) {
                var index = 0;
                $aListInputs.each(function() {
                    aIdJob[index] = $(this).val();
                    index++;
                    return;
                });
            }
            //var aIdJob = $("div.title_job .multiple-jobs .item-job input[name='multiplejobs[]']").val();
            var $modal_job = $('#register_job_modal');
            var $modal_body = $("#register_job_modal .modal-body");
            if (0 === aIdJob.length) {
                showLightboxMessage(videoCVTranslationMessages['please_choose_a_job']);
                return;
            }
            $modal_body.append($(ajaxLoader));
            $modal_body.css('opacity', '0.5');

            var $idCompany = $("div.company_name > span.value_company").data('value');
            var $desc = $("#description_sended_profile").val();
            $.ajax({
                type: 'POST',
                url: Routing.generate('videocv_api_candidate_add_job'),
                data:
                    {
                        'idCompany': $idCompany,
                        'aIdJob': aIdJob,
                        'idCandidate': $iIDCandidate,
                        'desc': $desc
                    },
                dataType: 'json',
                success: function(data)
                {
                    $modal_body.children('.ajax-loader-profile').remove();
                    $modal_body.css('opacity', '1');
                    if (data.result) {
                        bCheckAddedJob = data.added_jobs;
                        $modal_body.empty();
                        $modal_job.modal('hide');
                        $(".box_credits .number_tickets_candidate").html(data.number_ticket);
                        if (0 < data.number_ticket) {
                            $("#myModalLabel").html('Kryssa för vilka jobb du söker');
                        } else {
                            $("#myModalLabel").html('Kryssa för&vilka jobb du söker och välj betalningsalternaBv');
                        }
                        $("input[name='candidateticket']").val(data.number_ticket);
                        var $thankRegisterJob = $('#thank_you_candidate.thank_you_candidate_css');
                        if (0 < $thankRegisterJob.length) {
                            $thankRegisterJob.modal('show');
                        }
                    }
                },
                error: function(xhr, status, exception) {
                    $modal_body.children('.ajax-loader-profile').remove();
                    $modal_body.css('opacity', '1');
                    $modal_body.empty();
                    $modal_job.modal('hide');
                    showLightboxMessage(xhr.responseJSON.error);
                    if (xhr.responseJSON.enough_ticket) {
                        window.location = url;
                    }
                },
                complete: function() {
                    $('.send_profile_form #mail_to_company').val('');
                    $('.send_profile_form #description_sended_profile').val('');
                }
            });
            return;
        });

        /**
         * Remove Candidate Language when click
         * @author Harrison <harrison@likipe.se>
         */
        $(document).on('click', '.language_profile a.remove_candidate_profile', function(e) {
            var $ul = $(".my_timeline .language_driving .language_profile > ul");
            $(this).parent('li').remove();
            if ($ul.children().length === 0) {
                $('.my_timeline .language_profile.language_driving_content > ul').append($.Mustache.render('template-candidate-profile-language',
                    {aListSettingLanguage: aListSettingLanguage}
                ));

                $('.my_timeline .language_profile.language_driving_content > ul').append($.Mustache.render('template-candidate-profile-language',
                    {aListSettingLanguage: aListSettingLanguage}
                ));
                var $added_rating = $('.my_timeline .language_profile.language_driving_content > ul li .added_language_rating');
                $added_rating.barrating({
                    showValues: false,
                    showSelectedRating: false
                });
                $added_rating.removeClass('added_language_rating');

                var $added_language_selecter = $('.my_timeline .language_profile.language_driving_content > ul li .added_language_selecter');
                $added_language_selecter.selecter();
                $added_language_selecter.removeClass('added_language_selecter');
            }
            e.preventDefault();
        });

        /**
         * Max length of Textarea
         * @author Harrison <harrison@likipe.se>
         */
        function callbackPropertyChange() {
            var maxLength = $(this).attr('maxlength');
            var iTextLength = $(this).val().length;
            $('.note_max_length_character_textarea').html(maxLength - iTextLength);
            if (iTextLength > maxLength) {
                $(this).val($(this).val().substring(0, maxLength));
            }
        }
        var $textarea = $("textarea#description_sended_profile");
        $textarea.bind('input propertychange', callbackPropertyChange);
        callbackPropertyChange.call($textarea[0]);

        /**
         * Colorbox for Avatar Candidate
         * @author Harrison <harrison@likipe.se>
         */
        var $listavatars = $(".name_video_language .info .avatar_gallery > a");
        if ($listavatars.length > 0) {
            $listavatars.colorbox({
                rel: 'group1',
                close: '<i class="icon-remove"></i>'
            });
        }
        var $listAvatarsMobile = $(".name_video_language .list_avatar .avatar_gallery > a");
        if ($listAvatarsMobile.length > 0) {
            $listAvatarsMobile.colorbox({
                rel: 'group1',
                close: '<i class="icon-remove"></i>'
            });
        }
        var $recordedVideo = $('.recorded_video_candidate');
        if ($recordedVideo.length > 0) {
            $recordedVideo.colorbox({
                iframe: true,
                width: "1000px",
                height: "625px",
                close: '<i class="icon-remove"></i>'
            });
        }

        /**
         * Record Video
         * First it should only show the record button, all others are hidden.
         * @author Rony <rony@likipe.se>
         */
        $('#flash_recorder .commands .btn[disabled]').css('display', 'none');
        var $recordVideo = $('#flash_recorder .commands .record-video');
        var $stopVideo = $('#flash_recorder .commands .stop-video');
        var $playVideo = $('#flash_recorder .commands .play-video');
        var $saveVideo = $('#flash_recorder .commands .save-video');
        $recordVideo.css({
            'border-radius': '4px',
            '-moz-border-radius': '4px',
            '-webkit-border-radius': '4px'
        });

        /**
         * Click button record
         * @param {e} e
         * @author Rony <rony@likipe.se>
         */
        $recordVideo.click(function(e) {
            var $this = $(this);
            $this.css('display', 'none');
            $stopVideo.css({
                'display': 'inline-block',
            });
            if ($stopVideo.hasClass('stop-button')) {
                $playVideo.css({
                    'display': 'inline-block',
                    'border-radius': '0',
                    '-moz-border-radius': '0',
                    '-webkit-border-radius': '0'
                });
                $stopVideo.css({
                    'border-radius': '0',
                    '-moz-border-radius': '0',
                    '-webkit-border-radius': '0'
                });
            }
            if (!$this.hasClass('record-button')) {
                $stopVideo.css({
                    'border-radius': '4px',
                    '-moz-border-radius': '4px',
                    '-webkit-border-radius': '4px'
                });
            } else {
                $playVideo.css({
                    'display': 'inline-block',
                    'border-radius': '0',
                    '-moz-border-radius': '0',
                    '-webkit-border-radius': '0'
                });
                $stopVideo.css({
                    'border-radius': '4px 0 0 4px',
                    '-moz-border-radius': '4px 0 0 4px',
                    '-webkit-border-radius': '4px 0 0 4px'
                });
                $stopVideo.toggleClass('stop-button');
            }
            e.preventDefault();
        });

        /**
         * Click button stop
         * @param {e} e
         * @author Rony <rony@likipe.se>
         */
        $stopVideo.click(function(e) {
            var $this = $(this);
            $this.css('display', 'none');
            $recordVideo.css({
                'display': 'inline-block',
                'border-bottom-right-radius': '0',
                'border-top-right-radius': '0'
            });
            $recordVideo.toggleClass('record-button');
            $saveVideo.css({
                'display': 'inline-block'
            });
            $playVideo.css({
                'display': 'inline-block',
                'border-radius': '0',
                '-moz-border-radius': '0',
                '-webkit-border-radius': '0'
            });
            e.preventDefault();
        });

        /**
         * Click button play
         * @param {e} e
         * @author Rony <rony@likipe.se>
         */
        $playVideo.click(function(e) {
            var $this = $(this);
            $this.css('display', 'none');
            $stopVideo.css({
                'display': 'inline-block',
                'border-radius': '0',
                '-moz-border-radius': '0',
                '-webkit-border-radius': '0'
            });
            $saveVideo.attr("disabled", "disabled");
            e.preventDefault();
        });

        /**
         * Fix Button Save When Window Resize
         * @author Harrison <harrison@likipe.se>
         */
        function calculation() {
            var $listcontent = $(".list-content .content");
            var $btnRegister = $(".register_candidate_form .candidate-register");
            //var location = $listcontent.offset();
            var left = $listcontent.offset().left;
            if ($(window).width() > 1040) {
                left = left + $listcontent.width() - 39;
            } else {
                left = left + $listcontent.width() - 65;
            }

            $btnRegister.css({
                'left': left + 'px'
            });
        }
        calculation();
        $(window).resize(calculation);
        function shareFacebookTicket() {
            var $modal_body = $("#register_job_modal .modal-body");
            var $modal_job = $('#register_job_modal');
            $.ajax({
                type: 'PUT',
                url: Routing.generate('videocv_api_candidate_share_facebook', {iIdCandidate: $iIDCandidate}),
                data:
                    {
                        'idCandidate': $iIDCandidate
                    },
                dataType: 'json',
                beforeSend: function() {
                    $modal_body.append($(ajaxLoader));
                    $modal_body.css('opacity', '0.5');
                },
                success: function(data)
                {
                    bFstaCandidate = data.fsta;
                    $("#fbshare").remove();
                    showLightboxMessage(data.message);
                },
                error: function(xhr, status, exception) {
                    showLightboxMessage('Error: ' + xhr.responseJSON.error);
                },
                complete: function() {
                    $modal_job.modal('hide');
                    $modal_body.children('.ajax-loader-profile').remove();
                    $modal_body.css('opacity', '1');
                    $('.send_profile_form #mail_to_company').val('');
                    $('.send_profile_form #description_sended_profile').val('');
                }
            });
        }
        function fbshare(event, functionName) {
            FB.ui(
                {
                    /*method: 'feed',
                    name: 'Vi tror på personkemi!',
                    caption: ' ',
                    description: (
                        'Ett traditionellt CV kanske kan vara bra om man vill söka jobb som programmerare, arkitekt eller kanske läkare.' +
                        'Men skall man söka ett vanligt jobb som servitris, vårdbiträde eller varför inte lagerarbetare, så tror vi det viktigaste är om man är glad och trevlig.' +
                        'Så skapa ditt "video.cv" redan idag, och visa din personlighet!'
                        ),
                    link: linkShare,
                    picture: logoSite*/
                    method: 'stream.share',
                    u: 'https://www.facebook.com/www.video.cv'
                },
            function(response) {
                if (response && response.object_id) {
                    functionName.call();
                }
            }
            );
            event.preventDefault();
        }

        $(document).on('click', '#fbshare', function(event) {
            fbshare(event, shareFacebookTicket)
        });

        /**
         * Share facebook to apply job for free when candidates have not tickets.
         * @author Harrison <harrison@likipe.se>
         */

        function shareFacebookNoTicket() {
            var $modal_body = $("#register_job_modal .modal-body");
            var aIdJob = new Array();
            var index = 0;
            $('#register_job_modal .item-job input[name="multiplejobs[]"]:checked').each(function() {
                aIdJob[index] = $(this).val();
                index++;
                return;
            });
            var $idCompany = $("div.company_name > span.value_company").data('value');
            var $desc = $("#description_sended_profile").val();
            var $modal_job = $('#register_job_modal');
            $.ajax({
                type: 'POST',
                url: Routing.generate('videocv_api_candidate_addJobBySharingFacebook'),
                data:
                    {
                        'idCompany': $idCompany,
                        'aIdJob': aIdJob,
                        'idCandidate': $iIDCandidate,
                        'desc': $desc
                    },
                dataType: 'json',
                beforeSend: function() {
                    $modal_body.append($(ajaxLoader));
                    $modal_body.css('opacity', '0.5');
                },
                success: function(data)
                {
                    bCheckShowFacebookShare = false;
                    showLightboxMessage(data.message);
                },
                error: function(xhr, status, exception) {
                    showLightboxMessage('Error: ' + xhr.responseJSON.error);
                },
                complete: function() {
                    $('.buy_ticket_radios .facebook_ticket').remove();
                    $modal_body.empty();
                    $modal_job.modal('hide');
                    $modal_body.children('.ajax-loader-profile').remove();
                    $modal_body.css('opacity', '1');
                }
            });
        }

        /**
         * Calculate Money When candidates choose to buy Ticket
         * @author Harrison <harrison@likipe.se>
         */
        function calculateMoneyTicket() {
            var numberTickets = parseInt($('form #form_add_currency_add_job input[name="candidate_buy_ticket"]:checked').val());
            if (1 === numberTickets) {
                $('form #form_add_currency_add_job > input[name="amount"]').val(2500);
            } else if (2 === numberTickets) {
                $('form #form_add_currency_add_job > input[name="amount"]').val(10000);
            } else {
                $('form #form_add_currency_add_job > input[name="amount"]').val(0);
            }
            return;
        }

        /**
         * Set Added Jobs to input listaddedjobs of DIBS form
         * @author Harrison <harrison@likipe.se>
         */
        function addListJobsToDibs() {
            var aIdJob = new Array();
            var index = 0;
            $('#register_job_modal .item-job input[name="multiplejobs[]"]:checked').each(function() {
                aIdJob[index] = $(this).val();
                index++;
                return;
            });
            var $idCompany = $("div.company_name > span.value_company").data('value');
            var $desc = $("#description_sended_profile").val();
            var orderId = parseInt($("#form_add_currency_add_job input[name='orderid']").val());
            var dataAddedJob = JSON.stringify({
                'idCompany': $idCompany,
                'aIdJob': aIdJob,
                'idCandidate': $iIDCandidate,
                'desc': $desc,
                'orderId': orderId
            });
            $("#form_add_currency_add_job input[name='listaddedjobs']").val(dataAddedJob);
        }
		
		$(document).on('click', '#list-tabs .check-build-profile a', function(event) {
			$('#list-tabs .check-profile-and-send').removeClass('tab-active');
		});
		
		$(document).on('click', '#list-tabs .check-profile-and-send a', function(event) {
			var $tab = $(this).parent('.check-profile-and-send');
			if (!$tab.hasClass('tab-active')) {
				var $form = $('#build_profile .register_candidate_form');
				$form.find('.check-active-tab').val(2);
				$form.submit();
			} else {
				event.preventDefault();
			}
		});
		
    }
});
(function($) {
    var infoCoodinates = new Array();
    var infoCoodinatesTemp = new Array();
    var posY = 300;
    $.widget("likipe.chart", {
        // These options will be used as defaults
        options: {
            widthOfInfoBlock: 230,
            distance: 11,
            y: 300,
            distanceHoverPoint: 65,
            pointRadius: 24,
            fontSize: 11,
            height_of_half_circle: 150,
            show_info: true,
            colors: [
                '#b2e9f2',
                '#31859c',
                //'#3da4b5',
                '#0F5291'
            ],
            data: {
                labels: [
                    2003,
                    2004,
                    2005,
                    2006,
                    2007,
                    2008,
                    2009,
                    2010
                ],
                real_values: [],
                relationships: [
                    {
                        pair: [2003, 2005],
                        text: 'afdsf def'
                    },
                    {
                        pair: [2005, 2006],
                        text: 'afdsf def'
                    },
                    {
                        pair: [2007, 2010],
                        text: 'afdsf def'
                    }
                ]
            }
        },
        // Set up the widget
        _create: function() {
			var self = this;
            var sID = self.element.attr('id');
            var r = Raphael(sID);
            var iFinalHeight = self.options.height_of_half_circle + 10;
            posY = iFinalHeight;
            if (self.options.show_info) {
                self.renderText();
                iFinalHeight = self.calculateHeightOfChart();
				var heightElement = self.element.height();
				if (iFinalHeight >= heightElement) {
					posY = iFinalHeight;
				} else {
                    posY = heightElement;
				}
            } else {
				var relationships = self.options.data.relationships;
				var elementCurrent = self.element;
				var div = '<div class="info-timeline timeline-' + sID + '"></div>';
				elementCurrent.append(div);
				for (var j = 0; j < relationships.length; j++) {
				 var oText = relationships[j].text;
				 var sClass = relationships[j].pair[0] + '_' + relationships[j].pair[1];
				 //if (oText.length > 0) {
				 var timeline = elementCurrent.find('.info-timeline');
				  if ('' !== oText.career) {
				   var sTextCareer = oText.career;
				   timeline.append('<div class="career center-info-timeline ' + sClass + '">' + sTextCareer + '</div>');
				  }
				  if ('' !== oText.education) {
				   var sTextEducation = oText.education;
				   timeline.append('<div class="education center-info-timeline ' + sClass + '">' + sTextEducation + '</div>');
					}
				}
			}

            var aCoordinates = self.getCoordinates();
            var iWidth = self.calculateWidthChart();
            var iHeight = self.calculateHeightChart() - 30;
            aCoordinates = self.getCoordinates();
            r.setSize(iWidth, iHeight);
            self.drawChart(r, aCoordinates);
            //self.drawLine(r);
            self.drawPoint(r, aCoordinates);
            var iOldHeight = parseInt(self.element.css('height'));
            self.element.customScrollbar({height: iOldHeight, vScroll:false, bSCrollRight: true});
        },
        /**
         * Render information of half-circle (education / career)
         * @author Kevin <kevin@likipe.se>
         */
        renderText: function() {
            var self = this;
            var relations = self.options.data.relationships;
            var idCandidate = self.element.data('id');
            for (i = 0; i < relations.length; i++) {
                var relation = relations[i];
                var sClass = relation.pair[0] + '_' + relation.pair[1];
                var aTexts = relations[i].text;
                var sCandidateClass = '.chart-info.candidate-' + idCandidate;
                if ('' !== aTexts.career) {
                    var sTempTextCareer = '<div class="career popover top timeline-info ' + sClass + '"><div class="popover-content">' + aTexts.career + '</div></div>';
                }
                if ('' !== aTexts.education) {
                    var sTempTextEducation = '<div class="education popover top timeline-info ' + sClass + '"><div class="popover-content">' + aTexts.education + '</div></div>';
                }
                //var sTempText = '<div class="popover top timeline-info ' + sClass + '"><div class="popover-content">' + relations[i].text + '</div></div>';            	

                if (0 === $.find('.candidate-' + idCandidate).length) {
                    self.element.append('<div class="chart-info candidate-' + idCandidate + '"></div>');
                    if ('' !== aTexts.career) {
                        self.element.find(sCandidateClass).append(sTempTextCareer);
                    }
                    if ('' !== aTexts.education) {
                        self.element.find(sCandidateClass).append(sTempTextEducation);
                    }
                } else {
                    if (0 === self.element.find(sCandidateClass).find('.' + sClass).length) {
                        if ('' !== aTexts.career) {
                            self.element.find(sCandidateClass).append(sTempTextCareer);
                        }
                        if ('' !== aTexts.education) {
                            self.element.find(sCandidateClass).append(sTempTextEducation);
                        }
                    }
                }
            }
        },
        calculateHeightOfChart: function() {
            var self = this;
            var maxHeight = 0;
            var aRealValues = self.options.data.real_values;
            var aXValues = {};
            for (i = 1; i <= aRealValues.length; i++) {
                var x = self.getX(i);
                aXValues[aRealValues[i - 1]] = x;
            }

            var iHeightOfHalfCircle = self.options.height_of_half_circle;
            var iFinalHeight = iHeightOfHalfCircle;
            var aRelationships = self.options.data.relationships;
            for (var i = 0; i < aRelationships.length; i++) {
                var pair = aRelationships[i].pair;
                if (pair.length < 2) {
                    continue;
                }
                var iStart = pair[0];
                var iEnd = pair[1];
                if (100000000 === parseInt(iEnd)) {
                    var startPoint = new Object();
                    startPoint['x'] = aXValues[iEnd];
                    startPoint['y'] = self.options.y;

                    var endPoint = new Object();
                    endPoint['x'] = aXValues[iEnd];
                    endPoint['y'] = self.options.height_of_half_circle;

                    var centerPoint = new Object();
                    centerPoint['x'] = (endPoint['x'] - startPoint['x']) / 2;
                    centerPoint['y'] = self.options.height_of_half_circle;
                } else {
                    var startPoint = new Object();
                    startPoint['x'] = aXValues[iStart];
                    startPoint['y'] = self.options.y;

                    var endPoint = new Object();
                    endPoint['x'] = aXValues[iEnd];
                    endPoint['y'] = self.options.y;

                    var centerPoint = new Object();
                    centerPoint['x'] = (endPoint['x'] - startPoint['x']) / 2;
                    centerPoint['y'] = iHeightOfHalfCircle;
                }

                var center = centerPoint['x'] + startPoint['x'];
                var sClass = pair[0] + '_' + pair[1];
                var $infoBlock = $(document).find('.timeline-info.' + sClass);
                
				var boxHeight = 0;
                if (2 === $infoBlock.length) {
                    $infoBlock.each(function(index) {
                        boxHeight += $(this).height() + 40;
                    });
                } else {
                    boxHeight = $infoBlock.height() + 40;
                }
				
				var boxData = new Object();
				boxData.left = center - (self.options.widthOfInfoBlock / 2);
				boxData.height = boxHeight;
				if (infoCoodinatesTemp.length >= 1) {
					var lastBoxData = infoCoodinatesTemp[infoCoodinatesTemp.length - 1];
					
					var temp = maxHeight - lastBoxData.top - lastBoxData.height - iHeightOfHalfCircle;
					if (boxData.left - lastBoxData.right <= 30) {
						if (boxData.height >= temp) {
							boxData.top = lastBoxData.top - boxData.height + 27;
							maxHeight = maxHeight + boxData.height + 27;
                        } else {
							for (var index = infoCoodinatesTemp.length - 1; index >= 0; index--) {
								var tempBoxData = infoCoodinatesTemp[index];
								var subTemp = maxHeight - tempBoxData.top - tempBoxData.height - iHeightOfHalfCircle;
								if (boxData.height >= subTemp) {
									boxData.top = lastBoxData.top - boxData.height + 27;
									maxHeight = maxHeight + boxData.height + 27;
									break;
                                } else {
									if (boxData.left - tempBoxData.right <= 30) {
										boxData.top = lastBoxData.top - boxData.height + 27;
                                        break;
									}
								}
							}
						}
					} else {
						boxData.top = maxHeight;
					}
				} else {
					//First info
					maxHeight = iHeightOfHalfCircle + boxData.height + 20;
					boxData.top = maxHeight;
				}
				boxData.right = boxData.left + self.options.widthOfInfoBlock;
                infoCoodinatesTemp[infoCoodinatesTemp.length] = boxData;
            }
            //return iFinalHeight - 140;
            return maxHeight;
        },
        getCoordinates: function() {
            var self = this;
            var aReturnValues = {};
            var aRealValues = self.options.data.real_values;
            for (i = 1; i <= aRealValues.length; i++) {
                var x = self.getX(i);
                aReturnValues[aRealValues[i - 1]] = {x: x, y: posY};
            }
            return aReturnValues;
        },
        calculateWidthChart: function() {
            var self = this;
            var aLabels = self.options.data.labels;
            var iDistance = self.options.distance;
            var iWidth = iDistance * (aLabels.length - 1) + (self.options.pointRadius + 10) * 2;
            return iWidth;
        },
        calculateHeightChart: function() {
            var self = this;
            return posY + 42;
        },
        getX: function(index) {
            var self = this;
            var iDistance = self.options.distance;
            var x = iDistance * (index - 1) + self.options.pointRadius + 10;
            return x;
        },
        drawLine: function(r) {
            var self = this;
            var aLabels = self.options.data.labels;
            var iNbrPoint = aLabels.length;
            var y = posY;
            var j = 0;
            for (i = 1; i < iNbrPoint; i++) {
                j = i + 1;
                var x2 = self.getX(j);
                var x1 = self.getX(i);
                r.path('M' + x1 + ' ' + y + 'L' + x2 + ' ' + y).attr({stroke: "#158dff"});
            }
        },
        drawPoint: function(r, aCoordinates) {
            var self = this;
            var aLabels = self.options.data.labels;
            var iNbrPoint = aLabels.length;
            var aReturns = {};
            var iStartRect = 0;
            var iEndRect = 0;
            for (i = 1; i <= iNbrPoint; i++) {
                var x = self.getX(i);
                //r.circle(x, posY, self.options.pointRadius).attr({fill: '#135b94', stroke: "#000"})
                if (i === 1) {
                    iStartRect = x;
                }
                if (i === iNbrPoint) {
                    iEndRect = x;
                }
            }
            //r.rect(iStartRect, posY - 30, iEndRect - iStartRect, 30, 0).attr({fill: '#494235', stroke: "none", "opacity": "0.5"});
			r.rect(iStartRect - 34, posY - 30, iEndRect - iStartRect + 68, 30, 0).attr({fill: '#494235', stroke: "none", "opacity": "0.5"});
            for (i = 1; i <= iNbrPoint; i++) {
                var x = self.getX(i);
                var aMonthYear = aLabels[i - 1].split("/");
                var sYear = "";
                if (1 === parseInt(aMonthYear[0])) {
                    sYear = aMonthYear[1];
                }
                //r.text(x, posY + 3, aLabels[i-1]).attr({fill: '#fff', stroke: "#fff", "font-size" : self.options.fontSize});
                r.text(x, posY - 15, sYear).attr({fill: '#fff', stroke: "#fff", "font-size": self.options.fontSize});
            }
            return aReturns;
        },
        drawChart: function(r, aCoordinates) {
            var self = this;
            /*
             r.path('M0,200A50,100,0,0,1,100,200').attr({stroke: "none", fill: '#cecece'});
             r.path('M100,200A75,100,0,0,1,250,200').attr({stroke: "none", fill: '#ff0000'});
             r.path('M250,200A150,100,0,0,1,550,200').attr({stroke: "none", fill: '#cecece'});
             r.path('M250,200A50,100,0,0,1,350,200').attr({stroke: "none", fill: '#000000'});
             */
            //100:200 : first point
            //250:200 : last point
            //75:100  : center height top

            /*
             r.path('M0,200C50,50,200,50,250,200');
             r.path('M250,200C300,50,400,50,450,200');
             r.path('M450,200C500,50,750,50,800,200').attr({stroke: "none", fill: '#ff0000'});
             */

            var aRelationships = self.options.data.relationships;
			var tempText = 0;
			var checkText = false;
            for (var i = 0; i < aRelationships.length; i++) {
                var aColors = self.options.colors;
                var color = aColors[0];
                var aTexts = aRelationships[i].text;
                if ('' !== aTexts.career && '' !== aTexts.education) {
                    color = aColors[2];
                } else if ('' !== aTexts.career) {
                    color = aColors[1];
                } else {
                    color = aColors[0];
                }
                var pair = aRelationships[i].pair;
                if (pair.length < 2) {
                    continue;
                }
                var iStart = pair[0];
                var iEnd = pair[1];
				var bCheckOverChart = false;
                if (100000000 === parseInt(iEnd)) {
                    var startPoint = new Object();
                    startPoint['x'] = aCoordinates[iStart].x;
                    startPoint['y'] = aCoordinates[iStart].y;

                    var pos = self.options.data.real_values[self.options.data.real_values.length - 1];
                    var endPoint = new Object();
                    endPoint['x'] = aCoordinates[pos].x;
                    endPoint['y'] = self.options.height_of_half_circle;
					
					if((endPoint['x'] - startPoint['x']) / 2 < 58) {
						endPoint['x'] = endPoint['x'] + 80;
						bCheckOverChart = true;
					}
					
                    var centerPoint = new Object();
                    centerPoint['x'] = (endPoint['x'] - startPoint['x']) / 2;
                    centerPoint['y'] = self.options.height_of_half_circle;

                    var between01 = startPoint['x'] + 50;
                    var between02 = startPoint['y'] - 150;
                    var between05 = startPoint['x'] + centerPoint['x'];
                    var between06 = startPoint['y'] - self.options.height_of_half_circle;
                    ;
                    var between03 = between05 - 50;
                    var between04 = between06;

                    var sDraw = 'M' + startPoint['x'] + ',' + startPoint['y'];
                    sDraw += 'C' + between01 + ',' + between02;
                    sDraw += ',' + between03 + ',' + between04;
                    sDraw += ',' + between05 + ',' + between06;
                    sDraw += 'L' + endPoint['x'] + ',' + between06;
                    sDraw += 'L' + endPoint['x'] + ',' + startPoint['y'];
                    r.path(sDraw).attr({stroke: "none", fill: color});
                    //r.path('M0,200A50,100,0,0,1,100,200').attr({stroke: "none", fill: '#cecece'});
                } else {

                    var startPoint = new Object();
                    startPoint['x'] = aCoordinates[iStart].x;
                    startPoint['y'] = aCoordinates[iStart].y;

                    var endPoint = new Object();
                    endPoint['x'] = aCoordinates[iEnd].x;
                    endPoint['y'] = aCoordinates[iEnd].y;

                    var centerPoint = new Object();
                    centerPoint['x'] = (endPoint['x'] - startPoint['x']) / 2;
                    centerPoint['y'] = self.options.height_of_half_circle;

                    var sDraw = 'M' + startPoint['x'] + ',' + startPoint['y'];
                    sDraw += 'A' + centerPoint['x'] + ',' + centerPoint['y'] + ',0,0,1';
                    sDraw += ',' + endPoint['x'] + ',' + endPoint['y'];
                    r.path(sDraw).attr({stroke: "color", "stroke-width": 2, fill: color, "opacity": "0.8"});
                }


                var center = centerPoint['x'] + startPoint['x'];
				if (center === tempText || ((center - tempText) <= 25)) {
					checkText = true;
				} else {
					checkText = false;
				}
				tempText = center;
				var addClass = (true === checkText) ? 'class-check' : '';
                var sClass = pair[0] + '_' + pair[1];
                var $infoBlock = $(document).find('.timeline-info.' + sClass);
                var iFirstElementHeight = 0;
                if (2 === $infoBlock.length) {
                    var iElementHeight = 0;
                    $infoBlock.each(function(index) {
                        if (0 === index) {
                            iFirstElementHeight = $(this).height() + 40;
                        }
                        iElementHeight += $(this).height() + 40;
                    });
                } else {
                    var iElementHeight = $infoBlock.height() + 40;
                }
                var relX = center - (self.options.widthOfInfoBlock / 2);
                //var relY = centerPoint['y'] - 5 - iElementHeight;
                var iTemp = 0;
                var relY = posY - self.options.height_of_half_circle - iTemp - iElementHeight;
                
                var lineStart = posY - self.options.height_of_half_circle;
                var lineEnd = posY - self.options.height_of_half_circle - iTemp;
                if (infoCoodinates.length - 1 >= 0) {
                    var oldBlockArea = infoCoodinates[infoCoodinates.length - 1];
                    var oldRight = oldBlockArea.right;
                    var oldTop = oldBlockArea.top;
                    var oldHeight = oldBlockArea.height;

                    var temp = posY - oldTop - oldHeight - self.options.height_of_half_circle - iTemp;
                    if (relX - oldRight <= 30) {
                        if (iElementHeight >= temp) {
                            relY = oldTop - iElementHeight - iTemp + 27;
                        } else {
                            var tempRelY02 = relY;
                            //var tempRelY02 = oldTop - iElementHeight - iTemp;
                            var newBottom = tempRelY02 + iElementHeight;
                            for (var m = 0; m < infoCoodinates.length; m++) {
                                var tempBlock = infoCoodinates[m];
                                var tempHeight = tempBlock.height;
                                var tempTop = tempBlock.top;
                                var tempRight = tempBlock.right;
                                var bottom = tempTop + tempHeight;

                                var temp02 = posY - bottom - self.options.height_of_half_circle;
                                if (iElementHeight >= temp02) {
                                    relY = oldTop - iElementHeight - iTemp + 27;
                                } else {
                                    if (newBottom === bottom && tempRight - relX >= -30) {
                                        relY = oldTop - iElementHeight - iTemp + 27;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (2 === $infoBlock.length) {
                        lineEnd = relY + iFirstElementHeight;
                    } else {
                        lineEnd = relY + iElementHeight;
                    }
                }
                //r.path('M' + center + ',' + lineStart + 'L' + center + ',' + lineEnd).attr({stroke: color});        
                
                if (self.options.show_info) {
                    r.path('M' + center + ',' + lineStart + 'L' + center + ',' + (lineEnd - 8)).attr({stroke: color});
                }
                var blockArea = new Object();
                blockArea['height'] = iElementHeight;
                blockArea['top'] = relY;
                blockArea['left'] = relX + 3;
                blockArea['right'] = relX + self.options.widthOfInfoBlock + 3;
                infoCoodinates[infoCoodinates.length] = blockArea;
                if (2 === $infoBlock.length) {
                    var iFirstHeight = 0;
                    $infoBlock.each(function(index) {
                        $(this).css('left', relX + 3 + 'px');
                        if (0 === index) {
                            $(this).css('top', (relY + 20) + 'px');
                            iFirstHeight = $(this).height() + 40;
                            ;
                        } else {
                            var tempRelY = relY + iFirstHeight;
                            $(this).css('top', (tempRelY + 20) + 'px');
                        }
                        $(this).show();
                    });
                } else {
                    $infoBlock.css('left', relX + 3 + 'px');
                    $infoBlock.css('top', (relY + 20) + 'px');
                    $infoBlock.show();
                }
				
				var $centerinfoBlock = $(document).find('.center-info-timeline.' + sClass);
				$centerinfoBlock.addClass(addClass);
				if (2 === $centerinfoBlock.length) {
                    var iFirstHeight = 0;
                    $centerinfoBlock.each(function(index) {
                        if(bCheckOverChart) {
							$(this).css('left', center - ($(this).width()/2) - 11 + 'px');
						} else {
							$(this).css('left', center - ($(this).width()/2) + 4 + 'px');
						}
                        if (0 === index) {
                            $(this).css('bottom', 35 + ($centerinfoBlock.width()/2) + 'px');
                            iFirstHeight = $(this).height() + 40;
                            ;
                        } else {
                            var tempRelY = relY + iFirstHeight;
                            $(this).css('bottom', 35 + ($centerinfoBlock.width()/2) + 'px');
                        }
                        $(this).show();
                    });
                } else {
                    if(bCheckOverChart) {
						$centerinfoBlock.css('left', center - ($centerinfoBlock.width()/2) - 11 + 'px');
					} else {
						$centerinfoBlock.css('left', center - ($centerinfoBlock.width()/2) + 4 + 'px');
					}
                    $centerinfoBlock.css('bottom', 35 + ($centerinfoBlock.width()/2) + 'px');
                    $centerinfoBlock.show();
                }
            }
        }

    });
}(jQuery));
/*
 * BRIDGE: use our widget with namespace
 */
$.widget.bridge("likipe_chart", $.likipe.chart);
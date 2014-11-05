(function($) {
    var infoCoodinates = new Array();
    var infoCoodinatesTemp = new Array();
    var posY = 300;
    $.widget("likipe.newchart", {
        // These options will be used as defaults
        options: {
            font_size: 11,
            circle_radius: 150,
            range_between_point: 11,
            text_block_width: 230,
            widthOfInfoBlock: 230,
            distance: 11,
            y: 300,
            label_fontsize: 11,
            show_info: false,
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
            },
            chart: {
                width: 0,
                height: 0,
                real_values_x: {},
                text_block_coodinates: []
            }
        },
        // Set up the widget
        _create: function() {
            var self = this;
            var holderID = self.element.attr('id');
            self.getRealValuesX();
            self.renderText();
            self.options.chart.height = self.calculateChartHeight();
            self.options.chart.width = self.calculateChartWidth();
            // initialize raphael chart
            var raphael = Raphael(holderID);
            raphael.setSize(self.options.chart.width, self.options.chart.height);

            self.drawChart(raphael);
            self.drawPoint(raphael);
            self.element.customScrollbar({height: self.options.chart.height, vScroll:false, bSCrollRight: true});
        },
        renderText: function() {
            var self = this;
            var relations = self.options.data.relationships;
            var idCandidate = self.element.data('id');
            for (var i = 0; i < relations.length; i++) {
                var relation = relations[i];
                var sClass = relation.pair[0] + '_' + relation.pair[1];
                if (relation.pair[0] > relation.pair[1]) {
                    continue;
                }
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
        getRealValuesX: function() {
            var self = this;
            var realValuesList = self.options.data.real_values;
            for (var i = 0; i < realValuesList.length; i++) {
                self.options.chart.real_values_x[realValuesList[i]] = self.options.range_between_point * i + 35;
            }
            return;
        },
        calculateChartWidth: function() {
            var self = this;
            return self.options.range_between_point * (self.options.data.labels.length - 1) + 35 * 2; // 35 for each start & end
        },
        calculateChartHeight: function() {
            var self = this;
            var value = self.options.circle_radius;
            // code to calculate chart height
            var relationships = self.options.data.relationships;
            for (var i = 0; i < relationships.length; i++) {
                var pair = relationships[i].pair;
                if (pair[0] > pair[1]) {
                    continue;
                }
                if (pair.length < 2) {
                    continue;
                }
                if (100000000 === parseInt(pair[1])) {
                    // pair which has no end date (unlimitted)
                    var startPoint = new Object();
                    startPoint['x'] = self.options.chart.real_values_x[pair[0]];
                    startPoint['y'] = self.options.y;
                    
                    var endPoint = new Object();
                    endPoint['x'] = self.options.chart.real_values_x[self.options.data.real_values[self.options.data.real_values.length - 1]];
                    endPoint['y'] = self.options.circle_radius;
                    if((endPoint['x'] - startPoint['x']) / 2 < 58) {
						endPoint['x'] = endPoint['x'] + 80;
					}
                    
                    var centerPoint = new Object();
                    centerPoint['x'] = (endPoint['x'] - startPoint['x']) / 2;
                    centerPoint['y'] = self.options.circle_radius;
                } else {
                    var startPoint = new Object();
                    startPoint['x'] = self.options.chart.real_values_x[pair[0]];
                    startPoint['y'] = self.options.y;

                    var endPoint = new Object();
                    endPoint['x'] = self.options.chart.real_values_x[pair[1]];
                    endPoint['y'] = self.options.y;

                    var centerPoint = new Object();
                    centerPoint['x'] = (endPoint['x'] - startPoint['x']) / 2;
                    centerPoint['y'] = self.options.circle_radius;
                }
                var center = centerPoint['x'] + startPoint['x'];
                var className = pair[0] + '_' + pair[1];
                var $textBlock = $(document).find('.timeline-info.' + className);
                var boxHeight = 0;
                if (2 === $textBlock.length) {
                    $textBlock.each(function() {
                        boxHeight += $(this).height() + 13;
                    });
                } else {
                    boxHeight = $textBlock.height() + 13;
                }
                var boxData = new Object();
                boxData.left = center - (self.options.text_block_width / 2);
                boxData.height = boxHeight;

                if (2 <= self.options.chart.text_block_coodinates.length) {
                    var lastBoxData = self.options.chart.text_block_coodinates[self.options.chart.text_block_coodinates.length - 1];
                    var heightRemaining = value - lastBoxData.top - lastBoxData.height - self.options.circle_radius;
                    if (boxData.height > heightRemaining) {
                        if (boxData.left > lastBoxData.right) {
                            boxData.top = self.options.circle_radius + boxData.height + 10 + i * 30;
                            if (value < boxData.top) {
                                value = boxData.top;
                            }
                        } else {
                            boxData.top = lastBoxData.top + boxData.height + 10;
                            value += boxData.height + 10;
                            if (value < boxData.top) {
                                value = boxData.top;
                            }
                        }
                    } else {
                        var subBoxData = self.options.chart.text_block_coodinates[self.options.chart.text_block_coodinates.length - 2];
                        if (boxData.left > subBoxData.right) {
                            boxData.top = lastBoxData.top - boxData.height + 10;
                            if (value < boxData.top) {
                                value = boxData.top;
                            }
                        } else {
                            boxData.top = lastBoxData.top + boxData.height + 10;
                            value += boxData.height + 10;
                            if (value < boxData.top) {
                                value = boxData.top;
                            }
                        }
                    }
                } else if (1 === self.options.chart.text_block_coodinates.length) {
                    var lastBoxData = self.options.chart.text_block_coodinates[0];
                    if (boxData.left < lastBoxData.right) {
                        boxData.top = lastBoxData.top + boxData.height + 10;
                        value += boxData.height + 10;
                    } else {
                        if (boxData.height > lastBoxData.height) {
                            value += (boxData.height - lastBoxData.height) + 10;
                            boxData.top = value;
                        } else {
                            boxData.top = self.options.circle_radius + boxData.height + 10;
                            if (value < boxData.top) {
                                value = boxData.top;
                            }
                        }
                    }
                } else {
                    // first run
                    value += boxData.height + 10;
                    boxData.top = value;
                }
                boxData.right = boxData.left + self.options.text_block_width;
                self.options.chart.text_block_coodinates[i] = boxData;

            }
            return value;
        },
        drawChart: function(raphael) {
            var self = this;

            self.element.css('position', 'relative');
            var relationships = self.options.data.relationships;
            for (var i = 0; i < relationships.length; i++) {
                var colors = self.options.colors;
                var color = colors[0];
                var texts = relationships[i].text;
                if ('' !== texts.career && '' !== texts.education) {
                    color = colors[2];
                } else if ('' !== texts.career) {
                    color = colors[1];
                } else {
                    color = colors[0];
                }
                var pair = relationships[i].pair;
                if (pair[0] > pair[1]) {
                    continue;
                }
                if (pair.length < 2) {
                    continue;
                }
                if (100000000 === parseInt(pair[1])) {
                    // pair which has no end date (unlimitted)
                    var startPoint = new Object();
                    startPoint['x'] = self.options.chart.real_values_x[pair[0]];
                    startPoint['y'] = self.options.chart.height;

                    var endPoint = new Object();
                    endPoint['x'] = self.options.chart.real_values_x[self.options.data.real_values[self.options.data.real_values.length - 1]];
                    endPoint['y'] = self.options.chart.height - self.options.circle_radius;
                    
					
					if((endPoint['x'] - startPoint['x']) / 2 < 58) {
						endPoint['x'] = endPoint['x'] + 80;
					}

                    var centerPoint = new Object();
                    centerPoint['x'] = (endPoint['x'] - startPoint['x']) / 2;
                    centerPoint['y'] = self.options.chart.height - self.options.circle_radius;

                    var between01 = startPoint['x'] + 50;
                    var between02 = startPoint['y'] - 150;
                    var between05 = startPoint['x'] + centerPoint['x'];
                    var between06 = startPoint['y'] - self.options.circle_radius;
                    var between03 = between05 - 50;
                    var between04 = between06;
                    var draw = 'M' + startPoint['x'] + ',' + startPoint['y'];
                    draw += 'C' + between01 + ',' + between02;
                    draw += ',' + between03 + ',' + between04;
                    draw += ',' + between05 + ',' + between06;
                    draw += 'L' + endPoint['x'] + ',' + between06;
                    draw += 'L' + endPoint['x'] + ',' + startPoint['y'];
                    raphael.path(draw).attr({stroke: "none", fill: color, opacity: "0.8"});
                } else {
                    var startPoint = new Object();
                    startPoint['x'] = self.options.chart.real_values_x[pair[0]];
                    startPoint['y'] = self.options.chart.height;

                    var endPoint = new Object();
                    endPoint['x'] = self.options.chart.real_values_x[pair[1]];
                    endPoint['y'] = self.options.chart.height;

                    var centerPoint = new Object();
                    centerPoint['x'] = (endPoint['x'] - startPoint['x']) / 2;
                    centerPoint['y'] = self.options.circle_radius;

                    var draw = 'M' + startPoint['x'] + ',' + startPoint['y'];
                    draw += 'A' + centerPoint['x'] + ',' + centerPoint['y'] + ',0,0,1';
                    draw += ',' + endPoint['x'] + ',' + endPoint['y'];
                    raphael.path(draw).attr({stroke: "color", "stroke-width": 2, fill: color, opacity: "0.8"});
                }
                var boxData = self.options.chart.text_block_coodinates[i];
                var center = centerPoint['x'] + startPoint['x'];
                var lineStart = self.options.chart.height - self.options.circle_radius;
                var top = self.options.chart.height - boxData.top;
                var lineEnd = top + boxData.height;
                raphael.path('M' + center + ',' + lineStart + 'L' + center + ',' + (lineEnd)).attr({stroke: color});
                if (pair[0] === pair[1]) {
                    raphael.path('M' + center + ',' + self.options.chart.height + 'L' + center + ',' + (lineEnd)).attr({stroke: color});
                } else {
                    raphael.path('M' + center + ',' + lineStart + 'L' + center + ',' + (lineEnd)).attr({stroke: color});
                }

                var className = pair[0] + '_' + pair[1];
                var $textBlock = $(document).find('.timeline-info.' + className);
                var boxHeight = 0;
                if (2 === $textBlock.length) {
                    $textBlock.each(function() {
                        boxHeight += $(this).height();
                    });
                } else {
                    boxHeight = $textBlock.height();
                }

                if (2 === $textBlock.length) {
                    var firstHeight = 0;
                    $textBlock.each(function(index) {
                        $(this).css('left', boxData.left + 'px');
                        if (0 === index) {
                            $(this).css('top', (self.options.chart.height - boxData.top) + 'px');
                            firstHeight = $(this).height() + 13;
                        } else {
                            var tempRelY = self.options.chart.height - boxData.top + firstHeight;
                            $(this).css('top', tempRelY + 'px');
                        }
                        $(this).show();
                    });
                } else {
                    $textBlock.css('marginLeft', 0);
                    $textBlock.css('left', boxData.left + 'px');
                    $textBlock.css('top', (self.options.chart.height - boxData.top) + 'px');
                    $textBlock.show();
                }
            }
        },
        drawPoint: function(raphael) {
            var self = this;
            var labels = self.options.data.labels;
            var realValuesList = self.options.data.real_values;
            var leftX = self.options.chart.real_values_x[realValuesList[0]] - 35;
            var width = self.options.chart.real_values_x[realValuesList[realValuesList.length - 1]] - leftX + 68;
            raphael.rect(leftX, self.options.chart.height - 30, width, 30, 0).attr({fill: '#494235', stroke: "none", "opacity": "0.5"});
            for (var i = 0; i < labels.length; i++) {
                var value = self.options.chart.real_values_x[realValuesList[i]];
                var monthYears = labels[i].split("/");
                var yearText = "";
                if (1 === parseInt(monthYears[0])) {
                    yearText = monthYears[1];
                }
                //r.text(x, posY + 3, aLabels[i-1]).attr({fill: '#fff', stroke: "#fff", "font-size" : self.options.fontSize});
                raphael.text(value, self.options.chart.height - 15, yearText).attr({fill: '#fff', stroke: "#fff", "font-size": self.options.label_fontsize});
            }
        }
    });
}(jQuery));
/*
 * BRIDGE: use our widget with namespace
 */
$.widget.bridge("likipe_new_chart", $.likipe.newchart);
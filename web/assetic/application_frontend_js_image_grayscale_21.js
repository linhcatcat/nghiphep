/**
 * Widget used to change image with grayscale
 * @author Kevin <kevin@likipe.se>
 */
(function($) {
    $.widget("likipe.image_grayscale", {
        // These options will be used as defaults
        options: {
            imageInputClass: '.uploadavatar', //Class of input file
            confirmActivateItemClass: '.confirm-activate-item', //Class hidden - item need to upload,
            defaultActivateClass: '.item-01',
			orderAvatar: '' //use for multi widget image in 1 page
        },
        // Set up the widget
        _create: function() {
            this.setDefaultActivate();
            this.setActivate();
            this.changeImage();
            //this.hoverImage();
        },
        
        /**
         * Check support FileReader
         */
        checkSupport: function() {
        	if (window.File && window.FileReader && window.FileList && window.Blob) {
        		return true;
            }
        	return false;
        },
        
        /**
         * Show input file of current upload
         */
        getInput: function(order) {
        	var self = this;
        	var sImageInputClass = self.options.imageInputClass;
        	self.element.find(sImageInputClass).hide();
    		if ('01' === order) {
    			self.element.find(sImageInputClass + '.first_upload').show();
    		} else if ('02' === order) {
    			self.element.find(sImageInputClass + '.second_upload').show();
    		} else if ('03' === order) {
    			self.element.find(sImageInputClass + '.third_upload').show();
    		} else {
    			self.element.find(sImageInputClass + '.first_upload').show();
    		}
        },
        
        /**
         * Set default active & images first
         */
        setDefaultActivate: function() {
            var self = this;
            var $defaultActivate = self.element.find(self.options.defaultActivateClass);
            var order = $defaultActivate.data('order');
            self.element.find(self.options.confirmActivateItemClass).val(order);
            self.getInput(order);
            self.element.find('.item').each(function() {
                var $img = $(this).find('.img_first');
                var sSource = $img.attr('src');
                var order = $(this).data('order');
                if ($(document).find('.lt-ie9').length > 0) {
                    $(this).find('.img_second').attr('src', sSource);
                } else {
                    if (sSource !== '') {
                        var img = new Image();
                        img.src = sSource;
                    }
                }

            });
        },
        
        /**
         * Set active when click change 1 image
         */
        setActivate: function() {
            var self = this;
            self.element.on('click', '.item', function() {
                self.element.find('.item').removeClass('active');
                $(this).addClass('active');
                var order = $(this).data('order');
                self.getInput(order);
                self.element.find(self.options.confirmActivateItemClass).val(order);
            });
        },
        
        /**
         * Hover event of image, show colorful image
         */
        hoverImage: function() {
        	//Check ie 7 8
        	if (self.checkSupport === false) {
        		return;
        	}
            $(".item").hover(
                function() {
                    $(this).find('.img_first').animate({opacity: 1}, 200);
                },
                function() {
                    $(this).find('.img_first').animate({opacity: 0}, 200);
                }
            );
        },
        
        /**
         * Change image
         */
        changeImage: function() {
            var self = this;
            $(document).on('change', 'input' + self.options.imageInputClass, function() {
            	self.readFile(this);
            });

        },
        
        /**
         * Read file when change image
         */
        readFile: function(element) {
            var self = this;
            if (self.checkSupport() === false) {
            	var sFileName = $(element).val();
        		var sFileName = sFileName.substring(sFileName.lastIndexOf('\\') + 1);
            	var order = self.element.find(self.options.confirmActivateItemClass).val();
            	if (order === '') {
                    order = '01';
                }
            	$('#avatar-' + order + self.options.orderAvatar).attr('title', sFileName);
            	$('#avatar-' + order + self.options.orderAvatar).attr('alt', sFileName);
            	$('#avatar-' + order + self.options.orderAvatar).attr('src', '');
            	$('#avatar-' + order + '-gray' + self.options.orderAvatar).attr('src', '');
            	return;
            }
            var input = element;
            if (!input) {
                alert("Um, couldn't find the fileinput element.");
            } else if (!input.files) {
                alert("This browser doesn't seem to support the `files` property of file inputs.");
            } else if (!input.files[0]) {
                alert("Please select a file before clicking 'Load'");
            } else {
                var file = input.files[0];
				//Check filesize upload
				var fileSize = file.size;
				var iLimitFileSizeByte = iLimitFileSize * 1024000;
				if (iLimitFileSizeByte < fileSize) {
					alert("File upload can't be larger than " + iLimitFileSize + "MB!");
					return false;
				}
                var fr = new FileReader();
                fr.readAsDataURL(file);
                fr.onloadend = function() {
                    var result = fr.result;
                    var order = self.element.find(self.options.confirmActivateItemClass).val();
                    if (order === '') {
                        order = '01';
                    }
                    document.getElementById('avatar-' + order + self.options.orderAvatar).src = result;
                    var img = new Image();
                    img.onload = function() {
                        self.element.find('.item').removeClass('active');
                    }
                    img.src = result;
                };
            }
        },
        
        /**
         * Handle grayscale for image
         * @param Image object img
         */
        grayscale: function(img) {
            var supportsCanvas = !!document.createElement('canvas').getContext;
            if (supportsCanvas) {
                var canvas = document.createElement('canvas'),
                        context = canvas.getContext('2d'),
                        imageData, px, length, i = 0, gray;

                canvas.width = img.width;
                canvas.height = img.height;
                context.drawImage(img, 0, 0);
                try {
                    //Run some code here
                    //imageData = context.getImageData(0, 0, 50, 200);
                    imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                } catch (err)
                {
                    alert(err);
                    return false;
                }

                px = imageData.data;
                length = px.length;

                for (; i < length; i += 4) {
                    gray = px[i] * .3 + px[i + 1] * .59 + px[i + 2] * .11;
                    px[i] = px[i + 1] = px[i + 2] = gray;
                }

                context.putImageData(imageData, 0, 0);
                return canvas.toDataURL();
            } else {
                return img;
            }
        }

    });
}(jQuery));
/*
 * BRIDGE: use our widget with namespace
 */
$.widget.bridge("likipe_image_grayscale", $.likipe.image_grayscale);
videoCVTranslationMessages = new Array();
videoCVTranslationMessages['lengthofPassword'] = 'Ditt lösenord måste bestå av minst åtta tecken';
videoCVTranslationMessages['acceptTerm'] = 'Du måste godkänna villkoren';
videoCVTranslationMessages['chooseAJob'] = 'Välj vilket jobb du söker';
videoCVTranslationMessages['firstNameCandidate'] = 'Fyll fältet Förnamn';
videoCVTranslationMessages['lastNameCandidate'] = 'Fyll fältet Efternamn';
videoCVTranslationMessages['emailCandidate'] = 'Fyll fältet Email';
videoCVTranslationMessages['yearOfBirthCandidate'] = 'Fyll fältet Födelseår';
videoCVTranslationMessages['confirm_report_abuse_candidate'] = 'Är du säker på att du vill anmäla profilen för olämpligt innehåll?';
videoCVTranslationMessages['please_choose_a_payment_type'] = 'Välj betalningsalternativ eller dela vår startsida på Facebook. Det är bara vår startsida som delas så dina vänner kommer inte kunna se att du sökt jobb.';
videoCVTranslationMessages['pdf_file_uploaded_successfully'] = 'Glöm inte att spara på knappen till höger. Din profil skickar du sedan från fliken "Skicka profil".';
videoCVTranslationMessages['pdf_file_upload_failed'] = 'Den valda filen är för stor, välj ny fil som inte är större än';
videoCVTranslationMessages['please_choose_a_job'] = 'Kryssa för det eller de jobb du är kvalificerad för och vill skicka din ansökan till.';
videoCVTranslationMessages['are_you_sure'] = 'Är du säker';
/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()};var r=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(t){var n=this.getActiveIndex(),r=this;if(t>this.$items.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){r.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",e(this.$items[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f;this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u](),f=e.Event("slide",{relatedTarget:i[0],direction:o});if(i.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=e(a.$indicators.children()[a.getActiveIndex()]);t&&t.addClass("active")}));if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.pause().cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this},e(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data()),o;i.carousel(s),(o=n.attr("data-slide-to"))&&i.data("carousel").pause().to(o).cycle(),t.preventDefault()})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning||this.$element.hasClass("in"))return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning||!this.$element.hasClass("in"))return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=e.extend({},e.fn.collapse.defaults,r.data(),typeof n=="object"&&n);i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})}(window.jQuery),!function(e){"use strict";function r(){e(".dropdown-backdrop").remove(),e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=n&&e(n);if(!r||!r.length)r=t.parent();return r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||("ontouchstart"in document.documentElement&&e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click",r),s.toggleClass("open")),n.focus(),!1},keydown:function(n){var r,s,o,u,a,f;if(!/(38|40|27)/.test(n.keyCode))return;r=e(this),n.preventDefault(),n.stopPropagation();if(r.is(".disabled, :disabled"))return;u=i(r),a=u.hasClass("open");if(!a||a&&n.keyCode==27)return n.which==27&&u.find(t).focus(),r.click();s=e("[role=menu] li:not(.divider):visible a",u);if(!s.length)return;f=s.index(s.filter(":focus")),n.keyCode==38&&f>0&&f--,n.keyCode==40&&f<s.length-1&&f++,~f||(f=0),s.eq(f).focus()}};var s=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.dropdown.data-api",r).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!t)return;i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()}};var n=e.fn.modal;e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s,o,u,a;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,o=this.options.trigger.split(" ");for(a=o.length;a--;)u=o[a],u=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):u!="manual"&&(i=u=="hover"?"mouseenter":"focus",s=u=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e.fn[this.type].defaults,r={},i;this._options&&e.each(this._options,function(e,t){n[e]!=t&&(r[e]=t)},this),i=e(t.currentTarget)[this.type](r).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var t,n,r,i,s,o,u=e.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(u);if(u.isDefaultPrevented())return;t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),r=t[0].offsetWidth,i=t[0].offsetHeight;switch(s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(o,s),this.$element.trigger("shown")}},applyPlacement:function(e,t){var n=this.tip(),r=n[0].offsetWidth,i=n[0].offsetHeight,s,o,u,a;n.offset(e).addClass(t).addClass("in"),s=n[0].offsetWidth,o=n[0].offsetHeight,t=="top"&&o!=i&&(e.top=e.top+i-o,a=!0),t=="bottom"||t=="top"?(u=0,e.left<0&&(u=e.left*-2,e.left=0,n.offset(e),s=n[0].offsetWidth,o=n[0].offsetHeight),this.replaceArrow(u-r+s,s,"left")):this.replaceArrow(o-i,o,"top"),a&&n.offset(e)},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function i(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip(),r=e.Event("hide");this.$element.trigger(r);if(r.isDefaultPrevented())return;return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?i():n.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=(typeof n.content=="function"?n.content.call(t[0]):n.content)||t.attr("data-content"),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var n=e(this),r=n.data("target")||n.attr("href"),i=/^#\w/.test(r)&&e(r);return i&&i.length&&[[i.position().top+(!e.isWindow(t.$scrollElement.get(0))&&t.$scrollElement.scrollTop()),r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=e(this.options.menu),this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this)).on("mouseleave","li",e.proxy(this.mouseleave,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t=typeof this.$element[e]=="function"),t},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},focus:function(e){this.focused=!0},blur:function(e){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(e){e.stopPropagation(),e.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")},mouseleave:function(e){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=e.fn.typeahead;e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e.fn.typeahead.noConflict=function(){return e.fn.typeahead=n,this},e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;n.typeahead(n.data())})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);
/*! jQuery UI - v1.10.3 - 2013-08-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);
/*

CUSTOM FORM ELEMENTS

Created by Ryan Fait
www.ryanfait.com

The only things you may need to change in this file are the following
variables: checkboxHeight, radioHeight and selectWidth (lines 24, 25, 26)

The numbers you set for checkboxHeight and radioHeight should be one quarter
of the total height of the image want to use for checkboxes and radio
buttons. Both images should contain the four stages of both inputs stacked
on top of each other in this order: unchecked, unchecked-clicked, checked,
checked-clicked.

You may need to adjust your images a bit if there is a slight vertical
movement during the different stages of the button activation.

The value of selectWidth should be the width of your select list image.

Visit http://ryanfait.com/ for more information.

*/

var checkboxHeight = "24";
var radioHeight = "23";
var selectWidth = "190";


/* No need to change anything after this */


document.write('<style type="text/css">input.styled { display: none; } select.styled { position: relative; width: ' + selectWidth + 'px; opacity: 0; filter: alpha(opacity=0); z-index: 5; } .disabled { opacity: 0.5; filter: alpha(opacity=50); }</style>');

var Custom = {
	init: function() {
		var inputs = document.getElementsByTagName("input"), span = Array(), textnode, option, active;
		for(a = 0; a < inputs.length; a++) {
			if((inputs[a].type == "checkbox" || inputs[a].type == "radio") && inputs[a].className == "styled") {
				span[a] = document.createElement("span");
				span[a].className = inputs[a].type;

				if(inputs[a].checked == true) {
					if(inputs[a].type == "checkbox") {
						position = "0 -" + (checkboxHeight) + "px";
						span[a].style.backgroundPosition = position;
					} else {
						position = "0 -" + (radioHeight) + "px";
						span[a].style.backgroundPosition = position;
					}
				}
				inputs[a].parentNode.insertBefore(span[a], inputs[a]);
				inputs[a].onchange = Custom.clear;
				if(!inputs[a].getAttribute("disabled")) {
					span[a].onmousedown = Custom.pushed;
					span[a].onmouseup = Custom.check;
				} else {
					span[a].className = span[a].className += " disabled";
				}
			}
		}
		inputs = document.getElementsByTagName("select");
		for(a = 0; a < inputs.length; a++) {
			if(inputs[a].className == "styled") {
				option = inputs[a].getElementsByTagName("option");
				active = option[0].childNodes[0].nodeValue;
				textnode = document.createTextNode(active);
				for(b = 0; b < option.length; b++) {
					if(option[b].selected == true) {
						textnode = document.createTextNode(option[b].childNodes[0].nodeValue);
					}
				}
				span[a] = document.createElement("span");
				span[a].className = "select";
				span[a].id = "select" + inputs[a].name;
				span[a].appendChild(textnode);
				inputs[a].parentNode.insertBefore(span[a], inputs[a]);
				if(!inputs[a].getAttribute("disabled")) {
					inputs[a].onchange = Custom.choose;
				} else {
					inputs[a].previousSibling.className = inputs[a].previousSibling.className += " disabled";
				}
			}
		}
		document.onmouseup = Custom.clear;
	},
	pushed: function() {
		element = this.nextSibling;
		if(element.checked == true && element.type == "checkbox") {
			this.style.backgroundPosition = "0 -" + checkboxHeight + "px";
		} else if(element.checked == true && element.type == "radio") {
			this.style.backgroundPosition = "0 -" + radioHeight + "px";
		} else if(element.checked != true && element.type == "checkbox") {
			this.style.backgroundPosition = "0 -" + checkboxHeight + "px";
		} else {
			this.style.backgroundPosition = "0 -" + radioHeight + "px";
		}
	},
	check: function() {
		element = this.nextSibling;
		if(element.checked == true && element.type == "checkbox") {
			this.style.backgroundPosition = "0 0";
			element.checked = false;
		} else {
			if(element.type == "checkbox") {
				this.style.backgroundPosition = "0 -" + checkboxHeight + "px";
			} else {
				this.style.backgroundPosition = "0 -" + radioHeight + "px";
				group = this.nextSibling.name;
				inputs = document.getElementsByTagName("input");
				for(a = 0; a < inputs.length; a++) {
					if(inputs[a].name == group && inputs[a] != this.nextSibling) {
						inputs[a].previousSibling.style.backgroundPosition = "0 0";
					}
				}
			}
			element.checked = true;
		}
	},
	clear: function() {
		inputs = document.getElementsByTagName("input");
		for(var b = 0; b < inputs.length; b++) {
			if(inputs[b].type == "checkbox" && inputs[b].checked == true && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 -" + checkboxHeight + "px";
			} else if(inputs[b].type == "checkbox" && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 0";
			} else if(inputs[b].type == "radio" && inputs[b].checked == true && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 -" + radioHeight + "px";
			} else if(inputs[b].type == "radio" && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 0";
			}
		}
	},
	choose: function() {
		option = this.getElementsByTagName("option");
		for(d = 0; d < option.length; d++) {
			if(option[d].selected == true) {
				document.getElementById("select" + this.name).childNodes[0].nodeValue = option[d].childNodes[0].nodeValue;
			}
		}
	}
}
window.onload = Custom.init;
/*
  Bootstrap - File Input
  ======================

  This is meant to convert all file input tags into a set of elements that displays consistently in all browsers.

  Converts all
  <input type="file">
  into Bootstrap buttons
  <a class="btn">Browse</a>

*/
$(function() {

$.fn.bootstrapFileInput = function() {

  this.each(function(i,elem){

    var $elem = $(elem);

    // Maybe some fields don't need to be standardized.
    if (typeof $elem.attr('data-bfi-disabled') != 'undefined') {
      return;
    }

    // Set the word to be displayed on the button
    var buttonWord = 'Browse';

    if (typeof $elem.attr('title') != 'undefined') {
      buttonWord = $elem.attr('title');
    }

    // Start by getting the HTML of the input element.
    // Thanks for the tip http://stackoverflow.com/a/1299069
    var input = $('<div>').append( $elem.eq(0).clone() ).html();
    var className = '';

    if (!!$elem.attr('class')) {
      className = ' ' + $elem.attr('class');
    }

    // Now we're going to replace that input field with a Bootstrap button.
    // The input will actually still be there, it will just be float above and transparent (done with the CSS).
    $elem.replaceWith('<a class="file-input-wrapper btn' + className + '">'+buttonWord+input+'</a>');
  })

  // After we have found all of the file inputs let's apply a listener for tracking the mouse movement.
  // This is important because the in order to give the illusion that this is a button in FF we actually need to move the button from the file input under the cursor. Ugh.
  .promise().done( function(){

    // As the cursor moves over our new Bootstrap button we need to adjust the position of the invisible file input Browse button to be under the cursor.
    // This gives us the pointer cursor that FF denies us
    $('.file-input-wrapper').mousemove(function(cursor) {

      var input, wrapper,
        wrapperX, wrapperY,
        inputWidth, inputHeight,
        cursorX, cursorY;

      // This wrapper element (the button surround this file input)
      wrapper = $(this);
      // The invisible file input element
      input = wrapper.find("input");
      // The left-most position of the wrapper
      wrapperX = wrapper.offset().left;
      // The top-most position of the wrapper
      wrapperY = wrapper.offset().top;
      // The with of the browsers input field
      inputWidth= input.width();
      // The height of the browsers input field
      inputHeight= input.height();
      //The position of the cursor in the wrapper
      cursorX = cursor.pageX;
      cursorY = cursor.pageY;

      //The positions we are to move the invisible file input
      // The 20 at the end is an arbitrary number of pixels that we can shift the input such that cursor is not pointing at the end of the Browse button but somewhere nearer the middle
      moveInputX = cursorX - wrapperX - inputWidth + 20;
      // Slides the invisible input Browse button to be positioned middle under the cursor
      moveInputY = cursorY- wrapperY - (inputHeight/2);

      // Apply the positioning styles to actually move the invisible file input
      input.css({
        left:moveInputX,
        top:moveInputY
      });
    });

    $('.file-input-wrapper input[type=file]').change(function(){

      var fileName;
      fileName = $(this).val();

      // Remove any previous file names
      $(this).parent().next('.file-input-name').remove();
      if (!!$(this).prop('files') && $(this).prop('files').length > 1) {
        fileName = $(this)[0].files.length+' files';
        //$(this).parent().after('<span class="file-input-name">'+$(this)[0].files.length+' files</span>');
      }
      else {
        // var fakepath = 'C:\\fakepath\\';
        // fileName = $(this).val().replace('C:\\fakepath\\','');
        fileName = fileName.substring(fileName.lastIndexOf('\\')+1,fileName.length);
      }

      $(this).parent().after('<span class="file-input-name">'+fileName+'</span>');
    });

  });

};

// Add the styles before the first stylesheet
// This ensures they can be easily overridden with developer styles
var cssHtml = '<style>'+
  '.file-input-wrapper { overflow: hidden; position: relative; cursor: pointer; z-index: 1; }'+
  '.file-input-wrapper input[type=file], .file-input-wrapper input[type=file]:focus, .file-input-wrapper input[type=file]:hover { position: absolute; top: 0; left: 0; cursor: pointer; opacity: 0; filter: alpha(opacity=0); z-index: 99; outline: 0; }'+
  '.file-input-name { margin-left: 8px; }'+
  '</style>';
$('link[rel=stylesheet]').eq(0).before(cssHtml);

});

/*
 * Selecter Plugin [Formtone Library]
 * @author Ben Plum
 * @version 2.1.2
 *
 * Copyright © 2013 Ben Plum <mr@benplum.com>
 * Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

if (jQuery) (function($) {
	
	// Mobile Detect
	var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
		isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test( (navigator.userAgent||navigator.vendor||window.opera) );
	
	// Default Options
	var options = {
		callback: function() {},
		cover: false,
		customClass: "",
		defaultLabel: false,
		externalLinks: false,
		links: false,
		trimOptions: false
	};
	
	// Identify each instance
	var guid = 0;
	
	// Public Methods
	var pub = {
		
		// Set Defaults
		defaults: function(opts) {
			options = $.extend(options, opts || {});
			return $(this);
		},
		
		// Disable field
		disable: function() {
			var $items = $(this);
			for (var i = 0, count = $items.length; i < count; i++) {
				var $target = $items.eq(i),
					$selecter = $target.next(".selecter");
				
				if ($selecter.hasClass("open")) {
					$selecter.find(".selecter-selected").trigger("click");
				}
				
				$target.prop("disabled", true);
				$selecter.addClass("disabled");
			}
			return $items;
		},
		
		// Enable field
		enable: function() {
			var $items = $(this);
			for (var i = 0, count = $items.length; i < count; i++) {
				var $target = $items.eq(i),
					$selecter = $target.next(".selecter");
				
				$target.prop("disabled", null);
				$selecter.removeClass("disabled");
			}
			return $items;
		},
		
		// Destroy selecter
		destroy: function() {
			var $items = $(this);
			for (var i = 0, count = $items.length; i < count; i++) {
				var $target = $items.eq(i),
					$selecter = $target.next(".selecter");
				
				if ($selecter.hasClass("open")) {
					$selecter.find(".selecter-selected").trigger("click");
				}
				
				// Scroller support
				if ($.fn.scroller != undefined) {
					$selecter.find(".selecter-options").scroller("destroy");
				}
				
				$target.off(".selecter")
					   .removeClass("selecter-element")
					   .show();
				$selecter.off(".selecter")
						 .remove();
			}
			return $items;
		}
	};
	
	// Private Methods
	
	// Initialize
	function _init(opts) {
		// Local options
		opts = $.extend({}, options, opts || {});
		
		// Apply to each element
		var $items = $(this);
		for (var i = 0, count = $items.length; i < count; i++) {
			_build($items.eq(i), opts);
		}
		return $items;
	}
	
	// Build each
	function _build($selectEl, opts) {
		if (!$selectEl.data("selecter")) {
			if (opts.externalLinks) {
				opts.links = true;
			}
			
			// EXTEND OPTIONS
			$.extend(opts, $selectEl.data("selecter-options"));
			
			// Build options array
			var $allOptionEls = $selectEl.find("option, optgroup"),
				$optionEls = $allOptionEls.filter("option"),
				$originalOption = $optionEls.filter(":selected"),
				originalIndex = (opts.defaultLabel) ? -1 : $optionEls.index($originalOption),
				totalItems = $allOptionEls.length - 1,
				wrapperTag = (opts.links) ? "nav" : "div",
				itemTag = (opts.links) ? "a" : "span";
			
			opts.multiple = $selectEl.prop("multiple");
			opts.disabled = $selectEl.is(":disabled");
			
			// Build HTML
			var html = '<' + wrapperTag + ' class="selecter ' + opts.customClass;
			// Special case classes
			if (isMobile) {
				html += ' mobile';
			} else if (opts.cover) {
				html += ' cover';
			}
			if (opts.multiple) {
				html += ' multiple';
			} else {
				html += ' closed';
			}
			if (opts.disabled) {
				html += ' disabled';
			}
			html += '">';
			if (!opts.multiple) {
				html += '<span class="selecter-selected">';
				html += _checkLength(opts.trimOptions, ((opts.defaultLabel != false) ? opts.defaultLabel : $originalOption.text()));
				html += '</span>';
			}
			html += '<div class="selecter-options">';
			
			var j = 0,
				$op = null;
			for (var i = 0, count = $allOptionEls.length; i < count; i++) {
				$op = $($allOptionEls[i]);
				// Option group
				if ($op[0].tagName == "OPTGROUP") {
					html += '<span class="selecter-group">' + $op.attr("label") + '</span>';
				} else {
					html += '<' + itemTag + ' class="selecter-item';
					// Default selected value - now handles multi's thanks to @kuilkoff 
					if ($op.is(':selected') && !opts.defaultLabel) {
						html += ' selected';
					}
					// CSS styling classes - might ditch for pseudo selectors
					if (i == 0) {
						html += ' first';
					}
					if (i == totalItems) {
						html += ' last';
					}
					html += '" ';
					if (opts.links) {
						html += 'href="' + $op.val() + '"';
					} else {
						html += 'data-value="' + $op.val() + '"';
					}
					html += '>' + _checkLength(opts.trimOptions, $op.text()) + '</' + itemTag + '>';
					j++;
				}
			}
			html += '</div>';
			html += '</' + wrapperTag + '>';
			
			// Modify DOM
			$selectEl.addClass("selecter-element")
					 .after(html);
			
			// Store plugin data
			var $selecter = $selectEl.next(".selecter");
			opts = $.extend({
				$selectEl: $selectEl,
				$optionEls: $optionEls,
				$selecter: $selecter,
				$selected: $selecter.find(".selecter-selected"),
				$itemsWrapper: $selecter.find(".selecter-options"),
				$items: $selecter.find(".selecter-item"),
				index: originalIndex,
				guid: guid
			}, opts);
			
			// Scroller support
			if ($.fn.scroller != undefined) {
				opts.$itemsWrapper.scroller();
			}
			
			// Bind click events
			$selecter.on("click.selecter", ".selecter-selected", opts, _handleClick)
					 .on("click.selecter", ".selecter-item", opts, _select)
					 .on("selecter-close", opts, _close)
					 .data("selecter", opts);
			
			// Bind Blur/focus events
			if ((!opts.links && !isMobile) || isMobile) {
				$selectEl.on("change", opts, _change)
						 .on("blur.selecter", opts, _blur);
				if (!isMobile) {
					$selectEl.on("focus.selecter", opts, _focus);
				}
			} else {
				// Disable browser focus/blur for jump links
				$selectEl.hide();
			}
			
			guid++;
		}
	}
	
	// Handle Click
	function _handleClick(e) {
		e.preventDefault();
		e.stopPropagation();
		
		var data = e.data;
		
		if (!data.$selectEl.is(":disabled")) {
			$(".selecter").not(data.$selecter).trigger("selecter-close", [data]);
			
			// Handle mobile
			if (isMobile) {
				var el = data.$selectEl[0];
				if (document.createEvent) { // All
					var evt = document.createEvent("MouseEvents");
					evt.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
					el.dispatchEvent(evt);
				} else if (element.fireEvent) { // IE
					el.fireEvent("onmousedown");
				}
			} else {
				// Delegate intent
				if (data.$selecter.hasClass("closed")) {
					_open(e);
				} else if (data.$selecter.hasClass("open")) {
					_close(e);
				}
			}
		}
	}
	
	// Open Options
	function _open(e) {
		e.preventDefault();
		e.stopPropagation();
		
		var data = e.data;
		
		// Make sure it's not alerady open
		if (!data.$selecter.hasClass("open")) {
			var selectOffset = data.$selecter.offset(),
				bodyHeight = $("body").outerHeight(),
				optionsHeight = data.$itemsWrapper.outerHeight(true);
			
			// Calculate bottom of document if not mobile
			if (selectOffset.top + optionsHeight > bodyHeight && isMobile) {
				data.$selecter.addClass("bottom");
			} else {
				data.$selecter.removeClass("bottom");
			}
			
			data.$itemsWrapper.show();
			
			// Bind Events
			data.$selecter.removeClass("closed").addClass("open");
			$("body").on("click.selecter-" + data.guid, ":not(.selecter-options)", data, _closeListener)
					 .on("keydown.selecter-" + data.guid, data, _keypress);
			
			if ($.fn.scroller != undefined) {
				data.$itemsWrapper.scroller("reset");
			}
		}
	}
	
	// Close Options
	function _close(e) {
		e.preventDefault();
		e.stopPropagation();
		
		var data = e.data;
		
		// Make sure it's actually open
		if (data.$selecter.hasClass("open")) {
			data.$itemsWrapper.hide();
			data.$selecter.removeClass("open").addClass("closed");
			$("body").off(".selecter-" + data.guid);
		}
	}
	
	// Close listener
	function _closeListener(e) {
		e.preventDefault();
		e.stopPropagation();
		
		if ($(e.currentTarget).parents(".selecter").length == 0) {
			_close(e);
		}
	}
	
	// Select option
	function _select(e) {
		e.preventDefault();
		e.stopPropagation();
		
		var $target = $(this),
		data = e.data;
		
		if (!data.$selectEl.is(":disabled")) {
			if (data.links) {
				// Open link
				if (isMobile) {
					_launch($target.val(), data.externalLinks);
				} else {
					_launch($target.attr("href"), data.externalLinks);
				}
			} else {
				if (data.$itemsWrapper.is(":visible")) {
					// Update 
					var index = data.$items.index($target);
					_update(index, data, false);
				}
			}
			
			if (!data.multiple) {
				// Clean up
				_close(e);
			}
		}
	}
	
	// Handle outside changes
	function _change(e, internal) {
		if (!internal) {
			var $target = $(this),
				data = e.data;
			
			// Mobile link support
			if (data.links) {
				if (isMobile) {
					_launch($target.val(), data.externalLinks);
				} else {
					_launch($target.attr("href"), data.externalLinks);
				}
			} else {
				// Otherwise update
				var index = data.$optionEls.index(data.$optionEls.filter("[value=" + $target.val() + "]"));
				_update(index, data, false);
			}
		}
	}
	
	// Handle focus
	function _focus(e) {
		e.preventDefault();
		e.stopPropagation();
		
		var data = e.data;
		
		if (!data.$selectEl.is(":disabled") && !data.multiple) {
			data.$selecter.addClass("focus");
			$(".selecter").not(data.$selecter).trigger("selecter-close", [data]);
			$("body").on("keydown.selecter-" + data.guid, data, _keypress);
		}
	}
	
	// Handle blur
	function _blur(e) {
		e.preventDefault();
		e.stopPropagation();

		var data = e.data;
		data.$selecter.removeClass("focus");
		$(".selecter").not(data.$selecter).trigger("selecter-close", [data]);
		$("body").off(".selecter-" + data.guid);
	}
	
	// Handle keydown on focus
	function _keypress(e) {
		var data = e.data;
		
		if (data.$selecter.hasClass("open") && e.keyCode == 13) {
			_update(data.index, data, false);
			_close(e);
		} else if (e.keyCode != 9 && (!e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey)) {
			// Ignore modifiers & tabs
			e.preventDefault();
			e.stopPropagation();
			
			var total = data.$items.length - 1,
				index = -1;
			
			// Firefox left/right support thanks to Kylemade
			if ($.inArray(e.keyCode, (isFirefox) ? [38, 40, 37, 39] : [38, 40]) > -1) {
				// Increment / decrement using the arrow keys
				index = data.index + ((e.keyCode == 38 || (isFirefox && e.keyCode == 37)) ? -1 : 1);
				if (index < 0) {
					index = 0;
				}
				if (index > total) {
					index = total;
				}
			} else {
				var input = String.fromCharCode(e.keyCode).toUpperCase();
				
				// Search for input from original index
				for (i = data.index + 1; i <= total; i++) {
					var letter = data.$optionEls.eq(i).text().charAt(0).toUpperCase();
					if (letter == input) {
						index = i;
						break;
					}
				}
				
				// If not, start from the beginning
				if (index < 0) {
					for (i = 0; i <= total; i++) {
						var letter = data.$optionEls.eq(i).text().charAt(0).toUpperCase();
						if (letter == input) {
							index = i;
							break;
						}
					}
				}
			}
			
			// Update
			if (index >= 0) {
				_update(index, data, !data.$selecter.hasClass("open"));
			}
		}
	}
	
	// Update element value + DOM
	function _update(index, data, keypress) {
		var $item = data.$items.eq(index),
			isSelected = $item.hasClass("selected");
		
		// Make sure we have a new index to prevent false 'change' triggers
		if (!isSelected) {
			var newLabel = $item.html(),
				newValue = $item.data("value");
			
			// Modify DOM
			if (data.multiple) {
				data.$optionEls.eq(index).prop("selected", true);
			} else {
				data.$selected.html(newLabel);
				data.$items.filter(".selected").removeClass("selected");
				if (!keypress/*  || (keypress && !isFirefox) */) {
					data.$selectEl[0].selectedIndex = index;
				}
			}
			data.$selectEl.trigger("change", [ true ]);
			$item.addClass("selected");
		} else if (data.multiple) {
			data.$optionEls.eq(index).prop("selected", null);
			$item.removeClass("selected");
		}
		
		if (!isSelected || data.multiple) {
			// Fire callback
			data.callback.call(data.$selecter, data.$selectEl.val(), index);
			data.index = index;
		}
	}
	
	// Check label's length
	function _checkLength(length, text) {
		if (length === false) {
			return text;
		} else {
			if (text.length > length) {
				return text.substring(0, length) + "...";
			} else {
				return text;
			}
		}
	}
	
	// Launch link
	function _launch(link, external) {
		if (external) { 
			// Open link in a new tab/window
			window.open(link);
		} else { 
			// Open link in same tab/window
			window.location.href = link; 
		}
	}
	
	// Define Plugin
	$.fn.selecter = function(method) {
		if (pub[method]) {
			return pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return _init.apply(this, arguments);
		}
		return this;
	};
})(jQuery);

/*
 * Scroller Plugin [Formstone Library]
 * @author Ben Plum
 * @version 0.6.3
 *
 * Copyright © 2013 Ben Plum <mr@benplum.com>
 * Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

if (jQuery) (function($) {
	
	var options = {
		customClass: "",
		trackMargin: 0,
		handleSize: false,
		horizontal: false
	};
	
	var pub = {
		
		defaults: function(opts) {
			options = $.extend(options, opts || {});
			return $(this);
		},
		
		destroy: function() {
			return $(this).each(function(i) {
				var data = $(this).data("scroller");
				if (data) {
					data.$scroller.removeClass(data.customClass)
								  .removeClass("scroller")
								  .removeClass("scroller-active");
					data.$content.replaceWith(data.$content.html());
					data.$bar.remove();
					
					data.$content.off(".scroller");
					data.$scroller.off(".scroller")
								  .removeData("scroller");
				}
			});
		},
		
		scroll: function(pos) {
			var data = $(this).data("scroller");
			
			if (typeof pos != "number") {
				var $el = $(pos);
				if ($el.length > 0) {
					var offset = $el.position();
					if (data.horizontal == true) {
						pos = offset.left + data.$content.scrollLeft();
					} else {
						pos = offset.top + data.$content.scrollTop();
					}
				} else {
					pos = data.$content.scrollTop();
				}
			}
			
			if (data.horizontal == true) {
				//data.$content.scrollLeft(pos);
				data.$content.animate({ scrollLeft: pos });
			} else {
				//data.$content.scrollTop(pos);
				data.$content.animate({ scrollTop: pos });
			}
			
			return $(this);
		},
		
		reset: function(_data)  {
			return $(this).each(function(i) {
				var data = _data || $(this).data("scroller");
				
				if (typeof data != "undefined") {
					data.$scroller.addClass("scroller-setup");
					
					if (data.horizontal == true) {
						// Horizontal
						data.barHeight = data.$content[0].offsetHeight - data.$content[0].clientHeight;
						data.frameWidth = data.$content.outerWidth();
						data.trackWidth = data.frameWidth - (data.trackMargin * 2);
						data.scrollWidth = data.$content[0].scrollWidth;
						data.ratio = data.trackWidth / data.scrollWidth;
						data.trackRatio = data.trackWidth / data.scrollWidth;
						data.handleWidth = (data.handleSize) ? data.handleSize : data.trackWidth * data.trackRatio;
						data.scrollRatio = (data.scrollWidth - data.frameWidth) / (data.trackWidth - data.handleWidth);
						data.handleBounds = {
							left: 0,
							right: data.trackWidth - data.handleWidth
						};
						
						data.$scroller.data("scroller", data);
						data.$content.css({ paddingBottom: data.barHeight + data.paddingBottom });
						
						var scrollLeft = data.$content.scrollLeft();
						var handleLeft = scrollLeft * data.ratio;
						
						if (data.scrollWidth <= data.frameWidth) {
							data.$scroller.removeClass("scroller-active");
						} else {
							data.$scroller.addClass("scroller-active");
						}
						
						data.$bar.css({ width: data.frameWidth });
						data.$track.css({ width: data.trackWidth, marginLeft: data.trackMargin, marginRight: data.trackMargin });
						data.$handle.css({ width: data.handleWidth });
						_position.apply(data.$scroller, [data, handleTop]);
					} else {
						// Vertical
						data.barWidth = data.$content[0].offsetWidth - data.$content[0].clientWidth;
						data.frameHeight = data.$content.outerHeight();
						data.trackHeight = data.frameHeight - (data.trackMargin * 2);
						data.scrollHeight = data.$content[0].scrollHeight;
						data.ratio = data.trackHeight / data.scrollHeight;
						data.trackRatio = data.trackHeight / data.scrollHeight;
						data.handleHeight = (data.handleSize) ? data.handleSize : data.trackHeight * data.trackRatio;
						data.scrollRatio = (data.scrollHeight - data.frameHeight) / (data.trackHeight - data.handleHeight);
						data.handleBounds = {
							top: 0,
							bottom: data.trackHeight - data.handleHeight
						};
						
						data.$scroller.data("scroller", data);
						
						var scrollTop = data.$content.scrollTop();
						var handleTop = scrollTop * data.ratio;
						
						if (data.scrollHeight <= data.frameHeight) {
							data.$scroller.removeClass("scroller-active");
						} else {
							data.$scroller.addClass("scroller-active");
						}
						
						data.$bar.css({ height: data.frameHeight });
						data.$track.css({ height: data.trackHeight, marginBottom: data.trackMargin, marginTop: data.trackMargin });
						data.$handle.css({ height: data.handleHeight });
						_position.apply(data.$scroller, [data, handleTop]);
					}
					
					data.$scroller.removeClass("scroller-setup");
				}
			});
		}
	}
	
	function _init(opts) {
		// Local options
		opts = $.extend({}, options, opts || {});
		
		// Apply to each element
		var $items = $(this);
		for (var i = 0, count = $items.length; i < count; i++) {
			_build($items.eq(i), opts);
		}
		return $items;
	}
	
	// Build
	function _build($scroller, opts) {
		if (!$scroller.data("scroller")) {
			// EXTEND OPTIONS
			$.extend(opts, $scroller.data("scroller-options"));
			
			var html = '<div class="scroller-bar">';
			html += '<div class="scroller-track">';
			html += '<div class="scroller-handle">';
			html += '</div></div></div>';
			
			opts.paddingRight = parseInt($scroller.css("padding-right"), 10);
			opts.paddingBottom = parseInt($scroller.css("padding-bottom"), 10);
			
			$scroller.addClass(opts.customClass + " scroller")
					 .wrapInner('<div class="scroller-content" />')
					 .prepend(html);
			
			if (opts.horizontal) {
				$scroller.addClass("scroller-horizontal");
			}
			
			opts = $.extend({
				$scroller: $scroller,
				$content: $scroller.find(".scroller-content"),
				$bar: $scroller.find(".scroller-bar"),
				$track: $scroller.find(".scroller-track"),
				$handle: $scroller.find(".scroller-handle")
			}, opts);
			
			opts.$content.on("scroll.scroller", opts, _onScroll);
			opts.$scroller.on("mousedown.scroller", ".scroller-track", opts, _onTrackDown)
						   .on("mousedown.scroller", ".scroller-handle", opts, _onHandleDown)
						   .data("scroller", opts);
			
			pub.reset.apply($scroller, [opts]);
			$(window).one("load", function() {
				pub.reset.apply($scroller, [opts]);
			});
		}
	}
	
	function _onScroll(e) {
		e.preventDefault();
		e.stopPropagation();
		
		var data = e.data;
		
		if (data.horizontal == true) {
			// Horizontal
			var scrollLeft = data.$content.scrollLeft();
			if (scrollLeft < 0) {
				scrollLeft = 0;
			}
			
			var handleLeft = scrollLeft / data.scrollRatio;
			if (handleLeft > data.handleBounds.right) {
				handleLeft = data.handleBounds.right;
			}
			
			data.$handle.css({ left: handleLeft });
		} else {
			// Vertical
			var scrollTop = data.$content.scrollTop();
			if (scrollTop < 0) {
				scrollTop = 0;
			}
			
			var handleTop = scrollTop / data.scrollRatio;
			if (handleTop > data.handleBounds.bottom) {
				handleTop = data.handleBounds.bottom;
			}
			
			data.$handle.css({ top: handleTop });
		}
	}
	
	function _onTrackDown(e) {
		e.preventDefault();
		e.stopPropagation();
		
		var data = e.data;
		var offset = data.$track.offset();
		
		if (data.horizontal == true) {
			// Horizontal
			data.mouseStart = e.pageX;
			data.handleLeft = e.pageX - offset.left - (data.handleWidth / 2);
			_position.apply(data.$scroller, [data, data.handleLeft]);
		} else {
			// Vertical
			data.mouseStart = e.pageY;
			data.handleTop = e.pageY - offset.top - (data.handleHeight / 2);
			_position.apply(data.$scroller, [data, data.handleTop]);
		}
		
		data.$scroller.data("scroller", data);
		data.$content.off(".scroller");
		$("body").on("mousemove.scroller", data, _onMouseMove)
				 .on("mouseup.scroller", data, _onMouseUp);
	}
	
	function _onHandleDown(e) {
		e.preventDefault();
		e.stopPropagation();
		
		var data = e.data;

		if (data.horizontal == true) {
			// Horizontal
			data.mouseStart = e.pageX;
			data.handleLeft = parseInt(data.$handle.css("left"), 10);
		} else {
			// Vertical
			data.mouseStart = e.pageY;
			data.handleTop = parseInt(data.$handle.css("top"), 10);
		}
		
		data.$scroller.data("scroller", data);
		data.$content.off(".scroller");
		$("body").on("mousemove.scroller", data, _onMouseMove)
				 .on("mouseup.scroller", data, _onMouseUp);
	}
	
	function _onMouseMove(e) {
		e.preventDefault();
		e.stopPropagation();
		
		var data = e.data;
		var pos = 0;
		
		if (data.horizontal == true) {
			// Horizontal
			var delta = data.mouseStart - e.pageX;
			pos = data.handleLeft - delta;
		} else {
			// Vertical
			var delta = data.mouseStart - e.pageY;
			pos = data.handleTop - delta;
		}
		
		_position.apply(data.$scroller, [data, pos]);
	}
	
	function _onMouseUp(e) {
		e.preventDefault();
		e.stopPropagation();
		
		var data = e.data;
		
		data.$content.on("scroll.scroller", data, _onScroll);
		$("body").off(".scroller");
	}
	
	function _position(data, pos) {
		if (data.horizontal == true) {
			// Horizontal
			if (pos < data.handleBounds.left) {
				pos = data.handleBounds.left;
			}
			if (pos > data.handleBounds.right) {
				pos = data.handleBounds.right;
			}
			
			var scrollLeft = Math.round(pos * data.scrollRatio);
			
			data.$handle.css({ left: pos });
			data.$content.scrollLeft( scrollLeft );
		} else {
			// Vertical
			if (pos < data.handleBounds.top) {
				pos = data.handleBounds.top;
			}
			if (pos > data.handleBounds.bottom) {
				pos = data.handleBounds.bottom;
			}
			
			var scrollTop = Math.round(pos * data.scrollRatio);
			
			data.$handle.css({ top: pos });
			data.$content.scrollTop( scrollTop );
		}
	}
	
	// Define Plugin
	$.fn.scroller = function(method) {
		if (pub[method]) {
			return pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return _init.apply(this, arguments);
		}
		return this;
	};
})(jQuery);	
(function(d) {
	var b, a, c;
	a = typeof window !== "undefined" && window !== null ? window : global;
	c = "ontouchstart" in a;
	a.BarRating = b = (function() {
		function e() {
			this.show = function() {
				var i = d(this.elem), j = this.options, k, h, g, f = c ? "touchstart" : "click";
				if (!i.data("barrating")) {
					i.data("barrating", {currentRatingValue: i.val(), currentRatingText: d("option:selected", i).text()});
					k = d("<div />", {"class": "bar-rating"}).insertAfter(this.elem);
					i.data("barrating").deselectable = (!i.find("option:first").val()) ? true : false;
					i.find("option").each(function() {
						var o, n, m, l;
						o = d(this).val();
						if (o) {
							n = d(this).text();
							m = d("<a />", {href: "#", "data-rating-value": o, "data-rating-text": n});
							l = d("<span />", {text: (j.showValues) ? n : ""});
							k.append(m.append(l))
						}
					});
					if (j.showSelectedRating) {
						k.append(d("<div />", {text: "", "class": "current-rating"}));
						k.find(".current-rating").on("ratingchange", function(l, m) {
							m = m ? m : i.data("barrating").currentRatingText;
							d(this).text(m)
						}).trigger("ratingchange")
					}
					g = function() {
						if (i.data("barrating").currentRatingValue !== undefined) {
							k.find('a[data-rating-value="' + i.data("barrating").currentRatingValue + '"]').addClass("selected current").prevAll().addClass("selected")
						}
					};
					g();
					h = k.find("a");
					if (c) {
						h.on("click", function(l) {
							l.preventDefault()
						})
					}
					h.on(f, function(l) {
						var n = d(this), m, o;
						l.preventDefault();
						h.removeClass("active selected");
						n.addClass("selected").prevAll().addClass("selected");
						m = n.attr("data-rating-value");
						o = n.attr("data-rating-text");
						if (n.hasClass("current") && i.data("barrating").deselectable) {
							n.removeClass("selected current").prevAll().removeClass("selected current");
							m = "", o = ""
						} else {
							h.removeClass("current");
							n.addClass("current")
						}
						i.data("barrating").currentRatingValue = m;
						i.data("barrating").currentRatingText = o;
						//i.find("option").attr("selected", false);
						i.find("option").prop('selected', false);
						//i.find('option[value="' + m + '"]').attr("selected", true);
						i.find('option[value="' + m + '"]').prop('selected', true);
						k.find(".current-rating").trigger("ratingchange");
						j.onSelect.call(this, i.data("barrating").currentRatingValue, i.data("barrating").currentRatingText);
						return false
					});
					if (!c) {
						h.on({mouseenter: function() {
								var l = d(this);
								h.removeClass("active").removeClass("selected");
								l.addClass("active").prevAll().addClass("active");
								if (j.showSelectedRating) {
									k.find(".current-rating").trigger("ratingchange", [l.attr("data-rating-text")])
								}
							}});
						k.on({mouseleave: function() {
								h.removeClass("active");
								if (j.showSelectedRating) {
									k.find(".current-rating").trigger("ratingchange")
								}
								g()
							}})
					}
					i.hide()
				}
			};
			this.destroy = function() {
				var f = d(this.elem);
				f.removeData("barrating");
				d(".bar-rating, .bar-rating a").off().remove();
				f.show()
			}
		}
		e.prototype.init = function(g, h) {
			var f;
			f = this;
			f.elem = h;
			return f.options = d.extend({}, d.fn.barrating.defaults, g)
		};
		return e
	})();
	d.fn.barrating = function(f, e) {
		return this.each(function() {
			var g = new b();
			if (!d(this).is("select")) {
				d.error("Sorry, this plugin only works with select fields.")
			}
			if (g.hasOwnProperty(f)) {
				g.init(e, this);
				return g[f]()
			} else {
				if (typeof f === "object" || !f) {
					e = f;
					g.init(e, this);
					return g.show()
				} else {
					d.error("Method " + f + " does not exist on jQuery.barrating")
				}
			}
		})
	};
	return d.fn.barrating.defaults = {showValues: false, showSelectedRating: true, onSelect: function(e, f) {
		}}
})(jQuery);
/**
 * BxSlider v4.1.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2012, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:v()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).is("img")&&t(this).attr("src",t(this).attr("src")+"?timestamp="+(new Date).getTime()),t(this).load(function(){setTimeout(function(){++n==s&&i()},0)})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(p()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",B),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&I(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},p=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},v=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.delegate("a","click",q)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",k),o.controls.autoEl.delegate(".bx-stop","click",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},q=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},I=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),"horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},B=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider())};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&I(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){t(this).css("zIndex",50),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",p()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),I(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",B))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);
(function(c){var b={init:function(e){var f={set_width:false,set_height:false,horizontalScroll:false,scrollInertia:950,mouseWheel:true,mouseWheelPixels:"auto",autoDraggerLength:true,autoHideScrollbar:false,snapAmount:null,snapOffset:0,scrollButtons:{enable:false,scrollType:"continuous",scrollSpeed:"auto",scrollAmount:40},advanced:{updateOnBrowserResize:true,updateOnContentResize:false,autoExpandHorizontalScroll:false,autoScrollOnFocus:true,normalizeMouseWheelDelta:false},contentTouchScroll:true,callbacks:{onScrollStart:function(){},onScroll:function(){},onTotalScroll:function(){},onTotalScrollBack:function(){},onTotalScrollOffset:0,onTotalScrollBackOffset:0,whileScrolling:function(){}},theme:"light"},e=c.extend(true,f,e);return this.each(function(){var m=c(this);if(e.set_width){m.css("width",e.set_width)}if(e.set_height){m.css("height",e.set_height)}if(!c(document).data("mCustomScrollbar-index")){c(document).data("mCustomScrollbar-index","1")}else{var t=parseInt(c(document).data("mCustomScrollbar-index"));c(document).data("mCustomScrollbar-index",t+1)}m.wrapInner("<div class='mCustomScrollBox mCS-"+e.theme+"' id='mCSB_"+c(document).data("mCustomScrollbar-index")+"' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_"+c(document).data("mCustomScrollbar-index"));var g=m.children(".mCustomScrollBox");if(e.horizontalScroll){g.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");var k=g.children(".mCSB_h_wrapper");k.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({width:k.children().outerWidth(),position:"relative"}).unwrap()}else{g.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")}var o=g.children(".mCSB_container");if(c.support.touch){o.addClass("mCS_touch")}o.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");var l=g.children(".mCSB_scrollTools"),h=l.children(".mCSB_draggerContainer"),q=h.children(".mCSB_dragger");if(e.horizontalScroll){q.data("minDraggerWidth",q.width())}else{q.data("minDraggerHeight",q.height())}if(e.scrollButtons.enable){if(e.horizontalScroll){l.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>")}else{l.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>")}}g.bind("scroll",function(){if(!m.is(".mCS_disabled")){g.scrollTop(0).scrollLeft(0)}});m.data({mCS_Init:true,mCustomScrollbarIndex:c(document).data("mCustomScrollbar-index"),horizontalScroll:e.horizontalScroll,scrollInertia:e.scrollInertia,scrollEasing:"mcsEaseOut",mouseWheel:e.mouseWheel,mouseWheelPixels:e.mouseWheelPixels,autoDraggerLength:e.autoDraggerLength,autoHideScrollbar:e.autoHideScrollbar,snapAmount:e.snapAmount,snapOffset:e.snapOffset,scrollButtons_enable:e.scrollButtons.enable,scrollButtons_scrollType:e.scrollButtons.scrollType,scrollButtons_scrollSpeed:e.scrollButtons.scrollSpeed,scrollButtons_scrollAmount:e.scrollButtons.scrollAmount,autoExpandHorizontalScroll:e.advanced.autoExpandHorizontalScroll,autoScrollOnFocus:e.advanced.autoScrollOnFocus,normalizeMouseWheelDelta:e.advanced.normalizeMouseWheelDelta,contentTouchScroll:e.contentTouchScroll,onScrollStart_Callback:e.callbacks.onScrollStart,onScroll_Callback:e.callbacks.onScroll,onTotalScroll_Callback:e.callbacks.onTotalScroll,onTotalScrollBack_Callback:e.callbacks.onTotalScrollBack,onTotalScroll_Offset:e.callbacks.onTotalScrollOffset,onTotalScrollBack_Offset:e.callbacks.onTotalScrollBackOffset,whileScrolling_Callback:e.callbacks.whileScrolling,bindEvent_scrollbar_drag:false,bindEvent_content_touch:false,bindEvent_scrollbar_click:false,bindEvent_mousewheel:false,bindEvent_buttonsContinuous_y:false,bindEvent_buttonsContinuous_x:false,bindEvent_buttonsPixels_y:false,bindEvent_buttonsPixels_x:false,bindEvent_focusin:false,bindEvent_autoHideScrollbar:false,mCSB_buttonScrollRight:false,mCSB_buttonScrollLeft:false,mCSB_buttonScrollDown:false,mCSB_buttonScrollUp:false});if(e.horizontalScroll){if(m.css("max-width")!=="none"){if(!e.advanced.updateOnContentResize){e.advanced.updateOnContentResize=true}}}else{if(m.css("max-height")!=="none"){var s=false,r=parseInt(m.css("max-height"));if(m.css("max-height").indexOf("%")>=0){s=r,r=m.parent().height()*s/100}m.css("overflow","hidden");g.css("max-height",r)}}m.mCustomScrollbar("update");if(e.advanced.updateOnBrowserResize){var i,j=c(window).width(),u=c(window).height();c(window).bind("resize."+m.data("mCustomScrollbarIndex"),function(){if(i){clearTimeout(i)}i=setTimeout(function(){if(!m.is(".mCS_disabled")&&!m.is(".mCS_destroyed")){var w=c(window).width(),v=c(window).height();if(j!==w||u!==v){if(m.css("max-height")!=="none"&&s){g.css("max-height",m.parent().height()*s/100)}m.mCustomScrollbar("update");j=w;u=v}}},150)})}if(e.advanced.updateOnContentResize){var p;if(e.horizontalScroll){var n=o.outerWidth()}else{var n=o.outerHeight()}p=setInterval(function(){if(e.horizontalScroll){if(e.advanced.autoExpandHorizontalScroll){o.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:o.outerWidth(),position:"relative"}).unwrap()}var v=o.outerWidth()}else{var v=o.outerHeight()}if(v!=n){m.mCustomScrollbar("update");n=v}},300)}})},update:function(){var n=c(this),k=n.children(".mCustomScrollBox"),q=k.children(".mCSB_container");q.removeClass("mCS_no_scrollbar");n.removeClass("mCS_disabled mCS_destroyed");k.scrollTop(0).scrollLeft(0);var y=k.children(".mCSB_scrollTools"),o=y.children(".mCSB_draggerContainer"),m=o.children(".mCSB_dragger");if(n.data("horizontalScroll")){var A=y.children(".mCSB_buttonLeft"),t=y.children(".mCSB_buttonRight"),f=k.width();if(n.data("autoExpandHorizontalScroll")){q.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:q.outerWidth(),position:"relative"}).unwrap()}var z=q.outerWidth()}else{var w=y.children(".mCSB_buttonUp"),g=y.children(".mCSB_buttonDown"),r=k.height(),i=q.outerHeight()}if(i>r&&!n.data("horizontalScroll")){y.css("display","block");var s=o.height();if(n.data("autoDraggerLength")){var u=Math.round(r/i*s),l=m.data("minDraggerHeight");if(u<=l){m.css({height:l})}else{if(u>=s-10){var p=s-10;m.css({height:p})}else{m.css({height:u})}}m.children(".mCSB_dragger_bar").css({"line-height":m.height()+"px"})}var B=m.height(),x=(i-r)/(s-B);n.data("scrollAmount",x).mCustomScrollbar("scrolling",k,q,o,m,w,g,A,t);var D=Math.abs(q.position().top);n.mCustomScrollbar("scrollTo",D,{scrollInertia:0,trigger:"internal"})}else{if(z>f&&n.data("horizontalScroll")){y.css("display","block");var h=o.width();if(n.data("autoDraggerLength")){var j=Math.round(f/z*h),C=m.data("minDraggerWidth");if(j<=C){m.css({width:C})}else{if(j>=h-10){var e=h-10;m.css({width:e})}else{m.css({width:j})}}}var v=m.width(),x=(z-f)/(h-v);n.data("scrollAmount",x).mCustomScrollbar("scrolling",k,q,o,m,w,g,A,t);var D=Math.abs(q.position().left);n.mCustomScrollbar("scrollTo",D,{scrollInertia:0,trigger:"internal"})}else{k.unbind("mousewheel focusin");if(n.data("horizontalScroll")){m.add(q).css("left",0)}else{m.add(q).css("top",0)}y.css("display","none");q.addClass("mCS_no_scrollbar");n.data({bindEvent_mousewheel:false,bindEvent_focusin:false})}}},scrolling:function(h,p,m,j,w,e,A,v){var k=c(this);if(!k.data("bindEvent_scrollbar_drag")){var n,o;if(c.support.msPointer){j.bind("MSPointerDown",function(H){H.preventDefault();k.data({on_drag:true});j.addClass("mCSB_dragger_onDrag");var G=c(this),J=G.offset(),F=H.originalEvent.pageX-J.left,I=H.originalEvent.pageY-J.top;if(F<G.width()&&F>0&&I<G.height()&&I>0){n=I;o=F}});c(document).bind("MSPointerMove."+k.data("mCustomScrollbarIndex"),function(H){H.preventDefault();if(k.data("on_drag")){var G=j,J=G.offset(),F=H.originalEvent.pageX-J.left,I=H.originalEvent.pageY-J.top;D(n,o,I,F)}}).bind("MSPointerUp."+k.data("mCustomScrollbarIndex"),function(x){k.data({on_drag:false});j.removeClass("mCSB_dragger_onDrag")})}else{j.bind("mousedown touchstart",function(H){H.preventDefault();H.stopImmediatePropagation();var G=c(this),K=G.offset(),F,J;if(H.type==="touchstart"){var I=H.originalEvent.touches[0]||H.originalEvent.changedTouches[0];F=I.pageX-K.left;J=I.pageY-K.top}else{k.data({on_drag:true});j.addClass("mCSB_dragger_onDrag");F=H.pageX-K.left;J=H.pageY-K.top}if(F<G.width()&&F>0&&J<G.height()&&J>0){n=J;o=F}}).bind("touchmove",function(H){H.preventDefault();H.stopImmediatePropagation();var K=H.originalEvent.touches[0]||H.originalEvent.changedTouches[0],G=c(this),J=G.offset(),F=K.pageX-J.left,I=K.pageY-J.top;D(n,o,I,F)});c(document).bind("mousemove."+k.data("mCustomScrollbarIndex"),function(H){if(k.data("on_drag")){var G=j,J=G.offset(),F=H.pageX-J.left,I=H.pageY-J.top;D(n,o,I,F)}}).bind("mouseup."+k.data("mCustomScrollbarIndex"),function(x){k.data({on_drag:false});j.removeClass("mCSB_dragger_onDrag")})}k.data({bindEvent_scrollbar_drag:true})}function D(G,H,I,F){if(k.data("horizontalScroll")){k.mCustomScrollbar("scrollTo",(j.position().left-(H))+F,{moveDragger:true,trigger:"internal"})}else{k.mCustomScrollbar("scrollTo",(j.position().top-(G))+I,{moveDragger:true,trigger:"internal"})}}if(c.support.touch&&k.data("contentTouchScroll")){if(!k.data("bindEvent_content_touch")){var l,B,r,s,u,C,E;p.bind("touchstart",function(x){x.stopImmediatePropagation();l=x.originalEvent.touches[0]||x.originalEvent.changedTouches[0];B=c(this);r=B.offset();u=l.pageX-r.left;s=l.pageY-r.top;C=s;E=u});p.bind("touchmove",function(x){x.preventDefault();x.stopImmediatePropagation();l=x.originalEvent.touches[0]||x.originalEvent.changedTouches[0];B=c(this).parent();r=B.offset();u=l.pageX-r.left;s=l.pageY-r.top;if(k.data("horizontalScroll")){k.mCustomScrollbar("scrollTo",E-u,{trigger:"internal"})}else{k.mCustomScrollbar("scrollTo",C-s,{trigger:"internal"})}})}}if(!k.data("bindEvent_scrollbar_click")){m.bind("click",function(F){var x=(F.pageY-m.offset().top)*k.data("scrollAmount"),y=c(F.target);if(k.data("horizontalScroll")){x=(F.pageX-m.offset().left)*k.data("scrollAmount")}if(y.hasClass("mCSB_draggerContainer")||y.hasClass("mCSB_draggerRail")){k.mCustomScrollbar("scrollTo",x,{trigger:"internal",scrollEasing:"draggerRailEase"})}});k.data({bindEvent_scrollbar_click:true})}if(k.data("mouseWheel")){if(!k.data("bindEvent_mousewheel")){h.bind("mousewheel",function(H,J){var G,F=k.data("mouseWheelPixels"),x=Math.abs(p.position().top),I=j.position().top,y=m.height()-j.height();if(k.data("normalizeMouseWheelDelta")){if(J<0){J=-1}else{J=1}}if(F==="auto"){F=100+Math.round(k.data("scrollAmount")/2)}if(k.data("horizontalScroll")){I=j.position().left;y=m.width()-j.width();x=Math.abs(p.position().left)}if((J>0&&I!==0)||(J<0&&I!==y)){H.preventDefault();H.stopImmediatePropagation()}G=x-(J*F);k.mCustomScrollbar("scrollTo",G,{trigger:"internal"})});k.data({bindEvent_mousewheel:true})}}if(k.data("scrollButtons_enable")){if(k.data("scrollButtons_scrollType")==="pixels"){if(k.data("horizontalScroll")){v.add(A).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend",i,g);k.data({bindEvent_buttonsContinuous_x:false});if(!k.data("bindEvent_buttonsPixels_x")){v.bind("click",function(x){x.preventDefault();q(Math.abs(p.position().left)+k.data("scrollButtons_scrollAmount"))});A.bind("click",function(x){x.preventDefault();q(Math.abs(p.position().left)-k.data("scrollButtons_scrollAmount"))});k.data({bindEvent_buttonsPixels_x:true})}}else{e.add(w).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend",i,g);k.data({bindEvent_buttonsContinuous_y:false});if(!k.data("bindEvent_buttonsPixels_y")){e.bind("click",function(x){x.preventDefault();q(Math.abs(p.position().top)+k.data("scrollButtons_scrollAmount"))});w.bind("click",function(x){x.preventDefault();q(Math.abs(p.position().top)-k.data("scrollButtons_scrollAmount"))});k.data({bindEvent_buttonsPixels_y:true})}}function q(x){if(!j.data("preventAction")){j.data("preventAction",true);k.mCustomScrollbar("scrollTo",x,{trigger:"internal"})}}}else{if(k.data("horizontalScroll")){v.add(A).unbind("click");k.data({bindEvent_buttonsPixels_x:false});if(!k.data("bindEvent_buttonsContinuous_x")){v.bind("mousedown touchstart MSPointerDown",function(y){y.preventDefault();var x=z();k.data({mCSB_buttonScrollRight:setInterval(function(){k.mCustomScrollbar("scrollTo",Math.abs(p.position().left)+x,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var i=function(x){x.preventDefault();clearInterval(k.data("mCSB_buttonScrollRight"))};v.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",i);A.bind("mousedown touchstart MSPointerDown",function(y){y.preventDefault();var x=z();k.data({mCSB_buttonScrollLeft:setInterval(function(){k.mCustomScrollbar("scrollTo",Math.abs(p.position().left)-x,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var g=function(x){x.preventDefault();clearInterval(k.data("mCSB_buttonScrollLeft"))};A.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",g);k.data({bindEvent_buttonsContinuous_x:true})}}else{e.add(w).unbind("click");k.data({bindEvent_buttonsPixels_y:false});if(!k.data("bindEvent_buttonsContinuous_y")){e.bind("mousedown touchstart MSPointerDown",function(y){y.preventDefault();var x=z();k.data({mCSB_buttonScrollDown:setInterval(function(){k.mCustomScrollbar("scrollTo",Math.abs(p.position().top)+x,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var t=function(x){x.preventDefault();clearInterval(k.data("mCSB_buttonScrollDown"))};e.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",t);w.bind("mousedown touchstart MSPointerDown",function(y){y.preventDefault();var x=z();k.data({mCSB_buttonScrollUp:setInterval(function(){k.mCustomScrollbar("scrollTo",Math.abs(p.position().top)-x,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var f=function(x){x.preventDefault();clearInterval(k.data("mCSB_buttonScrollUp"))};w.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",f);k.data({bindEvent_buttonsContinuous_y:true})}}function z(){var x=k.data("scrollButtons_scrollSpeed");if(k.data("scrollButtons_scrollSpeed")==="auto"){x=Math.round((k.data("scrollInertia")+100)/40)}return x}}}if(k.data("autoScrollOnFocus")){if(!k.data("bindEvent_focusin")){h.bind("focusin",function(){h.scrollTop(0).scrollLeft(0);var x=c(document.activeElement);if(x.is("input,textarea,select,button,a[tabindex],area,object")){var G=p.position().top,y=x.position().top,F=h.height()-x.outerHeight();if(k.data("horizontalScroll")){G=p.position().left;y=x.position().left;F=h.width()-x.outerWidth()}if(G+y<0||G+y>F){k.mCustomScrollbar("scrollTo",y,{trigger:"internal"})}}});k.data({bindEvent_focusin:true})}}if(k.data("autoHideScrollbar")){if(!k.data("bindEvent_autoHideScrollbar")){h.bind("mouseenter",function(x){h.addClass("mCS-mouse-over");d.showScrollbar.call(h.children(".mCSB_scrollTools"))}).bind("mouseleave touchend",function(x){h.removeClass("mCS-mouse-over");if(x.type==="mouseleave"){d.hideScrollbar.call(h.children(".mCSB_scrollTools"))}});k.data({bindEvent_autoHideScrollbar:true})}}},scrollTo:function(e,f){var i=c(this),o={moveDragger:false,trigger:"external",callbacks:true,scrollInertia:i.data("scrollInertia"),scrollEasing:i.data("scrollEasing")},f=c.extend(o,f),p,g=i.children(".mCustomScrollBox"),k=g.children(".mCSB_container"),r=g.children(".mCSB_scrollTools"),j=r.children(".mCSB_draggerContainer"),h=j.children(".mCSB_dragger"),t=draggerSpeed=f.scrollInertia,q,s,m,l;if(!k.hasClass("mCS_no_scrollbar")){i.data({mCS_trigger:f.trigger});if(i.data("mCS_Init")){f.callbacks=false}if(e||e===0){if(typeof(e)==="number"){if(f.moveDragger){p=e;if(i.data("horizontalScroll")){e=h.position().left*i.data("scrollAmount")}else{e=h.position().top*i.data("scrollAmount")}draggerSpeed=0}else{p=e/i.data("scrollAmount")}}else{if(typeof(e)==="string"){var v;if(e==="top"){v=0}else{if(e==="bottom"&&!i.data("horizontalScroll")){v=k.outerHeight()-g.height()}else{if(e==="left"){v=0}else{if(e==="right"&&i.data("horizontalScroll")){v=k.outerWidth()-g.width()}else{if(e==="first"){v=i.find(".mCSB_container").find(":first")}else{if(e==="last"){v=i.find(".mCSB_container").find(":last")}else{v=i.find(e)}}}}}}if(v.length===1){if(i.data("horizontalScroll")){e=v.position().left}else{e=v.position().top}p=e/i.data("scrollAmount")}else{p=e=v}}}if(i.data("horizontalScroll")){if(i.data("onTotalScrollBack_Offset")){s=-i.data("onTotalScrollBack_Offset")}if(i.data("onTotalScroll_Offset")){l=g.width()-k.outerWidth()+i.data("onTotalScroll_Offset")}if(p<0){p=e=0;clearInterval(i.data("mCSB_buttonScrollLeft"));if(!s){q=true}}else{if(p>=j.width()-h.width()){p=j.width()-h.width();e=g.width()-k.outerWidth();clearInterval(i.data("mCSB_buttonScrollRight"));if(!l){m=true}}else{e=-e}}var n=i.data("snapAmount");if(n){e=Math.round(e/n)*n-i.data("snapOffset")}d.mTweenAxis.call(this,h[0],"left",Math.round(p),draggerSpeed,f.scrollEasing);d.mTweenAxis.call(this,k[0],"left",Math.round(e),t,f.scrollEasing,{onStart:function(){if(f.callbacks&&!i.data("mCS_tweenRunning")){u("onScrollStart")}if(i.data("autoHideScrollbar")){d.showScrollbar.call(r)}},onUpdate:function(){if(f.callbacks){u("whileScrolling")}},onComplete:function(){if(f.callbacks){u("onScroll");if(q||(s&&k.position().left>=s)){u("onTotalScrollBack")}if(m||(l&&k.position().left<=l)){u("onTotalScroll")}}h.data("preventAction",false);i.data("mCS_tweenRunning",false);if(i.data("autoHideScrollbar")){if(!g.hasClass("mCS-mouse-over")){d.hideScrollbar.call(r)}}}})}else{if(i.data("onTotalScrollBack_Offset")){s=-i.data("onTotalScrollBack_Offset")}if(i.data("onTotalScroll_Offset")){l=g.height()-k.outerHeight()+i.data("onTotalScroll_Offset")}if(p<0){p=e=0;clearInterval(i.data("mCSB_buttonScrollUp"));if(!s){q=true}}else{if(p>=j.height()-h.height()){p=j.height()-h.height();e=g.height()-k.outerHeight();clearInterval(i.data("mCSB_buttonScrollDown"));if(!l){m=true}}else{e=-e}}var n=i.data("snapAmount");if(n){e=Math.round(e/n)*n-i.data("snapOffset")}d.mTweenAxis.call(this,h[0],"top",Math.round(p),draggerSpeed,f.scrollEasing);d.mTweenAxis.call(this,k[0],"top",Math.round(e),t,f.scrollEasing,{onStart:function(){if(f.callbacks&&!i.data("mCS_tweenRunning")){u("onScrollStart")}if(i.data("autoHideScrollbar")){d.showScrollbar.call(r)}},onUpdate:function(){if(f.callbacks){u("whileScrolling")}},onComplete:function(){if(f.callbacks){u("onScroll");if(q||(s&&k.position().top>=s)){u("onTotalScrollBack")}if(m||(l&&k.position().top<=l)){u("onTotalScroll")}}h.data("preventAction",false);i.data("mCS_tweenRunning",false);if(i.data("autoHideScrollbar")){if(!g.hasClass("mCS-mouse-over")){d.hideScrollbar.call(r)}}}})}if(i.data("mCS_Init")){i.data({mCS_Init:false})}}}function u(w){this.mcs={top:k.position().top,left:k.position().left,draggerTop:h.position().top,draggerLeft:h.position().left,topPct:Math.round((100*Math.abs(k.position().top))/Math.abs(k.outerHeight()-g.height())),leftPct:Math.round((100*Math.abs(k.position().left))/Math.abs(k.outerWidth()-g.width()))};switch(w){case"onScrollStart":i.data("mCS_tweenRunning",true).data("onScrollStart_Callback").call(i,this.mcs);break;case"whileScrolling":i.data("whileScrolling_Callback").call(i,this.mcs);break;case"onScroll":i.data("onScroll_Callback").call(i,this.mcs);break;case"onTotalScrollBack":i.data("onTotalScrollBack_Callback").call(i,this.mcs);break;case"onTotalScroll":i.data("onTotalScroll_Callback").call(i,this.mcs);break}}},stop:function(){var g=c(this),e=g.children().children(".mCSB_container"),f=g.children().children().children().children(".mCSB_dragger");d.mTweenAxisStop.call(this,e[0]);d.mTweenAxisStop.call(this,f[0])},disable:function(e){var j=c(this),f=j.children(".mCustomScrollBox"),h=f.children(".mCSB_container"),g=f.children(".mCSB_scrollTools"),i=g.children().children(".mCSB_dragger");f.unbind("mousewheel focusin mouseenter mouseleave touchend");h.unbind("touchstart touchmove");if(e){if(j.data("horizontalScroll")){i.add(h).css("left",0)}else{i.add(h).css("top",0)}}g.css("display","none");h.addClass("mCS_no_scrollbar");j.data({bindEvent_mousewheel:false,bindEvent_focusin:false,bindEvent_content_touch:false,bindEvent_autoHideScrollbar:false}).addClass("mCS_disabled")},destroy:function(){var e=c(this);e.removeClass("mCustomScrollbar _mCS_"+e.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();c(document).unbind("mousemove."+e.data("mCustomScrollbarIndex")+" mouseup."+e.data("mCustomScrollbarIndex")+" MSPointerMove."+e.data("mCustomScrollbarIndex")+" MSPointerUp."+e.data("mCustomScrollbarIndex"));c(window).unbind("resize."+e.data("mCustomScrollbarIndex"))}},d={showScrollbar:function(){this.stop().animate({opacity:1},"fast")},hideScrollbar:function(){this.stop().animate({opacity:0},"fast")},mTweenAxis:function(g,i,h,f,o,y){var y=y||{},v=y.onStart||function(){},p=y.onUpdate||function(){},w=y.onComplete||function(){};var n=t(),l,j=0,r=g.offsetTop,s=g.style;if(i==="left"){r=g.offsetLeft}var m=h-r;q();e();function t(){if(window.performance&&window.performance.now){return window.performance.now()}else{if(window.performance&&window.performance.webkitNow){return window.performance.webkitNow()}else{if(Date.now){return Date.now()}else{return new Date().getTime()}}}}function x(){if(!j){v.call()}j=t()-n;u();if(j>=g._time){g._time=(j>g._time)?j+l-(j-g._time):j+l-1;if(g._time<j+1){g._time=j+1}}if(g._time<f){g._id=_request(x)}else{w.call()}}function u(){if(f>0){g.currVal=k(g._time,r,m,f,o);s[i]=Math.round(g.currVal)+"px"}else{s[i]=h+"px"}p.call()}function e(){l=1000/60;g._time=j+l;_request=(!window.requestAnimationFrame)?function(z){u();return setTimeout(z,0.01)}:window.requestAnimationFrame;g._id=_request(x)}function q(){if(g._id==null){return}if(!window.requestAnimationFrame){clearTimeout(g._id)}else{window.cancelAnimationFrame(g._id)}g._id=null}function k(B,A,F,E,C){switch(C){case"linear":return F*B/E+A;break;case"easeOutQuad":B/=E;return -F*B*(B-2)+A;break;case"easeInOutQuad":B/=E/2;if(B<1){return F/2*B*B+A}B--;return -F/2*(B*(B-2)-1)+A;break;case"easeOutCubic":B/=E;B--;return F*(B*B*B+1)+A;break;case"easeOutQuart":B/=E;B--;return -F*(B*B*B*B-1)+A;break;case"easeOutQuint":B/=E;B--;return F*(B*B*B*B*B+1)+A;break;case"easeOutCirc":B/=E;B--;return F*Math.sqrt(1-B*B)+A;break;case"easeOutSine":return F*Math.sin(B/E*(Math.PI/2))+A;break;case"easeOutExpo":return F*(-Math.pow(2,-10*B/E)+1)+A;break;case"mcsEaseOut":var D=(B/=E)*B,z=D*B;return A+F*(0.499999999999997*z*D+-2.5*D*D+5.5*z+-6.5*D+4*B);break;case"draggerRailEase":B/=E/2;if(B<1){return F/2*B*B*B+A}B-=2;return F/2*(B*B*B+2)+A;break}}},mTweenAxisStop:function(e){if(e._id==null){return}if(!window.requestAnimationFrame){clearTimeout(e._id)}else{window.cancelAnimationFrame(e._id)}e._id=null},rafPolyfill:function(){var f=["ms","moz","webkit","o"],e=f.length;while(--e>-1&&!window.requestAnimationFrame){window.requestAnimationFrame=window[f[e]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[f[e]+"CancelAnimationFrame"]||window[f[e]+"CancelRequestAnimationFrame"]}}};d.rafPolyfill.call();c.support.touch=!!("ontouchstart" in window);c.support.msPointer=window.navigator.msPointerEnabled;var a=("https:"==document.location.protocol)?"https:":"http:";c.event.special.mousewheel||document.write('<script src="'+a+'//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');c.fn.mCustomScrollbar=function(e){if(b[e]){return b[e].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof e==="object"||!e){return b.init.apply(this,arguments)}else{c.error("Method "+e+" does not exist")}}}})(jQuery);
(function(e,t){"use strict";function n(e){var t=Array.prototype.slice.call(arguments,1);return e.prop?e.prop.apply(e,t):e.attr.apply(e,t)}function s(e,t,n){var s,a;for(s in n)n.hasOwnProperty(s)&&(a=s.replace(/ |$/g,t.eventNamespace),e.bind(a,n[s]))}function a(e,t,n){s(e,n,{focus:function(){t.addClass(n.focusClass)},blur:function(){t.removeClass(n.focusClass),t.removeClass(n.activeClass)},mouseenter:function(){t.addClass(n.hoverClass)},mouseleave:function(){t.removeClass(n.hoverClass),t.removeClass(n.activeClass)},"mousedown touchbegin":function(){e.is(":disabled")||t.addClass(n.activeClass)},"mouseup touchend":function(){t.removeClass(n.activeClass)}})}function i(e,t){e.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass)}function r(e,t,n){n?e.addClass(t):e.removeClass(t)}function l(e,t,n){var s="checked",a=t.is(":"+s);t.prop?t.prop(s,a):a?t.attr(s,s):t.removeAttr(s),r(e,n.checkedClass,a)}function u(e,t,n){r(e,n.disabledClass,t.is(":disabled"))}function o(e,t,n){switch(n){case"after":return e.after(t),e.next();case"before":return e.before(t),e.prev();case"wrap":return e.wrap(t),e.parent()}return null}function c(t,s,a){var i,r,l;return a||(a={}),a=e.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},a),i=e("<div />"),r=e("<span />"),s.autoHide&&t.is(":hidden")&&"none"===t.css("display")&&i.hide(),a.divClass&&i.addClass(a.divClass),s.wrapperClass&&i.addClass(s.wrapperClass),a.spanClass&&r.addClass(a.spanClass),l=n(t,"id"),s.useID&&l&&n(i,"id",s.idPrefix+"-"+l),a.spanHtml&&r.html(a.spanHtml),i=o(t,i,a.divWrap),r=o(t,r,a.spanWrap),u(i,t,s),{div:i,span:r}}function d(t,n){var s;return n.wrapperClass?(s=e("<span />").addClass(n.wrapperClass),s=o(t,s,"wrap")):null}function f(){var t,n,s,a;return a="rgb(120,2,153)",n=e('<div style="width:0;height:0;color:'+a+'">'),e("body").append(n),s=n.get(0),t=window.getComputedStyle?window.getComputedStyle(s,"").color:(s.currentStyle||s.style||{}).color,n.remove(),t.replace(/ /g,"")!==a}function p(t){return t?e("<span />").text(t).html():""}function m(){return navigator.cpuClass&&!navigator.product}function v(){return window.XMLHttpRequest!==void 0?!0:!1}function h(e){var t;return e[0].multiple?!0:(t=n(e,"size"),!t||1>=t?!1:!0)}function C(){return!1}function w(e,t){var n="none";s(e,t,{"selectstart dragstart mousedown":C}),e.css({MozUserSelect:n,msUserSelect:n,webkitUserSelect:n,userSelect:n})}function b(e,t,n){var s=e.val();""===s?s=n.fileDefaultHtml:(s=s.split(/[\/\\]+/),s=s[s.length-1]),t.text(s)}function y(e,t,n){var s,a;for(s=[],e.each(function(){var e;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s.push({el:this,name:e,old:this.style[e]}),this.style[e]=t[e])}),n();s.length;)a=s.pop(),a.el.style[a.name]=a.old}function g(e,t){var n;n=e.parents(),n.push(e[0]),n=n.not(":visible"),y(n,{visibility:"hidden",display:"block",position:"absolute"},t)}function k(e,t){return function(){e.unwrap().unwrap().unbind(t.eventNamespace)}}var H=!0,x=!1,A=[{match:function(e){return e.is("a, button, :submit, :reset, input[type='button']")},apply:function(e,t){var r,l,o,d,f;return l=t.submitDefaultHtml,e.is(":reset")&&(l=t.resetDefaultHtml),d=e.is("a, button")?function(){return e.html()||l}:function(){return p(n(e,"value"))||l},o=c(e,t,{divClass:t.buttonClass,spanHtml:d()}),r=o.div,a(e,r,t),f=!1,s(r,t,{"click touchend":function(){var t,s,a,i;f||e.is(":disabled")||(f=!0,e[0].dispatchEvent?(t=document.createEvent("MouseEvents"),t.initEvent("click",!0,!0),s=e[0].dispatchEvent(t),e.is("a")&&s&&(a=n(e,"target"),i=n(e,"href"),a&&"_self"!==a?window.open(i,a):document.location.href=i)):e.click(),f=!1)}}),w(r,t),{remove:function(){return r.after(e),r.remove(),e.unbind(t.eventNamespace),e},update:function(){i(r,t),u(r,e,t),e.detach(),o.span.html(d()).append(e)}}}},{match:function(e){return e.is(":checkbox")},apply:function(e,t){var n,r,o;return n=c(e,t,{divClass:t.checkboxClass}),r=n.div,o=n.span,a(e,r,t),s(e,t,{"click touchend":function(){l(o,e,t)}}),l(o,e,t),{remove:k(e,t),update:function(){i(r,t),o.removeClass(t.checkedClass),l(o,e,t),u(r,e,t)}}}},{match:function(e){return e.is(":file")},apply:function(t,r){function l(){b(t,p,r)}var d,f,p,v;return d=c(t,r,{divClass:r.fileClass,spanClass:r.fileButtonClass,spanHtml:r.fileButtonHtml,spanWrap:"after"}),f=d.div,v=d.span,p=e("<span />").html(r.fileDefaultHtml),p.addClass(r.filenameClass),p=o(t,p,"after"),n(t,"size")||n(t,"size",f.width()/10),a(t,f,r),l(),m()?s(t,r,{click:function(){t.trigger("change"),setTimeout(l,0)}}):s(t,r,{change:l}),w(p,r),w(v,r),{remove:function(){return p.remove(),v.remove(),t.unwrap().unbind(r.eventNamespace)},update:function(){i(f,r),b(t,p,r),u(f,t,r)}}}},{match:function(e){if(e.is("input")){var t=(" "+n(e,"type")+" ").toLowerCase(),s=" color date datetime datetime-local email month number password search tel text time url week ";return s.indexOf(t)>=0}return!1},apply:function(e,t){var s,i;return s=n(e,"type"),e.addClass(t.inputClass),i=d(e,t),a(e,e,t),t.inputAddTypeAsClass&&e.addClass(s),{remove:function(){e.removeClass(t.inputClass),t.inputAddTypeAsClass&&e.removeClass(s),i&&e.unwrap()},update:C}}},{match:function(e){return e.is(":radio")},apply:function(t,r){var o,d,f;return o=c(t,r,{divClass:r.radioClass}),d=o.div,f=o.span,a(t,d,r),s(t,r,{"click touchend":function(){e.uniform.update(e(':radio[name="'+n(t,"name")+'"]'))}}),l(f,t,r),{remove:k(t,r),update:function(){i(d,r),l(f,t,r),u(d,t,r)}}}},{match:function(e){return e.is("select")&&!h(e)?!0:!1},apply:function(t,n){var r,l,o,d;return n.selectAutoWidth&&g(t,function(){d=t.width()}),r=c(t,n,{divClass:n.selectClass,spanHtml:(t.find(":selected:first")||t.find("option:first")).html(),spanWrap:"before"}),l=r.div,o=r.span,n.selectAutoWidth?g(t,function(){y(e([o[0],l[0]]),{display:"block"},function(){var e;e=o.outerWidth()-o.width(),l.width(d+e),o.width(d)})}):l.addClass("fixedWidth"),a(t,l,n),s(t,n,{change:function(){o.html(t.find(":selected").html()),l.removeClass(n.activeClass)},"click touchend":function(){var e=t.find(":selected").html();o.html()!==e&&t.trigger("change")},keyup:function(){o.html(t.find(":selected").html())}}),w(o,n),{remove:function(){return o.remove(),t.unwrap().unbind(n.eventNamespace),t},update:function(){n.selectAutoWidth?(e.uniform.restore(t),t.uniform(n)):(i(l,n),o.html(t.find(":selected").html()),u(l,t,n))}}}},{match:function(e){return e.is("select")&&h(e)?!0:!1},apply:function(e,t){var n;return e.addClass(t.selectMultiClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.selectMultiClass),n&&e.unwrap()},update:C}}},{match:function(e){return e.is("textarea")},apply:function(e,t){var n;return e.addClass(t.textareaClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.textareaClass),n&&e.unwrap()},update:C}}}];m()&&!v()&&(H=!1),e.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},e.fn.uniform=function(t){var n=this;return t=e.extend({},e.uniform.defaults,t),x||(x=!0,f()&&(H=!1)),H?(t.resetSelector&&e(t.resetSelector).mouseup(function(){window.setTimeout(function(){e.uniform.update(n)},10)}),this.each(function(){var n,s,a,i=e(this);if(i.data("uniformed"))return e.uniform.update(i),void 0;for(n=0;A.length>n;n+=1)if(s=A[n],s.match(i,t))return a=s.apply(i,t),i.data("uniformed",a),e.uniform.elements.push(i.get(0)),void 0})):this},e.uniform.restore=e.fn.uniform.restore=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n,s=e(this);n=s.data("uniformed"),n&&(n.remove(),t=e.inArray(this,e.uniform.elements),t>=0&&e.uniform.elements.splice(t,1),s.removeData("uniformed"))})},e.uniform.update=e.fn.uniform.update=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n=e(this);t=n.data("uniformed"),t&&t.update(n,t.options)})}})(jQuery);
/*global jQuery, window */
(function ($, window) {
	'use strict';

	var templateMap = {},
		instance = null,
		options = {
			// Should an error be thrown if an attempt is made to render a non-existent template.  If false, the
			// operation will fail silently.
			warnOnMissingTemplates: false,

			// Should an error be thrown if an attempt is made to overwrite a template which has already been added.
			// If true the original template will be overwritten with the new value.
			allowOverwrite: true,

			// The 'type' attribute which you use to denoate a Mustache Template in the DOM; eg:
			// `<script type="text/html" id="my-template"></script>`
			domTemplateType: 'text/html',

			// Specifies the `dataType` attribute used when external templates are loaded.
			externalTemplateDataType: 'text'
		};

	function getMustache() {
		// Lazily retrieve Mustache from the window global if it hasn't been defined by
		// the User.
		if (instance === null) {
			instance = window.Mustache;
			if (instance === void 0) {
				$.error("Failed to locate Mustache instance, are you sure it has been loaded?");
			}
		}
		return instance;
	}

	/**
	 * @return {boolean} if the supplied templateName has been added.
	 */
	function has(templateName) {
		return templateMap[templateName] !== void 0;
	}

	/**
	 * Registers a template so that it can be used by $.Mustache.
	 *
	 * @param templateName		A name which uniquely identifies this template.
	 * @param templateHtml		The HTML which makes us the template; this will be rendered by Mustache when render()
	 *							is invoked.
	 * @throws					If options.allowOverwrite is false and the templateName has already been registered.
	 */
	function add(templateName, templateHtml) {
		if (!options.allowOverwrite && has(templateName)) {
			$.error('TemplateName: ' + templateName + ' is already mapped.');
			return;
		}
		templateMap[templateName] = $.trim(templateHtml);
	}

	/**
	 * Adds one or more tempaltes from the DOM using either the supplied templateElementIds or by retrieving all script
	 * tags of the 'domTemplateType'.  Templates added in this fashion will be registered with their elementId value.
	 *
	 * @param [...templateElementIds]	List of element id's present on the DOM which contain templates to be added; 
	 *									if none are supplied all script tags that are of the same type as the 
	 *									`options.domTemplateType` configuration value will be added.
	 */
	function addFromDom() {
		var templateElementIds;

		// If no args are supplied, all script blocks will be read from the document.
		if (arguments.length === 0) {
			templateElementIds = $('script[type="' + options.domTemplateType + '"]').map(function () {
				return this.id;
			});
		}
		else {
			templateElementIds = $.makeArray(arguments);
		}

		$.each(templateElementIds, function() {
			var templateElement = document.getElementById(this);

			if (templateElement === null) {
				$.error('No such elementId: #' + this);
			}
			else {
				add(this, $(templateElement).html());
			}
		});
	}

	/**
	 * Removes a template, the contents of the removed Template will be returned.
	 *
	 * @param templateName		The name of the previously registered Mustache template that you wish to remove.
	 * @returns					String which represents the raw content of the template.
	 */
	function remove(templateName) {
		var result = templateMap[templateName];
		delete templateMap[templateName];
		return result;
	}

	/**
	 * Removes all templates and tells Mustache to flush its cache.
	 */
	function clear() {
		templateMap = {};
		getMustache().clearCache();
	}

	/**
	 * Renders a previously added Mustache template using the supplied templateData object.  Note if the supplied
	 * templateName doesn't exist an empty String will be returned.
	 */
	function render(templateName, templateData) {
		if (!has(templateName)) {
			if (options.warnOnMissingTemplates) {
				$.error('No template registered for: ' + templateName);
			}
			return '';
		}
		return getMustache().to_html(templateMap[templateName], templateData, templateMap);
	}

	/**
	 * Loads the external Mustache templates located at the supplied URL and registers them for later use.  This method
	 * returns a jQuery Promise and also support an `onComplete` callback.
	 *
	 * @param url			URL of the external Mustache template file to load.
	 * @param onComplete	Optional callback function which will be invoked when the templates from the supplied URL
	 *						have been loaded and are ready for use.
	 * @returns				jQuery deferred promise which will complete when the templates have been loaded and are
	 *						ready for use.
	 */
	function load(url, onComplete) {
		return $.ajax({
				url: url,
				dataType: options.externalTemplateDataType
			}).done(function (templates) {
				$(templates).filter('script').each(function (i, el) {
					add(el.id, $(el).html());
				});

				if ($.isFunction(onComplete)) {
					onComplete();
				}
			});
	}

	/**
	 * Returns an Array of templateNames which have been registered and can be retrieved via
	 * $.Mustache.render() or $(element).mustache().
	 */
	function templates() {
		return $.map(templateMap, function (value, key) {
			return key;
		});
	}

	// Expose the public methods on jQuery.Mustache
	$.Mustache = {
		options: options,
		load: load,
		has: has,
		add: add,
		addFromDom: addFromDom,
		remove: remove,
		clear: clear,
		render: render,
		templates: templates,
		instance: instance
	};

	/**
	 * Renders one or more viewModels into the current jQuery element.
	 *
	 * @param templateName	The name of the Mustache template you wish to render, Note that the
	 *						template must have been previously loaded and / or added.
	 * @param templateData	One or more JavaScript objects which will be used to render the Mustache
	 *						template.
	 * @param options.method	jQuery method to use when rendering, defaults to 'append'.
	 */
	$.fn.mustache = function (templateName, templateData, options) {
		var settings = $.extend({
			method:	'append'
		}, options);

		var renderTemplate = function (obj, viewModel) {
			$(obj)[settings.method](render(templateName, viewModel));
		};

		return this.each(function () {
			var element = this;

			// Render a collection of viewModels.
			if ($.isArray(templateData)) {
				$.each(templateData, function () {
					renderTemplate(element, this);
				});
			}

			// Render a single viewModel.
			else {
				renderTemplate(element, templateData);
			}
		});
	};

}(jQuery, window));
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false*/

(function (root, factory) {
  if (typeof exports === "object" && exports) {
    factory(exports); // CommonJS
  } else {
    var mustache = {};
    factory(mustache);
    if (typeof define === "function" && define.amd) {
      define(mustache); // AMD
    } else {
      root.Mustache = mustache; // <script>
    }
  }
}(this, function (mustache) {

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var nonSpaceRe = /\S/;
  var eqRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var RegExp_test = RegExp.prototype.test;
  function testRegExp(re, string) {
    return RegExp_test.call(re, string);
  }

  function isWhitespace(string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var Object_toString = Object.prototype.toString;
  var isArray = Array.isArray || function (obj) {
    return Object_toString.call(obj) === '[object Array]';
  };

  function escapeRegExp(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }

  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function () {
    return this.tail === "";
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function (re) {
    var match = this.tail.match(re);

    if (match && match.index === 0) {
      this.tail = this.tail.substring(match[0].length);
      this.pos += match[0].length;
      return match[0];
    }

    return "";
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function (re) {
    var match, pos = this.tail.search(re);

    switch (pos) {
    case -1:
      match = this.tail;
      this.pos += this.tail.length;
      this.tail = "";
      break;
    case 0:
      match = "";
      break;
    default:
      match = this.tail.substring(0, pos);
      this.tail = this.tail.substring(pos);
      this.pos += pos;
    }

    return match;
  };

  function Context(view, parent) {
    this.view = view || {};
    this.parent = parent;
    this._cache = {};
  }

  Context.make = function (view) {
    return (view instanceof Context) ? view : new Context(view);
  };

  Context.prototype.push = function (view) {
    return new Context(view, this);
  };

  Context.prototype.lookup = function (name) {
    var value = this._cache[name];

    if (!value) {
      if (name == '.') {
        value = this.view;
      } else {
        var context = this;

        while (context) {
          if (name.indexOf('.') > 0) {
            value = context.view;
            var names = name.split('.'), i = 0;
            while (value && i < names.length) {
              value = value[names[i++]];
            }
          } else {
            value = context.view[name];
          }

          if (value != null) break;

          context = context.parent;
        }
      }

      this._cache[name] = value;
    }

    if (typeof value === 'function') value = value.call(this.view);

    return value;
  };

  function Writer() {
    this.clearCache();
  }

  Writer.prototype.clearCache = function () {
    this._cache = {};
    this._partialCache = {};
  };

  Writer.prototype.compile = function (template, tags) {
    var fn = this._cache[template];

    if (!fn) {
      var tokens = mustache.parse(template, tags);
      fn = this._cache[template] = this.compileTokens(tokens, template);
    }

    return fn;
  };

  Writer.prototype.compilePartial = function (name, template, tags) {
    var fn = this.compile(template, tags);
    this._partialCache[name] = fn;
    return fn;
  };

  Writer.prototype.getPartial = function (name) {
    if (!(name in this._partialCache) && this._loadPartial) {
      this.compilePartial(name, this._loadPartial(name));
    }

    return this._partialCache[name];
  };

  Writer.prototype.compileTokens = function (tokens, template) {
    var self = this;
    return function (view, partials) {
      if (partials) {
        if (typeof partials === 'function') {
          self._loadPartial = partials;
        } else {
          for (var name in partials) {
            self.compilePartial(name, partials[name]);
          }
        }
      }

      return renderTokens(tokens, self, Context.make(view), template);
    };
  };

  Writer.prototype.render = function (template, view, partials) {
    return this.compile(template)(view, partials);
  };

  /**
   * Low-level function that renders the given `tokens` using the given `writer`
   * and `context`. The `template` string is only needed for templates that use
   * higher-order sections to extract the portion of the original template that
   * was contained in that section.
   */
  function renderTokens(tokens, writer, context, template) {
    var buffer = '';

    var token, tokenValue, value;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];
      tokenValue = token[1];

      switch (token[0]) {
      case '#':
        value = context.lookup(tokenValue);

        if (typeof value === 'object') {
          if (isArray(value)) {
            for (var j = 0, jlen = value.length; j < jlen; ++j) {
              buffer += renderTokens(token[4], writer, context.push(value[j]), template);
            }
          } else if (value) {
            buffer += renderTokens(token[4], writer, context.push(value), template);
          }
        } else if (typeof value === 'function') {
          var text = template == null ? null : template.slice(token[3], token[5]);
          value = value.call(context.view, text, function (template) {
            return writer.render(template, context);
          });
          if (value != null) buffer += value;
        } else if (value) {
          buffer += renderTokens(token[4], writer, context, template);
        }

        break;
      case '^':
        value = context.lookup(tokenValue);

        // Use JavaScript's definition of falsy. Include empty arrays.
        // See https://github.com/janl/mustache.js/issues/186
        if (!value || (isArray(value) && value.length === 0)) {
          buffer += renderTokens(token[4], writer, context, template);
        }

        break;
      case '>':
        value = writer.getPartial(tokenValue);
        if (typeof value === 'function') buffer += value(context);
        break;
      case '&':
        value = context.lookup(tokenValue);
        if (value != null) buffer += value;
        break;
      case 'name':
        value = context.lookup(tokenValue);
        if (value != null) buffer += mustache.escape(value);
        break;
      case 'text':
        buffer += tokenValue;
        break;
      }
    }

    return buffer;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens(tokens) {
    var tree = [];
    var collector = tree;
    var sections = [];

    var token;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];
      switch (token[0]) {
      case '#':
      case '^':
        sections.push(token);
        collector.push(token);
        collector = token[4] = [];
        break;
      case '/':
        var section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : tree;
        break;
      default:
        collector.push(token);
      }
    }

    return tree;
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens(tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];
      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          lastToken = token;
          squashedTokens.push(token);
        }
      }
    }

    return squashedTokens;
  }

  function escapeTags(tags) {
    return [
      new RegExp(escapeRegExp(tags[0]) + "\\s*"),
      new RegExp("\\s*" + escapeRegExp(tags[1]))
    ];
  }

  /**
   * Breaks up the given `template` string into a tree of token objects. If
   * `tags` is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. ["<%", "%>"]). Of
   * course, the default is to use mustaches (i.e. Mustache.tags).
   */
  function parseTemplate(template, tags) {
    template = template || '';
    tags = tags || mustache.tags;

    if (typeof tags === 'string') tags = tags.split(spaceRe);
    if (tags.length !== 2) throw new Error('Invalid tags: ' + tags.join(', '));

    var tagRes = escapeTags(tags);
    var scanner = new Scanner(template);

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length) {
          delete tokens[spaces.pop()];
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var start, type, value, chr, token;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(tagRes[0]);
      if (value) {
        for (var i = 0, len = value.length; i < len; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push(['text', chr, start, start + 1]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr == '\n') stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(tagRes[0])) break;
      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(eqRe);
        scanner.scan(eqRe);
        scanner.scanUntil(tagRes[1]);
      } else if (type === '{') {
        value = scanner.scanUntil(new RegExp('\\s*' + escapeRegExp('}' + tags[1])));
        scanner.scan(curlyRe);
        scanner.scanUntil(tagRes[1]);
        type = '&';
      } else {
        value = scanner.scanUntil(tagRes[1]);
      }

      // Match the closing tag.
      if (!scanner.scan(tagRes[1])) throw new Error('Unclosed tag at ' + scanner.pos);

      token = [type, value, start, scanner.pos];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        if (sections.length === 0) throw new Error('Unopened section "' + value + '" at ' + start);
        var openSection = sections.pop();
        if (openSection[1] !== value) throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        tags = value.split(spaceRe);
        if (tags.length !== 2) throw new Error('Invalid tags at ' + start + ': ' + tags.join(', '));
        tagRes = escapeTags(tags);
      }
    }

    // Make sure there are no open sections when we're done.
    var openSection = sections.pop();
    if (openSection) throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    tokens = squashTokens(tokens);

    return nestTokens(tokens);
  }

  mustache.name = "mustache.js";
  mustache.version = "0.7.2";
  mustache.tags = ["{{", "}}"];

  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  mustache.parse = parseTemplate;

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // All Mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates and partials in the default writer.
   */
  mustache.clearCache = function () {
    return defaultWriter.clearCache();
  };

  /**
   * Compiles the given `template` to a reusable function using the default
   * writer.
   */
  mustache.compile = function (template, tags) {
    return defaultWriter.compile(template, tags);
  };

  /**
   * Compiles the partial with the given `name` and `template` to a reusable
   * function using the default writer.
   */
  mustache.compilePartial = function (name, template, tags) {
    return defaultWriter.compilePartial(name, template, tags);
  };

  /**
   * Compiles the given array of tokens (the output of a parse) to a reusable
   * function using the default writer.
   */
  mustache.compileTokens = function (tokens, template) {
    return defaultWriter.compileTokens(tokens, template);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function (template, view, partials) {
    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.
  mustache.to_html = function (template, view, partials, send) {
    var result = mustache.render(template, view, partials);

    if (typeof send === "function") {
      send(result);
    } else {
      return result;
    }
  };

}));

// +--------------------------------------------------------------------+ \\
// � Rapha�l 2.1.1 - JavaScript Vector Library                          � \\
// +--------------------------------------------------------------------� \\
// � Copyright � 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    � \\
// � Copyright � 2008-2012 Sencha Labs (http://sencha.com)              � \\
// +--------------------------------------------------------------------� \\
// � Licensed under the MIT (http://raphaeljs.com/license.html) license.� \\
// +--------------------------------------------------------------------+ \\
!function(a){var b,c,d="0.4.2",e="hasOwnProperty",f=/[\.\/]/,g="*",h=function(){},i=function(a,b){return a-b},j={n:{}},k=function(a,d){a=String(a);var e,f=c,g=Array.prototype.slice.call(arguments,2),h=k.listeners(a),j=0,l=[],m={},n=[],o=b;b=a,c=0;for(var p=0,q=h.length;q>p;p++)"zIndex"in h[p]&&(l.push(h[p].zIndex),h[p].zIndex<0&&(m[h[p].zIndex]=h[p]));for(l.sort(i);l[j]<0;)if(e=m[l[j++]],n.push(e.apply(d,g)),c)return c=f,n;for(p=0;q>p;p++)if(e=h[p],"zIndex"in e)if(e.zIndex==l[j]){if(n.push(e.apply(d,g)),c)break;do if(j++,e=m[l[j]],e&&n.push(e.apply(d,g)),c)break;while(e)}else m[e.zIndex]=e;else if(n.push(e.apply(d,g)),c)break;return c=f,b=o,n.length?n:null};k._events=j,k.listeners=function(a){var b,c,d,e,h,i,k,l,m=a.split(f),n=j,o=[n],p=[];for(e=0,h=m.length;h>e;e++){for(l=[],i=0,k=o.length;k>i;i++)for(n=o[i].n,c=[n[m[e]],n[g]],d=2;d--;)b=c[d],b&&(l.push(b),p=p.concat(b.f||[]));o=l}return p},k.on=function(a,b){if(a=String(a),"function"!=typeof b)return function(){};for(var c=a.split(f),d=j,e=0,g=c.length;g>e;e++)d=d.n,d=d.hasOwnProperty(c[e])&&d[c[e]]||(d[c[e]]={n:{}});for(d.f=d.f||[],e=0,g=d.f.length;g>e;e++)if(d.f[e]==b)return h;return d.f.push(b),function(a){+a==+a&&(b.zIndex=+a)}},k.f=function(a){var b=[].slice.call(arguments,1);return function(){k.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},k.stop=function(){c=1},k.nt=function(a){return a?new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)").test(b):b},k.nts=function(){return b.split(f)},k.off=k.unbind=function(a,b){if(!a)return k._events=j={n:{}},void 0;var c,d,h,i,l,m,n,o=a.split(f),p=[j];for(i=0,l=o.length;l>i;i++)for(m=0;m<p.length;m+=h.length-2){if(h=[m,1],c=p[m].n,o[i]!=g)c[o[i]]&&h.push(c[o[i]]);else for(d in c)c[e](d)&&h.push(c[d]);p.splice.apply(p,h)}for(i=0,l=p.length;l>i;i++)for(c=p[i];c.n;){if(b){if(c.f){for(m=0,n=c.f.length;n>m;m++)if(c.f[m]==b){c.f.splice(m,1);break}!c.f.length&&delete c.f}for(d in c.n)if(c.n[e](d)&&c.n[d].f){var q=c.n[d].f;for(m=0,n=q.length;n>m;m++)if(q[m]==b){q.splice(m,1);break}!q.length&&delete c.n[d].f}}else{delete c.f;for(d in c.n)c.n[e](d)&&c.n[d].f&&delete c.n[d].f}c=c.n}},k.once=function(a,b){var c=function(){return k.unbind(a,c),b.apply(this,arguments)};return k.on(a,c)},k.version=d,k.toString=function(){return"You are running Eve "+d},"undefined"!=typeof module&&module.exports?module.exports=k:"undefined"!=typeof define?define("eve",[],function(){return k}):a.eve=k}(this),function(a,b){"function"==typeof define&&define.amd?define(["eve"],function(c){return b(a,c)}):b(a,a.eve)}(this,function(a,b){function c(a){if(c.is(a,"function"))return u?a():b.on("raphael.DOMload",a);if(c.is(a,V))return c._engine.create[D](c,a.splice(0,3+c.is(a[0],T))).add(a);var d=Array.prototype.slice.call(arguments,0);if(c.is(d[d.length-1],"function")){var e=d.pop();return u?e.call(c._engine.create[D](c,d)):b.on("raphael.DOMload",function(){e.call(c._engine.create[D](c,d))})}return c._engine.create[D](c,arguments)}function d(a){if(Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[z](c)&&(b[c]=d(a[c]));return b}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function f(a,b,c){function d(){var f=Array.prototype.slice.call(arguments,0),g=f.join("?"),h=d.cache=d.cache||{},i=d.count=d.count||[];return h[z](g)?(e(i,g),c?c(h[g]):h[g]):(i.length>=1e3&&delete h[i.shift()],i.push(g),h[g]=a[D](b,f),c?c(h[g]):h[g])}return d}function g(){return this.hex}function h(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function i(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function j(a,b,c,d,e,f,g,h,j){null==j&&(j=1),j=j>1?1:0>j?0:j;for(var k=j/2,l=12,m=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0,p=0;l>p;p++){var q=k*m[p]+k,r=i(q,a,c,e,g),s=i(q,b,d,f,h),t=r*r+s*s;o+=n[p]*N.sqrt(t)}return k*o}function k(a,b,c,d,e,f,g,h,i){if(!(0>i||j(a,b,c,d,e,f,g,h)<i)){var k,l=1,m=l/2,n=l-m,o=.01;for(k=j(a,b,c,d,e,f,g,h,n);Q(k-i)>o;)m/=2,n+=(i>k?1:-1)*m,k=j(a,b,c,d,e,f,g,h,n);return n}}function l(a,b,c,d,e,f,g,h){if(!(O(a,c)<P(e,g)||P(a,c)>O(e,g)||O(b,d)<P(f,h)||P(b,d)>O(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+P(a,c).toFixed(2)||n>+O(a,c).toFixed(2)||n<+P(e,g).toFixed(2)||n>+O(e,g).toFixed(2)||o<+P(b,d).toFixed(2)||o>+O(b,d).toFixed(2)||o<+P(f,h).toFixed(2)||o>+O(f,h).toFixed(2)))return{x:l,y:m}}}}function m(a,b,d){var e=c.bezierBBox(a),f=c.bezierBBox(b);if(!c.isBBoxIntersect(e,f))return d?0:[];for(var g=j.apply(0,a),h=j.apply(0,b),i=~~(g/5),k=~~(h/5),m=[],n=[],o={},p=d?0:[],q=0;i+1>q;q++){var r=c.findDotsAtSegment.apply(c,a.concat(q/i));m.push({x:r.x,y:r.y,t:q/i})}for(q=0;k+1>q;q++)r=c.findDotsAtSegment.apply(c,b.concat(q/k)),n.push({x:r.x,y:r.y,t:q/k});for(q=0;i>q;q++)for(var s=0;k>s;s++){var t=m[q],u=m[q+1],v=n[s],w=n[s+1],x=Q(u.x-t.x)<.001?"y":"x",y=Q(w.x-v.x)<.001?"y":"x",z=l(t.x,t.y,u.x,u.y,v.x,v.y,w.x,w.y);if(z){if(o[z.x.toFixed(4)]==z.y.toFixed(4))continue;o[z.x.toFixed(4)]=z.y.toFixed(4);var A=t.t+Q((z[x]-t[x])/(u[x]-t[x]))*(u.t-t.t),B=v.t+Q((z[y]-v[y])/(w[y]-v[y]))*(w.t-v.t);A>=0&&1>=A&&B>=0&&1>=B&&(d?p++:p.push({x:z.x,y:z.y,t1:A,t2:B}))}}return p}function n(a,b,d){a=c._path2curve(a),b=c._path2curve(b);for(var e,f,g,h,i,j,k,l,n,o,p=d?0:[],q=0,r=a.length;r>q;q++){var s=a[q];if("M"==s[0])e=i=s[1],f=j=s[2];else{"C"==s[0]?(n=[e,f].concat(s.slice(1)),e=n[6],f=n[7]):(n=[e,f,e,f,i,j,i,j],e=i,f=j);for(var t=0,u=b.length;u>t;t++){var v=b[t];if("M"==v[0])g=k=v[1],h=l=v[2];else{"C"==v[0]?(o=[g,h].concat(v.slice(1)),g=o[6],h=o[7]):(o=[g,h,g,h,k,l,k,l],g=k,h=l);var w=m(n,o,d);if(d)p+=w;else{for(var x=0,y=w.length;y>x;x++)w[x].segment1=q,w[x].segment2=t,w[x].bez1=n,w[x].bez2=o;p=p.concat(w)}}}}}return p}function o(a,b,c,d,e,f){null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function p(){return this.x+H+this.y+H+this.width+" � "+this.height}function q(a,b,c,d,e,f){function g(a){return((l*a+k)*a+j)*a}function h(a,b){var c=i(a,b);return((o*c+n)*c+m)*c}function i(a,b){var c,d,e,f,h,i;for(e=a,i=0;8>i;i++){if(f=g(e)-a,Q(f)<b)return e;if(h=(3*l*e+2*k)*e+j,Q(h)<1e-6)break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),Q(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}var j=3*b,k=3*(d-b)-j,l=1-j-k,m=3*c,n=3*(e-c)-m,o=1-m-n;return h(a,1/(200*f))}function r(a,b){var c=[],d={};if(this.ms=b,this.times=1,a){for(var e in a)a[z](e)&&(d[_(e)]=a[e],c.push(_(e)));c.sort(lb)}this.anim=d,this.top=c[c.length-1],this.percents=c}function s(a,d,e,f,g,h){e=_(e);var i,j,k,l,m,n,p=a.ms,r={},s={},t={};if(f)for(v=0,x=ic.length;x>v;v++){var u=ic[v];if(u.el.id==d.id&&u.anim==a){u.percent!=e?(ic.splice(v,1),k=1):j=u,d.attr(u.totalOrigin);break}}else f=+s;for(var v=0,x=a.percents.length;x>v;v++){if(a.percents[v]==e||a.percents[v]>f*a.top){e=a.percents[v],m=a.percents[v-1]||0,p=p/a.top*(e-m),l=a.percents[v+1],i=a.anim[e];break}f&&d.attr(a.anim[a.percents[v]])}if(i){if(j)j.initstatus=f,j.start=new Date-j.ms*f;else{for(var y in i)if(i[z](y)&&(db[z](y)||d.paper.customAttributes[z](y)))switch(r[y]=d.attr(y),null==r[y]&&(r[y]=cb[y]),s[y]=i[y],db[y]){case T:t[y]=(s[y]-r[y])/p;break;case"colour":r[y]=c.getRGB(r[y]);var A=c.getRGB(s[y]);t[y]={r:(A.r-r[y].r)/p,g:(A.g-r[y].g)/p,b:(A.b-r[y].b)/p};break;case"path":var B=Kb(r[y],s[y]),C=B[1];for(r[y]=B[0],t[y]=[],v=0,x=r[y].length;x>v;v++){t[y][v]=[0];for(var D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(C[v][D]-r[y][v][D])/p}break;case"transform":var G=d._,H=Pb(G[y],s[y]);if(H)for(r[y]=H.from,s[y]=H.to,t[y]=[],t[y].real=!0,v=0,x=r[y].length;x>v;v++)for(t[y][v]=[r[y][v][0]],D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(s[y][v][D]-r[y][v][D])/p;else{var K=d.matrix||new o,L={_:{transform:G.transform},getBBox:function(){return d.getBBox(1)}};r[y]=[K.a,K.b,K.c,K.d,K.e,K.f],Nb(L,s[y]),s[y]=L._.transform,t[y]=[(L.matrix.a-K.a)/p,(L.matrix.b-K.b)/p,(L.matrix.c-K.c)/p,(L.matrix.d-K.d)/p,(L.matrix.e-K.e)/p,(L.matrix.f-K.f)/p]}break;case"csv":var M=I(i[y])[J](w),N=I(r[y])[J](w);if("clip-rect"==y)for(r[y]=N,t[y]=[],v=N.length;v--;)t[y][v]=(M[v]-r[y][v])/p;s[y]=M;break;default:for(M=[][E](i[y]),N=[][E](r[y]),t[y]=[],v=d.paper.customAttributes[y].length;v--;)t[y][v]=((M[v]||0)-(N[v]||0))/p}var O=i.easing,P=c.easing_formulas[O];if(!P)if(P=I(O).match(Z),P&&5==P.length){var Q=P;P=function(a){return q(a,+Q[1],+Q[2],+Q[3],+Q[4],p)}}else P=nb;if(n=i.start||a.start||+new Date,u={anim:a,percent:e,timestamp:n,start:n+(a.del||0),status:0,initstatus:f||0,stop:!1,ms:p,easing:P,from:r,diff:t,to:s,el:d,callback:i.callback,prev:m,next:l,repeat:h||a.times,origin:d.attr(),totalOrigin:g},ic.push(u),f&&!j&&!k&&(u.stop=!0,u.start=new Date-p*f,1==ic.length))return kc();k&&(u.start=new Date-u.ms*f),1==ic.length&&jc(kc)}b("raphael.anim.start."+d.id,d,a)}}function t(a){for(var b=0;b<ic.length;b++)ic[b].el.paper==a&&ic.splice(b--,1)}c.version="2.1.0",c.eve=b;var u,v,w=/[, ]+/,x={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},y=/\{(\d+)\}/g,z="hasOwnProperty",A={doc:document,win:a},B={was:Object.prototype[z].call(A.win,"Raphael"),is:A.win.Raphael},C=function(){this.ca=this.customAttributes={}},D="apply",E="concat",F="ontouchstart"in A.win||A.win.DocumentTouch&&A.doc instanceof DocumentTouch,G="",H=" ",I=String,J="split",K="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[J](H),L={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},M=I.prototype.toLowerCase,N=Math,O=N.max,P=N.min,Q=N.abs,R=N.pow,S=N.PI,T="number",U="string",V="array",W=Object.prototype.toString,X=(c._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),Y={NaN:1,Infinity:1,"-Infinity":1},Z=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,$=N.round,_=parseFloat,ab=parseInt,bb=I.prototype.toUpperCase,cb=c._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},db=c._availableAnimAttrs={blur:T,"clip-rect":"csv",cx:T,cy:T,fill:"colour","fill-opacity":T,"font-size":T,height:T,opacity:T,path:"path",r:T,rx:T,ry:T,stroke:"colour","stroke-opacity":T,"stroke-width":T,transform:"transform",width:T,x:T,y:T},eb=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,fb={hs:1,rg:1},gb=/,?([achlmqrstvxz]),?/gi,hb=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,ib=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,jb=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,kb=(c._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),lb=function(a,b){return _(a)-_(b)},mb=function(){},nb=function(a){return a},ob=c._rectPath=function(a,b,c,d,e){return e?[["M",a+e,b],["l",c-2*e,0],["a",e,e,0,0,1,e,e],["l",0,d-2*e],["a",e,e,0,0,1,-e,e],["l",2*e-c,0],["a",e,e,0,0,1,-e,-e],["l",0,2*e-d],["a",e,e,0,0,1,e,-e],["z"]]:[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},pb=function(a,b,c,d){return null==d&&(d=c),[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},qb=c._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)},set:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)}},rb=c.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=Kb(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a};if(c._g=A,c.type=A.win.SVGAngle||A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==c.type){var sb,tb=A.doc.createElement("div");if(tb.innerHTML='<v:shape adj="1"/>',sb=tb.firstChild,sb.style.behavior="url(#default#VML)",!sb||"object"!=typeof sb.adj)return c.type=G;tb=null}c.svg=!(c.vml="VML"==c.type),c._Paper=C,c.fn=v=C.prototype=c.prototype,c._id=0,c._oid=0,c.is=function(a,b){return b=M.call(b),"finite"==b?!Y[z](+a):"array"==b?a instanceof Array:"null"==b&&null===a||b==typeof a&&null!==a||"object"==b&&a===Object(a)||"array"==b&&Array.isArray&&Array.isArray(a)||W.call(a).slice(8,-1).toLowerCase()==b},c.angle=function(a,b,d,e,f,g){if(null==f){var h=a-d,i=b-e;return h||i?(180+180*N.atan2(-i,-h)/S+360)%360:0}return c.angle(a,b,f,g)-c.angle(d,e,f,g)},c.rad=function(a){return a%360*S/180},c.deg=function(a){return 180*a/S%360},c.snapTo=function(a,b,d){if(d=c.is(d,"finite")?d:10,c.is(a,V)){for(var e=a.length;e--;)if(Q(a[e]-b)<=d)return a[e]}else{a=+a;var f=b%a;if(d>f)return b-f;if(f>a-d)return b-f+a}return b},c.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=0|16*N.random(),c="x"==a?b:8|3&b;return c.toString(16)}),c.setWindow=function(a){b("raphael.setWindow",c,A.win,a),A.win=a,A.doc=A.win.document,c._engine.initWin&&c._engine.initWin(A.win)};var ub=function(a){if(c.vml){var b,d=/^\s+|\s+$/g;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),b=e.body}catch(g){b=createPopup().document.body}var h=b.createTextRange();ub=f(function(a){try{b.style.color=I(a).replace(d,G);var c=h.queryCommandValue("ForeColor");return c=(255&c)<<16|65280&c|(16711680&c)>>>16,"#"+("000000"+c.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=A.doc.createElement("i");i.title="Rapha�l Colour Picker",i.style.display="none",A.doc.body.appendChild(i),ub=f(function(a){return i.style.color=a,A.doc.defaultView.getComputedStyle(i,G).getPropertyValue("color")})}return ub(a)},vb=function(){return"hsb("+[this.h,this.s,this.b]+")"},wb=function(){return"hsl("+[this.h,this.s,this.l]+")"},xb=function(){return this.hex},yb=function(a,b,d){if(null==b&&c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a&&(d=a.b,b=a.g,a=a.r),null==b&&c.is(a,U)){var e=c.getRGB(a);a=e.r,b=e.g,d=e.b}return(a>1||b>1||d>1)&&(a/=255,b/=255,d/=255),[a,b,d]},zb=function(a,b,d,e){a*=255,b*=255,d*=255;var f={r:a,g:b,b:d,hex:c.rgb(a,b,d),toString:xb};return c.is(e,"finite")&&(f.opacity=e),f};c.color=function(a){var b;return c.is(a,"object")&&"h"in a&&"s"in a&&"b"in a?(b=c.hsb2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):c.is(a,"object")&&"h"in a&&"s"in a&&"l"in a?(b=c.hsl2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):(c.is(a,"string")&&(a=c.getRGB(a)),c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a?(b=c.rgb2hsl(a),a.h=b.h,a.s=b.s,a.l=b.l,b=c.rgb2hsb(a),a.v=b.b):(a={hex:"none"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1)),a.toString=xb,a},c.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-Q(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var e,f,g,h,i;return a=a%360/60,i=2*b*(.5>c?c:1-c),h=i*(1-Q(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.rgb2hsb=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=O(a,b,c),g=f-P(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=60*((d+360)%6)/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:vb}},c.rgb2hsl=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=O(a,b,c),h=P(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=60*((d+360)%6)/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:wb}},c._path2string=function(){return this.join(",").replace(gb,"$1")},c._preload=function(a,b){var c=A.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,A.doc.body.removeChild(this)},c.onerror=function(){A.doc.body.removeChild(this)},A.doc.body.appendChild(c),c.src=a},c.getRGB=f(function(a){if(!a||(a=I(a)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g};if("none"==a)return{r:-1,g:-1,b:-1,hex:"none",toString:g};!(fb[z](a.toLowerCase().substring(0,2))||"#"==a.charAt())&&(a=ub(a));var b,d,e,f,h,i,j=a.match(X);return j?(j[2]&&(e=ab(j[2].substring(5),16),d=ab(j[2].substring(3,5),16),b=ab(j[2].substring(1,3),16)),j[3]&&(e=ab((h=j[3].charAt(3))+h,16),d=ab((h=j[3].charAt(2))+h,16),b=ab((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),"rgba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100)),j[5]?(i=j[5][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"�"==i[0].slice(-1))&&(b/=360),"hsba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsb2rgb(b,d,e,f)):j[6]?(i=j[6][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"�"==i[0].slice(-1))&&(b/=360),"hsla"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsl2rgb(b,d,e,f)):(j={r:b,g:d,b:e,toString:g},j.hex="#"+(16777216|e|d<<8|b<<16).toString(16).slice(1),c.is(f,"finite")&&(j.opacity=f),j)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g}},c),c.hsb=f(function(a,b,d){return c.hsb2rgb(a,b,d).hex}),c.hsl=f(function(a,b,d){return c.hsl2rgb(a,b,d).hex}),c.rgb=f(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),c.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);return b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b})),c.hex},c.getColor.reset=function(){delete this.start},c.parsePathString=function(a){if(!a)return null;var b=Ab(a);if(b.arr)return Cb(b.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];return c.is(a,V)&&c.is(a[0],V)&&(e=Cb(a)),e.length||I(a).replace(hb,function(a,b,c){var f=[],g=b.toLowerCase();if(c.replace(jb,function(a,b){b&&f.push(+b)}),"m"==g&&f.length>2&&(e.push([b][E](f.splice(0,2))),g="l",b="m"==b?"l":"L"),"r"==g)e.push([b][E](f));else for(;f.length>=d[g]&&(e.push([b][E](f.splice(0,d[g]))),d[g]););}),e.toString=c._path2string,b.arr=Cb(e),e},c.parseTransformString=f(function(a){if(!a)return null;var b=[];return c.is(a,V)&&c.is(a[0],V)&&(b=Cb(a)),b.length||I(a).replace(ib,function(a,c,d){var e=[];M.call(c),d.replace(jb,function(a,b){b&&e.push(+b)}),b.push([c][E](e))}),b.toString=c._path2string,b});var Ab=function(a){var b=Ab.ps=Ab.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[z](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]};c.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=R(j,3),l=R(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*N.atan2(q-s,r-t)/S;return(q>s||t>r)&&(y+=180),{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}},c.bezierBBox=function(a,b,d,e,f,g,h,i){c.is(a,"array")||(a=[a,b,d,e,f,g,h,i]);var j=Jb.apply(null,a);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},c.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},c.isBBoxIntersect=function(a,b){var d=c.isPointInsideBBox;return d(b,a.x,a.y)||d(b,a.x2,a.y)||d(b,a.x,a.y2)||d(b,a.x2,a.y2)||d(a,b.x,b.y)||d(a,b.x2,b.y)||d(a,b.x,b.y2)||d(a,b.x2,b.y2)||(a.x<b.x2&&a.x>b.x||b.x<a.x2&&b.x>a.x)&&(a.y<b.y2&&a.y>b.y||b.y<a.y2&&b.y>a.y)},c.pathIntersection=function(a,b){return n(a,b)},c.pathIntersectionNumber=function(a,b){return n(a,b,1)},c.isPointInsidePath=function(a,b,d){var e=c.pathBBox(a);return c.isPointInsideBBox(e,b,d)&&1==n(a,[["M",b,d],["H",e.x2+10]],1)%2},c._removedFactory=function(a){return function(){b("raphael.log",null,"Rapha�l: you are calling to method �"+a+"� of removed object",a)}};var Bb=c.pathBBox=function(a){var b=Ab(a);if(b.bbox)return d(b.bbox);if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=Kb(a);for(var c,e=0,f=0,g=[],h=[],i=0,j=a.length;j>i;i++)if(c=a[i],"M"==c[0])e=c[1],f=c[2],g.push(e),h.push(f);else{var k=Jb(e,f,c[1],c[2],c[3],c[4],c[5],c[6]);g=g[E](k.min.x,k.max.x),h=h[E](k.min.y,k.max.y),e=c[5],f=c[6]}var l=P[D](0,g),m=P[D](0,h),n=O[D](0,g),o=O[D](0,h),p=n-l,q=o-m,r={x:l,y:m,x2:n,y2:o,width:p,height:q,cx:l+p/2,cy:m+q/2};return b.bbox=d(r),r},Cb=function(a){var b=d(a);return b.toString=c._path2string,b},Db=c._pathToRelative=function(a){var b=Ab(a);if(b.rel)return Cb(b.rel);c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a));var d=[],e=0,f=0,g=0,h=0,i=0;"M"==a[0][0]&&(e=a[0][1],f=a[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=a.length;k>j;j++){var l=d[j]=[],m=a[j];if(m[0]!=M.call(m[0]))switch(l[0]=M.call(m[0]),l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;o>n;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}else{l=d[j]=[],"m"==m[0]&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;q>p;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}return d.toString=c._path2string,b.rel=Cb(d),d},Eb=c._pathToAbsolute=function(a){var b=Ab(a);if(b.abs)return Cb(b.abs);if(c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a)),!a||!a.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,i=0,j=0;"M"==a[0][0]&&(e=+a[0][1],f=+a[0][2],g=e,i=f,j++,d[0]=["M",e,f]);for(var k,l,m=3==a.length&&"M"==a[0][0]&&"R"==a[1][0].toUpperCase()&&"Z"==a[2][0].toUpperCase(),n=j,o=a.length;o>n;n++){if(d.push(k=[]),l=a[n],l[0]!=bb.call(l[0]))switch(k[0]=bb.call(l[0]),k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":for(var p=[e,f][E](l.slice(1)),q=2,r=p.length;r>q;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[E](h(p,m));break;case"M":g=+l[1]+e,i=+l[2]+f;default:for(q=1,r=l.length;r>q;q++)k[q]=+l[q]+(q%2?e:f)}else if("R"==l[0])p=[e,f][E](l.slice(1)),d.pop(),d=d[E](h(p,m)),k=["R"][E](l.slice(-2));else for(var s=0,t=l.length;t>s;s++)k[s]=l[s];switch(k[0]){case"Z":e=g,f=i;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.length-2],i=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}return d.toString=c._path2string,b.abs=Cb(d),d},Fb=function(a,b,c,d){return[a,b,c,d,c,d]},Gb=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},Hb=function(a,b,c,d,e,g,h,i,j,k){var l,m=120*S/180,n=S/180*(+e||0),o=[],p=f(function(a,b,c){var d=a*N.cos(c)-b*N.sin(c),e=a*N.sin(c)+b*N.cos(c);return{x:d,y:e}});if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(a,b,-n),a=l.x,b=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(N.cos(S/180*e),N.sin(S/180*e),(a-i)/2),r=(b-j)/2,s=q*q/(c*c)+r*r/(d*d);s>1&&(s=N.sqrt(s),c=s*c,d=s*d);var t=c*c,u=d*d,v=(g==h?-1:1)*N.sqrt(Q((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*c*r/d+(a+i)/2,x=v*-d*q/c+(b+j)/2,y=N.asin(((b-x)/d).toFixed(9)),z=N.asin(((j-x)/d).toFixed(9));y=w>a?S-y:y,z=w>i?S-z:z,0>y&&(y=2*S+y),0>z&&(z=2*S+z),h&&y>z&&(y-=2*S),!h&&z>y&&(z-=2*S)}var A=z-y;if(Q(A)>m){var B=z,C=i,D=j;z=y+m*(h&&z>y?1:-1),i=w+c*N.cos(z),j=x+d*N.sin(z),o=Hb(i,j,c,d,e,0,h,C,D,[z,B,w,x])}A=z-y;var F=N.cos(y),G=N.sin(y),H=N.cos(z),I=N.sin(z),K=N.tan(A/4),L=4/3*c*K,M=4/3*d*K,O=[a,b],P=[a+L*G,b-M*F],R=[i+L*I,j-M*H],T=[i,j];if(P[0]=2*O[0]-P[0],P[1]=2*O[1]-P[1],k)return[P,R,T][E](o);o=[P,R,T][E](o).join()[J](",");for(var U=[],V=0,W=o.length;W>V;V++)U[V]=V%2?p(o[V-1],o[V],n).y:p(o[V],o[V+1],n).x;return U},Ib=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:R(j,3)*a+3*R(j,2)*i*c+3*j*i*i*e+R(i,3)*g,y:R(j,3)*b+3*R(j,2)*i*d+3*j*i*i*f+R(i,3)*h}},Jb=f(function(a,b,c,d,e,f,g,h){var i,j=e-2*c+a-(g-2*e+c),k=2*(c-a)-2*(e-c),l=a-c,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,o=[b,h],p=[a,g];return Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),j=f-2*d+b-(h-2*f+d),k=2*(d-b)-2*(f-d),l=b-d,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),{min:{x:P[D](0,p),y:P[D](0,o)},max:{x:O[D](0,p),y:O[D](0,o)}}}),Kb=c._path2curve=f(function(a,b){var c=!b&&Ab(a);if(!b&&c.curve)return Cb(c.curve);for(var d=Eb(a),e=b&&Eb(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=(function(a,b,c){var d,e;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][E](Hb[D](0,[b.x,b.y][E](a.slice(1))));break;case"S":"C"==c||"S"==c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=["C",d,e][E](a.slice(1));break;case"T":"Q"==c||"T"==c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=["C"][E](Gb(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][E](Gb(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][E](Fb(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][E](Fb(b.x,b.y,a[1],b.y));break;case"V":a=["C"][E](Fb(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][E](Fb(b.x,b.y,b.X,b.Y))}return a}),i=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)a.splice(b++,0,["C"][E](c.splice(0,6)));a.splice(b,1),l=O(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&"M"==a[g][0]&&"M"!=b[g][0]&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],l=O(d.length,e&&e.length||0))},k=0,l=O(d.length,e&&e.length||0);l>k;k++){d[k]=h(d[k],f),i(d,k),e&&(e[k]=h(e[k],g)),e&&i(e,k),j(d,e,f,g,k),j(e,d,g,f,k);var m=d[k],n=e&&e[k],o=m.length,p=e&&n.length;f.x=m[o-2],f.y=m[o-1],f.bx=_(m[o-4])||f.x,f.by=_(m[o-3])||f.y,g.bx=e&&(_(n[p-4])||g.x),g.by=e&&(_(n[p-3])||g.y),g.x=e&&n[p-2],g.y=e&&n[p-1]}return e||(c.curve=Cb(d)),e?[d,e]:d},null,Cb),Lb=(c._parseDots=f(function(a){for(var b=[],d=0,e=a.length;e>d;d++){var f={},g=a[d].match(/^([^:]*):?([\d\.]*)/);if(f.color=c.getRGB(g[1]),f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),b.push(f)}for(d=1,e=b.length-1;e>d;d++)if(!b[d].offset){for(var h=_(b[d-1].offset||0),i=0,j=d+1;e>j;j++)if(b[j].offset){i=b[j].offset;break}i||(i=100,j=e),i=_(i);for(var k=(i-h)/(j-d+1);j>d;d++)h+=k,b[d].offset=h+"%"}return b}),c._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)}),Mb=(c._tofront=function(a,b){b.top!==a&&(Lb(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},c._toback=function(a,b){b.bottom!==a&&(Lb(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},c._insertafter=function(a,b,c){Lb(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},c._insertbefore=function(a,b,c){Lb(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},c.toMatrix=function(a,b){var c=Bb(a),d={_:{transform:G},getBBox:function(){return c}};return Nb(d,b),d.matrix}),Nb=(c.transformPath=function(a,b){return rb(a,Mb(a,b))},c._extractTransform=function(a,b){if(null==b)return a._.transform;b=I(b).replace(/\.{3}|\u2026/g,a._.transform||G);var d=c.parseTransformString(b),e=0,f=0,g=0,h=1,i=1,j=a._,k=new o;if(j.transform=d||[],d)for(var l=0,m=d.length;m>l;l++){var n,p,q,r,s,t=d[l],u=t.length,v=I(t[0]).toLowerCase(),w=t[0]!=v,x=w?k.invert():0;"t"==v&&3==u?w?(n=x.x(0,0),p=x.y(0,0),q=x.x(t[1],t[2]),r=x.y(t[1],t[2]),k.translate(q-n,r-p)):k.translate(t[1],t[2]):"r"==v?2==u?(s=s||a.getBBox(1),k.rotate(t[1],s.x+s.width/2,s.y+s.height/2),e+=t[1]):4==u&&(w?(q=x.x(t[2],t[3]),r=x.y(t[2],t[3]),k.rotate(t[1],q,r)):k.rotate(t[1],t[2],t[3]),e+=t[1]):"s"==v?2==u||3==u?(s=s||a.getBBox(1),k.scale(t[1],t[u-1],s.x+s.width/2,s.y+s.height/2),h*=t[1],i*=t[u-1]):5==u&&(w?(q=x.x(t[3],t[4]),r=x.y(t[3],t[4]),k.scale(t[1],t[2],q,r)):k.scale(t[1],t[2],t[3],t[4]),h*=t[1],i*=t[2]):"m"==v&&7==u&&k.add(t[1],t[2],t[3],t[4],t[5],t[6]),j.dirtyT=1,a.matrix=k}a.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,1==h&&1==i&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1}),Ob=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case"s":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}},Pb=c._equaliseTransform=function(a,b){b=I(b).replace(/\.{3}|\u2026/g,a),a=c.parseTransformString(a)||[],b=c.parseTransformString(b)||[];for(var d,e,f,g,h=O(a.length,b.length),i=[],j=[],k=0;h>k;k++){if(f=a[k]||Ob(b[k]),g=b[k]||Ob(f),f[0]!=g[0]||"r"==f[0].toLowerCase()&&(f[2]!=g[2]||f[3]!=g[3])||"s"==f[0].toLowerCase()&&(f[3]!=g[3]||f[4]!=g[4]))return;for(i[k]=[],j[k]=[],d=0,e=O(f.length,g.length);e>d;d++)d in f&&(i[k][d]=f[d]),d in g&&(j[k][d]=g[d])
}return{from:i,to:j}};c._getContainer=function(a,b,d,e){var f;return f=null!=e||c.is(a,"object")?a:A.doc.getElementById(a),null!=f?f.tagName?null==b?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:b,height:d}:{container:1,x:a,y:b,width:d,height:e}:void 0},c.pathToRelative=Db,c._engine={},c.path2curve=Kb,c.matrix=function(a,b,c,d,e,f){return new o(a,b,c,d,e,f)},function(a){function b(a){return a[0]*a[0]+a[1]*a[1]}function d(a){var c=N.sqrt(b(a));a[0]&&(a[0]/=c),a[1]&&(a[1]/=c)}a.add=function(a,b,c,d,e,f){var g,h,i,j,k=[[],[],[]],l=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],m=[[a,c,e],[b,d,f],[0,0,1]];for(a&&a instanceof o&&(m=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]),g=0;3>g;g++)for(h=0;3>h;h++){for(j=0,i=0;3>i;i++)j+=l[g][i]*m[i][h];k[g][h]=j}this.a=k[0][0],this.b=k[1][0],this.c=k[0][1],this.d=k[1][1],this.e=k[0][2],this.f=k[1][2]},a.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new o(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},a.clone=function(){return new o(this.a,this.b,this.c,this.d,this.e,this.f)},a.translate=function(a,b){this.add(1,0,0,1,a,b)},a.scale=function(a,b,c,d){null==b&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},a.rotate=function(a,b,d){a=c.rad(a),b=b||0,d=d||0;var e=+N.cos(a).toFixed(9),f=+N.sin(a).toFixed(9);this.add(e,f,-f,e,b,d),this.add(1,0,0,1,-b,-d)},a.x=function(a,b){return a*this.a+b*this.c+this.e},a.y=function(a,b){return a*this.b+b*this.d+this.f},a.get=function(a){return+this[I.fromCharCode(97+a)].toFixed(4)},a.toString=function(){return c.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},a.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},a.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},a.split=function(){var a={};a.dx=this.e,a.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];a.scalex=N.sqrt(b(e[0])),d(e[0]),a.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*a.shear,e[1][1]-e[0][1]*a.shear],a.scaley=N.sqrt(b(e[1])),d(e[1]),a.shear/=a.scaley;var f=-e[0][1],g=e[1][1];return 0>g?(a.rotate=c.deg(N.acos(g)),0>f&&(a.rotate=360-a.rotate)):a.rotate=c.deg(N.asin(f)),a.isSimple=!(+a.shear.toFixed(9)||a.scalex.toFixed(9)!=a.scaley.toFixed(9)&&a.rotate),a.isSuperSimple=!+a.shear.toFixed(9)&&a.scalex.toFixed(9)==a.scaley.toFixed(9)&&!a.rotate,a.noRotation=!+a.shear.toFixed(9)&&!a.rotate,a},a.toTransformString=function(a){var b=a||this[J]();return b.isSimple?(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?"t"+[b.dx,b.dy]:G)+(1!=b.scalex||1!=b.scaley?"s"+[b.scalex,b.scaley,0,0]:G)+(b.rotate?"r"+[b.rotate,0,0]:G)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(o.prototype);var Qb=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);v.safari="Apple Computer, Inc."==navigator.vendor&&(Qb&&Qb[1]<4||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Qb&&Qb[1]<8?function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:mb;for(var Rb=function(){this.returnValue=!1},Sb=function(){return this.originalEvent.preventDefault()},Tb=function(){this.cancelBubble=!0},Ub=function(){return this.originalEvent.stopPropagation()},Vb=function(a){var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,c=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;return{x:a.clientX+c,y:a.clientY+b}},Wb=function(){return A.doc.addEventListener?function(a,b,c,d){var e=function(a){var b=Vb(a);return c.call(d,a,b.x,b.y)};if(a.addEventListener(b,e,!1),F&&L[b]){var f=function(b){for(var e=Vb(b),f=b,g=0,h=b.targetTouches&&b.targetTouches.length;h>g;g++)if(b.targetTouches[g].target==a){b=b.targetTouches[g],b.originalEvent=f,b.preventDefault=Sb,b.stopPropagation=Ub;break}return c.call(d,b,e.x,e.y)};a.addEventListener(L[b],f,!1)}return function(){return a.removeEventListener(b,e,!1),F&&L[b]&&a.removeEventListener(L[b],e,!1),!0}}:A.doc.attachEvent?function(a,b,c,d){var e=function(a){a=a||A.win.event;var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,e=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;return a.preventDefault=a.preventDefault||Rb,a.stopPropagation=a.stopPropagation||Tb,c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){return a.detachEvent("on"+b,e),!0};return f}:void 0}(),Xb=[],Yb=function(a){for(var c,d=a.clientX,e=a.clientY,f=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,g=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,h=Xb.length;h--;){if(c=Xb[h],F&&a.touches){for(var i,j=a.touches.length;j--;)if(i=a.touches[j],i.identifier==c.el._drag.id){d=i.clientX,e=i.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}else a.preventDefault();var k,l=c.el.node,m=l.nextSibling,n=l.parentNode,o=l.style.display;A.win.opera&&n.removeChild(l),l.style.display="none",k=c.el.paper.getElementByPoint(d,e),l.style.display=o,A.win.opera&&(m?n.insertBefore(l,m):n.appendChild(l)),k&&b("raphael.drag.over."+c.el.id,c.el,k),d+=g,e+=f,b("raphael.drag.move."+c.el.id,c.move_scope||c.el,d-c.el._drag.x,e-c.el._drag.y,d,e,a)}},Zb=function(a){c.unmousemove(Yb).unmouseup(Zb);for(var d,e=Xb.length;e--;)d=Xb[e],d.el._drag={},b("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,a);Xb=[]},$b=c.el={},_b=K.length;_b--;)!function(a){c[a]=$b[a]=function(b,d){return c.is(b,"function")&&(this.events=this.events||[],this.events.push({name:a,f:b,unbind:Wb(this.shape||this.node||A.doc,a,b,d||this)})),this},c["un"+a]=$b["un"+a]=function(b){for(var d=this.events||[],e=d.length;e--;)d[e].name!=a||!c.is(b,"undefined")&&d[e].f!=b||(d[e].unbind(),d.splice(e,1),!d.length&&delete this.events);return this}}(K[_b]);$b.data=function(a,d){var e=kb[this.id]=kb[this.id]||{};if(0==arguments.length)return e;if(1==arguments.length){if(c.is(a,"object")){for(var f in a)a[z](f)&&this.data(f,a[f]);return this}return b("raphael.data.get."+this.id,this,e[a],a),e[a]}return e[a]=d,b("raphael.data.set."+this.id,this,d,a),this},$b.removeData=function(a){return null==a?kb[this.id]={}:kb[this.id]&&delete kb[this.id][a],this},$b.getData=function(){return d(kb[this.id]||{})},$b.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},$b.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var ac=[];$b.drag=function(a,d,e,f,g,h){function i(i){(i.originalEvent||i).preventDefault();var j=i.clientX,k=i.clientY,l=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,m=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;if(this._drag.id=i.identifier,F&&i.touches)for(var n,o=i.touches.length;o--;)if(n=i.touches[o],this._drag.id=n.identifier,n.identifier==this._drag.id){j=n.clientX,k=n.clientY;break}this._drag.x=j+m,this._drag.y=k+l,!Xb.length&&c.mousemove(Yb).mouseup(Zb),Xb.push({el:this,move_scope:f,start_scope:g,end_scope:h}),d&&b.on("raphael.drag.start."+this.id,d),a&&b.on("raphael.drag.move."+this.id,a),e&&b.on("raphael.drag.end."+this.id,e),b("raphael.drag.start."+this.id,g||f||this,i.clientX+m,i.clientY+l,i)}return this._drag={},ac.push({el:this,start:i}),this.mousedown(i),this},$b.onDragOver=function(a){a?b.on("raphael.drag.over."+this.id,a):b.unbind("raphael.drag.over."+this.id)},$b.undrag=function(){for(var a=ac.length;a--;)ac[a].el==this&&(this.unmousedown(ac[a].start),ac.splice(a,1),b.unbind("raphael.drag.*."+this.id));!ac.length&&c.unmousemove(Yb).unmouseup(Zb),Xb=[]},v.circle=function(a,b,d){var e=c._engine.circle(this,a||0,b||0,d||0);return this.__set__&&this.__set__.push(e),e},v.rect=function(a,b,d,e,f){var g=c._engine.rect(this,a||0,b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.ellipse=function(a,b,d,e){var f=c._engine.ellipse(this,a||0,b||0,d||0,e||0);return this.__set__&&this.__set__.push(f),f},v.path=function(a){a&&!c.is(a,U)&&!c.is(a[0],V)&&(a+=G);var b=c._engine.path(c.format[D](c,arguments),this);return this.__set__&&this.__set__.push(b),b},v.image=function(a,b,d,e,f){var g=c._engine.image(this,a||"about:blank",b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.text=function(a,b,d){var e=c._engine.text(this,a||0,b||0,I(d));return this.__set__&&this.__set__.push(e),e},v.set=function(a){!c.is(a,"array")&&(a=Array.prototype.splice.call(arguments,0,arguments.length));var b=new mc(a);return this.__set__&&this.__set__.push(b),b.paper=this,b.type="set",b},v.setStart=function(a){this.__set__=a||this.set()},v.setFinish=function(){var a=this.__set__;return delete this.__set__,a},v.setSize=function(a,b){return c._engine.setSize.call(this,a,b)},v.setViewBox=function(a,b,d,e,f){return c._engine.setViewBox.call(this,a,b,d,e,f)},v.top=v.bottom=null,v.raphael=c;var bc=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,h=b.top+(A.win.pageYOffset||e.scrollTop||d.scrollTop)-f,i=b.left+(A.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:h,x:i}};v.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=A.doc.elementFromPoint(a,b);if(A.win.opera&&"svg"==e.tagName){var f=bc(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var h=d.getIntersectionList(g,null);h.length&&(e=h[h.length-1])}if(!e)return null;for(;e.parentNode&&e!=d.parentNode&&!e.raphael;)e=e.parentNode;return e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null},v.getElementsByBBox=function(a){var b=this.set();return this.forEach(function(d){c.isBBoxIntersect(d.getBBox(),a)&&b.push(d)}),b},v.getById=function(a){for(var b=this.bottom;b;){if(b.id==a)return b;b=b.next}return null},v.forEach=function(a,b){for(var c=this.bottom;c;){if(a.call(b,c)===!1)return this;c=c.next}return this},v.getElementsByPoint=function(a,b){var c=this.set();return this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)}),c},$b.isPointInside=function(a,b){var d=this.realPath=qb[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(d=c.transformPath(d,this.attr("transform"))),c.isPointInsidePath(d,a,b)},$b.getBBox=function(a){if(this.removed)return{};var b=this._;return a?((b.dirty||!b.bboxwt)&&(this.realPath=qb[this.type](this),b.bboxwt=Bb(this.realPath),b.bboxwt.toString=p,b.dirty=0),b.bboxwt):((b.dirty||b.dirtyT||!b.bbox)&&((b.dirty||!this.realPath)&&(b.bboxwt=0,this.realPath=qb[this.type](this)),b.bbox=Bb(rb(this.realPath,this.matrix)),b.bbox.toString=p,b.dirty=b.dirtyT=0),b.bbox)},$b.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(a),a},$b.glow=function(a){if("text"==this.type)return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||qb[this.type](this);f=this.matrix?rb(f,this.matrix):f;for(var g=1;c+1>g;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cc=function(a,b,d,e,f,g,h,i,l){return null==l?j(a,b,d,e,f,g,h,i):c.findDotsAtSegment(a,b,d,e,f,g,h,i,k(a,b,d,e,f,g,h,i,l))},dc=function(a,b){return function(d,e,f){d=Kb(d);for(var g,h,i,j,k,l="",m={},n=0,o=0,p=d.length;p>o;o++){if(i=d[o],"M"==i[0])g=+i[1],h=+i[2];else{if(j=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6]),n+j>e){if(b&&!m.start){if(k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),l+=["C"+k.start.x,k.start.y,k.m.x,k.m.y,k.x,k.y],f)return l;m.start=l,l=["M"+k.x,k.y+"C"+k.n.x,k.n.y,k.end.x,k.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!a&&!b)return k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),{x:k.x,y:k.y,alpha:k.alpha}}n+=j,g=+i[5],h=+i[6]}l+=i.shift()+i}return m.end=l,k=a?n:b?m:c.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),k.alpha&&(k={x:k.x,y:k.y,alpha:k.alpha}),k}},ec=dc(1),fc=dc(),gc=dc(0,1);c.getTotalLength=ec,c.getPointAtLength=fc,c.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return gc(a,b).end;var d=gc(a,c,1);return b?gc(d,b).end:d},$b.getTotalLength=function(){var a=this.getPath();if(a)return this.node.getTotalLength?this.node.getTotalLength():ec(a)},$b.getPointAtLength=function(a){var b=this.getPath();if(b)return fc(b,a)},$b.getPath=function(){var a,b=c._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return b&&(a=b(this)),a},$b.getSubpath=function(a,b){var d=this.getPath();if(d)return c.getSubpath(d,a,b)};var hc=c.easing_formulas={linear:function(a){return a},"<":function(a){return R(a,1.7)},">":function(a){return R(a,.48)},"<>":function(a){var b=.48-a/1.04,c=N.sqrt(.1734+b*b),d=c-b,e=R(Q(d),1/3)*(0>d?-1:1),f=-c-b,g=R(Q(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){return a==!!a?a:R(2,-10*a)*N.sin((a-.075)*2*S/.3)+1},bounce:function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b}};hc.easeIn=hc["ease-in"]=hc["<"],hc.easeOut=hc["ease-out"]=hc[">"],hc.easeInOut=hc["ease-in-out"]=hc["<>"],hc["back-in"]=hc.backIn,hc["back-out"]=hc.backOut;var ic=[],jc=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(a){setTimeout(a,16)},kc=function(){for(var a=+new Date,d=0;d<ic.length;d++){var e=ic[d];if(!e.el.removed&&!e.paused){var f,g,h=a-e.start,i=e.ms,j=e.easing,k=e.from,l=e.diff,m=e.to,n=(e.t,e.el),o={},p={};if(e.initstatus?(h=(e.initstatus*e.anim.top-e.prev)/(e.percent-e.prev)*i,e.status=e.initstatus,delete e.initstatus,e.stop&&ic.splice(d--,1)):e.status=(e.prev+(e.percent-e.prev)*(h/i))/e.anim.top,!(0>h))if(i>h){var q=j(h/i);for(var r in k)if(k[z](r)){switch(db[r]){case T:f=+k[r]+q*i*l[r];break;case"colour":f="rgb("+[lc($(k[r].r+q*i*l[r].r)),lc($(k[r].g+q*i*l[r].g)),lc($(k[r].b+q*i*l[r].b))].join(",")+")";break;case"path":f=[];for(var t=0,u=k[r].length;u>t;t++){f[t]=[k[r][t][0]];for(var v=1,w=k[r][t].length;w>v;v++)f[t][v]=+k[r][t][v]+q*i*l[r][t][v];f[t]=f[t].join(H)}f=f.join(H);break;case"transform":if(l[r].real)for(f=[],t=0,u=k[r].length;u>t;t++)for(f[t]=[k[r][t][0]],v=1,w=k[r][t].length;w>v;v++)f[t][v]=k[r][t][v]+q*i*l[r][t][v];else{var x=function(a){return+k[r][a]+q*i*l[r][a]};f=[["m",x(0),x(1),x(2),x(3),x(4),x(5)]]}break;case"csv":if("clip-rect"==r)for(f=[],t=4;t--;)f[t]=+k[r][t]+q*i*l[r][t];break;default:var y=[][E](k[r]);for(f=[],t=n.paper.customAttributes[r].length;t--;)f[t]=+y[t]+q*i*l[r][t]}o[r]=f}n.attr(o),function(a,c,d){setTimeout(function(){b("raphael.anim.frame."+a,c,d)})}(n.id,n,e.anim)}else{if(function(a,d,e){setTimeout(function(){b("raphael.anim.frame."+d.id,d,e),b("raphael.anim.finish."+d.id,d,e),c.is(a,"function")&&a.call(d)})}(e.callback,n,e.anim),n.attr(m),ic.splice(d--,1),e.repeat>1&&!e.next){for(g in m)m[z](g)&&(p[g]=e.totalOrigin[g]);e.el.attr(p),s(e.anim,e.el,e.anim.percents[0],null,e.totalOrigin,e.repeat-1)}e.next&&!e.stop&&s(e.anim,e.el,e.next,null,e.totalOrigin,e.repeat)}}}c.svg&&n&&n.paper&&n.paper.safari(),ic.length&&jc(kc)},lc=function(a){return a>255?255:0>a?0:a};$b.animateWith=function(a,b,d,e,f,g){var h=this;if(h.removed)return g&&g.call(h),h;var i=d instanceof r?d:c.animation(d,e,f,g);s(i,h,i.percents[0],null,h.attr());for(var j=0,k=ic.length;k>j;j++)if(ic[j].anim==b&&ic[j].el==a){ic[k-1].start=ic[j].start;break}return h},$b.onAnimation=function(a){return a?b.on("raphael.anim.frame."+this.id,a):b.unbind("raphael.anim.frame."+this.id),this},r.prototype.delay=function(a){var b=new r(this.anim,this.ms);return b.times=this.times,b.del=+a||0,b},r.prototype.repeat=function(a){var b=new r(this.anim,this.ms);return b.del=this.del,b.times=N.floor(O(a,0))||1,b},c.animation=function(a,b,d,e){if(a instanceof r)return a;(c.is(d,"function")||!d)&&(e=e||d||null,d=null),a=Object(a),b=+b||0;var f,g,h={};for(g in a)a[z](g)&&_(g)!=g&&_(g)+"%"!=g&&(f=!0,h[g]=a[g]);return f?(d&&(h.easing=d),e&&(h.callback=e),new r({100:h},b)):new r(a,b)},$b.animate=function(a,b,d,e){var f=this;if(f.removed)return e&&e.call(f),f;var g=a instanceof r?a:c.animation(a,b,d,e);return s(g,f,g.percents[0],null,f.attr()),f},$b.setTime=function(a,b){return a&&null!=b&&this.status(a,P(b,a.ms)/a.ms),this},$b.status=function(a,b){var c,d,e=[],f=0;if(null!=b)return s(a,this,-1,P(b,1)),this;for(c=ic.length;c>f;f++)if(d=ic[f],d.el.id==this.id&&(!a||d.anim==a)){if(a)return d.status;e.push({anim:d.anim,status:d.status})}return a?0:e},$b.pause=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.pause."+this.id,this,ic[c].anim)!==!1&&(ic[c].paused=!0);return this},$b.resume=function(a){for(var c=0;c<ic.length;c++)if(ic[c].el.id==this.id&&(!a||ic[c].anim==a)){var d=ic[c];b("raphael.anim.resume."+this.id,this,d.anim)!==!1&&(delete d.paused,this.status(d.anim,d.status))}return this},$b.stop=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.stop."+this.id,this,ic[c].anim)!==!1&&ic.splice(c--,1);return this},b.on("raphael.remove",t),b.on("raphael.clear",t),$b.toString=function(){return"Rapha�l�s object"};var mc=function(a){if(this.items=[],this.length=0,this.type="set",a)for(var b=0,c=a.length;c>b;b++)!a[b]||a[b].constructor!=$b.constructor&&a[b].constructor!=mc||(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},nc=mc.prototype;nc.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],!a||a.constructor!=$b.constructor&&a.constructor!=mc||(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},nc.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},nc.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var oc in $b)$b[z](oc)&&(nc[oc]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][D](c,b)})}}(oc));return nc.attr=function(a,b){if(a&&c.is(a,V)&&c.is(a[0],"object"))for(var d=0,e=a.length;e>d;d++)this.items[d].attr(a[d]);else for(var f=0,g=this.items.length;g>f;f++)this.items[f].attr(a,b);return this},nc.clear=function(){for(;this.length;)this.pop()},nc.splice=function(a,b){a=0>a?O(this.length+a,0):a,b=O(0,P(this.length-a,b));var c,d=[],e=[],f=[];for(c=2;c<arguments.length;c++)f.push(arguments[c]);for(c=0;b>c;c++)e.push(this[a+c]);for(;c<this.length-a;c++)d.push(this[a+c]);var g=f.length;for(c=0;c<g+d.length;c++)this.items[a+c]=this[a+c]=g>c?f[c]:d[c-g];for(c=this.items.length=this.length-=b-g;this[c];)delete this[c++];return new mc(e)},nc.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0},nc.animate=function(a,b,d,e){(c.is(d,"function")||!d)&&(e=d||null);var f,g,h=this.items.length,i=h,j=this;if(!h)return this;e&&(g=function(){!--h&&e.call(j)}),d=c.is(d,U)?d:g;var k=c.animation(a,b,d,g);for(f=this.items[--i].animate(k);i--;)this.items[i]&&!this.items[i].removed&&this.items[i].animateWith(f,k,k),this.items[i]&&!this.items[i].removed||h--;return this},nc.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},nc.getBBox=function(){for(var a=[],b=[],c=[],d=[],e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}return a=P[D](0,a),b=P[D](0,b),c=O[D](0,c),d=O[D](0,d),{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},nc.clone=function(a){a=this.paper.set();for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},nc.toString=function(){return"Rapha�l�s set"},nc.glow=function(a){var b=this.paper.set();return this.forEach(function(c){var d=c.glow(a);null!=d&&d.forEach(function(a){b.push(a)})}),b},nc.isPointInside=function(a,b){var c=!1;return this.forEach(function(d){return d.isPointInside(a,b)?(console.log("runned"),c=!0,!1):void 0}),c},c.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[z](d)&&(b.face[d]=a.face[d]);if(this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b],!a.svg){b.face["units-per-em"]=ab(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[z](e)){var f=a.glyphs[e];if(b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"},f.k)for(var g in f.k)f[z](g)&&(b.glyphs[e].k[g]=f.k[g])}}return a},v.getFont=function(a,b,d,e){if(e=e||"normal",d=d||"normal",b=+b||{normal:400,bold:700,lighter:300,bolder:800}[b]||400,c.fonts){var f=c.fonts[a];if(!f){var g=new RegExp("(^|\\s)"+a.replace(/[^\w\d\s+!~.:_-]/g,G)+"(\\s|$)","i");for(var h in c.fonts)if(c.fonts[z](h)&&g.test(h)){f=c.fonts[h];break}}var i;if(f)for(var j=0,k=f.length;k>j&&(i=f[j],i.face["font-weight"]!=b||i.face["font-style"]!=d&&i.face["font-style"]||i.face["font-stretch"]!=e);j++);return i}},v.print=function(a,b,d,e,f,g,h,i){g=g||"middle",h=O(P(h||0,1),-1),i=O(P(i||1,3),1);var j,k=I(d)[J](G),l=0,m=0,n=G;if(c.is(e,"string")&&(e=this.getFont(e)),e){j=(f||16)/e.face["units-per-em"];for(var o=e.face.bbox[J](w),p=+o[0],q=o[3]-o[1],r=0,s=+o[1]+("baseline"==g?q+ +e.face.descent:q/2),t=0,u=k.length;u>t;t++){if("\n"==k[t])l=0,x=0,m=0,r+=q*i;else{var v=m&&e.glyphs[k[t-1]]||{},x=e.glyphs[k[t]];l+=m?(v.w||e.w)+(v.k&&v.k[k[t]]||0)+e.w*h:0,m=1}x&&x.d&&(n+=c.transformPath(x.d,["t",l*j,r*j,"s",j,j,p,s,"t",(a-p)/j,(b-s)/j]))}}return this.path(n).attr({fill:"#000",stroke:"none"})},v.add=function(a){if(c.is(a,"array"))for(var b,d=this.set(),e=0,f=a.length;f>e;e++)b=a[e]||{},x[z](b.type)&&d.push(this[b.type]().attr(b));return d},c.format=function(a,b){var d=c.is(b,V)?[0][E](b):arguments;return a&&c.is(a,U)&&d.length-1&&(a=a.replace(y,function(a,b){return null==d[++b]?G:d[b]})),a||G},c.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),"function"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+""};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),c.ninja=function(){return B.was?A.win.Raphael=B.is:delete Raphael,c},c.st=nc,function(a,b,d){function e(){/in/.test(a.readyState)?setTimeout(e,9):c.eve("raphael.DOMload")}null==a.readyState&&a.addEventListener&&(a.addEventListener(b,d=function(){a.removeEventListener(b,d,!1),a.readyState="complete"},!1),a.readyState="loading"),e()}(document,"DOMContentLoaded"),b.on("raphael.DOMload",function(){u=!0}),function(){if(c.svg){var a="hasOwnProperty",b=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=c.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};c.toString=function(){return"Your browser supports SVG.\nYou are running Rapha�l "+this.version};var q=function(d,e){if(e){"string"==typeof d&&(d=q(d));for(var f in e)e[a](f)&&("xlink:"==f.substring(0,6)?d.setAttributeNS(n,f.substring(6),b(e[f])):d.setAttribute(f,b(e[f])))}else d=c._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(a,e){var j="linear",k=a.id+e,m=.5,n=.5,o=a.node,p=a.paper,r=o.style,s=c._g.doc.getElementById(k);if(!s){if(e=b(e).replace(c._radial_gradient,function(a,b,c){if(j="radial",b&&c){m=d(b),n=d(c);var e=2*(n>.5)-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&.5!=n&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/),"linear"==j){var t=e.shift();if(t=-d(t),isNaN(t))return null;var u=[0,0,f.cos(c.rad(t)),f.sin(c.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=c._parseDots(e);if(!w)return null;if(k=k.replace(/[\(\)\s,\xb0#]/g,"_"),a.gradient&&k!=a.gradient.id&&(p.defs.removeChild(a.gradient),delete a.gradient),!a.gradient){s=q(j+"Gradient",{id:k}),a.gradient=s,q(s,"radial"==j?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:a.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;y>x;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}return q(o,{fill:"url(#"+k+")",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1,1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if("path"==d.type){for(var g,h,i,j,k,m=b(e).toLowerCase().split("-"),n=d.paper,r=f?"end":"start",s=d.node,t=d.attrs,u=t["stroke-width"],v=m.length,w="classic",x=3,y=3,z=5;v--;)switch(m[v]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=m[v];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}if("open"==w?(x+=2,y+=2,z+=2,i=1,j=f?4:1,k={fill:"none",stroke:t.stroke}):(j=i=x/2,k={fill:t.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={},"none"!=w){var A="raphael-marker-"+w,B="raphael-marker-"+r+w+x+y;c._g.doc.getElementById(A)?p[A]++:(n.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[w],id:A})),p[A]=1);var C,D=c._g.doc.getElementById(B);D?(p[B]++,C=D.getElementsByTagName("use")[0]):(D=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:j,refY:y/2}),C=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),D.appendChild(C),n.defs.appendChild(D),p[B]=1),q(C,k);var E=i*("diamond"!=w&&"oval"!=w);f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-E*u):(g=E*u,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),k={},k["marker-"+r]="url(#"+B+")",(h||g)&&(k.d=c.getSubpath(t.path,g,h)),q(s,k),d._.arrows[r+"Path"]=A,d._.arrows[r+"Marker"]=B,d._.arrows[r+"dx"]=E,d._.arrows[r+"Type"]=w,d._.arrows[r+"String"]=e}else f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-g):(g=0,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),d._.arrows[r+"Path"]&&q(s,{d:c.getSubpath(t.path,g,h)}),delete d._.arrows[r+"Path"],delete d._.arrows[r+"Marker"],delete d._.arrows[r+"dx"],delete d._.arrows[r+"Type"],delete d._.arrows[r+"String"];for(k in p)if(p[a](k)&&!p[k]){var F=c._g.doc.getElementById(k);F&&F.parentNode.removeChild(F)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,c,d){if(c=u[b(c).toLowerCase()]){for(var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=c.length;h--;)g[h]=c[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[a](o)){if(!c._availableAttrs[a](o))continue;var p=f[o];switch(k[o]=p,o){case"blur":d.blur(p);break;case"href":case"title":var u=q("title"),w=c._g.doc.createTextNode(p);u.appendChild(w),i.appendChild(u);break;case"target":var x=i.parentNode;if("a"!=x.tagName.toLowerCase()){var u=q("a");x.insertBefore(u,i),u.appendChild(i),x=u}"target"==o?x.setAttributeNS(n,"show","blank"==p?"new":p):x.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var z=b(p).split(j);if(4==z.length){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var A=q("clipPath"),B=q("rect");A.id=c.createUUID(),q(B,{x:z[0],y:z[1],width:z[2],height:z[3]}),A.appendChild(B),d.paper.defs.appendChild(A),q(i,{"clip-path":"url(#"+A.id+")"}),d.clip=B}if(!p){var C=i.getAttribute("clip-path");if(C){var D=c._g.doc.getElementById(C.replace(/(^url\(#|\)$)/g,l));D&&D.parentNode.removeChild(D),q(i,{"clip-path":l}),delete d.clip}}break;case"path":"path"==d.type&&(q(i,{d:p?k.path=c._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":if(i.setAttribute(o,p),d._.dirty=1,!k.fx)break;o="x",p=k.x;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if("rx"==o&&"rect"==d.type)break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":if(i.setAttribute(o,p),d._.dirty=1,!k.fy)break;o="y",p=k.y;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if("ry"==o&&"rect"==d.type)break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":"rect"==d.type?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":"image"==d.type&&i.setAttributeNS(n,"href",p);break;case"stroke-width":(1!=d._.sx||1!=d._.sy)&&(p/=g(h(d._.sx),h(d._.sy))||1),d.paper._vbSize&&(p*=d.paper._vbSize),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var E=b(p).match(c._ISURL);if(E){A=q("pattern");var F=q("image");A.id=c.createUUID(),q(A,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(F,{x:0,y:0,"xlink:href":E[1]}),A.appendChild(F),function(a){c._preload(E[1],function(){var b=this.offsetWidth,c=this.offsetHeight;q(a,{width:b,height:c}),q(F,{width:b,height:c}),d.paper.safari()})}(A),d.paper.defs.appendChild(A),q(i,{fill:"url(#"+A.id+")"}),d.pattern=A,d.pattern&&s(d);break}var G=c.getRGB(p);if(G.error){if(("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var H=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(H){var I=H.getElementsByTagName("stop");q(I[I.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}}else delete f.gradient,delete k.gradient,!c.is(k.opacity,"undefined")&&c.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!c.is(k["fill-opacity"],"undefined")&&c.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});G[a]("opacity")&&q(i,{"fill-opacity":G.opacity>1?G.opacity/100:G.opacity});case"stroke":G=c.getRGB(p),i.setAttribute(o,G.hex),"stroke"==o&&G[a]("opacity")&&q(i,{"stroke-opacity":G.opacity>1?G.opacity/100:G.opacity}),"stroke"==o&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p);break;case"opacity":k.gradient&&!k[a]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){H=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),H&&(I=H.getElementsByTagName("stop"),q(I[I.length-1],{"stop-opacity":p}));break}default:"font-size"==o&&(p=e(p,10)+"px");var J=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[J]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if("text"==d.type&&(f[a]("text")||f[a]("font")||f[a]("font-size")||f[a]("x")||f[a]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(c._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;
if(f[a]("text")){for(g.text=f.text;h.firstChild;)h.removeChild(h.firstChild);for(var j,k=b(f.text).split("\n"),m=[],n=0,o=k.length;o>n;n++)j=q("tspan"),n&&q(j,{dy:i*x,x:g.x}),j.appendChild(c._g.doc.createTextNode(k[n])),h.appendChild(j),m[n]=j}else for(m=h.getElementsByTagName("tspan"),n=0,o=m.length;o>n;n++)n?q(m[n],{dy:i*x,x:g.x}):q(m[0],{dy:0});q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&c.is(r,"finite")&&q(m[0],{dy:r})}},z=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.matrix=c.matrix(),this.realPath=null,this.paper=b,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},A=c.el;z.prototype=A,A.constructor=z,c._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new z(c,b);return d.type="path",w(d,{fill:"none",stroke:"#000",path:a}),d},A.rotate=function(a,c,e){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this.transform(this._.transform.concat([["r",a,c,e]])),this},A.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this},A.translate=function(a,c){return this.removed?this:(a=b(a).split(j),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this.transform(this._.transform.concat([["t",a,c]])),this)},A.transform=function(b){var d=this._;if(null==b)return d.transform;if(c._extractTransform(this,b),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix}),1!=d.sx||1!=d.sy){var e=this.attrs[a]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},A.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},A.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},A.remove=function(){if(!this.removed&&this.node.parentNode){var a=this.paper;a.__set__&&a.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&a.defs.removeChild(this.gradient),c._tear(this,a),"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var b in this)this[b]="function"==typeof this[b]?c._removedFactory(b):null;this.removed=!0}},A._getBBox=function(){if("none"==this.node.style.display){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}return a&&this.hide(),b},A.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if("fill"==b&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==b)return this._.transform;for(var g=b.split(j),h={},i=0,l=g.length;l>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return l-1?h:h[g[0]]}if(null==d&&c.is(b,"array")){for(h={},i=0,l=b.length;l>i;i++)h[b[i]]=this.attr(b[i]);return h}if(null!=d){var m={};m[b]=d}else null!=b&&c.is(b,"object")&&(m=b);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[a](n)&&m[a](n)&&c.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[a](p)&&(m[p]=o[p])}return w(this,m),this},A.toFront=function(){if(this.removed)return this;"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var a=this.paper;return a.top!=this&&c._tofront(this,a),this},A.toBack=function(){if(this.removed)return this;var a=this.node.parentNode;return"a"==a.tagName.toLowerCase()?a.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):a.firstChild!=this.node&&a.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper),this.paper,this},A.insertAfter=function(a){if(this.removed)return this;var b=a.node||a[a.length-1].node;return b.nextSibling?b.parentNode.insertBefore(this.node,b.nextSibling):b.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this},A.insertBefore=function(a){if(this.removed)return this;var b=a.node||a[0].node;return b.parentNode.insertBefore(this.node,b),c._insertbefore(this,a,this.paper),this},A.blur=function(a){var b=this;if(0!==+a){var d=q("filter"),e=q("feGaussianBlur");b.attrs.blur=a,d.id=c.createUUID(),q(e,{stdDeviation:+a||1.5}),d.appendChild(e),b.paper.defs.appendChild(d),b._blur=d,q(b.node,{filter:"url(#"+d.id+")"})}else b._blur&&(b._blur.parentNode.removeChild(b._blur),delete b._blur,delete b.attrs.blur),b.node.removeAttribute("filter");return b},c._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new z(e,a);return f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs),f},c._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);return h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs),h},c._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);return g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs),g},c._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);return h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image",h},c._engine.text=function(a,b,d,e){var f=q("text");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);return g.attrs={x:b,y:d,"text-anchor":"middle",text:e,font:c._availableAttrs.font,stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs),g},c._engine.setSize=function(a,b){return this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a&&a.container,d=a.x,e=a.y,f=a.width,g=a.height;if(!b)throw new Error("SVG container not found.");var h,i=q("svg"),j="overflow:hidden;";return d=d||0,e=e||0,f=f||512,g=g||342,q(i,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg"}),1==b?(i.style.cssText=j+"position:absolute;left:"+d+"px;top:"+e+"px",c._g.doc.body.appendChild(i),h=1):(i.style.cssText=j+"position:relative",b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i)),b=new c._Paper,b.width=f,b.height=g,b.canvas=i,b.clear(),b._left=b._top=0,h&&(b.renderfix=function(){}),b.renderfix(),b},c._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f,h,i=g(c/this.width,d/this.height),j=this.top,l=e?"meet":"xMinYMin";for(null==a?(this._vbSize&&(i=1),delete this._vbSize,f="0 0 "+this.width+m+this.height):(this._vbSize=i,f=a+m+b+m+c+m+d),q(this.canvas,{viewBox:f,preserveAspectRatio:l});i&&j;)h="stroke-width"in j.attrs?j.attrs["stroke-width"]:1,j.attr({"stroke-width":h}),j._.dirty=1,j._.dirtyT=1,j=j.prev;return this._viewBox=[a,b,c,d,!!e],this},c.prototype.renderfix=function(){var a,b=this.canvas,c=b.style;try{a=b.getScreenCTM()||b.createSVGMatrix()}catch(d){a=b.createSVGMatrix()}var e=-a.e%1,f=-a.f%1;(e||f)&&(e&&(this._left=(this._left+e)%1,c.left=this._left+"px"),f&&(this._top=(this._top+f)%1,c.top=this._top+"px"))},c.prototype.clear=function(){c.eve("raphael.clear",this);for(var a=this.canvas;a.firstChild;)a.removeChild(a.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(c._g.doc.createTextNode("Created with Rapha�l "+c.version)),a.appendChild(this.desc),a.appendChild(this.defs=q("defs"))},c.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null};var B=c.st;for(var C in A)A[a](C)&&!B[a](C)&&(B[C]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(C))}}(),function(){if(c.vml){var a="hasOwnProperty",b=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=c.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(a){var d=/[ahqstv]/gi,e=c._pathToAbsolute;if(b(a).match(d)&&(e=c._path2curve),d=/[clmz]/g,e==c._pathToAbsolute&&!b(a).match(d)){var g=b(a).replace(q,function(a,b,c){var d=[],e="m"==b.toLowerCase(),g=p[b];return c.replace(s,function(a){e&&2==d.length&&(g+=d+p["m"==b?"l":"L"],d=[]),d.push(f(a*u))}),g+d});return g}var h,i,j=e(a);g=[];for(var k=0,l=j.length;l>k;k++){h=j[k],i=j[k][0].toLowerCase(),"z"==i&&(i="x");for(var m=1,r=h.length;r>m;m++)i+=f(h[m]*u)+(m!=r-1?",":o);g.push(i)}return g.join(n)},y=function(a,b,d){var e=c.matrix();return e.rotate(-a,.5,.5),{dx:e.x(b,d),dy:e.y(b,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q=u/b,r=u/c;if(m.visibility="hidden",b&&c){if(l.coordsize=i(q)+n+i(r),m.rotation=f*(0>b*c?-1:1),f){var s=y(f,d,e);d=s.dx,e=s.dy}if(0>b&&(p+="x"),0>c&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-q+n+e*-r,k||g.fillsize){var t=l.getElementsByTagName(j);t=t&&t[0],l.removeChild(t),k&&(s=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),t.position=s.dx*o+n+s.dy*o),g.fillsize&&(t.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(t)}m.visibility="visible"}};c.toString=function(){return"Your browser doesn�t support SVG. Falling down to VML.\nYou are running Rapha�l "+this.version};var A=function(a,c,d){for(var e=b(c).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";g--;)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),r=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),s=e;for(var t in i)i[a](t)&&(m[t]=i[t]);if(q&&(m.path=c._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur),(i.path&&"path"==e.type||q)&&(l.path=x(~b(m.path).toLowerCase().indexOf("r")?c._pathToAbsolute(m.path):m.path),"image"==e.type&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0))),"transform"in i&&e.transform(i.transform),r){var y=+m.cx,B=+m.cy,D=+m.rx||+m.r||0,E=+m.ry||+m.r||0;l.path=c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((y-D)*u),f((B-E)*u),f((y+D)*u),f((B+E)*u),f(y*u)),e._.dirty=1}if("clip-rect"in i){var G=b(i["clip-rect"]).split(k);if(4==G.length){G[2]=+G[2]+ +G[0],G[3]=+G[3]+ +G[1];var H=l.clipRect||c._g.doc.createElement("div"),I=H.style;I.clip=c.format("rect({1}px {2}px {3}px {0}px)",G),l.clipRect||(I.position="absolute",I.top=0,I.left=0,I.width=e.paper.width+"px",I.height=e.paper.height+"px",l.parentNode.insertBefore(H,l),H.appendChild(l),l.clipRect=H)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var J=e.textpath.style;i.font&&(J.font=i.font),i["font-family"]&&(J.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(J.fontSize=i["font-size"]),i["font-weight"]&&(J.fontWeight=i["font-weight"]),i["font-style"]&&(J.fontStyle=i["font-style"])}if("arrow-start"in i&&A(s,i["arrow-start"]),"arrow-end"in i&&A(s,i["arrow-end"],1),null!=i.opacity||null!=i["stroke-width"]||null!=i.fill||null!=i.src||null!=i.stroke||null!=i["stroke-width"]||null!=i["stroke-opacity"]||null!=i["fill-opacity"]||null!=i["stroke-dasharray"]||null!=i["stroke-miterlimit"]||null!=i["stroke-linejoin"]||null!=i["stroke-linecap"]){var K=l.getElementsByTagName(j),L=!1;if(K=K&&K[0],!K&&(L=K=F(j)),"image"==e.type&&i.src&&(K.src=i.src),i.fill&&(K.on=!0),(null==K.on||"none"==i.fill||null===i.fill)&&(K.on=!1),K.on&&i.fill){var M=b(i.fill).match(c._ISURL);if(M){K.parentNode==l&&l.removeChild(K),K.rotate=!0,K.src=M[1],K.type="tile";var N=e.getBBox(1);K.position=N.x+n+N.y,e._.fillpos=[N.x,N.y],c._preload(M[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else K.color=c.getRGB(i.fill).hex,K.src=o,K.type="solid",c.getRGB(i.fill).error&&(s.type in{circle:1,ellipse:1}||"r"!=b(i.fill).charAt())&&C(s,i.fill,K)&&(m.fill="none",m.gradient=i.fill,K.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var O=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+c.getRGB(i.fill).o+1||2)-1);O=h(g(O,0),1),K.opacity=O,K.src&&(K.color="none")}l.appendChild(K);var P=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],Q=!1;!P&&(Q=P=F("stroke")),(i.stroke&&"none"!=i.stroke||i["stroke-width"]||null!=i["stroke-opacity"]||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])&&(P.on=!0),("none"==i.stroke||null===i.stroke||null==P.on||0==i.stroke||0==i["stroke-width"])&&(P.on=!1);var R=c.getRGB(i.stroke);P.on&&i.stroke&&(P.color=R.hex),O=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+R.o+1||2)-1);var S=.75*(d(i["stroke-width"])||1);if(O=h(g(O,0),1),null==i["stroke-width"]&&(S=m["stroke-width"]),i["stroke-width"]&&(P.weight=S),S&&1>S&&(O*=S)&&(P.weight=1),P.opacity=O,i["stroke-linejoin"]&&(P.joinstyle=i["stroke-linejoin"]||"miter"),P.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(P.endcap="butt"==i["stroke-linecap"]?"flat":"square"==i["stroke-linecap"]?"square":"round"),i["stroke-dasharray"]){var T={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};P.dashstyle=T[a](i["stroke-dasharray"])?T[i["stroke-dasharray"]]:o}Q&&l.appendChild(P)}if("text"==s.type){s.paper.canvas.style.display=o;var U=s.paper.span,V=100,W=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=U.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),W=d(m["font-size"]||W&&W[0])||10,p.fontSize=W*V+"px",s.textpath.string&&(U.innerHTML=b(s.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var X=U.getBoundingClientRect();s.W=m.w=(X.right-X.left)/V,s.H=m.h=(X.bottom-X.top)/V,s.X=m.x,s.Y=m.y+s.H/2,("x"in i||"y"in i)&&(s.path.v=c.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));for(var Y=["x","y","text","font","font-family","font-weight","font-style","font-size"],Z=0,$=Y.length;$>Z;Z++)if(Y[Z]in i){s._.dirty=1;break}switch(m["text-anchor"]){case"start":s.textpath.style["v-text-align"]="left",s.bbx=s.W/2;break;case"end":s.textpath.style["v-text-align"]="right",s.bbx=-s.W/2;break;default:s.textpath.style["v-text-align"]="center",s.bbx=0}s.textpath.style["v-text-kern"]=!0}},C=function(a,f,g){a.attrs=a.attrs||{};var h=(a.attrs,Math.pow),i="linear",j=".5 .5";if(a.attrs.gradient=f,f=b(f).replace(c._radial_gradient,function(a,b,c){return i="radial",b&&c&&(b=d(b),c=d(c),h(b-.5,2)+h(c-.5,2)>.25&&(c=e.sqrt(.25-h(b-.5,2))*(2*(c>.5)-1)+.5),j=b+n+c),o}),f=f.split(/\s*\-\s*/),"linear"==i){var k=f.shift();if(k=-d(k),isNaN(k))return null}var l=c._parseDots(f);if(!l)return null;if(a=a.shape||a.node,l.length){a.removeChild(g),g.on=!0,g.method="none",g.color=l[0].color,g.color2=l[l.length-1].color;for(var m=[],p=0,q=l.length;q>p;p++)l[p].offset&&m.push(l[p].offset+n+l[p].color);g.colors=m.length?m.join():"0% "+g.color,"radial"==i?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=j,g.angle=0):(g.type="gradient",g.angle=(270-k)%360),a.appendChild(g)}return 1},D=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=b,this.matrix=c.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},E=c.el;D.prototype=E,E.constructor=D,E.transform=function(a){if(null==a)return this._.transform;var d,e=this.paper._viewBoxShift,f=e?"s"+[e.scale,e.scale]+"-1-1t"+[e.dx,e.dy]:o;e&&(d=a=b(a).replace(/\.{3}|\u2026/g,this._.transform||o)),c._extractTransform(this,f+a);var g,h=this.matrix.clone(),i=this.skew,j=this.node,k=~b(this.attrs.fill).indexOf("-"),l=!b(this.attrs.fill).indexOf("url(");if(h.translate(1,1),l||k||"image"==this.type)if(i.matrix="1 0 0 1",i.offset="0 0",g=h.split(),k&&g.noRotation||!g.isSimple){j.style.filter=h.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;j.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else j.style.filter=o,z(this,g.scalex,g.scaley,g.dx,g.dy,g.rotate);else j.style.filter=o,i.matrix=b(h),i.offset=h.offset();return d&&(this._.transform=d),this},E.rotate=function(a,c,e){if(this.removed)return this;if(null!=a){if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,c,e]])),this}},E.translate=function(a,c){return this.removed?this:(a=b(a).split(k),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=c),this.transform(this._.transform.concat([["t",a,c]])),this)},E.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display="none"),this},E.show=function(){return!this.removed&&(this.node.style.display=o),this},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),c.eve.unbind("raphael.*.*."+this.id),c._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;this.removed=!0}},E.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if(b==j&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var g=b.split(k),h={},i=0,m=g.length;m>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return m-1?h:h[g[0]]}if(this.attrs&&null==d&&c.is(b,"array")){for(h={},i=0,m=b.length;m>i;i++)h[b[i]]=this.attr(b[i]);return h}var n;null!=d&&(n={},n[b]=d),null==d&&c.is(b,"object")&&(n=b);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[a](o)&&n[a](o)&&c.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[a](q)&&(n[q]=p[q])}n.text&&"text"==this.type&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&c._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper)),this)},E.insertAfter=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[a.length-1]),a.node.nextSibling?a.node.parentNode.insertBefore(this.node,a.node.nextSibling):a.node.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this)},E.insertBefore=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[0]),a.node.parentNode.insertBefore(this.node,a.node),c._insertbefore(this,a,this.paper),this)},E.blur=function(a){var b=this.node.runtimeStyle,d=b.filter;return d=d.replace(r,o),0!==+a?(this.attrs.blur=a,b.filter=d+n+m+".Blur(pixelradius="+(+a||1.5)+")",b.margin=c.format("-{0}px 0 0 -{0}px",f(+a||1.5))):(b.filter=d,b.margin=0,delete this.attrs.blur),this},c._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");return f.on=!0,c.appendChild(f),d.skew=f,d.transform(o),d},c._engine.rect=function(a,b,d,e,f,g){var h=c._rectPath(b,d,e,f,g),i=a.path(h),j=i.attrs;return i.X=j.x=b,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect",i},c._engine.ellipse=function(a,b,c,d,e){var f=a.path();return f.attrs,f.X=b-d,f.Y=c-e,f.W=2*d,f.H=2*e,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e}),f},c._engine.circle=function(a,b,c,d){var e=a.path();return e.attrs,e.X=b-d,e.Y=c-d,e.W=e.H=2*d,e.type="circle",B(e,{cx:b,cy:c,r:d}),e},c._engine.image=function(a,b,d,e,f,g){var h=c._rectPath(d,e,f,g),i=a.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];return k.src=b,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=b,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0),i},c._engine.text=function(a,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=c.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=b(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,a),l={fill:"#000",stroke:"none",font:c._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=b(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),a.canvas.appendChild(h);var m=F("skew");return m.on=!0,h.appendChild(m),k.skew=m,k.transform(o),k},c._engine.setSize=function(a,b){var d=this.canvas.style;return this.width=a,this.height=b,a==+a&&(a+="px"),b==+b&&(b+="px"),d.width=a,d.height=b,d.clip="rect(0 "+a+" "+b+" 0)",this._viewBox&&c._engine.setViewBox.apply(this,this._viewBox),this},c._engine.setViewBox=function(a,b,d,e,f){c.eve("raphael.setViewBox",this,this._viewBox,[a,b,d,e,f]);var h,i,j=this.width,k=this.height,l=1/g(d/j,e/k);return f&&(h=k/e,i=j/d,j>d*h&&(a-=(j-d*h)/2/h),k>e*i&&(b-=(k-e*i)/2/i)),this._viewBox=[a,b,d,e,!!f],this._viewBoxShift={dx:-a,dy:-b,scale:l},this.forEach(function(a){a.transform("...")}),this};var F;c._engine.initWin=function(a){var b=a.document;b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},c._engine.initWin(c._g.win),c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a.container,d=a.height,e=a.width,f=a.x,g=a.y;if(!b)throw new Error("VML container not found.");var h=new c._Paper,i=h.canvas=c._g.doc.createElement("div"),j=i.style;return f=f||0,g=g||0,e=e||512,d=d||342,h.width=e,h.height=d,e==+e&&(e+="px"),d==+d&&(d+="px"),h.coordsize=1e3*u+n+1e3*u,h.coordorigin="0 0",h.span=c._g.doc.createElement("span"),h.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",i.appendChild(h.span),j.cssText=c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",e,d),1==b?(c._g.doc.body.appendChild(i),j.left=f+"px",j.top=g+"px",j.position="absolute"):b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i),h.renderfix=function(){},h},c.prototype.clear=function(){c.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=c._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},c.prototype.remove=function(){c.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;return!0};var G=c.st;for(var H in E)E[a](H)&&!G[a](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}}(),B.was?A.win.Raphael=c:Raphael=c,c});
(function () {
var tokenRegex = /\{([^\}]+)\}/g,
    objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, // matches .xxxxx or ["xxxxx"] to run over object properties
    replacer = function (all, key, obj) {
        var res = obj;
        key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
            name = name || quotedName;
            if (res) {
                if (name in res) {
                    res = res[name];
                }
                typeof res == "function" && isFunc && (res = res());
            }
        });
        res = (res == null || res == obj ? all : res) + "";
        return res;
    },
    fill = function (str, obj) {
        return String(str).replace(tokenRegex, function (all, key) {
            return replacer(all, key, obj);
        });
    };
    Raphael.fn.popup = function (X, Y, set, pos, ret) {
        pos = String(pos || "top-middle").split("-");
        pos[1] = pos[1] || "middle";
        var r = 5,
            bb = set.getBBox(),
            w = Math.round(bb.width),
            h = Math.round(bb.height),
            x = Math.round(bb.x) - r,
            y = Math.round(bb.y) - r,
            gap = Math.min(h / 2, w / 2, 10),
            shapes = {
                top: "M{x},{y}h{w4},{w4},{w4},{w4}a{r},{r},0,0,1,{r},{r}v{h4},{h4},{h4},{h4}a{r},{r},0,0,1,-{r},{r}l-{right},0-{gap},{gap}-{gap}-{gap}-{left},0a{r},{r},0,0,1-{r}-{r}v-{h4}-{h4}-{h4}-{h4}a{r},{r},0,0,1,{r}-{r}z",
                bottom: "M{x},{y}l{left},0,{gap}-{gap},{gap},{gap},{right},0a{r},{r},0,0,1,{r},{r}v{h4},{h4},{h4},{h4}a{r},{r},0,0,1,-{r},{r}h-{w4}-{w4}-{w4}-{w4}a{r},{r},0,0,1-{r}-{r}v-{h4}-{h4}-{h4}-{h4}a{r},{r},0,0,1,{r}-{r}z",
                right: "M{x},{y}h{w4},{w4},{w4},{w4}a{r},{r},0,0,1,{r},{r}v{h4},{h4},{h4},{h4}a{r},{r},0,0,1,-{r},{r}h-{w4}-{w4}-{w4}-{w4}a{r},{r},0,0,1-{r}-{r}l0-{bottom}-{gap}-{gap},{gap}-{gap},0-{top}a{r},{r},0,0,1,{r}-{r}z",
                left: "M{x},{y}h{w4},{w4},{w4},{w4}a{r},{r},0,0,1,{r},{r}l0,{top},{gap},{gap}-{gap},{gap},0,{bottom}a{r},{r},0,0,1,-{r},{r}h-{w4}-{w4}-{w4}-{w4}a{r},{r},0,0,1-{r}-{r}v-{h4}-{h4}-{h4}-{h4}a{r},{r},0,0,1,{r}-{r}z"
            },
            offset = {
                hx0: X - (x + r + w - gap * 2),
                hx1: X - (x + r + w / 2 - gap),
                hx2: X - (x + r + gap),
                vhy: Y - (y + r + h + r + gap),
                "^hy": Y - (y - gap)
                
            },
            mask = [{
                x: x + r,
                y: y,
                w: w,
                w4: w / 4,
                h4: h / 4,
                right: 0,
                left: w - gap * 2,
                bottom: 0,
                top: h - gap * 2,
                r: r,
                h: h,
                gap: gap
            }, {
                x: x + r,
                y: y,
                w: w,
                w4: w / 4,
                h4: h / 4,
                left: w / 2 - gap,
                right: w / 2 - gap,
                top: h / 2 - gap,
                bottom: h / 2 - gap,
                r: r,
                h: h,
                gap: gap
            }, {
                x: x + r,
                y: y,
                w: w,
                w4: w / 4,
                h4: h / 4,
                left: 0,
                right: w - gap * 2,
                top: 0,
                bottom: h - gap * 2,
                r: r,
                h: h,
                gap: gap
            }][pos[1] == "middle" ? 1 : (pos[1] == "top" || pos[1] == "left") * 2];
            var dx = 0,
                dy = 0,
                out = this.path(fill(shapes[pos[0]], mask)).insertBefore(set);
            switch (pos[0]) {
                case "top":
                    dx = X - (x + r + mask.left + gap);
                    dy = Y - (y + r + h + r + gap);
                break;
                case "bottom":
                    dx = X - (x + r + mask.left + gap);
                    dy = Y - (y - gap);
                break;
                case "left":
                    dx = X - (x + r + w + r + gap);
                    dy = Y - (y + r + mask.top + gap);
                break;
                case "right":
                    dx = X - (x - gap);
                    dy = Y - (y + r + mask.top + gap);
                break;
            }
            out.translate(dx, dy);
            if (ret) {
                ret = out.attr("path");
                out.remove();
                return {
                    path: ret,
                    dx: dx,
                    dy: dy
                };
            }
            set.translate(dx, dy);
            return out;
    };
})();
/* ===================================================
 *  jquery-sortable.js v0.9.11
 *  http://johnny.github.com/jquery-sortable/
 * ===================================================
 *  Copyright (c) 2012 Jonas von Andrian
 *  All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *  * The name of the author may not be used to endorse or promote products
 *    derived from this software without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 *  ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 *  DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 *  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 *  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 *  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 *  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 *  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * ========================================================== */


!function ( $, window, undefined){
  var eventNames,
  pluginName = 'sortable',
  containerDefaults = {
    // If true, items can be dragged from this container
    drag: true,
    // If true, items can be droped onto this container
    drop: true,
    // Exclude items from being draggable, if the
    // selector matches the item
    exclude: "",
    // If true, search for nested containers within an item
    nested: true,
    // If true, the items are assumed to be arranged vertically
    vertical: true
  }, // end container defaults
  groupDefaults = {
    // This is executed after the placeholder has been moved.
    afterMove: function ($placeholder, container) {
    },
    // The exact css path between the container and its items, e.g. "> tbody"
    containerPath: "",
    // The css selector of the containers
    containerSelector: "ol, ul",
    // Distance the mouse has to travel to start dragging
    distance: 0,
    // The css selector of the drag handle
    handle: "",
    // The exact css path between the item and its subcontainers
    itemPath: "",
    // The css selector of the items
    itemSelector: "li",
    // Check if the dragged item may be inside the container.
    // Use with care, since the search for a valid container entails a depth first search
    // and may be quite expensive.
    isValidTarget: function ($item, container) {
      return true
    },
    // Executed before onDrop if placeholder is detached.
    // This happens if pullPlaceholder is set to false and the drop occurs outside a container.
    onCancel: function ($item, container, _super) {
    },
    // Executed at the beginning of a mouse move event.
    // The Placeholder has not been moved yet.
    onDrag: function ($item, position, _super) {
      $item.css(position)
    },
    // Called after the drag has been started,
    // that is the mouse button is beeing held down and
    // the mouse is moving.
    // The container is the closest initialized container.
    // Therefore it might not be the container, that actually contains the item.
    onDragStart: function ($item, container, _super) {
      $item.css({
        height: $item.height(),
        width: $item.width()
      })
      $item.addClass("dragged")
      $("body").addClass("dragging")
    },
    // Called when the mouse button is beeing released
    onDrop: function ($item, container, _super) {
      $item.removeClass("dragged").removeAttr("style")
      $("body").removeClass("dragging")
    },
    // Called on mousedown.
    onMousedown: function($item, event, _super) {
      event.preventDefault()
    },
    // Template for the placeholder. Can be any valid jQuery input
    // e.g. a string, a DOM element.
    // The placeholder must have the class "placeholder"
    placeholder: '<li class="placeholder"/>',
    // If true, the position of the placeholder is calculated on every mousemove.
    // If false, it is only calculated when the mouse is above a container.
    pullPlaceholder: true,
    // Specifies serialization of the container group.
    // The pair $parent/$children is either container/items or item/subcontainers.
    // Note that this default method only works, if every item only has one subcontainer
    serialize: function ($parent, $children, parentIsContainer) {
      var result = $.extend({}, $parent.data())
      
      if(parentIsContainer)
        return $children
      else if ($children[0]){
        result.children = $children
        delete result.subContainer
      }

      delete result.sortable

      return result
    },
    // Set tolerance while dragging. Positive values decrease sensitivity,
    // negative values increase it.
    tolerance: 0
  }, // end group defaults
  containerGroups = {},
  groupCounter = 0,
  emptyBox = {
    left: 0,
    top: 0,
    bottom: 0,
    right:0
  }
  eventNames = {
    start: "touchstart.sortable mousedown.sortable",
    drop: "touchend.sortable touchcancel.sortable mouseup.sortable",
    drag: "touchmove.sortable mousemove.sortable",
    scroll: "scroll.sortable"
  }

  /*
   * a is Array [left, right, top, bottom]
   * b is array [left, top]
   */
  function d(a,b) {
    var x = Math.max(0, a[0] - b[0], b[0] - a[1]),
    y = Math.max(0, a[2] - b[1], b[1] - a[3])
    return x+y;
  }

  function setDimensions(array, dimensions, tolerance, useOffset) {
    var i = array.length,
    offsetMethod = useOffset ? "offset" : "position"
    tolerance = tolerance || 0

    while(i--){
      var el = array[i].el ? array[i].el : $(array[i]),
      // use fitting method
      pos = el[offsetMethod]()
      pos.left += parseInt(el.css('margin-left'), 10)
      pos.top += parseInt(el.css('margin-top'),10)
      dimensions[i] = [
        pos.left - tolerance,
        pos.left + el.outerWidth() + tolerance,
        pos.top - tolerance,
        pos.top + el.outerHeight() + tolerance
      ]
    }
  }

  function getRelativePosition(pointer, element) {
    var offset = element.offset()
    return {
      left: pointer.left - offset.left,
      top: pointer.top - offset.top
    }
  }

  function sortByDistanceDesc(dimensions, pointer, lastPointer) {
    pointer = [pointer.left, pointer.top]
    lastPointer = lastPointer && [lastPointer.left, lastPointer.top]

    var dim,
    i = dimensions.length,
    distances = []

    while(i--){
      dim = dimensions[i]
      distances[i] = [i,d(dim,pointer), lastPointer && d(dim, lastPointer)]
    }
    distances = distances.sort(function  (a,b) {
      return b[1] - a[1] || b[2] - a[2] || b[0] - a[0]
    })

    // last entry is the closest
    return distances
  }

  function ContainerGroup(options) {
    this.options = $.extend({}, groupDefaults, options)
    this.containers = []
    this.scrollProxy = $.proxy(this.scroll, this)
    this.dragProxy = $.proxy(this.drag, this)
    this.dropProxy = $.proxy(this.drop, this)

    if(!this.options.parentContainer){
      this.placeholder = $(this.options.placeholder)
      if(!options.isValidTarget)
        this.options.isValidTarget = undefined
    }
  }

  ContainerGroup.get = function  (options) {
    if( !containerGroups[options.group]) {
      if(!options.group)
        options.group = groupCounter ++
      containerGroups[options.group] = new ContainerGroup(options)
    }
    return containerGroups[options.group]
  }

  ContainerGroup.prototype = {
    dragInit: function  (e, itemContainer) {
      this.$document = $(itemContainer.el[0].ownerDocument)

      if(itemContainer.enabled()){
        this.toggleListeners('on')

        // get item to drag
        this.item = $(e.target).closest(this.options.itemSelector)
        this.itemContainer = itemContainer

        this.setPointer(e)

        this.options.onMousedown(this.item, e, groupDefaults.onMousedown)
      } else {
        this.toggleListeners('on', ['drop'])
      }

      this.dragInitDone = true
    },
    drag: function  (e) {
      if(!this.dragging){
        if(!this.distanceMet(e))
          return

        this.options.onDragStart(this.item, this.itemContainer, groupDefaults.onDragStart)
        this.item.before(this.placeholder)
        this.dragging = true
      }

      this.setPointer(e)
      // place item under the cursor
      this.options.onDrag(this.item,
                          getRelativePosition(this.pointer, this.item.offsetParent()),
                          groupDefaults.onDrag)

      var x = e.pageX,
      y = e.pageY,
      box = this.sameResultBox,
      t = this.options.tolerance

      if(!box || box.top - t > y || box.bottom + t < y || box.left - t > x || box.right + t < x)
        if(!this.searchValidTarget())
          this.placeholder.detach()
    },
    drop: function  (e) {
      this.toggleListeners('off')

      this.dragInitDone = false

      if(this.dragging){
        // processing Drop, check if placeholder is detached
        if(this.placeholder.closest("html")[0])
          this.placeholder.before(this.item).detach()
        else
          this.options.onCancel(this.item, this.itemContainer, groupDefaults.onCancel)

        this.options.onDrop(this.item, this.getContainer(this.item), groupDefaults.onDrop)

        // cleanup
        this.clearDimensions()
        this.clearOffsetParent()
        this.lastAppendedItem = this.sameResultBox = undefined
        this.dragging = false
      }
    },
    searchValidTarget: function  (pointer, lastPointer) {
      if(!pointer){
        pointer = this.relativePointer || this.pointer
        lastPointer = this.lastRelativePointer || this.lastPointer
      }

      var distances = sortByDistanceDesc(this.getContainerDimensions(),
                                         pointer,
                                         lastPointer),
      i = distances.length

      while(i--){
        var index = distances[i][0],
        distance = distances[i][1]

        if(!distance || this.options.pullPlaceholder){
          var container = this.containers[index]
          if(!container.disabled){
            if(!this.$getOffsetParent()){
              var offsetParent = container.getItemOffsetParent()
              pointer = getRelativePosition(pointer, offsetParent)
              lastPointer = getRelativePosition(lastPointer, offsetParent)
            }
            if(container.searchValidTarget(pointer, lastPointer))
              return true
          }
        }
      }
      if(this.sameResultBox)
        this.sameResultBox = undefined
    },
    movePlaceholder: function  (container, item, method, sameResultBox) {
      var lastAppendedItem = this.lastAppendedItem
      if(!sameResultBox && lastAppendedItem && lastAppendedItem[0] === item[0])
        return;

      item[method](this.placeholder)
      this.lastAppendedItem = item
      this.sameResultBox = sameResultBox
      this.options.afterMove(this.placeholder, container)
    },
    getContainerDimensions: function  () {
      if(!this.containerDimensions)
        setDimensions(this.containers, this.containerDimensions = [], this.options.tolerance, !this.$getOffsetParent())
      return this.containerDimensions
    },
    getContainer: function  (element) {
      return element.closest(this.options.containerSelector).data(pluginName)
    },
    $getOffsetParent: function  () {
      if(this.offsetParent === undefined){
        var i = this.containers.length - 1,
        offsetParent = this.containers[i].getItemOffsetParent()

        if(!this.options.parentContainer){
          while(i--){
            if(offsetParent[0] != this.containers[i].getItemOffsetParent()[0]){
              // If every container has the same offset parent,
              // use position() which is relative to this parent,
              // otherwise use offset()
              // compare #setDimensions
              offsetParent = false
              break;
            }
          }
        }
        
        this.offsetParent = offsetParent
      }
      return this.offsetParent
    },
    setPointer: function (e) {
      var pointer = {
        left: e.pageX,
        top: e.pageY
      }

      if(this.$getOffsetParent()){
        var relativePointer = getRelativePosition(pointer, this.$getOffsetParent())
        this.lastRelativePointer = this.relativePointer
        this.relativePointer = relativePointer
      }

      this.lastPointer = this.pointer
      this.pointer = pointer
    },
    distanceMet: function (e) {
      return (Math.max(
 				Math.abs(this.pointer.left - e.pageX),
				Math.abs(this.pointer.top - e.pageY)
			) >= this.options.distance)
    },
    scroll: function  (e) {
      this.clearDimensions()
      this.clearOffsetParent()
    },
    toggleListeners: function (method, events) {
      var that = this
      events = events || ['drag','drop','scroll']

      $.each(events,function  (i,event) {
        that.$document[method](eventNames[event], that[event + 'Proxy'])
      })
    },
    clearOffsetParent: function () {
      this.offsetParent = undefined
    },
    // Recursively clear container and item dimensions
    clearDimensions: function  () {
      this.containerDimensions = undefined
      var i = this.containers.length
      while(i--){
        this.containers[i].clearDimensions()
      }
    }
  }

  function Container(element, options) {
    this.el = element
    this.options = $.extend( {}, containerDefaults, options)

    this.group = ContainerGroup.get(this.options)
    this.rootGroup = this.options.rootGroup = this.options.rootGroup || this.group
    this.parentContainer = this.options.parentContainer
    this.handle = this.rootGroup.options.handle || this.rootGroup.options.itemSelector

    this.el.on(eventNames.start, this.handle, $.proxy(this.dragInit, this))

    if(this.options.drop)
      this.group.containers.push(this)
  }

  Container.prototype = {
    dragInit: function  (e) {
      var rootGroup = this.rootGroup

      if( !rootGroup.dragInitDone &&
          e.which === 1 &&
          this.options.drag &&
          !$(e.target).is(this.options.exclude))
        rootGroup.dragInit(e, this)
    },
    searchValidTarget: function  (pointer, lastPointer) {
      var distances = sortByDistanceDesc(this.getItemDimensions(),
                                         pointer,
                                         lastPointer),
      i = distances.length,
      rootGroup = this.rootGroup,
      validTarget = !rootGroup.options.isValidTarget ||
        rootGroup.options.isValidTarget(rootGroup.item, this)

      if(!i && validTarget){
        rootGroup.movePlaceholder(this, this.el, "append")
        return true
      } else
        while(i--){
          var index = distances[i][0],
          distance = distances[i][1]
          if(!distance && this.hasChildGroup(index)){
            var found = this.getContainerGroup(index).searchValidTarget(pointer, lastPointer)
            if(found)
              return true
          }
          else if(validTarget){
            this.movePlaceholder(index, pointer)
            return true
          }
        }
    },
    movePlaceholder: function  (index, pointer) {
      var item = $(this.items[index]),
      dim = this.itemDimensions[index],
      method = "after",
      width = item.outerWidth(),
      height = item.outerHeight(),
      offset = item.offset(),
      sameResultBox = {
        left: offset.left,
        right: offset.left + width,
        top: offset.top,
        bottom: offset.top + height
      }
      if(this.options.vertical){
        var yCenter = (dim[2] + dim[3]) / 2,
        inUpperHalf = pointer.top <= yCenter
        if(inUpperHalf){
          method = "before"
          sameResultBox.bottom -= height / 2
        } else
          sameResultBox.top += height / 2
      } else {
        var xCenter = (dim[0] + dim[1]) / 2,
        inLeftHalf = pointer.left <= xCenter
        if(inLeftHalf){
          method = "before"
          sameResultBox.right -= width / 2
        } else
          sameResultBox.left += width / 2
      }
      if(this.hasChildGroup(index))
        sameResultBox = emptyBox
      this.rootGroup.movePlaceholder(this, item, method, sameResultBox)
    },
    getItemDimensions: function  () {
      if(!this.itemDimensions){
        this.items = this.$getChildren(this.el, "item").filter(":not(.placeholder, .dragged)").get()
        setDimensions(this.items, this.itemDimensions = [], this.options.tolerance)
      }
      return this.itemDimensions
    },
    getItemOffsetParent: function  () {
      var offsetParent,
      el = this.el
      // Since el might be empty we have to check el itself and
      // can not do something like el.children().first().offsetParent()
      if(el.css("position") === "relative" || el.css("position") === "absolute"  || el.css("position") === "fixed")
        offsetParent = el
      else
        offsetParent = el.offsetParent()
      return offsetParent
    },
    hasChildGroup: function (index) {
      return this.options.nested && this.getContainerGroup(index)
    },
    getContainerGroup: function  (index) {
      var childGroup = $.data(this.items[index], "subContainer")
      if( childGroup === undefined){
        var childContainers = this.$getChildren(this.items[index], "container")
        childGroup = false

        if(childContainers[0]){
          var options = $.extend({}, this.options, {
            parentContainer: this,
            group: groupCounter ++
          })
          childGroup = childContainers[pluginName](options).data(pluginName).group
        }
        $.data(this.items[index], "subContainer", childGroup)
      }
      return childGroup
    },
    enabled: function () {
      return !this.disabled && (!this.parentContainer || this.parentContainer.enabled())
    },
    $getChildren: function (parent, type) {
      var options = this.rootGroup.options,
      path = options[type + "Path"],
      selector = options[type + "Selector"]

      parent = $(parent)
      if(path)
        parent = parent.find(path)

      return parent.children(selector)
    },
    _serialize: function (parent, isContainer) {
      var that = this,
      childType = isContainer ? "item" : "container",
      
      children = this.$getChildren(parent, childType).not(this.options.exclude).map(function () {
        return that._serialize($(this), !isContainer)
      }).get()
      
      return this.rootGroup.options.serialize(parent, children, isContainer)
    },
    clearDimensions: function  () {
      this.itemDimensions = undefined
      if(this.items && this.items[0]){
        var i = this.items.length
        while(i--){
          var group = $.data(this.items[i], "subContainer")
          if(group)
            group.clearDimensions()
        }
      }
    }
  }

  var API = {
    enable: function  (ignoreChildren) {
      this.disabled = false
    },
    disable: function  (ignoreChildren) {
      this.disabled = true
    },
    serialize: function () {
      return this._serialize(this.el, true)
    }
  }

  $.extend(Container.prototype, API)
  
  /**
   * jQuery API
   *
   * Parameters are
   *   either options on init
   *   or a method name followed by arguments to pass to the method
   */
  $.fn[pluginName] = function(methodOrOptions) {
    var args = Array.prototype.slice.call(arguments, 1)

    return this.map(function(){
      var $t = $(this),
      object = $t.data(pluginName)

      if(object && API[methodOrOptions])
        return API[methodOrOptions].apply(object, args) || this
      else if(!object && (methodOrOptions === undefined ||
                          typeof methodOrOptions === "object"))
        $t.data(pluginName, new Container($t, methodOrOptions))

      return this
    });
  };

}(jQuery, window)
;

(function ($) {

  $.fn.customScrollbar = function (options, args) {

    var defaultOptions = {
      skin:undefined,
      hScroll:true,
      vScroll:true,
      updateOnWindowResize:false,
      onCustomScroll:undefined,
	  heightChart: 0
    }

    var Scrollable = function (element, options) {
      this.$element = $(element);
      this.options = options;
      this.addScrollableClass();
      this.addSkinClass();
      this.addScrollBarComponents();
      if (this.options.vScroll)
        this.vScrollbar = new Scrollbar(this, new VSizing());
      if (this.options.hScroll)
        this.hScrollbar = new Scrollbar(this, new HSizing());
      this.$element.data("scrollable", this);
      if (window.jQueryCustomScrollbars == undefined)
        window.jQueryCustomScrollbars = [];
      this.addToScrollbarsHierarchy();
      this.initKeyboardScrolling();
      this.bindEvents();
    }

    Scrollable.prototype = {

      addScrollableClass: function() {
        if(!this.$element.hasClass("scrollable")) {
          this.scrollableAdded = true;
          this.$element.addClass("scrollable");
        }
      },
      
      removeScrollableClass: function() {
        if(this.scrollableAdded)
          this.$element.removeClass("scrollable");
      },

      addSkinClass:function () {
        if (typeof(this.options.skin) == "string" && !this.$element.hasClass(this.options.skin)) {
          this.skinClassAdded = true;
          this.$element.addClass(this.options.skin);
        }
      },
      
      removeSkinClass: function() {
        if(this.skinClassAdded)
          this.$element.removeClass(this.options.skin);
      },

      addScrollBarComponents:function () {
        this.assignViewPort();
        if (this.$viewPort.length == 0) {
          this.$element.wrapInner("<div class=\"viewport\" />")
          this.assignViewPort();
          this.viewPortAdded = true;
        }
        this.assignOverview();
        if (this.$overview.length == 0) {
          this.$viewPort.wrapInner("<div class=\"overview\" />")
          this.assignOverview();
          this.overviewAdded = true;
        }
        this.addScrollBar("vertical", "prepend");
        this.addScrollBar("horizontal", "append");
      },

      removeScrollbarComponents: function() {
        this.removeScrollbar("vertical");
        this.removeScrollbar("horizontal");
        if(this.overviewAdded)
          this.$element.unwrap();
        if(this.viewPortAdded)
          this.$element.unwrap();
      },
      
      removeScrollbar: function(orientation) {
        if(this[orientation + "ScrollbarAdded"])
          this.$element.find(".scroll-bar." + orientation).remove();
      },

      assignViewPort:function () {
        this.$viewPort = this.$element.find(".viewport");
      },

      assignOverview:function () {
        this.$overview = this.$viewPort.find(".overview");
      },

      addScrollBar:function (orientation, fun) {
        if (this.$element.find(".scroll-bar." + orientation).length == 0) {
          this.$element[fun]("<div class='scroll-bar " + orientation + "'><div class='thumb'></div></div>")
          this[orientation + "ScrollbarAdded"] = true;
        }
      },

      resize:function () {
        if (this.vScrollbar)
          this.vScrollbar.resize();
        if (this.hScrollbar)
          this.hScrollbar.resize();
      },

      scrollTo:function (element) {
        if (this.vScrollbar)
          this.vScrollbar.scrollToElement(element);
        if (this.hScrollbar)
          this.hScrollbar.scrollToElement(element);
      },

      scrollToXY:function (x, y) {
        this.scrollToX(x);
        this.scrollToY(y);
      },

      scrollToX:function (x) {
        if (this.hScrollbar)
          this.hScrollbar.scrollTo(x);
      },

      scrollToY:function (y) {
        if (this.vScrollbar)
          this.vScrollbar.scrollTo(y);
      },
      
      remove: function() {
        this.removeScrollableClass();
        this.removeSkinClass();
        this.removeScrollbarComponents();
        this.$element.data("scrollable", null);
        window.jQueryCustomScrollbars = null;
        this.removeKeyboardScrolling();
        if(this.vScrollbar)
          this.vScrollbar.remove();
        if(this.hScrollbar)
          this.hScrollbar.remove();
      },

      isInside:function (element, wrappingElement) {
        var $element = $(element);
        var $wrappingElement = $(wrappingElement);
        var elementOffset = $element.offset();
        var wrappingElementOffset = $wrappingElement.offset();
        return (elementOffset.top >= wrappingElementOffset.top) && (elementOffset.left >= wrappingElementOffset.left) &&
          (elementOffset.top + $element.height() <= wrappingElementOffset.top + $wrappingElement.height()) &&
          (elementOffset.left + $element.width() <= wrappingElementOffset.left + $wrappingElement.width())
      },

      addNested:function (otherScrollable) {
        if (this.addNestedToOneFromList(this.nestedScrollbars, otherScrollable))
          return true;
        else if (this.isInside(otherScrollable.$viewPort, this.$overview)) {
          this.nestedScrollbars.push(otherScrollable);
          return true;
        }
        else
          return false;
      },

      addToScrollbarsHierarchy:function () {
        this.nestedScrollbars = [];
        if (!this.addNestedToOneFromList(this, window.jQueryCustomScrollbars))
          window.jQueryCustomScrollbars.push(this);
      },

      addNestedToOneFromList:function (scrollable, list) {
        for (var i = 0; i < list.length; i++) {
          if (list[i].addNested(scrollable))
            return true;
          else if (scrollable.addNested(list[i])) {
            list[i] = scrollable;
            return true;
          }
        }
        return false;
      },

      isMouseOver:function () {
        for (var i = 0; i < this.nestedScrollbars.length; i++)
          if (this.nestedScrollbars[i].isMouseOver())
            return false;
        var offset = this.$element.offset();
        var w = this.$element.width();
        var h = this.$element.height();
        return this.lastMouseEvent &&
          (this.lastMouseEvent.pageX >= offset.left) && (this.lastMouseEvent.pageX <= offset.left + w) &&
          (this.lastMouseEvent.pageY >= offset.top) && (this.lastMouseEvent.pageY <= offset.top + h);
      },

      initKeyboardScrolling:function () {
        var _this = this;
        this.documentKeydown = function (event) {
          if (_this.isMouseOver()) {
            if (_this.vScrollbar)
              _this.vScrollbar.keyScroll(event);
            if (_this.hScrollbar)
              _this.hScrollbar.keyScroll(event);
          }
        }
        $(document).keydown(this.documentKeydown);
        this.documentMousemove = function (event) {
          _this.lastMouseEvent = event;
        } 
        $(document).mousemove(this.documentMousemove);
      },
      
      removeKeyboardScrolling: function() {
        $(document).unbind("keydown", this.documentKeydown);
        $(document).unbind("mousemove", this.documentMousemove);
      },

      bindEvents:function () {
        if (this.options.onCustomScroll)
          this.$element.on("customScroll", this.options.onCustomScroll);
      }
      
    }

    var Scrollbar = function (scrollable, sizing) {
      this.scrollable = scrollable;
      this.sizing = sizing;
      this.$scrollBar = this.sizing.scrollBar(this.scrollable.$element);
      this.$thumb = this.$scrollBar.find(".thumb");
      this.setScrollPosition(0, 0);
      this.resize();
      this.initMouseMoveScrolling();
      this.initMouseWheelScrolling();
      this.initTouchScrolling();
      this.initMouseClickScrolling();
      this.initWindowResize();
    }

    Scrollbar.prototype = {

      resize:function () {
        //console.log(this.scrollable.options.height);
		this.scrollable.$element.css('height', this.scrollable.options.height + 'px');
        this.scrollable.$viewPort.height(this.scrollable.$element.height());
        this.sizing.size(this.scrollable.$viewPort, this.sizing.size(this.scrollable.$element));
        this.viewPortSize = this.sizing.size(this.scrollable.$viewPort);
        this.overviewSize = this.sizing.size(this.scrollable.$overview);
        this.ratio = this.viewPortSize / this.overviewSize;
        this.sizing.size(this.$scrollBar, this.viewPortSize);
        this.thumbSize = Math.round(this.ratio * this.viewPortSize);
        this.sizing.size(this.$thumb, this.thumbSize);
        this.maxThumbPosition = this.calculateMaxThumbPosition();
        this.maxOverviewPosition = this.calculateMaxOverviewPosition();
        this.enabled = (this.overviewSize > this.viewPortSize);
        if (this.scrollPercent === undefined) {
          this.scrollPercent = 0.0;
          if (this.$thumb.parent().hasClass('vertical')) {
              this.scrollPercent = 1;
          }
          
        }         
        if (this.enabled)
          this.rescroll();
        else
          this.setScrollPosition(0, 0);
        this.$scrollBar.toggle(this.enabled);
      },

      initMouseMoveScrolling:function () {
        var _this = this;
        this.$thumb.mousedown(function (event) {
          if (_this.enabled)
            _this.startMouseMoveScrolling(event);
        });
        this.documentMouseup = function (event) {
          _this.stopMouseMoveScrolling(event);
        };
        $(document).mouseup(this.documentMouseup);
        this.documentMousemove = function (event) {
          _this.mouseMoveScroll(event);
        };
        $(document).mousemove(this.documentMousemove);
        this.$thumb.click(function (event) {
          event.stopPropagation();
        });
      },
      
      removeMouseMoveScrolling: function() {
        this.$thumb.unbind();
        $(document).unbind("mouseup", this.documentMouseup);
        $(document).unbind("mousemove", this.documentMousemove);
      },

      initMouseWheelScrolling:function () {
        var _this = this;
        this.scrollable.$element.mousewheel(function (event, delta, deltaX, deltaY) {
          if (_this.enabled) {
            _this.mouseWheelScroll(deltaX, deltaY);
            event.preventDefault();
            event.stopPropagation();
          }
        });
      },

      removeMouseWheelScrolling: function() {
        this.scrollable.$element.unbind("mousewheel");
      },

      initTouchScrolling:function () {
        if (document.addEventListener) {
          var _this = this;
          this.elementTouchstart = function (event) {
            if (_this.enabled)
              _this.startTouchScrolling(event);
          }
          this.scrollable.$element[0].addEventListener("touchstart", this.elementTouchstart);
          this.documentTouchmove = function (event) {
            _this.touchScroll(event);
          }
          document.addEventListener("touchmove", this.documentTouchmove);
          this.elementTouchend = function (event) {
            _this.stopTouchScrolling(event);
          }
          this.scrollable.$element[0].addEventListener("touchend", this.elementTouchend);
        }
      },
      
      removeTouchScrolling: function() {
        if(document.addEventListener) {
          this.scrollable.$element[0].removeEventListener("touchstart", this.elementTouchstart);
          document.removeEventListener("touchmove", this.documentTouchmove);
          this.scrollable.$element[0].removeEventListener("touchend", this.elementTouchend);
        }
      },

      initMouseClickScrolling:function () {
        var _this = this;
        this.scrollBarClick = function (event) {
          _this.mouseClickScroll(event);
        };
        this.$scrollBar.click(this.scrollBarClick);
      },

      removeMouseClickScrolling: function() {
        this.$scrollBar.unbind("click", this.scrollBarClick);
      },

      initWindowResize:function () {
        if (this.scrollable.options.updateOnWindowResize) {
          var _this = this;
          this.windowResize = function () {
            _this.resize();
          };
          $(window).resize(this.windowResize);
        }
      },

      removeWindowResize: function() {
        $(window).unbind("resize", this.windowResize);
      },
 
      isKeyScrolling:function (key) {
        return this.keyScrollDelta(key) != null;
      },

      keyScrollDelta:function (key) {
        for (var scrollingKey in this.sizing.scrollingKeys)
          if (scrollingKey == key)
            return this.sizing.scrollingKeys[key](this.viewPortSize);
        return null;
      },

      startMouseMoveScrolling:function (event) {
        this.mouseMoveScrolling = true;
        $("html").addClass("not-selectable");
        this.setUnselectable($("html"), "on");
        this.setScrollEvent(event);
      },

      stopMouseMoveScrolling:function (event) {
        this.mouseMoveScrolling = false;
        $("html").removeClass("not-selectable");
        this.setUnselectable($("html"), null);
      },

      setUnselectable:function (element, value) {
        if (element.attr("unselectable") != value) {
          element.attr("unselectable", value);
          element.find(':not(input)').attr('unselectable', value);
        }
      },

      mouseMoveScroll:function (event) {
        if (this.mouseMoveScrolling)
          this.moveScroll(event, 1);
      },

      moveScroll:function (event, turn) {
        var delta = this.sizing.mouseDelta(this.scrollEvent, event) * turn;
        this.scrollBy(Math.round(delta * this.overviewSize / this.viewPortSize));
        this.setScrollEvent(event);
      },

      startTouchScrolling:function (event) {
        if (event.touches && event.touches.length > 0) {
          this.setScrollEvent(event.touches[0]);
          this.touchScrolling = true;
        }
      },

      touchScroll:function (event) {
        if (this.touchScrolling && event.touches && event.touches.length > 0) {
          this.moveScroll(event.touches[0], -this.ratio);
          event.preventDefault();
        }
      },

      stopTouchScrolling:function (event) {
        this.touchScrolling = false;
      },

      mouseWheelScroll:function (deltaX, deltaY) {
        var delta = this.sizing.wheelDelta(deltaX, deltaY) * -20;
        if (delta != 0)
          this.scrollBy(delta);
      },

      mouseClickScroll:function (event) {
        var delta = this.viewPortSize - 20;
        if (event["page" + this.sizing.scrollAxis()] < this.$thumb.offset()[this.sizing.offsetComponent()])
        // mouse click over thumb
          delta = -delta;
        this.scrollBy(delta);
      },

      keyScroll:function (event) {
        var keyDown = event.which;
        if (this.enabled && this.isKeyScrolling(keyDown)) {
          this.scrollBy(this.keyScrollDelta(keyDown));
          event.preventDefault();
        }
      },

      scrollBy:function (delta) {
        var overviewPosition = -this.scrollable.$overview.position()[this.sizing.offsetComponent()];
        overviewPosition += delta;
        this.scrollTo(overviewPosition);
      },

      scrollTo:function (overviewPosition) {
        if (overviewPosition < 0)
          overviewPosition = 0;
        if (overviewPosition > this.maxOverviewPosition)
          overviewPosition = this.maxOverviewPosition;
        var oldScrollPercent = this.scrollPercent;
        this.scrollPercent = overviewPosition / this.maxOverviewPosition;
        var thumbPosition = this.scrollPercent * this.maxThumbPosition;
        this.setScrollPosition(overviewPosition, thumbPosition);
        if (oldScrollPercent != this.scrollPercent)
          this.triggerCustomScroll(oldScrollPercent);
      },

      triggerCustomScroll:function (oldScrollPercent) {
        this.scrollable.$element.trigger("customScroll", {
            scrollAxis:this.sizing.scrollAxis(),
            direction:this.sizing.scrollDirection(oldScrollPercent, this.scrollPercent),
            scrollPercent:Math.round(this.scrollPercent * 100)
          }
        );
      },

      rescroll:function () {
        if(this.scrollable.options.bSCrollRight) {
			this.setScrollPosition(this.maxOverviewPosition, this.maxThumbPosition);
			this.scrollable.options.bSCrollRight = false;
		} else {
			var thumbPosition = this.scrollPercent * this.maxThumbPosition;
			var overviewPosition = this.scrollPercent * this.maxOverviewPosition;
			this.setScrollPosition(overviewPosition, thumbPosition);
		}
      },

      setScrollPosition:function (overviewPosition, thumbPosition) {
    	  this.$thumb.css(this.sizing.offsetComponent(), thumbPosition + "px");
	        this.scrollable.$overview.css(this.sizing.offsetComponent(), -overviewPosition + "px");
      },

      calculateMaxThumbPosition:function () {
        return this.sizing.size(this.$scrollBar) - this.thumbSize;
      },

      calculateMaxOverviewPosition:function () {
        return this.sizing.size(this.scrollable.$overview) - this.sizing.size(this.scrollable.$viewPort);
      },

      setScrollEvent:function (event) {
        var attr = "page" + this.sizing.scrollAxis();
        if (!this.scrollEvent || this.scrollEvent[attr] != event[attr])
          this.scrollEvent = {pageX:event.pageX, pageY:event.pageY};
      },

      scrollToElement:function (element) {
        var $element = element;
        if (this.sizing.isInside($element, this.scrollable.$overview) && !this.sizing.isInside($element, this.scrollable.$viewPort)) {
          var elementOffset = $element.offset();
          var overviewOffset = this.scrollable.$overview.offset();
          var viewPortOffset = this.scrollable.$viewPort.offset();
          this.scrollTo(elementOffset[this.sizing.offsetComponent()] - overviewOffset[this.sizing.offsetComponent()]);
        }
      },
      
      remove: function() {
        this.removeMouseMoveScrolling();
        this.removeMouseWheelScrolling();
        this.removeTouchScrolling();
        this.removeMouseClickScrolling();
        this.removeWindowResize();
      }
      
    }

    var HSizing = function () {
    }

    HSizing.prototype = {
      size:function ($el, arg) {
        if (arg)
          return $el.width(arg);
        else
          return $el.width();
      },

      scrollBar:function ($el) {
        return $el.find(".scroll-bar.horizontal");
      },

      mouseDelta:function (event1, event2) {
        return event2.pageX - event1.pageX;
      },

      offsetComponent:function () {
        return "left";
      },

      wheelDelta:function (deltaX, deltaY) {
        return deltaX;
      },

      scrollAxis:function () {
        return "X";
      },

      scrollDirection:function (oldPercent, newPercent) {
        return oldPercent < newPercent ? "right" : "left";
      },

      scrollingKeys:{
        37:function (viewPortSize) {
          return -10; //arrow left
        },
        39:function (viewPortSize) {
          return 10; //arrow right
        }
      },

      isInside:function (element, wrappingElement) {
        var $element = $(element);
        var $wrappingElement = $(wrappingElement);
        var elementOffset = $element.offset();
        var wrappingElementOffset = $wrappingElement.offset();
        return (elementOffset.left >= wrappingElementOffset.left) &&
          (elementOffset.left + $element.width() <= wrappingElementOffset.left + $wrappingElement.width());
      }

    }

    var VSizing = function () {
    }

    VSizing.prototype = {
      size:function ($el, arg) {
        if (arg)
          return $el.height(arg);
        else
          return $el.height();
      },

      scrollBar:function ($el) {
        return $el.find(".scroll-bar.vertical");
      },

      mouseDelta:function (event1, event2) {
        return event2.pageY - event1.pageY;
      },

      offsetComponent:function () {
        return "top";
      },

      wheelDelta:function (deltaX, deltaY) {
        return deltaY;
      },

      scrollAxis:function () {
        return "Y";
      },

      scrollDirection:function (oldPercent, newPercent) {
        return oldPercent < newPercent ? "down" : "up";
      },

      scrollingKeys:{
        38:function (viewPortSize) {
          return -10; //arrow up
        },
        40:function (viewPortSize) {
          return 10; //arrow down
        },
        33:function (viewPortSize) {
          return -(viewPortSize - 20); //page up
        },
        34:function (viewPortSize) {
          return viewPortSize - 20; //page down
        }
      },

      isInside:function (element, wrappingElement) {
        var $element = $(element);
        var $wrappingElement = $(wrappingElement);
        var elementOffset = $element.offset();
        var wrappingElementOffset = $wrappingElement.offset();
        return (elementOffset.top >= wrappingElementOffset.top) &&
          (elementOffset.top + $element.height() <= wrappingElementOffset.top + $wrappingElement.height());
      }

    }

    return this.each(function () {
      if (options == undefined)
        options = defaultOptions;
      if (typeof(options) == "string") {
        var scrollable = $(this).data("scrollable");
        if (scrollable)
          scrollable[options](args);
      }
      else if (typeof(options) == "object") {
        options = $.extend(defaultOptions, options);
        new Scrollable($(this), options);
      }
      else
        throw "Invalid type of options";
    });

  }
  ;

})
  (jQuery);

(function ($) {

  var types = ['DOMMouseScroll', 'mousewheel'];

  if ($.event.fixHooks) {
    for (var i = types.length; i;) {
      $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
  }

  $.event.special.mousewheel = {
    setup:function () {
      if (this.addEventListener) {
        for (var i = types.length; i;) {
          this.addEventListener(types[--i], handler, false);
        }
      } else {
        this.onmousewheel = handler;
      }
    },

    teardown:function () {
      if (this.removeEventListener) {
        for (var i = types.length; i;) {
          this.removeEventListener(types[--i], handler, false);
        }
      } else {
        this.onmousewheel = null;
      }
    }
  };

  $.fn.extend({
    mousewheel:function (fn) {
      return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },

    unmousewheel:function (fn) {
      return this.unbind("mousewheel", fn);
    }
  });


  function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call(arguments, 1), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";

    // Old school scrollwheel delta
    if (orgEvent.wheelDelta) {
      delta = orgEvent.wheelDelta / 120;
    }
    if (orgEvent.detail) {
      delta = -orgEvent.detail / 3;
    }

    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;

    // Gecko
    if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
      deltaY = 0;
      deltaX = delta;
    }

    // Webkit
    if (orgEvent.wheelDeltaY !== undefined) {
      deltaY = orgEvent.wheelDeltaY / 120;
    }
    if (orgEvent.wheelDeltaX !== undefined) {
      deltaX =  orgEvent.wheelDeltaX / 120;
    }

    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);

    return ($.event.dispatch || $.event.handle).apply(this, args);
  }

})(jQuery);

/*!
 * jQuery Form Plugin
 * version: 3.44.0-2013.09.15
 * Requires jQuery v1.5 or later
 * Copyright (c) 2013 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */
;(function($) {
"use strict";

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

var hasProp = !!$.fn.prop;

// attr2 uses prop when it can but checks the return type for
// an expected string.  this accounts for the case where a form 
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
$.fn.attr2 = function() {
    if ( ! hasProp )
        return this.attr.apply(this, arguments);
    var val = this.prop.apply(this, arguments);
    if ( ( val && val.jquery ) || typeof val === 'string' )
        return val;
    return this.attr.apply(this, arguments);
};

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }
    else if ( options === undefined ) {
        options = {};
    }

    method = options.type || this.attr2('method');
    action = options.url  || this.attr2('action');

    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || $.ajaxSettings.type,
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }

    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || this ;    // jQuery 1.4+ supports scope context
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    if (options.error) {
        var oldError = options.error;
        options.error = function(xhr, status, error) {
            var context = options.context || this;
            oldError.apply(context, [xhr, status, error, $form]);
        };
    }

     if (options.complete) {
        var oldComplete = options.complete;
        options.complete = function(xhr, status) {
            var context = options.context || this;
            oldComplete.apply(context, [xhr, status, $form]);
        };
    }

    // are there files to upload?

    // [value] (issue #113), also see comment:
    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
    var fileInputs = $('input[type=file]:enabled', this).filter(function() { return $(this).val() !== ''; });

    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
        }
        else {
            jqxhr = fileUploadIframe(a);
        }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        jqxhr = fileUploadXhr(a);
    }
    else {
        jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k=0; k < elements.length; k++)
        elements[k] = null;

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData){
        var serialized = $.param(extraData, options.traditional).split('&');
        var len = serialized.length;
        var result = [];
        var i, part;
        for (i=0; i < len; i++) {
            // #252; undo param space replacement
            serialized[i] = serialized[i].replace(/\+/g,' ');
            part = serialized[i].split('=');
            // #278; use array instead of object storage, favoring array serializations
            result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
        }
        return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = deepSerialize(options.extraData);
            for (i=0; i < serializedData.length; i++)
                if (serializedData[i])
                    formdata.append(serializedData[i][0], serializedData[i][1]);
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: method || 'POST'
        });

        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.addEventListener('progress', function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    }, false);
                }
                return xhr;
            };
        }

        s.data = null;
            var beforeSend = s.beforeSend;
            s.beforeSend = function(xhr, o) {
                o.data = formdata;
                if(beforeSend)
                    beforeSend.call(this, xhr, o);
        };
        return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var deferred = $.Deferred();

        // #341
        deferred.abort = function(status) {
            xhr.abort(status);
        };

        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( hasProp )
                    el.prop('disabled', false);
                else
                    el.removeAttr('disabled');
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr2('name');
            if (!n)
                 $io.attr2('name', id);
            else
                id = n;
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;

                try { // #214, #257
                    if (io.contentWindow.document.execCommand) {
                        io.contentWindow.document.execCommand('Stop');
                    }
                }
                catch(ignore) {}

                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error)
                    s.error.call(s.context, xhr, e, status);
                if (g)
                    $.event.trigger("ajaxError", [xhr, s, e]);
                if (s.complete)
                    s.complete.call(s.context, xhr, e);
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }

        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;
                
        function getDoc(frame) {
            /* it looks like contentWindow or contentDocument do not
             * carry the protocol property in ie8, when running under ssl
             * frame.document is the only valid response document, since
             * the protocol is know but not on the other two objects. strange?
             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
             */
            
            var doc = null;
            
            // IE8 cascading access check
            try {
                if (frame.contentWindow) {
                    doc = frame.contentWindow.document;
                }
            } catch(err) {
                // IE8 access denied under ssl & missing protocol
                log('cannot get iframe.contentWindow document: ' + err);
            }

            if (doc) { // successful getting content
                return doc;
            }

            try { // simply checking may throw in ie8 under ssl or mismatched protocol
                doc = frame.contentDocument ? frame.contentDocument : frame.document;
            } catch(err) {
                // last attempt
                log('cannot get iframe.contentDocument: ' + err);
                doc = frame.document;
            }
            return doc;
        }

        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr2('target'), a = $form.attr2('action');

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method || /post/i.test(method) ) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }

            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized')
                        setTimeout(checkState,50);
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle)
                        clearTimeout(timeoutHandle);
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                }
                if (io.attachEvent)
                    io.attachEvent('onload', cb);
                else
                    io.addEventListener('load', cb, false);
                setTimeout(checkState,15);

                try {
                    form.submit();
                } catch(err) {
                    // just in case form has element with name/id of 'submit'
                    var submitFn = document.createElement('form').submit;
                    submitFn.apply(form);
                }
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            
            doc = getDoc(io);
            if(!doc) {
                log('cannot access response document');
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut)
                    return;
            }
            if (io.detachEvent)
                io.detachEvent('onload', cb);
            else
                io.removeEventListener('load', cb, false);

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml)
                    s.dataType = 'xml';
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header.toLowerCase()];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (err) {
                    status = 'parsererror';
                    xhr.error = errMsg = (err || status);
                }
            }
            catch (err) {
                log('error caught: ',err);
                status = 'error';
                xhr.error = errMsg = (err || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success)
                    s.success.call(s.context, data, 'success', xhr);
                deferred.resolve(xhr.responseText, 'success', xhr);
                if (g)
                    $.event.trigger("ajaxSuccess", [xhr, s]);
            }
            else if (status) {
                if (errMsg === undefined)
                    errMsg = xhr.statusText;
                if (s.error)
                    s.error.call(s.context, xhr, status, errMsg);
                deferred.reject(xhr, 'error', errMsg);
                if (g)
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
            }

            if (g)
                $.event.trigger("ajaxComplete", [xhr, s]);

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete)
                s.complete.call(s.context, xhr, status);

            callbackProcessed = true;
            if (s.timeout)
                clearTimeout(timeoutHandle);

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget)
                    $io.remove();
                else  //adding else to clean up existing iframe response.
                    $io.attr('src', s.iframeSrc);
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error)
                    $.error('parsererror');
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };

        return deferred;
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(e.target).ajaxSubmit(options); // #365
    }
}

function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is("[type=submit],[type=image]"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest('[type=submit]');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    if (!els) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n || el.disabled) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements)
                elements.push(el);
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file') {
            if (elements)
                elements.push(el);
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements)
                elements.push(el);
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $('input[type=text]').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $('input[type=checkbox]').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $('input[type=radio]').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array)
            $.merge(val, v);
        else
            val.push(v);
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
		else if (t == "file") {
			if (/MSIE/.test(navigator.userAgent)) {
				$(this).replaceWith($(this).clone(true));
			} else {
				$(this).val('');
			}
		}
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) )
                this.value = '';
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug)
        return;
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}

})( (typeof(jQuery) != 'undefined') ? jQuery : window.Zepto );

/*!
	Colorbox v1.4.31 - 2013-09-25
	jQuery lightbox and modal window plugin
	(c) 2013 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,i){function o(i,o,n){var r=t.createElement(i);return o&&(r.id=Z+o),n&&(r.style.cssText=n),e(r)}function n(){return i.innerHeight?i.innerHeight:e(i).height()}function r(e){var t=k.length,i=(z+e)%t;return 0>i?t+i:i}function h(e,t){return Math.round((/%/.test(e)?("x"===t?E.width():n())/100:1)*parseInt(e,10))}function s(e,t){return e.photo||e.photoRegex.test(t)}function l(e,t){return e.retinaUrl&&i.devicePixelRatio>1?t.replace(e.photoRegex,e.retinaSuffix):t}function a(e){"contains"in g[0]&&!g[0].contains(e.target)&&(e.stopPropagation(),g.focus())}function d(){var t,i=e.data(N,Y);null==i?(B=e.extend({},X),console&&console.log&&console.log("Error: cboxElement missing settings object")):B=e.extend({},i);for(t in B)e.isFunction(B[t])&&"on"!==t.slice(0,2)&&(B[t]=B[t].call(N));B.rel=B.rel||N.rel||e(N).data("rel")||"nofollow",B.href=B.href||e(N).attr("href"),B.title=B.title||N.title,"string"==typeof B.href&&(B.href=e.trim(B.href))}function c(i,o){e(t).trigger(i),st.trigger(i),e.isFunction(o)&&o.call(N)}function u(i){q||(N=i,d(),k=e(N),z=0,"nofollow"!==B.rel&&(k=e("."+et).filter(function(){var t,i=e.data(this,Y);return i&&(t=e(this).data("rel")||i.rel||this.rel),t===B.rel}),z=k.index(N),-1===z&&(k=k.add(N),z=k.length-1)),w.css({opacity:parseFloat(B.opacity),cursor:B.overlayClose?"pointer":"auto",visibility:"visible"}).show(),J&&g.add(w).removeClass(J),B.className&&g.add(w).addClass(B.className),J=B.className,B.closeButton?K.html(B.close).appendTo(y):K.appendTo("<div/>"),U||(U=$=!0,g.css({visibility:"hidden",display:"block"}),H=o(lt,"LoadedContent","width:0; height:0; overflow:hidden"),y.css({width:"",height:""}).append(H),O=x.height()+C.height()+y.outerHeight(!0)-y.height(),_=b.width()+T.width()+y.outerWidth(!0)-y.width(),D=H.outerHeight(!0),A=H.outerWidth(!0),B.w=h(B.initialWidth,"x"),B.h=h(B.initialHeight,"y"),H.css({width:"",height:B.h}),Q.position(),c(tt,B.onOpen),P.add(L).hide(),g.focus(),B.trapFocus&&t.addEventListener&&(t.addEventListener("focus",a,!0),st.one(rt,function(){t.removeEventListener("focus",a,!0)})),B.returnFocus&&st.one(rt,function(){e(N).focus()})),m())}function f(){!g&&t.body&&(V=!1,E=e(i),g=o(lt).attr({id:Y,"class":e.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),w=o(lt,"Overlay").hide(),F=e([o(lt,"LoadingOverlay")[0],o(lt,"LoadingGraphic")[0]]),v=o(lt,"Wrapper"),y=o(lt,"Content").append(L=o(lt,"Title"),S=o(lt,"Current"),I=e('<button type="button"/>').attr({id:Z+"Previous"}),R=e('<button type="button"/>').attr({id:Z+"Next"}),M=o("button","Slideshow"),F),K=e('<button type="button"/>').attr({id:Z+"Close"}),v.append(o(lt).append(o(lt,"TopLeft"),x=o(lt,"TopCenter"),o(lt,"TopRight")),o(lt,!1,"clear:left").append(b=o(lt,"MiddleLeft"),y,T=o(lt,"MiddleRight")),o(lt,!1,"clear:left").append(o(lt,"BottomLeft"),C=o(lt,"BottomCenter"),o(lt,"BottomRight"))).find("div div").css({"float":"left"}),W=o(lt,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),P=R.add(I).add(S).add(M),e(t.body).append(w,g.append(v,W)))}function p(){function i(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey||(e.preventDefault(),u(this))}return g?(V||(V=!0,R.click(function(){Q.next()}),I.click(function(){Q.prev()}),K.click(function(){Q.close()}),w.click(function(){B.overlayClose&&Q.close()}),e(t).bind("keydown."+Z,function(e){var t=e.keyCode;U&&B.escKey&&27===t&&(e.preventDefault(),Q.close()),U&&B.arrowKey&&k[1]&&!e.altKey&&(37===t?(e.preventDefault(),I.click()):39===t&&(e.preventDefault(),R.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+Z,"."+et,i):e("."+et).live("click."+Z,i)),!0):!1}function m(){var n,r,a,u=Q.prep,f=++at;$=!0,j=!1,N=k[z],d(),c(ht),c(it,B.onLoad),B.h=B.height?h(B.height,"y")-D-O:B.innerHeight&&h(B.innerHeight,"y"),B.w=B.width?h(B.width,"x")-A-_:B.innerWidth&&h(B.innerWidth,"x"),B.mw=B.w,B.mh=B.h,B.maxWidth&&(B.mw=h(B.maxWidth,"x")-A-_,B.mw=B.w&&B.w<B.mw?B.w:B.mw),B.maxHeight&&(B.mh=h(B.maxHeight,"y")-D-O,B.mh=B.h&&B.h<B.mh?B.h:B.mh),n=B.href,G=setTimeout(function(){F.show()},100),B.inline?(a=o(lt).hide().insertBefore(e(n)[0]),st.one(ht,function(){a.replaceWith(H.children())}),u(e(n))):B.iframe?u(" "):B.html?u(B.html):s(B,n)?(n=l(B,n),j=t.createElement("img"),e(j).addClass(Z+"Photo").bind("error",function(){B.title=!1,u(o(lt,"Error").html(B.imgError))}).one("load",function(){var t;f===at&&(e.each(["alt","longdesc","aria-describedby"],function(t,i){var o=e(N).attr(i)||e(N).attr("data-"+i);o&&j.setAttribute(i,o)}),B.retinaImage&&i.devicePixelRatio>1&&(j.height=j.height/i.devicePixelRatio,j.width=j.width/i.devicePixelRatio),B.scalePhotos&&(r=function(){j.height-=j.height*t,j.width-=j.width*t},B.mw&&j.width>B.mw&&(t=(j.width-B.mw)/j.width,r()),B.mh&&j.height>B.mh&&(t=(j.height-B.mh)/j.height,r())),B.h&&(j.style.marginTop=Math.max(B.mh-j.height,0)/2+"px"),k[1]&&(B.loop||k[z+1])&&(j.style.cursor="pointer",j.onclick=function(){Q.next()}),j.style.width=j.width+"px",j.style.height=j.height+"px",setTimeout(function(){u(j)},1))}),setTimeout(function(){j.src=n},1)):n&&W.load(n,B.data,function(t,i){f===at&&u("error"===i?o(lt,"Error").html(B.xhrError):e(this).contents())})}var w,g,v,y,x,b,T,C,k,E,H,W,F,L,S,M,R,I,K,P,B,O,_,D,A,N,z,j,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1},Y="colorbox",Z="cbox",et=Z+"Element",tt=Z+"_open",it=Z+"_load",ot=Z+"_complete",nt=Z+"_cleanup",rt=Z+"_closed",ht=Z+"_purge",st=e("<a/>"),lt="div",at=0,dt={},ct=function(){function e(){clearTimeout(h)}function t(){(B.loop||k[z+1])&&(e(),h=setTimeout(Q.next,B.slideshowSpeed))}function i(){M.html(B.slideshowStop).unbind(l).one(l,o),st.bind(ot,t).bind(it,e),g.removeClass(s+"off").addClass(s+"on")}function o(){e(),st.unbind(ot,t).unbind(it,e),M.html(B.slideshowStart).unbind(l).one(l,function(){Q.next(),i()}),g.removeClass(s+"on").addClass(s+"off")}function n(){r=!1,M.hide(),e(),st.unbind(ot,t).unbind(it,e),g.removeClass(s+"off "+s+"on")}var r,h,s=Z+"Slideshow_",l="click."+Z;return function(){r?B.slideshow||(st.unbind(nt,n),n()):B.slideshow&&k[1]&&(r=!0,st.one(nt,n),B.slideshowAuto?i():o(),M.show())}}();e.colorbox||(e(f),Q=e.fn[Y]=e[Y]=function(t,i){var o=this;if(t=t||{},f(),p()){if(e.isFunction(o))o=e("<a/>"),t.open=!0;else if(!o[0])return o;i&&(t.onComplete=i),o.each(function(){e.data(this,Y,e.extend({},e.data(this,Y)||X,t))}).addClass(et),(e.isFunction(t.open)&&t.open.call(o)||t.open)&&u(o[0])}return o},Q.position=function(t,i){function o(){x[0].style.width=C[0].style.width=y[0].style.width=parseInt(g[0].style.width,10)-_+"px",y[0].style.height=b[0].style.height=T[0].style.height=parseInt(g[0].style.height,10)-O+"px"}var r,s,l,a=0,d=0,c=g.offset();if(E.unbind("resize."+Z),g.css({top:-9e4,left:-9e4}),s=E.scrollTop(),l=E.scrollLeft(),B.fixed?(c.top-=s,c.left-=l,g.css({position:"fixed"})):(a=s,d=l,g.css({position:"absolute"})),d+=B.right!==!1?Math.max(E.width()-B.w-A-_-h(B.right,"x"),0):B.left!==!1?h(B.left,"x"):Math.round(Math.max(E.width()-B.w-A-_,0)/2),a+=B.bottom!==!1?Math.max(n()-B.h-D-O-h(B.bottom,"y"),0):B.top!==!1?h(B.top,"y"):Math.round(Math.max(n()-B.h-D-O,0)/2),g.css({top:c.top,left:c.left,visibility:"visible"}),v[0].style.width=v[0].style.height="9999px",r={width:B.w+A+_,height:B.h+D+O,top:a,left:d},t){var u=0;e.each(r,function(e){return r[e]!==dt[e]?(u=t,void 0):void 0}),t=u}dt=r,t||g.css(r),g.dequeue().animate(r,{duration:t||0,complete:function(){o(),$=!1,v[0].style.width=B.w+A+_+"px",v[0].style.height=B.h+D+O+"px",B.reposition&&setTimeout(function(){E.bind("resize."+Z,Q.position)},1),i&&i()},step:o})},Q.resize=function(e){var t;U&&(e=e||{},e.width&&(B.w=h(e.width,"x")-A-_),e.innerWidth&&(B.w=h(e.innerWidth,"x")),H.css({width:B.w}),e.height&&(B.h=h(e.height,"y")-D-O),e.innerHeight&&(B.h=h(e.innerHeight,"y")),e.innerHeight||e.height||(t=H.scrollTop(),H.css({height:"auto"}),B.h=H.height()),H.css({height:B.h}),t&&H.scrollTop(t),Q.position("none"===B.transition?0:B.speed))},Q.prep=function(i){function n(){return B.w=B.w||H.width(),B.w=B.mw&&B.mw<B.w?B.mw:B.w,B.w}function h(){return B.h=B.h||H.height(),B.h=B.mh&&B.mh<B.h?B.mh:B.h,B.h}if(U){var a,d="none"===B.transition?0:B.speed;H.empty().remove(),H=o(lt,"LoadedContent").append(i),H.hide().appendTo(W.show()).css({width:n(),overflow:B.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(y),W.hide(),e(j).css({"float":"none"}),a=function(){function i(){e.support.opacity===!1&&g[0].style.removeAttribute("filter")}var n,h,a=k.length,u="frameBorder",f="allowTransparency";U&&(h=function(){clearTimeout(G),F.hide(),c(ot,B.onComplete)},L.html(B.title).add(H).show(),a>1?("string"==typeof B.current&&S.html(B.current.replace("{current}",z+1).replace("{total}",a)).show(),R[B.loop||a-1>z?"show":"hide"]().html(B.next),I[B.loop||z?"show":"hide"]().html(B.previous),ct(),B.preloading&&e.each([r(-1),r(1)],function(){var i,o,n=k[this],r=e.data(n,Y);r&&r.href?(i=r.href,e.isFunction(i)&&(i=i.call(n))):i=e(n).attr("href"),i&&s(r,i)&&(i=l(r,i),o=t.createElement("img"),o.src=i)})):P.hide(),B.iframe?(n=o("iframe")[0],u in n&&(n[u]=0),f in n&&(n[f]="true"),B.scrolling||(n.scrolling="no"),e(n).attr({src:B.href,name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",h).appendTo(H),st.one(ht,function(){n.src="//about:blank"}),B.fastIframe&&e(n).trigger("load")):h(),"fade"===B.transition?g.fadeTo(d,1,i):i())},"fade"===B.transition?g.fadeTo(d,0,function(){Q.position(0,a)}):Q.position(d,a)}},Q.next=function(){!$&&k[1]&&(B.loop||k[z+1])&&(z=r(1),u(k[z]))},Q.prev=function(){!$&&k[1]&&(B.loop||z)&&(z=r(-1),u(k[z]))},Q.close=function(){U&&!q&&(q=!0,U=!1,c(nt,B.onCleanup),E.unbind("."+Z),w.fadeTo(B.fadeOut||0,0),g.stop().fadeTo(B.fadeOut||0,0,function(){g.add(w).css({opacity:1,cursor:"auto"}).hide(),c(ht),H.empty().remove(),setTimeout(function(){q=!1,c(rt,B.onClosed)},1)}))},Q.remove=function(){g&&(g.stop(),e.colorbox.close(),g.stop().remove(),w.remove(),q=!1,g=null,e("."+et).removeData(Y).removeClass(et),e(t).unbind("click."+Z))},Q.element=function(){return e(N)},Q.settings=X)})(jQuery,document,window);
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
/*! Hammer.JS - v1.0.7dev - 2014-01-15
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */


!function(a,b){"use strict";function c(){d.READY||(d.event.determineEventTypes(),d.utils.each(d.gestures,function(a){d.detection.register(a)}),d.event.onTouch(d.DOCUMENT,d.EVENT_MOVE,d.detection.detect),d.event.onTouch(d.DOCUMENT,d.EVENT_END,d.detection.detect),d.READY=!0)}var d=function(a,b){return new d.Instance(a,b||{})};d.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},d.HAS_POINTEREVENTS=a.navigator.pointerEnabled||a.navigator.msPointerEnabled,d.HAS_TOUCHEVENTS="ontouchstart"in a,d.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android|silk/i,d.NO_MOUSEEVENTS=d.HAS_TOUCHEVENTS&&a.navigator.userAgent.match(d.MOBILE_REGEX),d.EVENT_TYPES={},d.DIRECTION_DOWN="down",d.DIRECTION_LEFT="left",d.DIRECTION_UP="up",d.DIRECTION_RIGHT="right",d.POINTER_MOUSE="mouse",d.POINTER_TOUCH="touch",d.POINTER_PEN="pen",d.EVENT_START="start",d.EVENT_MOVE="move",d.EVENT_END="end",d.DOCUMENT=a.document,d.plugins=d.plugins||{},d.gestures=d.gestures||{},d.READY=!1,d.utils={extend:function(a,c,d){for(var e in c)a[e]!==b&&d||(a[e]=c[e]);return a},each:function(a,c,d){var e,f;if("forEach"in a)a.forEach(c,d);else if(a.length!==b){for(e=0,f=a.length;f>e;e++)if(c.call(d,a[e],e,a)===!1)return}else for(e in a)if(a.hasOwnProperty(e)&&c.call(d,a[e],e,a)===!1)return},hasParent:function(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1},getCenter:function(a){var b=[],c=[];return d.utils.each(a,function(a){b.push("undefined"!=typeof a.clientX?a.clientX:a.pageX),c.push("undefined"!=typeof a.clientY?a.clientY:a.pageY)}),{pageX:(Math.min.apply(Math,b)+Math.max.apply(Math,b))/2,pageY:(Math.min.apply(Math,c)+Math.max.apply(Math,c))/2}},getVelocity:function(a,b,c){return{x:Math.abs(b/a)||0,y:Math.abs(c/a)||0}},getAngle:function(a,b){var c=b.pageY-a.pageY,d=b.pageX-a.pageX;return 180*Math.atan2(c,d)/Math.PI},getDirection:function(a,b){var c=Math.abs(a.pageX-b.pageX),e=Math.abs(a.pageY-b.pageY);return c>=e?a.pageX-b.pageX>0?d.DIRECTION_LEFT:d.DIRECTION_RIGHT:a.pageY-b.pageY>0?d.DIRECTION_UP:d.DIRECTION_DOWN},getDistance:function(a,b){var c=b.pageX-a.pageX,d=b.pageY-a.pageY;return Math.sqrt(c*c+d*d)},getScale:function(a,b){return a.length>=2&&b.length>=2?this.getDistance(b[0],b[1])/this.getDistance(a[0],a[1]):1},getRotation:function(a,b){return a.length>=2&&b.length>=2?this.getAngle(b[1],b[0])-this.getAngle(a[1],a[0]):0},isVertical:function(a){return a==d.DIRECTION_UP||a==d.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(a,b){b&&a&&a.style&&(d.utils.each(["webkit","khtml","moz","Moz","ms","o",""],function(c){d.utils.each(b,function(b,d){c&&(d=c+d.substring(0,1).toUpperCase()+d.substring(1)),d in a.style&&(a.style[d]=b)})}),"none"==b.userSelect&&(a.onselectstart=function(){return!1}),"none"==b.userDrag&&(a.ondragstart=function(){return!1}))}},d.Instance=function(a,b){var e=this;return c(),this.element=a,this.enabled=!0,this.options=d.utils.extend(d.utils.extend({},d.defaults),b||{}),this.options.stop_browser_behavior&&d.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),d.event.onTouch(a,d.EVENT_START,function(a){e.enabled&&d.detection.startDetect(e,a)}),this},d.Instance.prototype={on:function(a,b){var c=a.split(" ");return d.utils.each(c,function(a){this.element.addEventListener(a,b,!1)},this),this},off:function(a,b){var c=a.split(" ");return d.utils.each(c,function(a){this.element.removeEventListener(a,b,!1)},this),this},trigger:function(a,b){b||(b={});var c=d.DOCUMENT.createEvent("Event");c.initEvent(a,!0,!0),c.gesture=b;var e=this.element;return d.utils.hasParent(b.target,e)&&(e=b.target),e.dispatchEvent(c),this},enable:function(a){return this.enabled=a,this}};var e=null,f=!1,g=!1;d.event={bindDom:function(a,b,c){var e=b.split(" ");d.utils.each(e,function(b){a.addEventListener(b,c,!1)})},onTouch:function(a,b,c){var h=this;this.bindDom(a,d.EVENT_TYPES[b],function(i){var j=i.type.toLowerCase();if(!j.match(/mouse/)||!g){j.match(/touch/)||j.match(/pointerdown/)||j.match(/mouse/)&&1===i.which?f=!0:j.match(/mouse/)&&!i.which&&(f=!1),j.match(/touch|pointer/)&&(g=!0);var k=0;f&&(d.HAS_POINTEREVENTS&&b!=d.EVENT_END?k=d.PointerEvent.updatePointer(b,i):j.match(/touch/)?k=i.touches.length:g||(k=j.match(/up/)?0:1),k>0&&b==d.EVENT_END?b=d.EVENT_MOVE:k||(b=d.EVENT_END),(k||null===e)&&(e=i),c.call(d.detection,h.collectEventData(a,b,h.getTouchList(e,b),i)),d.HAS_POINTEREVENTS&&b==d.EVENT_END&&(k=d.PointerEvent.updatePointer(b,i))),k||(e=null,f=!1,g=!1,d.PointerEvent.reset())}})},determineEventTypes:function(){var a;a=d.HAS_POINTEREVENTS?d.PointerEvent.getEvents():d.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],d.EVENT_TYPES[d.EVENT_START]=a[0],d.EVENT_TYPES[d.EVENT_MOVE]=a[1],d.EVENT_TYPES[d.EVENT_END]=a[2]},getTouchList:function(a){return d.HAS_POINTEREVENTS?d.PointerEvent.getTouchList():a.touches?a.touches:(a.identifier=1,[a])},collectEventData:function(a,b,c,e){var f=d.POINTER_TOUCH;return(e.type.match(/mouse/)||d.PointerEvent.matchType(d.POINTER_MOUSE,e))&&(f=d.POINTER_MOUSE),{center:d.utils.getCenter(c),timeStamp:(new Date).getTime(),target:e.target,touches:c,eventType:b,pointerType:f,srcEvent:e,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return d.detection.stopDetect()}}}},d.PointerEvent={pointers:{},getTouchList:function(){var a=this,b=[];return d.utils.each(a.pointers,function(a){b.push(a)}),b},updatePointer:function(a,b){return a==d.EVENT_END?this.pointers={}:(b.identifier=b.pointerId,this.pointers[b.pointerId]=b),Object.keys(this.pointers).length},matchType:function(a,b){if(!b.pointerType)return!1;var c=b.pointerType,e={};return e[d.POINTER_MOUSE]=c===b.MSPOINTER_TYPE_MOUSE||c===d.POINTER_MOUSE,e[d.POINTER_TOUCH]=c===b.MSPOINTER_TYPE_TOUCH||c===d.POINTER_TOUCH,e[d.POINTER_PEN]=c===b.MSPOINTER_TYPE_PEN||c===d.POINTER_PEN,e[a]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},d.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(a,b){this.current||(this.stopped=!1,this.current={inst:a,startEvent:d.utils.extend({},b),lastEvent:!1,name:""},this.detect(b))},detect:function(a){if(this.current&&!this.stopped){a=this.extendEventData(a);var b=this.current.inst.options;return d.utils.each(this.gestures,function(c){return this.stopped||b[c.name]===!1||c.handler.call(c,a,this.current.inst)!==!1?void 0:(this.stopDetect(),!1)},this),this.current&&(this.current.lastEvent=a),a.eventType==d.EVENT_END&&!a.touches.length-1&&this.stopDetect(),a}},stopDetect:function(){this.previous=d.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(a){var b=this.current.startEvent;!b||a.touches.length==b.touches.length&&a.touches!==b.touches||(b.touches=[],d.utils.each(a.touches,function(a){b.touches.push(d.utils.extend({},a))}));var c,e,f=a.timeStamp-b.timeStamp,g=a.center.pageX-b.center.pageX,h=a.center.pageY-b.center.pageY,i=d.utils.getVelocity(f,g,h);return"end"===a.eventType?(c=this.current.lastEvent&&this.current.lastEvent.interimAngle,e=this.current.lastEvent&&this.current.lastEvent.interimDirection):(c=this.current.lastEvent&&d.utils.getAngle(this.current.lastEvent.center,a.center),e=this.current.lastEvent&&d.utils.getDirection(this.current.lastEvent.center,a.center)),d.utils.extend(a,{deltaTime:f,deltaX:g,deltaY:h,velocityX:i.x,velocityY:i.y,distance:d.utils.getDistance(b.center,a.center),angle:d.utils.getAngle(b.center,a.center),interimAngle:c,direction:d.utils.getDirection(b.center,a.center),interimDirection:e,scale:d.utils.getScale(b.touches,a.touches),rotation:d.utils.getRotation(b.touches,a.touches),startEvent:b}),a},register:function(a){var c=a.defaults||{};return c[a.name]===b&&(c[a.name]=!0),d.utils.extend(d.defaults,c,!0),a.index=a.index||1e3,this.gestures.push(a),this.gestures.sort(function(a,b){return a.index<b.index?-1:a.index>b.index?1:0}),this.gestures}},d.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,correct_for_drag_min_distance:!0,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(a,b){if(d.detection.current.name!=this.name&&this.triggered)return b.trigger(this.name+"end",a),this.triggered=!1,void 0;if(!(b.options.drag_max_touches>0&&a.touches.length>b.options.drag_max_touches))switch(a.eventType){case d.EVENT_START:this.triggered=!1;break;case d.EVENT_MOVE:if(a.distance<b.options.drag_min_distance&&d.detection.current.name!=this.name)return;if(d.detection.current.name!=this.name&&(d.detection.current.name=this.name,b.options.correct_for_drag_min_distance&&a.distance>0)){var c=Math.abs(b.options.drag_min_distance/a.distance);d.detection.current.startEvent.center.pageX+=a.deltaX*c,d.detection.current.startEvent.center.pageY+=a.deltaY*c,a=d.detection.extendEventData(a)}(d.detection.current.lastEvent.drag_locked_to_axis||b.options.drag_lock_to_axis&&b.options.drag_lock_min_distance<=a.distance)&&(a.drag_locked_to_axis=!0);var e=d.detection.current.lastEvent.direction;a.drag_locked_to_axis&&e!==a.direction&&(a.direction=d.utils.isVertical(e)?a.deltaY<0?d.DIRECTION_UP:d.DIRECTION_DOWN:a.deltaX<0?d.DIRECTION_LEFT:d.DIRECTION_RIGHT),this.triggered||(b.trigger(this.name+"start",a),this.triggered=!0),b.trigger(this.name,a),b.trigger(this.name+a.direction,a),(b.options.drag_block_vertical&&d.utils.isVertical(a.direction)||b.options.drag_block_horizontal&&!d.utils.isVertical(a.direction))&&a.preventDefault();break;case d.EVENT_END:this.triggered&&b.trigger(this.name+"end",a),this.triggered=!1}}},d.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(a,b){switch(a.eventType){case d.EVENT_START:clearTimeout(this.timer),d.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==d.detection.current.name&&b.trigger("hold",a)},b.options.hold_timeout);break;case d.EVENT_MOVE:a.distance>b.options.hold_threshold&&clearTimeout(this.timer);break;case d.EVENT_END:clearTimeout(this.timer)}}},d.gestures.Release={name:"release",index:1/0,handler:function(a,b){a.eventType==d.EVENT_END&&b.trigger(this.name,a)}},d.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_min_touches:1,swipe_max_touches:1,swipe_velocity:.7},handler:function(a,b){if(a.eventType==d.EVENT_END){if(b.options.swipe_max_touches>0&&a.touches.length<b.options.swipe_min_touches&&a.touches.length>b.options.swipe_max_touches)return;(a.velocityX>b.options.swipe_velocity||a.velocityY>b.options.swipe_velocity)&&(b.trigger(this.name,a),b.trigger(this.name+a.direction,a))}}},d.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(a,b){if(a.eventType==d.EVENT_END&&"touchcancel"!=a.srcEvent.type){var c=d.detection.previous,e=!1;if(a.deltaTime>b.options.tap_max_touchtime||a.distance>b.options.tap_max_distance)return;c&&"tap"==c.name&&a.timeStamp-c.lastEvent.timeStamp<b.options.doubletap_interval&&a.distance<b.options.doubletap_distance&&(b.trigger("doubletap",a),e=!0),(!e||b.options.tap_always)&&(d.detection.current.name="tap",b.trigger(d.detection.current.name,a))}}},d.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(a,b){return b.options.prevent_mouseevents&&a.pointerType==d.POINTER_MOUSE?(a.stopDetect(),void 0):(b.options.prevent_default&&a.preventDefault(),a.eventType==d.EVENT_START&&b.trigger(this.name,a),void 0)}},d.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(a,b){if(d.detection.current.name!=this.name&&this.triggered)return b.trigger(this.name+"end",a),this.triggered=!1,void 0;if(!(a.touches.length<2))switch(b.options.transform_always_block&&a.preventDefault(),a.eventType){case d.EVENT_START:this.triggered=!1;break;case d.EVENT_MOVE:var c=Math.abs(1-a.scale),e=Math.abs(a.rotation);if(c<b.options.transform_min_scale&&e<b.options.transform_min_rotation)return;d.detection.current.name=this.name,this.triggered||(b.trigger(this.name+"start",a),this.triggered=!0),b.trigger(this.name,a),e>b.options.transform_min_rotation&&b.trigger("rotate",a),c>b.options.transform_min_scale&&(b.trigger("pinch",a),b.trigger("pinch"+(a.scale<1?"in":"out"),a));break;case d.EVENT_END:this.triggered&&b.trigger(this.name+"end",a),this.triggered=!1}}},"function"==typeof define&&define.amd?define(function(){return d}):"object"==typeof module&&module.exports?module.exports=d:a.Hammer=d}(window);
//# sourceMappingURL=hammer.min.map
(function(Hammer) {
  /**
   * enable multitouch on the desktop by pressing the shiftkey
   * the other touch goes in the opposite direction so the center keeps at its place
   * it's recommended to enable Hammer.debug.showTouches for this one
   */
  Hammer.plugins.fakeMultitouch = function() {
    // keeps the start position to keep it centered
    var start_pos = false;

    // test for msMaxTouchPoints to enable this for IE10 with only one pointer (a mouse in all/most cases)
    Hammer.HAS_POINTEREVENTS = navigator.msPointerEnabled &&
      navigator.msMaxTouchPoints && navigator.msMaxTouchPoints >= 1;

    /**
     * overwrites Hammer.event.getTouchList.
     * @param   {Event}     ev
     * @param   TOUCHTYPE   type
     * @return  {Array}     Touches
     */
    Hammer.event.getTouchList = function(ev, eventType) {
      // get the fake pointerEvent touchlist
      if(Hammer.HAS_POINTEREVENTS) {
        return Hammer.PointerEvent.getTouchList();
      }
      // get the touchlist
      else if(ev.touches) {
        return ev.touches;
      }

      // reset on start of a new touch
      if(eventType == Hammer.EVENT_START) {
        start_pos = false;
      }

      // when the shift key is pressed, multitouch is possible on desktop
      // why shift? because ctrl and alt are taken by osx and linux
      if(ev.shiftKey) {
        // on touchstart we store the position of the mouse for multitouch
        if(!start_pos) {
          start_pos = {
            pageX: ev.pageX,
            pageY: ev.pageY
          };
        }

        var distance_x = start_pos.pageX - ev.pageX;
        var distance_y = start_pos.pageY - ev.pageY;

        // fake second touch in the opposite direction
        return [
          {
            identifier: 1,
            pageX     : start_pos.pageX - distance_x - 50,
            pageY     : start_pos.pageY - distance_y + 50,
            target    : ev.target
          },
          {
            identifier: 2,
            pageX     : start_pos.pageX + distance_x + 50,
            pageY     : start_pos.pageY + distance_y - 50,
            target    : ev.target
          }
        ];
      }
      // normal single touch
      else {
        start_pos = false;
        return [
          {
            identifier: 1,
            pageX     : ev.pageX,
            pageY     : ev.pageY,
            target    : ev.target
          }
        ];
      }
    };
  };

})(window.Hammer);
(function(Hammer) {
  /**
   * ShowTouches gesture
   * show all touch on the screen by placing elements at there pageX and pageY
   * @param   {Boolean}   [force]
   */
  Hammer.plugins.showTouches = function(force) {
    // the circles under your fingers
    var template_style = 'position:absolute;z-index:9999;left:0;top:0;height:14px;width:14px;border:solid 2px #777;' +
      'background:rgba(255,255,255,.7);border-radius:20px;pointer-events:none;' +
      'margin-top:-9px;margin-left:-9px;';

    // elements by identifier
    var touch_elements = {};
    var touches_index = {};

    /**
     * remove unused touch elements
     */
    function removeUnusedElements() {
      // remove unused touch elements
      for(var key in touch_elements) {
        if(touch_elements.hasOwnProperty(key) && !touches_index[key]) {
          document.body.removeChild(touch_elements[key]);
          delete touch_elements[key];
        }
      }
    }

    Hammer.detection.register({
      name    : 'show_touches',
      priority: 0,
      handler : function(ev, inst) {
        touches_index = {};

        // clear old elements when not using a mouse
        if(ev.pointerType != Hammer.POINTER_MOUSE && !force) {
          removeUnusedElements();
          return;
        }

        // place touches by index
        for(var t = 0, total_touches = ev.touches.length; t < total_touches; t++) {
          var touch = ev.touches[t];

          var id = touch.identifier;
          touches_index[id] = touch;

          // new touch element
          if(!touch_elements[id]) {
            // create new element and attach base styles
            var template = document.createElement('div');
            template.setAttribute('style', template_style);

            // append element to body
            document.body.appendChild(template);

            touch_elements[id] = template;
          }

          // Paul Irish says that translate is faster then left/top
          touch_elements[id].style.left = touch.pageX + 'px';
          touch_elements[id].style.top = touch.pageY + 'px';
        }

        removeUnusedElements();
      }
    });
  };
})(window.Hammer);

// VERSION: 2.3 LAST UPDATE: 11.07.2013
/* 
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 * 
 * Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009
 * Website: http://code.google.com/p/jqueryrotate/ 
 */
(function(k){for(var d,f,l=document.getElementsByTagName("head")[0].style,h=["transformProperty","WebkitTransform","OTransform","msTransform","MozTransform"],g=0;g<h.length;g++)void 0!==l[h[g]]&&(d=h[g]);d&&(f=d.replace(/[tT]ransform/,"TransformOrigin"),"T"==f[0]&&(f[0]="t"));eval('IE = "v"=="\v"');jQuery.fn.extend({rotate:function(a){if(0!==this.length&&"undefined"!=typeof a){"number"==typeof a&&(a={angle:a});for(var b=[],c=0,d=this.length;c<d;c++){var e=this.get(c);if(e.Wilq32&&e.Wilq32.PhotoEffect)e.Wilq32.PhotoEffect._handleRotation(a);
else{var f=k.extend(!0,{},a),e=(new Wilq32.PhotoEffect(e,f))._rootObj;b.push(k(e))}}return b}},getRotateAngle:function(){for(var a=[],b=0,c=this.length;b<c;b++){var d=this.get(b);d.Wilq32&&d.Wilq32.PhotoEffect&&(a[b]=d.Wilq32.PhotoEffect._angle)}return a},stopRotate:function(){for(var a=0,b=this.length;a<b;a++){var c=this.get(a);c.Wilq32&&c.Wilq32.PhotoEffect&&clearTimeout(c.Wilq32.PhotoEffect._timer)}}});Wilq32=window.Wilq32||{};Wilq32.PhotoEffect=function(){return d?function(a,b){a.Wilq32={PhotoEffect:this};
this._img=this._rootObj=this._eventObj=a;this._handleRotation(b)}:function(a,b){this._img=a;this._onLoadDelegate=[b];this._rootObj=document.createElement("span");this._rootObj.style.display="inline-block";this._rootObj.Wilq32={PhotoEffect:this};a.parentNode.insertBefore(this._rootObj,a);if(a.complete)this._Loader();else{var c=this;jQuery(this._img).bind("load",function(){c._Loader()})}}}();Wilq32.PhotoEffect.prototype={_setupParameters:function(a){this._parameters=this._parameters||{};"number"!==
typeof this._angle&&(this._angle=0);"number"===typeof a.angle&&(this._angle=a.angle);this._parameters.animateTo="number"===typeof a.animateTo?a.animateTo:this._angle;this._parameters.step=a.step||this._parameters.step||null;this._parameters.easing=a.easing||this._parameters.easing||this._defaultEasing;this._parameters.duration=a.duration||this._parameters.duration||1E3;this._parameters.callback=a.callback||this._parameters.callback||this._emptyFunction;this._parameters.center=a.center||this._parameters.center||
["50%","50%"];this._rotationCenterX="string"==typeof this._parameters.center[0]?parseInt(this._parameters.center[0],10)/100*this._imgWidth*this._aspectW:this._parameters.center[0];this._rotationCenterY="string"==typeof this._parameters.center[1]?parseInt(this._parameters.center[1],10)/100*this._imgHeight*this._aspectH:this._parameters.center[1];a.bind&&a.bind!=this._parameters.bind&&this._BindEvents(a.bind)},_emptyFunction:function(){},_defaultEasing:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-
1)+c},_handleRotation:function(a,b){d||this._img.complete||b?(this._setupParameters(a),this._angle==this._parameters.animateTo?this._rotate(this._angle):this._animateStart()):this._onLoadDelegate.push(a)},_BindEvents:function(a){if(a&&this._eventObj){if(this._parameters.bind){var b=this._parameters.bind,c;for(c in b)b.hasOwnProperty(c)&&jQuery(this._eventObj).unbind(c,b[c])}this._parameters.bind=a;for(c in a)a.hasOwnProperty(c)&&jQuery(this._eventObj).bind(c,a[c])}},_Loader:function(){return IE?function(){var a=
this._img.width,b=this._img.height;this._imgWidth=a;this._imgHeight=b;this._img.parentNode.removeChild(this._img);this._vimage=this.createVMLNode("image");this._vimage.src=this._img.src;this._vimage.style.height=b+"px";this._vimage.style.width=a+"px";this._vimage.style.position="absolute";this._vimage.style.top="0px";this._vimage.style.left="0px";this._aspectW=this._aspectH=1;this._container=this.createVMLNode("group");this._container.style.width=a;this._container.style.height=b;this._container.style.position=
"absolute";this._container.style.top="0px";this._container.style.left="0px";this._container.setAttribute("coordsize",a-1+","+(b-1));this._container.appendChild(this._vimage);this._rootObj.appendChild(this._container);this._rootObj.style.position="relative";this._rootObj.style.width=a+"px";this._rootObj.style.height=b+"px";this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;for(this._eventObj=this._rootObj;a=this._onLoadDelegate.shift();)this._handleRotation(a,
!0)}:function(){this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;this._imgWidth=this._img.naturalWidth;this._imgHeight=this._img.naturalHeight;var a=Math.sqrt(this._imgHeight*this._imgHeight+this._imgWidth*this._imgWidth);this._width=3*a;this._height=3*a;this._aspectW=this._img.offsetWidth/this._img.naturalWidth;this._aspectH=this._img.offsetHeight/this._img.naturalHeight;this._img.parentNode.removeChild(this._img);this._canvas=document.createElement("canvas");
this._canvas.setAttribute("width",this._width);this._canvas.style.position="relative";this._canvas.style.left=-this._img.height*this._aspectW+"px";this._canvas.style.top=-this._img.width*this._aspectH+"px";this._canvas.Wilq32=this._rootObj.Wilq32;this._rootObj.appendChild(this._canvas);this._rootObj.style.width=this._img.width*this._aspectW+"px";this._rootObj.style.height=this._img.height*this._aspectH+"px";this._eventObj=this._canvas;for(this._cnv=this._canvas.getContext("2d");a=this._onLoadDelegate.shift();)this._handleRotation(a,
!0)}}(),_animateStart:function(){this._timer&&clearTimeout(this._timer);this._animateStartTime=+new Date;this._animateStartAngle=this._angle;this._animate()},_animate:function(){var a=+new Date,b=a-this._animateStartTime>this._parameters.duration;if(b&&!this._parameters.animatedGif)clearTimeout(this._timer);else{if(this._canvas||this._vimage||this._img)a=this._parameters.easing(0,a-this._animateStartTime,this._animateStartAngle,this._parameters.animateTo-this._animateStartAngle,this._parameters.duration),
this._rotate(~~(10*a)/10);this._parameters.step&&this._parameters.step(this._angle);var c=this;this._timer=setTimeout(function(){c._animate.call(c)},10)}this._parameters.callback&&b&&(this._angle=this._parameters.animateTo,this._rotate(this._angle),this._parameters.callback.call(this._rootObj))},_rotate:function(){var a=Math.PI/180;return IE?function(a){this._angle=a;this._container.style.rotation=a%360+"deg";this._vimage.style.top=-(this._rotationCenterY-this._imgHeight/2)+"px";this._vimage.style.left=
-(this._rotationCenterX-this._imgWidth/2)+"px";this._container.style.top=this._rotationCenterY-this._imgHeight/2+"px";this._container.style.left=this._rotationCenterX-this._imgWidth/2+"px"}:d?function(a){this._angle=a;this._img.style[d]="rotate("+a%360+"deg)";this._img.style[f]=this._parameters.center.join(" ")}:function(b){this._angle=b;b=b%360*a;this._canvas.width=this._width;this._canvas.height=this._height;this._cnv.translate(this._imgWidth*this._aspectW,this._imgHeight*this._aspectH);this._cnv.translate(this._rotationCenterX,
this._rotationCenterY);this._cnv.rotate(b);this._cnv.translate(-this._rotationCenterX,-this._rotationCenterY);this._cnv.scale(this._aspectW,this._aspectH);this._cnv.drawImage(this._img,0,0)}}()};IE&&(Wilq32.PhotoEffect.prototype.createVMLNode=function(){document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{return!document.namespaces.rvml&&document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(a){return function(a){return document.createElement("<"+
a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}}())})(jQuery);

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/**
 * CAROUSEL RESPONSIVE LAYOUT 
 * @author Rony
 * @param {boolean} bReload description
 * @returns {undefined}
 */
function jCarouselLoad(bReload) {
	var $carouselJob = $('.carousel-job');
	if ($carouselJob.length === 0) {
		return;
	}
	var aSettings;
	if (($(window).width() <= 767) && ($(window).width() > 480)) {
		aSettings = {
			slideWidth: 300,
			minSlides: 2,
			maxSlides: 7,
			moveSlides: 1,
			slideMargin: 10,
			infiniteLoop : false
		};
	} else if ($(window).width() <= 480 && $(window).width() > 320) { 
		aSettings = {
			slideWidth: 300,
			minSlides: 3,
			maxSlides: 7,
			moveSlides: 1,
			slideMargin: 10,
			infiniteLoop : false
		};
	} else if ($(window).width() <= 320) {
		aSettings = {
			slideWidth: 300,
			minSlides: 2,
			maxSlides: 7,
			moveSlides: 1,
			slideMargin: 10,
			infiniteLoop : false
		};
	} else if ($(window).width() <= 979 && $(window).width() >= 768) {
		aSettings = {
			slideWidth: 300,
			minSlides: 3,
			maxSlides: 7,
			moveSlides: 1,
			slideMargin: 10,
			infiniteLoop : false
		};
	} else {
		aSettings = {
			slideWidth: 200,
			minSlides: 4,
			maxSlides: 6,
			moveSlides: 1,
			slideMargin: 11,
			infiniteLoop : false
		};
	}
	$carouselJob.bxSlider(aSettings);
	 if (bReload) {
		var slider = $carouselJob.bxSlider();
		slider.reloadSlider(aSettings);
	 }
}

jQuery(document).ready(function($) {
	/*____BOOTSTRAP DATEPICKER____*/ 
//	$('.form-view input.to, .form-view input.from, .company-search .from-date, #CompanyJobType_startDate, #CompanyJobType_endDate').datepicker({
//		format: 'yyyy-mm-dd'
//	});
	/*____END OF BOOTSTRAP DATEPICKER____*/ 
	
	var $selecter_basic = $(".selecter_basic");
	if($selecter_basic.length > 0){
		$selecter_basic.selecter();
	}
	
	$(".title_icon .help, .li_renew_workads .help").click(function(e){
		e.preventDefault();
	});
	
	$(".title_icon .help, .li_renew_workads .help").popover({
		"placement": "top",
		"trigger": "hover"
	});
	
	var $rating_select = $(".rating_select");
	
	if($rating_select.length > 0)
	{
		$rating_select.barrating({
			showValues: false,
			showSelectedRating: false
		});
	}
	
	/*____BOOTSTRAP FILE INPUT____*/ 
	var $file_input = $('input[type=file]');
	if ($file_input.length > 0) {
		$('input[type=file]').bootstrapFileInput();
	}
	/*____END OF BOOTSTRAP FILE INPUT____*/ 
	
	//Call jCarousel
	jCarouselLoad(false);
	
	/*____SCROLL BAR____*/ 
//	if($('#scroll-candidates').length > 0)
//		$('#scroll-candidates').mCustomScrollbar();
	/*____END OF SCROLL BAR____*/
	
	var $left_sidebar = $(".left_sidebar");
	var $btn_collapse_sidebar = $(".button_collapse_sidebar");
	$btn_collapse_sidebar.click(function(e){
		var $this = $(this);
		$left_sidebar.toggleClass("show");
		$this.toggleClass("show_sidebar");
		if($left_sidebar.hasClass("show")) {
			$left_sidebar.show();
		}
		else {
			$left_sidebar.hide();
		}
		e.preventDefault();
	});
	
	/*____WINDOW RESIZE____*/
	$(window).resize(function() {
		if ($(window).width() < 769) {
			$left_sidebar.hide();
			if($btn_collapse_sidebar.hasClass("show_sidebar")) {
				$btn_collapse_sidebar.removeClass("show_sidebar");
			}
			if($left_sidebar.hasClass("show")){
				$left_sidebar.removeClass("show");
			}
		}
		else {
			$left_sidebar.show();
			if($btn_collapse_sidebar.hasClass("show_sidebar")) {
				$btn_collapse_sidebar.removeClass("show_sidebar");
			}
			if($left_sidebar.hasClass("show")){
				$left_sidebar.removeClass("show");
			}
		}
		
		//Reload jCarousel
		jCarouselLoad(false);
		/*____END OF CAROUSEL RESPONSIVE LAYOUT (WINDOW RESIZE)____*/
	});
	/*____END OF WINDOW RESIZE____*/
	
	/**
	 * Add Education
	 * @author harrison <harrison@likipe.se>
	 */
	
	var aListYears = [];
	for(var i = new Date().getFullYear(); i > 1929; i--)
		aListYears.push({val: i});
	
	function addEducation() {
		var $schoolInput = 0;
		var $education_input_school = $('.my_timeline .education.timeline_content ul li input[name="school_candidate[]"]');
		$education_input_school.each(function(){
			if($(this).val()) {
				$schoolInput++;
			}
			return;
		});
		if ($schoolInput === $education_input_school.length) {
			var indexlabel = $('.my_timeline .education.timeline_content ul li .still_studying input').length;
			$('.my_timeline .education.timeline_content > ul').append($.Mustache.render('template-candidate-profile-education', {
				'aListYears': aListYears,
				'indexlabel': indexlabel,
				'listEducations'	: listEducations
			}));
			var $added_selecter = $('.my_timeline .education.timeline_content ul li .added_education_selecter');
			$added_selecter.each(function(){
				var $this = $(this);
				$this.selecter();
				$this.removeClass('added_education_selecter');
			});
			var $added_Spancheckbox = $('.my_timeline .timeline_content.education ul li.added_education_profile .still_studying span.checkbox');
			$added_Spancheckbox.click(function(){
				var $thisSpan = $(this);
				var $input_checkbox = $thisSpan.parent('.still_studying').children('input.styled');
				$input_checkbox.click();
				return;
			});
			var $added_input = $('.my_timeline .timeline_content.education ul li.added_education_profile .still_studying input');
			$added_input.change(function(){
				var $thisInput = $(this);
				if($thisInput.is(':checked')) {
					$thisInput.parent('.still_studying').children('span.checkbox').css('background-position','0 -24px');
				} else {
					$thisInput.parent('.still_studying').children('span.checkbox').css('background-position','0 0');
				}
				return;
			});
			
			var $inputDate = $('.my_timeline .timeline_content.education ul li.added_education_profile .input_date');
			viewDatePicker($inputDate, undefined, addEducation);
				
			$('.my_timeline .timeline_content.education ul li.added_education_profile').removeClass('added_education_profile');
		}
	}
	$(document).on('change', '.my_timeline .education.timeline_content ul li input, .my_timeline .education.timeline_content ul li select', addEducation );
	$(document).on('click', '.my_timeline .education.timeline_content ul li .still_studying span.checkbox', addEducation);
	/*-------------------------------------- End Add Education -------------------------------------------*/
	/**
	 * Add Career
	 * @author Harrison <harrison@likipe.se>
	 */
	function addCareer() {
		var $iCountInput = 0;
		var $career_input = $('.my_timeline .career.timeline_content ul li input:not(".still_working input")');
		//var $career_select = $('.my_timeline .career.timeline_content ul li select');
		
		$career_input.each(function(){
			var $this = $(this);
			if( $this.val() ) {
				$iCountInput++;
			} else if($this.hasClass('to_date')) {
				if($this.parent('li').find('.still_working input').is(':checked')) {
					$iCountInput++;
				}
			}
			return;
		});
		if($iCountInput == $career_input.length) {
			var indexlabel = $('.my_timeline .career.timeline_content ul li .still_working input').length;
			$('.my_timeline .career.timeline_content > ul').append($.Mustache.render('template-candidate-profile-career', {
				'aListYears': aListYears,
				'indexlabel': indexlabel
			}));
			
			var $added_Spancheckbox = $('.my_timeline .timeline_content.career ul li.added_career_profile .still_working span.checkbox');
			$added_Spancheckbox.click(function(){
				var $thisSpan = $(this);
				var $input_checkbox = $thisSpan.parent('.still_working').children('input.styled');
				$input_checkbox.click();
				return;
			});
			var $added_input = $('.my_timeline .timeline_content.career ul li.added_career_profile .still_working input');
			$added_input.change(function(){
				var $thisInput = $(this);
				if($thisInput.is(':checked')) {
					$thisInput.parent('.still_working').children('span.checkbox').css('background-position','0 -24px');
				} else {
					$thisInput.parent('.still_working').children('span.checkbox').css('background-position','0 0');
				}
				return;
			});
			
			var $inputDate = $('.my_timeline .timeline_content.career ul li.added_career_profile .input_date');
			viewDatePicker($inputDate, undefined, addCareer);
				
			$('.my_timeline .timeline_content.career ul li.added_career_profile').removeClass('added_career_profile');
		}
	}
	
	$(document).on('change', '.my_timeline .career.timeline_content ul li input', addCareer );
	$(document).on('click', '.my_timeline .career.timeline_content ul li .still_working span.checkbox', addCareer);
	
	/**
	 * Set url image
	 * When click Upload
	 * @param {string} source
	 * @author Rony <rony@likipe.se>
	 */
	function showUploadedItem(source) {
		var $img = $('#img-preview');
		$img.attr('src', source);
		$('.avatar-profile .remove-avatar').css('display', 'block');
	}
	
	$(document).on('change', '#fileupload', function(evt) {
		$('.remove-image').css('display', 'block');
		var i = 0, len = this.files.length, img, reader, file;
		for (; i < len; i++) {
			file = this.files[i];
			//Check filesize upload
			var iLimitFileSizeByte = iLimitFileSize * 1024000;
			var fileSize = file.size;
			if (iLimitFileSizeByte < fileSize) {
				showLightboxMessage("File upload can't be larger than " + iLimitFileSize + "MB!");
				return false;
			}
			if (!!file.type.match(/image.*/)) {
				if (window.FileReader) {
					reader = new FileReader();
					reader.onloadend = function(e) {
						showUploadedItem(e.target.result, file.fileName);
					};
					reader.readAsDataURL(file);
				}
			}
		}
	});
	
	/**
	 * Remove image
	 * @author Alex <alex@likipe.se>
	 * @param {e} e
	 */
	$(document).on('click',' .remove-image', function(e){
		var $image = $('#img-preview');
		$image.attr('src', '');
		$('#fileupload').val('');
		$('.file-input-name').html('');
		$('.check_remove_image').val(true);
		$('.remove-image').css('display', 'none');
		e.preventDefault();
	});
	
	/**
	 * Remove Candidate Profile when click
	 * @author Harrison <harrison@likipe.se>
	 */
	$(document).on('click','.timeline_content a.remove_candidate_profile', function(e){
		
		var $div = $(this).closest('.timeline_content');
		if ($div.hasClass('education')) {
			$(this).parent('li').remove();
			var $ul = $(".my_timeline .timeline_content.education > ul");
			if ($ul.children().length === 0) {
				var indexlabel = $('.my_timeline .education.timeline_content ul li .still_studying input').length;
				$('.my_timeline .education.timeline_content > ul').append($.Mustache.render('template-candidate-profile-education', {
					'aListYears': aListYears,
					'indexlabel': 0
				}));
				$('.my_timeline .education.timeline_content > ul').append($.Mustache.render('template-candidate-profile-education', {
					'aListYears': aListYears,
					'indexlabel': 1
				}));
				var $added_selecter = $('.my_timeline .education.timeline_content ul li .added_education_selecter');
				$added_selecter.each(function(){
					var $this = $(this);
					$this.selecter();
					$this.removeClass('added_education_selecter');
				});
				var $added_Spancheckbox = $('.my_timeline .timeline_content.education ul li.added_education_profile .still_studying span.checkbox');
				$added_Spancheckbox.click(function(){
					var $thisSpan = $(this);
					var $input_checkbox = $thisSpan.parent('.still_studying').children('input.styled');
					$input_checkbox.click();
					return;
				});
				var $added_input = $('.my_timeline .timeline_content.education ul li.added_education_profile .still_studying input');
				$added_input.change(function(){
					var $thisInput = $(this);
					if($thisInput.is(':checked')) {
						$thisInput.parent('.still_studying').children('span.checkbox').css('background-position','0 -24px');
					} else {
						$thisInput.parent('.still_studying').children('span.checkbox').css('background-position','0 0');
					}
					return;
				});

				var $inputDate = $('.my_timeline .timeline_content.education ul li.added_education_profile .input_date');
				viewDatePicker($inputDate);
				
				$('.my_timeline .timeline_content.education ul li.added_education_profile').removeClass('added_education_profile');
			} else {
				var $aListstillStudying = $('.my_timeline .timeline_content.education ul li .still_studying');
				var iPosition = 0;
				$aListstillStudying.each(function(){
					var $this = $(this);
					$this.children('label').attr('for','still_studying_checkbox_' + iPosition);
					$this.children('input').attr('id','still_studying_checkbox_' + iPosition);
					iPosition++;
					return;
				});
			}
		} else {
			$(this).parent('li').remove();
			var $ul = $(".my_timeline .timeline_content.career > ul");
			if ($ul.children().length === 0) {
				$('.my_timeline .career.timeline_content > ul').append($.Mustache.render('template-candidate-profile-career', {
					'aListYears': aListYears,
					'indexlabel': 0
				}));
				$('.my_timeline .career.timeline_content > ul').append($.Mustache.render('template-candidate-profile-career', {
					'aListYears': aListYears,
					'indexlabel': 1
				}));

				var $added_Spancheckbox = $('.my_timeline .timeline_content.career ul li.added_career_profile .still_working span.checkbox');
				$added_Spancheckbox.click(function(){
					var $thisSpan = $(this);
					var $input_checkbox = $thisSpan.parent('.still_working').children('input.styled');
					$input_checkbox.click();
					return;
				});
				var $added_input = $('.my_timeline .timeline_content.career ul li.added_career_profile .still_working input');
				$added_input.change(function(){
					var $thisInput = $(this);
					if($thisInput.is(':checked')) {
						$thisInput.parent('.still_working').children('span.checkbox').css('background-position','0 -24px');
					} else {
						$thisInput.parent('.still_working').children('span.checkbox').css('background-position','0 0');
					}
					return;
				});

				var $inputDate = $('.my_timeline .timeline_content.career ul li.added_career_profile .input_date');
				viewDatePicker($inputDate);
				
				$('.my_timeline .timeline_content.career ul li.added_career_profile').removeClass('added_career_profile');
			} else {
				var $aListStillWorking = $('.my_timeline .timeline_content.career ul li .still_working');
				var iPosition = 0;
				$aListStillWorking.each(function(){
					var $this = $(this);
					$this.children('label').attr('for','still_working_checkbox_' + iPosition);
					$this.children('input').attr('id','still_working_checkbox_' + iPosition);
					iPosition++;
					return;
				});
			}
		}
		
		e.preventDefault();
	});
	
	/**
	 * Add DatePicker for Start Date and To Date of Profile Candidate
	 * @author Rony <rony@likipe.se>
	 * @param {object} selector
	 * @param {string} formatDate
	 * @param {object} functioncallChange
	 */
	function viewDatePicker(selector, formatDate, functioncallChange) {
		if(typeof formatDate !== 'undefined') {
			$options = {
				format: formatDate
			};
		} else {
			$options = {
				format: 'yyyy-mm',
				viewMode: 'years',
				minViewMode: 'months',
				customPopup: true,
			};
		}
		if (0 < selector.length) {
			selector.each(function(){
				var iNumberChange = 0; 
				var $datePicker = $(this).datepicker($options).on('changeDate', function(){
					iNumberChange++;
                    if('undefined' !== typeof functioncallChange) {
						functioncallChange.call();
					}
					if(2 === iNumberChange) {
						$datePicker.hide();
						iNumberChange = 0;
					}
				}).data('datepicker');
			});
		}
	}
	viewDatePicker($('.my_timeline .career.timeline_content ul li .input_date'),undefined, addCareer);
	viewDatePicker($('.my_timeline .education.timeline_content ul li .input_date'),undefined, addEducation);
	viewDatePicker($('.form-view input.to, .form-view input.from, .company-search .from-date, #CompanyJobType_startDate, #CompanyJobType_endDate, #fromdate-fta-field, #todate-fta-field'), 'yyyy-mm-dd');
	
	/**
	 * Data transfer
	 * @author Rony <rony@likipe.se>
	 * @param {e} e
	 */
	$(document).on('change','#CompanyJobType_companyTransfer', function(e){
		var $this = $(this);
		var $li = $this.parents('.li_transfer_job');
		if ($this.is(':checked')) {
			$li.find('.data-transfer').slideDown();
		} else {
			$li.find('.data-transfer').slideUp();
		}
		e.preventDefault();
	});
	
	/**
	 * Data transfer
	 * @author Rony <rony@likipe.se>
	 * @param {e} e
	 */
	$(document).on('click','.li_transfer_job .company-transfer .checkbox', function(e){
		var $this = $(this);
		if (!$this.hasClass('disabled')) {
			var $li = $this.parents('.li_transfer_job');
			if ($li.find('#CompanyJobType_companyTransfer').is(':checked')) {
				$li.find('.data-transfer').slideDown();
			} else {
				$li.find('.data-transfer').slideUp();
			}
		}
		e.preventDefault();
	});
	
	
	/**
	 * Upload & Edit Avatar Candidate
	 * @author Harrison <harrison@likipe.se>
	 */
	$(document).on('change', '.upload input.avatar_candidate_upload.uploadavatar', function(evt) {
		var $this = $(this);
		var i = 0, len = this.files.length, img, reader, file;
		for (; i < len; i++) {
			file = this.files[i];
			//Check filesize upload
			var iLimitFileSizeByte = iLimitFileSize * 1024000;
			var fileSize = file.size;
			if (iLimitFileSizeByte < fileSize) {
				showLightboxMessage("File upload can't be larger than " + iLimitFileSize + "MB!");
				return false;
			}
			if (!!file.type.match(/image.*/)) {
				if (window.FileReader) {
					reader = new FileReader();
					reader.onloadend = function(e) {
						$this.closest('.item').children('img').attr('src',e.target.result );
					};
					reader.readAsDataURL(file);
				}
			}
		}
	});
	
	/**
	 * Upload & Edit PDF profile
	 * @author Rony <rony@likipe.se>
	 */
	$(document).on('change', '.candidate_profile_pdf .upload_pdf_profile input.uploadpdf', function() {
		var i = 0, len = this.files.length, file;
		for (; i < len; i++) {
			file = this.files[i];
			//Check filesize upload
			var pdfimitFileSizeByte = pdfLimitFileSize * 1024000;
			var fileSize = file.size;
			if (pdfimitFileSizeByte < fileSize) {
				showLightboxMessage( videoCVTranslationMessages['pdf_file_upload_failed'] + " " + pdfLimitFileSize + "MB.");
				return false;
			} else {
				showLightboxMessage(videoCVTranslationMessages['pdf_file_uploaded_successfully']);
			}
		}
	});
	
	/**
	 * Remove PDF in Candidate register page and edit page
	 * @author Harrison <harrison@likipe.se>
	 */
	$('.candidate_profile_pdf .remove_candidate_profile_pdf').click(function(){
		var message = (typeof confirmMessage !== 'undefined') ? confirmMessage : 'Are you sure to delete?';
		var checkConfirm = confirm(message);
		if (checkConfirm) {
			var $this = $(this);
			$this.parent('.candidate_profile_pdf').find('.upload_pdf_profile span.file-input-name').remove();
			$this.parent('.candidate_profile_pdf').find('.upload_pdf_profile input[name="pdf_profile_candidate"]').val('');
		}
		
		return;
	});

	/**
	 * Add "hold" event to the avatar for open uploader
	 * Upload and edit avatar: Company profile
	 * @author Rony <rony@likipe.se>
	 */
	var $inputUpload = $("#fileupload");
	if (0 < $inputUpload.length) {
		var element = $("#fileupload")[0];
		Hammer(element).on("hold", function() {
			$inputUpload.click();
		});
	}
	
	/**
	 * Add "hold" event to the avatar for open uploader
	 * Upload and edit avatar: Candidate profile
	 * @author Rony <rony@likipe.se>
	 */
	var $avatar = $('.avatar_video .list_avatar .item > img');
	if (0 < $avatar.length) {
		$avatar.each(function(){
			var $uploadAvatar = $(this).parent('.item').find('.uploadavatar');
			var element = $(this)[0];
			Hammer(element).on("hold", function() {
				$uploadAvatar.click();
			});
		});
	}
	
	/**
	 * Add "hold" event to the job-tab (on company view) to open edit-popup
	 * Company profile: click item company job
	 * @author Rony <rony@likipe.se>
	 */
	var $itemJobs = $('.list-job .jobs .carousel-job .item-job');
	if (0 < $itemJobs.length) {
		$itemJobs.each(function() {
			var $this = $(this);
			var $lable = $this.find('.company-job');
			var el = $lable[0];
			Hammer(el).on("hold", function() {
				var idEditJob = $this.data('editjobs');
				$(idEditJob).modal('show');
			});
		});
	}
	
	/**
	 * Rotate Avatar
	 * @author Harrison <harrison@likipe.se>
	 * @param string parentSe
	 * @param string imgSe
	 */
	$('.rotate_uploaded_image input.rotate_uploaded_image_angel_input').val('');
	function rotateImageByClick(parentSe, imgSe) {
		var valAngel = 0;
		if(typeof iosDevice !== 'undefined' && true === iosDevice) {
			$('.rotate_uploaded_image').each(function(){
				var $this = $(this);
				Hammer($this[0]).on("tap", function() {
					valAngel = valAngel + 90;
					$this.closest(parentSe).children(imgSe).rotate({ animateTo:valAngel});
					$this.children('input.rotate_uploaded_image_angel_input').val(valAngel);
				});
			});
		} else {
			$('.rotate_uploaded_image').click(function(e){
				var $this = $(this);
				valAngel = valAngel + 90;
				$this.closest(parentSe).children(imgSe).rotate({ animateTo:valAngel});
				$this.children('input.rotate_uploaded_image_angel_input').val(valAngel);
				e.preventDefault();
			});
		}
	}
	rotateImageByClick('.item', 'img');
	rotateImageByClick('.avatar', '#img-preview');
	
	var $thankBuyTickets = $('#buy-tickets-with-your-card');
	if (0 < $thankBuyTickets.length) {
		$thankBuyTickets.modal('show');
	}
	
});

/**
 * Show Lightbox message
 * @author Harrison <harrison@likipe.se>
 */
function showLightboxMessage(messageContent)
{
	var lightBoxModal = $('#show_all_message_modal');
	lightBoxModal.find('.message_content').empty().append(messageContent);
	lightBoxModal.modal('show');
	return;
}
/**
 * Javascript of Candidate Add Ticket Page
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
	if(typeof bCheckJavascriptAddTicketCandidate !== "undefined" && bCheckJavascriptAddTicketCandidate === true) {
		function calculateMoneyTicket() {
			var numberTickets = parseInt($('form #form_add_currency input[name="candidate_buy_ticket"]:checked').val());
			if (1 === numberTickets) {
				$('form #form_add_currency > input[name="amount"]').val(2500);
			} else if (2 === numberTickets) {
				$('form #form_add_currency > input[name="amount"]').val(10000);
			} else {
				$('form #form_add_currency > input[name="amount"]').val(0);
			}
			return;
		}
		var $candidateBuyTicket = $('form #form_add_currency input[name="candidate_buy_ticket"]');
		$candidateBuyTicket.change(calculateMoneyTicket);
		$candidateBuyTicket.change();
		$(document).on('click','form #form_add_currency .buy_ticket_radios span.radio',calculateMoneyTicket);
		function fbshare() {
			FB.ui(
			  {
			   method: 'feed',
			   name: 'Vi tror på personkemi!',
			   caption: ' ',
			   description: (
				  'Ett traditionellt CV kanske kan vara bra om man vill söka jobb som programmerare, arkitekt eller kanske läkare.' +
				  'Men skall man söka ett vanligt jobb som servitris, vårdbiträde eller varför inte lagerarbetare, så tror vi det viktigaste är om man är glad och trevlig.' +
				  'Så skapa ditt "video.cv" redan idag, och visa din personlighet!'
			   ),
			   link: linkShare,
			   picture: logoSite
			  },
			  function(response) {
				if (response && response.post_id) {
					  var $listContent = $('.form_add_currency .list-content'); 
					  $.ajax({
						type: 'POST',
						url: Routing.generate('videocv_api_candidate_refillFacebookTicket', {iIdCandidate: $iIDCandidate}),
						data:
						{
							'idCandidate': $iIDCandidate
						},
						dataType: 'json',
						beforeSend: function(){
							$listContent.append($(ajaxLoader));
							$listContent.css('opacity','0.5');
						},
						success: function(data)
						{
							$('.buy_ticket_radios .facebook_ticket').remove();
							showLightboxMessage(data.message);
						},
						error: function (xhr, status, exception) {
							return;
						},
						complete: function() {
							$listContent.children('.ajax-loader-profile').remove();
							$listContent.css('opacity', '1');
						}
					});
				}
			  }
			);
		}
		$('form.form-add-ticket').submit(function(event){
			var valueRadio = parseInt($('form #form_add_currency input[name="candidate_buy_ticket"]:checked').val());
			if (0 === valueRadio && true === shownFacebookShare) {
				event.preventDefault();
				fbshare();
			}
		});
	}
});
/**
 * Javascript of Register Candidate Page
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
	if(typeof bCheckJavascriptRegisterCandidate !== "undefined" && bCheckJavascriptRegisterCandidate === true) {
		// Add all templates found in the DOM (it will search for <script> blocks which 
		// are of type 'text/html'.  Nb: jQuery.onReady must have fired before calling. 
		$.Mustache.addFromDom();
		
		/**
		 * Add a Language When Select Change
		 * @author Harrison <harrison@likipe.se>
		 */
		function addLanguage() {
			var $iCountInput = 0;
			var $language_select = $('.my_timeline .language_profile.language_driving_content li select');
			$language_select.each(function(){
				if( $(this).val() ) {
					$iCountInput++;
				}
				return;
			});
			if($iCountInput == $language_select.length)
			{
				//console.log(aListSettingLanguage);
				$('.my_timeline .language_profile.language_driving_content > ul').append($.Mustache.render('template-candidate-profile-language', 
					{ aListSettingLanguage: aListSettingLanguage }
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
		}

		$(document).on('change','.my_timeline .language_profile.language_driving_content li select', addLanguage);
		
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
				if(valueCompare.val() === $(this).val()) {
					countCompare++;
				}
				return;
			});
			if(countCompare === 2) {
				return true;
			} else {
				return false;
			}
		 }
		
		/**
		 * Check empty input
		 * @author Harrison <harrison@likipe.se>
		 * @param string idSelector
		 * @param string message
		 * @param jquery object insertedElement
		 * @returns {undefined}
		 */
		function checkValidValueInput(idSelector, messageError, insertedElement) {
			if (!$(idSelector).val()) {
				$('<div class="alert alert-error error_register_message">\n\
					<button class="close" data-dismiss="alert" type="button">×</button>\n\
					' + messageError + '</div>').insertBefore(insertedElement);
				return true;
			}
			return false;
		}
		
		/**
		 * Validate Password, Start Date and To Date of Education and Career when Form Submit
		 * @author Harrison <harrison@likipe.se>
		 */
		 
		 $('form.register_candidate_form').submit(function( event ) {
			var $form_this = $(this);
			if (checkValidValueInput('#candidate_registration_firstName', videoCVTranslationMessages['firstNameCandidate'] , $form_this)) {
				return false;
			}
			if (checkValidValueInput('#candidate_registration_lastName', videoCVTranslationMessages['lastNameCandidate'] , $form_this)) {
				return false;
			}
			if (checkValidValueInput('#candidate_registration_email', videoCVTranslationMessages['emailCandidate'] , $form_this)) {
				return false;
			}
			if (checkValidValueInput('#candidate_registration_yearOfBirth', videoCVTranslationMessages['yearOfBirthCandidate'] , $form_this)) {
				return false;
			}
			if($('#candidate_registration_plainPassword').val().length < 8) {
				$('<div class="alert alert-error error_register_message">\n\
					<button class="close" data-dismiss="alert" type="button">×</button>\n\
					' + videoCVTranslationMessages['lengthofPassword'] + '\n\
				   </div>').insertBefore($form_this);
				   event.preventDefault();
				   return false;
			}
			var $listEducation = $('.my_timeline .education.timeline_content ul li');
			$listEducation.each(function(){
				var $this = $(this);
				var $fromDate = parseInt($this.children('.input_date.from_date').val().replace('-',''));
				var $toDate = parseInt($this.children('.input_date.to_date').val().replace('-',''));
				if(!isNaN($fromDate) && !isNaN($toDate) && $fromDate > $toDate) {
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
			$listCareer.each(function(){
				var $this = $(this);
				var $fromDateCareer = parseInt($this.children('.input_date.from_date').val().replace('-',''));
				var $toDateCareer = parseInt($this.children('.input_date.to_date').val().replace('-',''));
				if(!isNaN($fromDateCareer) && !isNaN($toDateCareer) && $fromDateCareer > $toDateCareer) {
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
			//Check profile (language)
			var aDataId = new Array();
			var key = 0;
			$(".language_profile ul li").each(function(){
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
				$.each(aDataId, function(i, el){
					if($.inArray(el, aCheck) === -1) aCheck.push(el);
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
			if (!$form_this.find('#candidate_registration_terms').is(':checked')) {
				$('<div class="alert alert-error error_register_message">\n\
					<button class="close" data-dismiss="alert" type="button">×</button>\n\
					' + videoCVTranslationMessages['acceptTerm'] + '</div>').insertBefore($form_this);
				return false;
			}
		});
		
		/**
		 * Remove Candidate Language when click
		 * @author Harrison <harrison@likipe.se>
		 */
		$(document).on('click','.language_profile a.remove_candidate_profile', function(e){
			var $ul = $(".my_timeline .language_driving .language_profile > ul");
			$(this).parent('li').remove();
			if ($ul.children().length === 0) {
				//console.log(aListSettingLanguage);
				$('.my_timeline .language_profile.language_driving_content > ul').append($.Mustache.render('template-candidate-profile-language', 
					{ aListSettingLanguage: aListSettingLanguage }
				));

				$('.my_timeline .language_profile.language_driving_content > ul').append($.Mustache.render('template-candidate-profile-language', 
					{ aListSettingLanguage: aListSettingLanguage }
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
		$recordVideo.click(function(e){
			var $this = $(this);
			$this.css('display', 'none');
			$stopVideo.css({
				'display': 'inline-block'
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
		$stopVideo.click(function(e){
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
		$playVideo.click(function(e){
			var $this = $(this);
			$this.css('display', 'none');
			$stopVideo.css({
				'display': 'inline-block',
				'border-radius': '0',
				'-moz-border-radius': '0',
				'-webkit-border-radius': '0'
			});
			$saveVideo.attr( "disabled", "disabled" );
			e.preventDefault();
		});
		
		
		function calculation() {
			var $listcontent = $(".list-content .content");
			var $btnRegister = $(".register_candidate_form .candidate-register");
			//var location = $listcontent.offset();
			var left = $listcontent.offset().left;
			if($(window).width() > 1040) {
				left = left + $listcontent.width() - 39;
			} else {
				left = left + $listcontent.width() -65;
			}
			
			$btnRegister.css({
				'left': left + 'px'
			});
		}
		
		/**
		 * Fix Button Save When Window Resize
		 * @author Harrison <harrison@likipe.se>
		 */
		calculation();
		$(window).resize(calculation);

	}
});
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
/**
 * Javascript of Company View Job Candidate
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
	if(typeof(bCheckJavascriptViewJobCandidate) !== "undefined" && bCheckJavascriptViewJobCandidate === true) {
		/**
		 * Colorbox for Avatar Candidate
		 * @author Harrison <harrison@likipe.se>
		 */
		var $listavatars = $(".company-candidate-profile .info .thumb-avatar > a");
		if($listavatars.length > 0) {
			$listavatars.colorbox({
				rel:'group1',
				maxWidth:"900px",
				close: '<i class="icon-remove"></i>'
			});
		}
		
		var $listAvatarsMobile = $(".company-candidate-profile .list_avatar .thumb-avatar > a");
		if($listAvatarsMobile.length > 0) {
			$listAvatarsMobile.colorbox({
				rel:'group1',
				maxWidth:"900px",
				close: '<i class="icon-remove"></i>'
			});
		}
		
		var $recordedVideo = $('.recorded_video_candidate');
		if($recordedVideo.length > 0) {
			$recordedVideo.colorbox({
				iframe:true, 
				width:"1000px", 
				height:"625px",
				close: '<i class="icon-remove"></i>'
			});
		}
		//Global Variable
		//var $urlProfileCompany = "{{ app.request.getSchemeAndHttpHost() ~ path('videocv_frontend_company_profile') }}";
		/**
		 * Videocv\ApiBundle\Controller\CompanyController\putFavourite
		 * Frontend - Candidate profile pop-up
		 * Favourite - send email to user
		 * When click "Favourite"
		 * @author Rony<rony@likipe.se>
		 */
		$(document).on('click',".frontend .candidate-control .email-candidate", function(e) {
			var $parent = $(this).parents('.candidate-profile');
			//var iIdJobCandidate = parseInt($parent.children("input[name='iIdJobCandidate']").val());
			$(ajaxLoader).appendTo($parent);
			$parent.css('opacity', '0.5');
			$.ajax({
				type: 'PUT',
				url: Routing.generate('videocv_api_company_edit_favourite_jobCandidate', {iIdJobCandidate: iIdJobCandidate}),
				contentType: 'application/json',
				success: function(data) {
					$parent.children('.ajax-loader-profile').remove();
					$parent.css('opacity', '1');
					window.location.href = $urlProfileCompany;
				},
				error: function(xhr, status, exception) {
					$parent.children('.ajax-loader-profile').remove();
					$parent.css('opacity', '1');
					showLightboxMessage('Error: ' + xhr.responseJSON.error);
				}
			});
			e.preventDefault();
		});
		
		/**
		 * Videocv\ApiBundle\Controller\CompanyController\deleteNoInterest
		 * Frontend - Candidate profile pop-up
		 * No interest - It will delete from list & a notification will be send to user
		 * When click "No interest"
		 * @author Rony<rony@likipe.se>
		 */
		$(document).on('click',".frontend .candidate-control .edit-candidate", function(e) {
			var $parent = $(this).parents('.candidate-profile');
			//var iIdJobCandidate = parseInt($parent.children("input[name='iIdJobCandidate']").val());
			$(ajaxLoader).appendTo($parent);
			$parent.css('opacity', '0.5');
			$.ajax({
				type: 'DELETE',
				url: Routing.generate('videocv_api_company_deleteNoInterest', {iIdJobCandidate: iIdJobCandidate}),
				success: function(data) {
					$parent.children('.ajax-loader-profile').remove();
					$parent.css('opacity', '1');
					window.location.href = $urlProfileCompany;
				},
				error: function(xhr, status, exception) {
					showLightboxMessage('Error: ' + xhr.responseJSON.error);
				}
			});
			e.preventDefault();
		});
		
		/**
		 * Videocv\ApiBundle\Controller\CompanyController\deleteReportAbuse
		 * Frontend - Candidate profile pop-up
		 * Report Abuse => table: job_candidate (remove job candidate), remove job candidate in list all candidate, 
		 * table: candidate ( SET `abuse` = TRUE AND  `active` = FALSE), INSERT INTO `videocv`.`report_abuse`
		 * When click "Report Abuse"
		 * @author Rony<rony@likipe.se>
		 */
		$(document).on('click',".frontend .candidate-control .abuse-candidate", function(e) {
			var r = confirm(videoCVTranslationMessages['confirm_report_abuse_candidate']);
			if (true === r) {
				var $parent = $(this).parents('.candidate-profile');
				//var iIdJobCandidate = parseInt($parent.children("input[name='iIdJobCandidate']").val());
				$(ajaxLoader).appendTo($parent);
				$parent.css('opacity', '0.5');
				$.ajax({
					type: 'DELETE',
					url: Routing.generate('videocv_api_company_deleteReportAbuse', {iIdJobCandidate: iIdJobCandidate}),
					success: function(data) {
						$parent.children('.ajax-loader-profile').remove();
						$parent.css('opacity', '1');
						window.location.href = $urlProfileCompany;
					},
					error: function(xhr, status, exception) {
						showLightboxMessage('Error: ' + xhr.responseJSON.error);
					}
				});
			}
			e.preventDefault();
		});
		
		/**
		 * Click Close Button
		 * @author Harrison <harrison@likipe.se> 
		 */
		 $('#back-history-browser').click(function(e){
			if(!clickX) {
				$.ajax({
					type: 'PUT',
					url: Routing.generate('videocv_api_company_job_candidate_editClickedJobCandidate', {iIdJobCandidate: iIdJobCandidate}),
					success: function(data) {
                        history.go(-2);
						e.preventDefault();
					},
					error: function(xhr, status, exception) {                        
						history.go(-2);
						e.preventDefault();
					}
				});
			} else {
				history.go(-1);
				e.preventDefault();
			}
		 });
	}
});
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
/**
 * Javascript of Edit Company Page
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
	if(typeof bCheckJavascriptEditCompany !== "undefined" && bCheckJavascriptEditCompany === true ) {
		$('#add-another-contact').click(function() {
            var emailList = $('#contactperson-fields-list');

            // grab the prototype template
            var newWidget = emailList.attr('data-prototype');
            // replace the "__name__" used in the id and name of the prototype
            // with a number that's unique to your emails
            // end name attribute looks like name="contact[emails][2]"
            newWidget = newWidget.replace(/__name__/g, contactCount);
            contactCount++;

            // create a new list element and add it to the list
            var newLi = $('<li class="contactperson-item clearfix"></li>').html(newWidget);
			var remove = $('<a class="remove-contactperson pull-right" title="Remove contact" href="#"><i class="icon-remove"></i></a>');
			remove.appendTo(newLi);
            newLi.appendTo($('#contactperson-fields-list'));

            return false;
        });
		
		/**
		 * Remove avatar
		 * @author Rony <rony@likipe.se>
		 * @param {e} e
		 */
		$(document).on('click','.contactperson-item .remove-contactperson', function(e){
			var $parent = $(this).parent('.contactperson-item');
			var employerID = $parent.find("input.id-employer").val();
			var $div = (".setup-profile .form-profile");
			if ( typeof(employerID) !== "undefined" ) {
				$('<input type="hidden" class="list-employer-id" name="employer[' + employerID + ']" value="' + employerID + '">').appendTo($div);
			}
			$parent.remove();
			e.preventDefault();
		});
		
		/**
		 * Remove avatar
		 * @author Rony <rony@likipe.se>
		 * @param {event} event
		 */
		$('#employer-setup-profile form.setup-profile').submit(function( event ) {
			var bsubmit = true;
			$('#contactperson-fields-list .contactperson-item').each(function() {
				var $this = $(this);
				var $email = $this.find("input[type='email']");
				var $emailMessage = $this.find(".error_register_message_email");
				if ('' === $email.val()) {
					if ($emailMessage.length > 0) {
						$emailMessage.remove();
					}
					$('<div class="alert alert-error error_register_message_email clearfix">\n\
						<button class="close" data-dismiss="alert" type="button">×</button>\n\
						Vänligen ange e-post adress.\n\
						</div>').appendTo($this);
					bsubmit = false;
					return false;
				} else {
					if ($emailMessage.length > 0) {
						$emailMessage.remove();
					}
				}
				
				var $password = $this.find("input[type='password']");
				var $message = $this.find(".error_register_message");
				if($password.val().length < 8) {
					if ($message.length > 0) {
						$message.remove();
					}
					$('<div class="alert alert-error error_register_message clearfix">\n\
						<button class="close" data-dismiss="alert" type="button">×</button>\n\
						Your password must have at least 8 characters.\n\
						</div>').appendTo($this);
					bsubmit = false;
					return false;
				} else {
					if ($message.length > 0) {
						$message.remove();
					}
				}
			});
			if(!bsubmit) {
				event.preventDefault();
				return false;
			}
		});
		
		$("#contactperson-fields-list .help").popover({
			"placement": "top",
			"trigger": "hover"
		});
		
		$("#contactperson-fields-list .help").click(function(e){
			e.preventDefault();
		});
	}
});
/**
 * Javascript of Add Company Page
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
	if(typeof(bCheckJavascriptAddCompany) !== "undefined" && bCheckJavascriptAddCompany === true) {
		function rederContact() {
			var $emailList = $('#contactperson-fields-list');

			// grab the prototype template
			var newWidget = $emailList.attr('data-prototype');
			// replace the "__name__" used in the id and name of the prototype
			// with a number that's unique to your emails
			// end name attribute looks like name="contact[emails][2]"
			newWidget = newWidget.replace(/__name__/g, contactCount);
			contactCount++;
			
			var dataHelp = $('.form-profile .date-help-email').data('help');
			var help = '';
			help += '<a class="help" data-content="' + dataHelp + '" href="#" data-toggle="popover" data-original-title="" title="">';
			help += '<i class="icon-question-sign"></i>';
			help += '</a>';
			// create a new list element and add it to the list
			var newLi = $('<li class="contactperson-item clearfix"></li>').html(newWidget);
			$(help).appendTo(newLi);
			newLi.appendTo($('#contactperson-fields-list'));

			return false;
		}
		
		if($('#contactperson-fields-list > .contactperson-item').length <= 0) {
			rederContact();
		}
        $('#add-another-contact').click(function() {
			var emailList = $('#contactperson-fields-list');

			// grab the prototype template
			var newWidget = emailList.attr('data-prototype');
			// replace the "__name__" used in the id and name of the prototype
			// with a number that's unique to your emails
			// end name attribute looks like name="contact[emails][2]"
			newWidget = newWidget.replace(/__name__/g, contactCount);
			contactCount++;

			// create a new list element and add it to the list
			var newLi = $('<li class="contactperson-item clearfix"></li>').html(newWidget);
			var remove = $('<a class="remove-contactperson pull-right" title="Remove contact" href="#"><i class="icon-remove"></i></a>');
			remove.appendTo(newLi);
			newLi.appendTo($('#contactperson-fields-list'));

			return false;
        });
		
		/**
		 * Remove avatar
		 * @author Rony <rony@likipe.se>
		 * @param {e} e
		 */
		$(document).on('click','.contactperson-item .remove-contactperson', function(e){
			var $parent = $(this).parent('.contactperson-item');
			$parent.remove();
			e.preventDefault();
		});
		
		/**
		 * Remove avatar
		 * @author Rony <rony@likipe.se>
		 * @param {event} event
		 */
		$('#employer-setup-profile form.setup-profile').submit(function( event ) {
			var bsubmit = true;
			$('#contactperson-fields-list .contactperson-item').each(function() {
				var $this = $(this);
				var $email = $this.find("input[type='email']");
				var $emailMessage = $this.find(".error_register_message_email");
				if ('' === $email.val()) {
					if ($emailMessage.length > 0) {
						$emailMessage.remove();
					}
					$('<div class="alert alert-error error_register_message_email clearfix">\n\
						<button class="close" data-dismiss="alert" type="button">×</button>\n\
						Vänligen ange e-post adress.\n\
						</div>').appendTo($this);
					bsubmit = false;
					return false;
				} else {
					if ($emailMessage.length > 0) {
						$emailMessage.remove();
					}
				}
				
				var $password = $this.find("input[type='password']");
				var $message = $this.find(".error_register_message");
				if ($password.val().length < 8) {
					if ($message.length > 0) {
						$message.remove();
					}
					$('<div class="alert alert-error error_register_message clearfix">\n\
						<button class="close" data-dismiss="alert" type="button">×</button>\n\
						' + videoCVTranslationMessages['lengthofPassword'] + '\n\
						</div>').appendTo($this);
					bsubmit = false;
					return false;
				} else {
					if ($message.length > 0) {
						$message.remove();
					}
				}
			});
			if(!bsubmit) {
				event.preventDefault();
				return false;
			}
			if (!$('#CompanyType_terms').is(':checked')) {
				$('<div class="alert alert-error error_register_message">\n\
					<button class="close" data-dismiss="alert" type="button">×</button>\n\
					' + videoCVTranslationMessages['acceptTerm'] + ' </div>').insertBefore($(this));
				return false;
			}
		});
		
		$("#contactperson-fields-list .help").popover({
			"placement": "top",
			"trigger": "hover"
		});
		
		$("#contactperson-fields-list .help").click(function(e){
			e.preventDefault();
		});
	}
});
/**
 * Javascript of Dashboard Page Backend
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
	if(typeof(bCheckJavascriptResetPassword) !== "undefined" && bCheckJavascriptResetPassword === true) {
		/**
		 * Validate Password when Form Submit
		 * @author Harrison <harrison@likipe.se>
		 */
		 $('form.fos_user_resetting_reset').submit(function( event ) {
			if($('#fos_user_resetting_form_plainPassword_first').val().length < 8) {
				$('<div class="alert alert-error error_reset_password_message">\n\
					<button class="close" data-dismiss="alert" type="button">×</button>\n\
					Your password must have at least 8 characters.\n\
				   </div>').insertBefore($(this));
				   event.preventDefault();
			}
		});
	}
});
/**
 * Javascript of Dashboard Page Backend
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
	if(typeof(bCheckJavascriptChangePassword) !== "undefined" && bCheckJavascriptChangePassword === true) {
		/**
		 * Validate Password when Form Submit
		 * @author Harrison <harrison@likipe.se>
		 */
		 $('form.fos_user_change_password').submit(function( event ) {
			if($('#fos_user_change_password_form_plainPassword_first').val().length < 8) {
				$('<div class="alert alert-error error_change_password_message">\n\
					<button class="close" data-dismiss="alert" type="button">×</button>\n\
					Your password must have at least 8 characters.\n\
				   </div>').insertBefore($(this));
				   event.preventDefault();
			}
		});
	}
});
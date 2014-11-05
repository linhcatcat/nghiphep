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
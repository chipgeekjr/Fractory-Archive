


Point = Ice.$extend('Point', {
	__init__: function(x, y) {
		if(!_.has(x, 'left')) {
			this.x = this.left = x;
			this.y = this.top = y;
		} else {
			this.x = this.left = x.left;
			this.y = this.top = x.top;
		}

	},
	center: function() {
		return new Point(this.x/2, this.y/2);
	},
	plus: function(x, y) {
		if(y === undefined) {
			if(x.$class === Point) {
				return new Point(this.x + x.x, this.y + x.y);
			}

			return new Point(this.x + x, this.y + x);
		}
		return new Point(this.x + x, this.y + y);
	},
	negative: function() {
		return new Point(-1 * this.x, -1 * this.y);
	},
	translate: function(degrees, dist) {
		return this.plus(dist * Trig.cosd(degrees), dist * -1 * Trig.sind(degrees));
	},
	lt: function() {
		return {left: this.x, top: this.y};
	},
	size: function() {
		return {width: this.x, height: this.y};
	},
	times: function(mult) {
		return new Point(this.x * mult, this.y * mult);
	}
});

Point.fromSize = function(element) {
	var $e = $(element);
	return new Point($e.width(), $e.height());
}
Point.zero = new Point(0,0);



/*
     FILE ARCHIVED ON 15:24:25 Apr 13, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:47:17 Oct 13, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1146.651
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.074
  RedisCDXSource: 6.159
  esindex: 0.007
  LoadShardBlock: 1121.436 (3)
  PetaboxLoader3.datanode: 389.63 (4)
  CDXLines.iter: 17.058 (3)
  load_resource: 367.995
  PetaboxLoader3.resolve: 105.533
*/
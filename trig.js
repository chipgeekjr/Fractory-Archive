


Trig = {};
_.each(['sin', 'cos', 'tan', 'sec', 'csc', 'cot', 'asin', 'acos', 'atan'], function(i){
	Trig[i] = Math[i];
	Trig[i + 'd'] = function(deg) {
		var rads = deg * Math.PI /  180.0;
		return Math[i](rads);
	};
});

Trig.pi = Trig.Pi = Trig.PI = Math.PI;
Trig.twopi = 2 * Trig.pi;


Trig.measure_magnitude = function(x, y) {
    return Math.sqrt(x*x + y*y);
};

Trig.measure_angle = function(x,y) {
    if(x === 0) return y < 0 ? Math.PI * 1.5 : y > 0 ? Math.PI * 0.5 : 0;

    return Trig.atan(y/x) + (
        x < 0 ? Math.PI : (
            y < 0 ? 2 * Math.PI : 0
            )
    );
};

Trig.add_angular_vectors = function(s1, d1, s2, d2) {
    var x1 = Trig.cos(d1) * s1;
    var y1 = Trig.sin(d1) * s1;

    var x2 = Trig.cos(d2) * s2;
    var y2 = Trig.sin(d2) * s2;

    var d = Trig.measure_angle(x1+x2, y1+y2);
    var speed = Trig.measure_magnitude(x1+x2, y1+y2);
    return {speed:speed, direction:d};
};

console.log("Setting trig's pi");
Trig.pi = Trig.Pi = Trig.PI = Math.PI;
Trig.twopi = 2 * Trig.pi;



/*
     FILE ARCHIVED ON 15:24:25 Apr 13, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:47:20 Oct 13, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 232.823
  exclusion.robots: 0.184
  exclusion.robots.policy: 0.172
  RedisCDXSource: 5.318
  esindex: 0.02
  LoadShardBlock: 184.687 (3)
  PetaboxLoader3.datanode: 205.299 (4)
  CDXLines.iter: 36.533 (3)
  load_resource: 81.74
  PetaboxLoader3.resolve: 44.9
*/
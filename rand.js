

Rand = {};
Rand.int = function(min, max) {
    // Inclusive.
    return min + Math.floor(Math.random() * (max-min+1));
};
Rand.choose = function(array) {
    return array[Rand.int(0, array.length-1)];
};



/*
     FILE ARCHIVED ON 15:24:27 Apr 13, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:47:18 Oct 13, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 527.923
  exclusion.robots: 0.096
  exclusion.robots.policy: 0.09
  RedisCDXSource: 78.953
  esindex: 0.009
  LoadShardBlock: 427.808 (3)
  PetaboxLoader3.datanode: 336.942 (4)
  CDXLines.iter: 18.358 (3)
  PetaboxLoader3.resolve: 136.14 (2)
  load_resource: 106.414
*/


TrashSlot = InventorySlot.$extend('TrashSlot', {
	__init__: function(mode) {
		var self = this;
		self.$super();



	},
	can_accept: function(part) {
		return true;
	},
	on_part_change: function(part) {
		var self = this;
		
		self.part(null);
	}

});


/*
     FILE ARCHIVED ON 01:45:23 Oct 11, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:47:18 Oct 13, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 127.006
  LoadShardBlock: 72.829 (3)
  CDXLines.iter: 38.281 (3)
  esindex: 0.026
  RedisCDXSource: 10.497
  exclusion.robots.policy: 0.197
  PetaboxLoader3.resolve: 63.678
  exclusion.robots: 0.21
  PetaboxLoader3.datanode: 91.774 (4)
  load_resource: 114.317
*/
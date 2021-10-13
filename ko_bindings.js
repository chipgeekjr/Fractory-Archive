


ko.bindingHandlers.double_tap = {
    init: function(element, valueAccessor) {
        // console.log("Setting up double_tap");
        interact(element).on('doubletap', valueAccessor());

    },
    dispose: function(element, valueAccessor) {
        // console.log("Disposing doubletap");
        interact(element).unset();

    }
}


ko.bindingHandlers.tap = {
    init: function(element, valueAccessor) {
        // console.log("Setting up double_tap");
        interact(element).on('tap', function(event) {
            valueAccessor(event)
        });

    },
    dispose: function(element, valueAccessor) {
        // console.log("Disposing doubletap");
        interact(element).unset();

    }
}


ko.bindingHandlers.right_click = {
    init: function(element, valueAccessor) {
        $(element).on('contextmenu', function(event) {
            //console.log("binding element trying");
            valueAccessor()(event);
            event.preventDefault(true);
        });
    },
    dispose: function(element, valueAccessor) {
        $(element).off('contextmenu', valueAccessor());
    }
}


/*
     FILE ARCHIVED ON 15:24:27 Apr 13, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:47:16 Oct 13, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 90.51
  exclusion.robots: 0.204
  exclusion.robots.policy: 0.19
  RedisCDXSource: 1.037
  esindex: 0.018
  LoadShardBlock: 51.626 (3)
  PetaboxLoader3.datanode: 57.833 (4)
  CDXLines.iter: 30.588 (3)
  load_resource: 44.38
  PetaboxLoader3.resolve: 23.83
*/
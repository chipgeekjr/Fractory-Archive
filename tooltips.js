


Tooltip = Ice.$extend('Tooltip', {
    __init__: function(obj) {
        this.$super(obj);
        var self = this;
        this.obj = obj;
        this.structure = null;
        obj.$el.addClass('.tooltipped');
        //obj must have an $el which has a backwards reference to it.
        //this.$el = TEMPLATES.clone('tooltip', this);
        //console.log(obj.$el);
        $(obj.$el).tooltip({
            content: function(callback) {self.generate_content(this, callback);},
            items:obj.$el,
            open: function(event, ui) { self.open_tooltip(event, tooltip); },
            close: function(event, ui) { self.hide_tooltip(event, tooltip); }
        });
    },
    generate_content: function(el, callback) {
        //console.log('generate_content, this=', this);
        if(!this.structure) {
            this.structure = $('<div>');
            this.structure.addClass('tooltip');
            this.obj.generate_tooltip(this, this.structure);
        }

        this.obj.render_tooltip(this);

        callback( this.structure);

    },
    open_tooltip: function(event, tooltip) {
        this.obj.render_tooltip(this);
        this.obj.evChanged.sub(this.rerender, this);
        //potato.x; // force the tooltip to die.
        return true;

    },
    hide_tooltip: function(event, tooltip) {
        this.obj.evChanged.unsub(this);
    },
    rerender: function() {
        this.obj.render_tooltip(this);
    }
});
Tooltip.structures = {};


/*
     FILE ARCHIVED ON 15:24:25 Apr 13, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:47:21 Oct 13, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 713.456
  exclusion.robots: 0.214
  exclusion.robots.policy: 0.199
  RedisCDXSource: 367.415
  esindex: 0.019
  LoadShardBlock: 309.189 (3)
  PetaboxLoader3.datanode: 328.589 (4)
  CDXLines.iter: 31.627 (3)
  load_resource: 92.105
  PetaboxLoader3.resolve: 53.978
*/
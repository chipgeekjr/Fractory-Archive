

TemplateManager = Class.$extend({
	__init__: function(selector) {
		var self = this;
		this.lib = {};
		this.html_templates = $('.html_templates');
		_.each(this.html_templates.children('div'), function(v, i, l) {
			v = $(v);
			var id = v.attr('id');
			self.lib[id] = v;
		});
		this.__inited__ = true;

	},
	clone: function(id, obj) {
		if(!this.__inited__) {
			this.init();
		}
		var tpl = this.lib[id];
		var $el = $(tpl).clone();
		TemplateManager.bind_element($el, obj);
		return $el;
	}

});

TemplateManager.clone_from_html = function(html, obj) {
	debug = html;
	var $el = $(html);
	TemplateManager.bind_element($el, obj);
	return $el;
}
TemplateManager.bind_element = function($el, obj) {
	$el.data('obj', obj||null);
	if(obj) {
        _.each($el.find('[id]'), function(child) {
		    var id = child.id;
		    obj['$' + id] = $(child);
		});
	}
}



/*
     FILE ARCHIVED ON 15:24:25 Apr 13, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:47:17 Oct 13, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 297.447
  exclusion.robots: 0.153
  exclusion.robots.policy: 0.14
  RedisCDXSource: 17.222
  esindex: 0.016
  LoadShardBlock: 243.789 (3)
  PetaboxLoader3.datanode: 171.505 (4)
  CDXLines.iter: 31.884 (3)
  PetaboxLoader3.resolve: 142.439 (2)
  load_resource: 188.317
*/
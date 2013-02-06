/*
 * @author saumya
 * 
 */
define('modules/view/SlideView',
function(){
	var SlideView = Backbone.View.extend({
		el: $('#idSlides'),
		initialize: function(){
			console.log('SlideView : initialize : ');
			console.log(this.el);
		}
	});
	return SlideView;
});

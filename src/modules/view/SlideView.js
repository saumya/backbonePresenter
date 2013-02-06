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
			this.render();
		},
		render: function(){
			console.log('SlideView : render : ');
			//this.$el.clear();
			this.$el.append(' : Hello World');
		}
	});
	return SlideView;
});

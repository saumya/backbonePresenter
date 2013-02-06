/*
 * @author saumya
 * 
 */
define('modules/view/SlideView',
['modules/model/SlideModel'],
function(){
	var templateString=$("#slide_template").html();
	
	var SlideView = Backbone.View.extend({
		el: $('#idSlides'),
		initialize: function(){
			console.log('SlideView : initialize : ');
			//console.log(this.el);
			this.render();
		},
		render: function(){
			console.log('SlideView : render : ');
			//this.$el.clear();
			//this.$el.append(' : Hello World');
			// Compile the template using underscore
            var template = _.template( templateString , {} );
            // Load the compiled HTML into the Backbone "el"
            this.$el.html( template );
		},
		setData: function(data){
			console.log('SlideView : setData : ');
			//console.log(this.model);
			this.model=data;
			//console.log(this.model);
		}
	});
	return SlideView;
});

/*
 * @author saumya
 * 
 */
define('modules/view/SlideView',
//['modules/model/SlideModel'],
function(){
	var templateString=$("#slide_template").html();
	
	var SlideView = Backbone.View.extend({
		el: $('#idSlides'),
		initialize: function(){
			console.log('SlideView : initialize : ');
			//this.model.on('change', this.onModelChange);
			//console.log(this.el);
			//this.render();
		},
		render: function(){
			console.log('SlideView : render : ');
			//this.$el.clear();
			//this.$el.append(' : Hello World');
			//console.log(this.model.get('pageTitle'));
			var t=this.model.get('pageTitle');
			var d=this.model.get('description');
			var s=this.model.get('subTitle');
			//
			var o=new Object();//NOt sure why I have to do this!!
			o.pageTitle=t;
			o.description=d;
			o.subTitle=s;
			//
            var compiledTemplate = _.template( templateString , o );
            
            // Load the compiled HTML into the Backbone "el"
            this.$el.html( compiledTemplate );
		},
		setData: function(data){
			console.log('SlideView : setData : ');
			//console.log(this.model);
			this.model=data;
			//console.log(this.model);
			this.render();
			//console.log(this.model);
		}
	});
	return SlideView;
});

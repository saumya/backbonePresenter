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
		events:{
			'click #btnBack' : 'onBackClick',
			'click #btnNext' : 'onNextClick'
		},
		initialize: function(){
			console.log('SlideView : initialize : ');
		},
		render: function(){
			console.log('SlideView : render : ');
            var compiledTemplate = _.template( templateString , this.model.toJSON() );
            // Load the compiled HTML into the Backbone "el"
            this.$el.html( compiledTemplate );
		},
		setData: function(data){
			console.log('SlideView : setData : ');
			this.model=data;
			this.render();
		},
		disableBackButton:function(){
			console.log('SlideView : disableBackButton : ');
			$("#btnBack").hide();
		},
		enableBackButton: function(){
			console.log('SlideView : enableBackButton : ');
			$("#btnBack").show();
		},
		disableNextButton: function(){
			console.log('SlideView : disableNextButton : ');
			$("#btnNext").hide();
		},
		enableNextButton: function(){
			console.log('SlideView : enableNextButton : ');
			$("#btnNext").show();
		},
		//Event handlers
		onBackClick: function(event){
			console.log('SlideView : onBackClick : ');
			this.trigger('SlideView.onBack');
		},
		onNextClick: function(event){
			console.log('SlideView : onNextClick : ');
			this.trigger('SlideView.onNext');
		}
	});
	return SlideView;
});

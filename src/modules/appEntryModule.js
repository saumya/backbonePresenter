define('modules/appEntryModule',
	['modules/collection/SlidesCollection','modules/model/SlideModel','modules/view/SlideView'],
	function(SlidesCollection,SlideModel,SlideView){
		/*
		console.log('AppEntry Module');
		var slideModel=new SlideModel();
		//collection
		var slidesCollection=new SlidesCollection();
		//view
		var slide=new SlideView();
		slide.setData(slideModel);
		//
		slide.listenTo(slideModel, 'change', slide.render);
		on('SlideView.onBack',this.onBack);
		on('SlideView.onNext',this.onNext);
		//Logic of the page	
		slideModel.set('pageTitle','Hello');
		
		var onBack=function(){
			console.log('AppEntry : onBack');
		};
		var onNext=function(){
			console.log('AppEntry : onNext');
		};
		*/
		var ApplicationEntry = Backbone.View.extend({
			initialize:function(){
				console.log('ApplicationEntry : initialize');
				this.slideModel=new SlideModel();
				//collection
				var slidesCollection=new SlidesCollection();
				//view
				var slide=new SlideView();
				slide.setData(this.slideModel);
				//event listeners
				slide.on('SlideView.onBack',this.onBack,this);
				slide.on('SlideView.onNext',this.onNext,this);
				slide.listenTo(this.slideModel, 'change', slide.render);
				//change model
				//slideModel.set('pageTitle','Hello');
			},
			onNext:function(event){
				console.log('ApplicationEntry : onNext');
				this.slideModel.set('pageTitle','Hello');
			},
			onBack:function(event){
				console.log('ApplicationEntry : onBack');
			}
		});
		return ApplicationEntry;
		//slide.model.set({pageTitle:'Wow title woW'});
	});

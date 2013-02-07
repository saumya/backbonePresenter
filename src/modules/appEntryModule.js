define('modules/appEntryModule',
	['modules/collection/SlidesCollection','modules/model/SlideModel','modules/view/SlideView'],
	function(SlidesCollection,SlideModel,SlideView){
		//console.log('AppEntry Module');
		var ApplicationEntry = Backbone.View.extend({
			initialize:function(){
				console.log('ApplicationEntry : initialize');
				this.pageCounter=0;
				//collection
				this.slidesCollection=new SlidesCollection();
				//console.log(slidesCollection.length);
				this.slideModel=this.slidesCollection.at(0);
				//view
				this.slide=new SlideView();
				this.slide.setData(this.slideModel);
				//event listeners
				this.slide.on('SlideView.onBack',this.onBack,this);
				this.slide.on('SlideView.onNext',this.onNext,this);
				//slide.listenTo(this.slideModel, 'change', slide.render);
				//change model
				//slideModel.set('pageTitle','Hello');
			},
			onNext:function(event){
				console.log('ApplicationEntry : onNext');
				//this.slideModel.set('pageTitle','Hello');
				//var model=this.slidesCollection.at(1);
				//this.slideModel.set(model);
				
				if(this.pageCounter<=(this.slidesCollection.length-2))
				{
					this.pageCounter++;
					this.slideModel=this.slidesCollection.at(this.pageCounter);
					this.slide.setData(this.slideModel);
				}else{
					console.log('Last page is reached.');
				}
			},
			onBack:function(event){
				console.log('ApplicationEntry : onBack');
				
				if(this.pageCounter>=1)
				{
					this.pageCounter--;
					this.slideModel=this.slidesCollection.at(this.pageCounter);
					this.slide.setData(this.slideModel);
				}else{
					console.log('First page is reached.');
				}
			}
		});
		return ApplicationEntry;
		//slide.model.set({pageTitle:'Wow title woW'});
	});

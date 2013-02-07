define('modules/appEntryModule',
	['modules/collection/SlidesCollection','modules/model/SlideModel','modules/view/SlideView'],
	function(SlidesCollection,SlideModel,SlideView){
		console.log('AppEntry Module : ');
		
		var ApplicationEntry = Backbone.View.extend({
			initialize:function(){
				console.log('ApplicationEntry : initialize');
				//_.bindAll(this);//for retaining "this" for all
				//initialise properties
				this.pageCounter=0;
				//collection
				this.slidesCollection=new SlidesCollection();
				this.slidesCollection.on("reset",function(event){
					//console.log(this.length);//seems "this" refers to the Collection
					this.onCollectionUpdatedWithData();
					//console.log(this.pageCounter);
				},this);//passing "this" as third parameter makes the context to this class rather than the Collection
				this.slidesCollection.fetch();//they call it bad practice
				/*
				//initialise the data
				this.dataJson=dataInJsonFormat;
				//console.log(this.dataJson);
				//console.log('ApplicationEntry : initialize');
				//parse the data into collections
				//reseting the collection
				this.slidesCollection.reset();
				//parse the model and set the data
				_.each(this.dataJson,function(value, key, list){
					
					//console.log(value.pageNumber);
					//console.log(value.pageTitle);
					//console.log(value.subTitle);
					//console.log(value.punchLine);
					//console.log(value.description);
					
					//create models
					var sm=new SlideModel({
						pageNumber: value.pageNumber,
						pageTitle: value.pageTitle,
						subTitle: value.subTitle,
						punchLine: value.punchLine,
						description: value.description
					});
					//console.log(this.pageCounter);
					this.slidesCollection.add(sm);
				},this);*/
				/*
				//console.log(this.slidesCollection.length);
				this.slideModel=this.slidesCollection.at(0);
				
				//view
				this.slide=new SlideView();
				this.slide.setData(this.slideModel);
				this.slide.disableBackButton();
				this.slide.enableNextButton();
				//event listeners
				this.slide.on('SlideView.onBack',this.onBack,this);
				this.slide.on('SlideView.onNext',this.onNext,this);
				//slide.listenTo(this.slideModel, 'change', slide.render);
				//change model
				//slideModel.set('pageTitle','Hello');
				*/
			},
			onNext:function(event){
				console.log('ApplicationEntry : onNext');
				//this.slideModel.set('pageTitle','Hello');
				//var model=this.slidesCollection.at(1);
				//this.slideModel.set(model);
				
				if(this.pageCounter<(this.slidesCollection.length-1))
				{
					this.pageCounter++;
					this.slideModel=this.slidesCollection.at(this.pageCounter);
					this.slide.setData(this.slideModel);
					if(this.pageCounter===(this.slidesCollection.length-1))
					{
						console.log('this.pageCounter='+this.pageCounter);
						this.slide.enableBackButton();
						this.slide.disableNextButton();
					}
				}
			},
			onBack:function(event){
				console.log('ApplicationEntry : onBack : this.pageCounter='+ this.pageCounter);
				
				if(this.pageCounter>0)
				{
					this.pageCounter--;
					this.slideModel=this.slidesCollection.at(this.pageCounter);
					this.slide.setData(this.slideModel);
					if(this.pageCounter===0)
					{
						console.log('this.pageCounter='+this.pageCounter);
						this.slide.disableBackButton();
						this.slide.enableNextButton();
					}
				}
			},
			onCollectionUpdatedWithData: function(event){
				console.log('ApplicationEntry : onCollectionReset : ');
				
				this.slideModel=this.slidesCollection.at(0);
				//view
				this.slide=new SlideView();
				this.slide.setData(this.slideModel);
				this.slide.disableBackButton();
				this.slide.enableNextButton();
				//event listeners
				this.slide.on('SlideView.onBack',this.onBack,this);
				this.slide.on('SlideView.onNext',this.onNext,this);
				
			}
			
		});
		return ApplicationEntry;
		//slide.model.set({pageTitle:'Wow title woW'});
	});

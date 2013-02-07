define('modules/appEntryModule',
	['modules/collection/SlidesCollection','modules/model/SlideModel','modules/view/SlideView'],
	function(SlidesCollection,SlideModel,SlideView){
		console.log('AppEntry Module : Lets do the XML parsoing dance here. Before moving on to initialize this view !! ');
		
		var ApplicationEntry = Backbone.View.extend({
			initialize:function(dataInJsonFormat){
				console.log('ApplicationEntry : initialize');
				//initialise properties
				this.pageCounter=0;
				//collection
				this.slidesCollection=new SlidesCollection();
				//initialise the data
				this.dataJson=dataInJsonFormat;
				//console.log(this.dataJson);
				//console.log('ApplicationEntry : initialize');
				//parse the data into collections
				//reseting the collection
				this.slidesCollection.reset();
				//parse the model and set the data
				_.each(this.dataJson,function(value, key, list){
					/*
					console.log(value.pageNumber);
					console.log(value.pageTitle);
					console.log(value.subTitle);
					console.log(value.punchLine);
					console.log(value.description);
					*/
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
				},this);
				//console.log(this.slidesCollection.length);
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
					this.slide.enableBackButton();
					this.slide.disableNextButton();
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
					this.slide.disableBackButton();
					this.slide.enableNextButton();
				}
			}
		});
		return ApplicationEntry;
		//slide.model.set({pageTitle:'Wow title woW'});
	});

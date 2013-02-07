define('modules/appEntryModule',
	['modules/collection/SlidesCollection','modules/model/SlideModel','modules/view/SlideView'],
	function(SlidesCollection,SlideModel,SlideView){
		console.log('AppEntry Module : Lets do the XML parsoing dance here. Before moving on to initialize this view !! ');
		
		var onXmlLoadComplete = function(xmlData){
			//console.log($.isXMLDoc(xData));
			//var xml=$(xmlData).find('slides');
			console.log(xmlData);
			var dataJson=$.xml2json(xmlData);
			console.log(dataJson);
			console.log(dataJson.slide.length);
			//var jsonX=$.parseJSON(x);
			//console.log(jsonX);
			//console.log($(xData).find('slides'));
		};
		$.get('assets/data/slides.xml',onXmlLoadComplete);
		
		
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

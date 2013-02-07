/**
 * @author saumya
 * 
 */
define('modules/collection/SlidesCollection',
['modules/model/SlideModel'],
function(SlideModel){
	var SlidesCollection = Backbone.Collection.extend({
		model: SlideModel, //localStorage: new Store('todos-backbone'),  
		initialize: function(){
			console.log('SlidesCollection : initialize : ');
			/*
			//initialise the collection with models
			var page1=new SlideModel({
				pageNumber:1,
				description:'First page'
				});
			var page2=new SlideModel({
				pageNumber:2,
				description:'Second page'
				});
			var page3=new SlideModel({
				pageNumber:3,
				description:'Third page'
				});
			this.add([page1,page2,page3]);
			*/
			/*
			//load and parse XML
			var onXmlLoadComplete = function(xmlData){
				//console.log($.isXMLDoc(xData));
				var xml=$(xmlData).find('slides');
				//console.log(xmlData);
				var dataJson=$.xml2json(xmlData).slide;
				//var dataJson=$.xml2json(xml);
				//console.log(dataJson);
				//console.log(dataJson.slide.length);
				//parse the model and set the data
				_.each(dataJson,function(value, key, list){
					
					console.log(value.pageNumber);
					console.log(value.pageTitle);
					console.log(value.subTitle);
					console.log(value.punchLine);
					console.log(value.description);
					
					//create models
					var sm=new SlideModel({
						pageNumber: value.pageNumber,
						pageTitle: value.pageTitle,
						subTitle: value.subTitle,
						punchLine: value.punchLine,
						description: value.description
					});
					this.add(sm);
				})
				//
				//new ApplicationEntry();
			};
			$.get('assets/data/slides.xml',onXmlLoadComplete);//finally load the XML
			
			*/
			//end SML parsing
			//this.getXMLdata();
			//event handlers
			this.on('add', this.onModelAdd,this);
			this.on('remove', this.onModelRemove,this);
			this.on('change', this.onCollectionChange,this);
		},
		onNewModelParsed: function(ev){
			console.log('SlidesCollection : onNewModelParsed : ');
		},
		//event listeners
		onModelAdd: function(ev){
			console.log('SlidesCollection : onModelAdded : ');
		},
		onModelRemove: function(ev){
			console.log('SlidesCollection : onModelRemove : ');
		},
		onCollectionChange: function(ev){
			console.log('SlidesCollection : onCollectionChange : ');
		}
	});
	return SlidesCollection;
});

/**
 * @author saumya
 * 
 */
define('modules/collection/SlidesCollection',
['modules/model/SlideModel'],
function(SlideModel){
	var SlidesCollection = Backbone.Collection.extend({
		model: SlideModel, //localStorage: new Store('todos-backbone'),
		url: "/assets/data/slides.xml",  
		initialize: function(){
			console.log('SlidesCollection : initialize : ');
			//event handlers
			this.on('add', this.onModelAdd,this);
			this.on('remove', this.onModelRemove,this);
			this.on('change', this.onCollectionChange,this);
			this.on('reset', this.onCollectionReset,this);
		},
		parse: function(xmlData){
			console.log('SlidesCollection : parse : ');
			var parsed=[];
			//console.log($.isXMLDoc(xmlData));
			var xml=$(xmlData).find('slides');
				var dataJson=$.xml2json(xmlData).slide;
				//parse the model and set the data
				_.each(dataJson,function(value, key, list){
					//create models
					var sm=new SlideModel({
						pageNumber: value.pageNumber,
						pageTitle: value.pageTitle,
						subTitle: value.subTitle,
						punchLine: value.punchLine,
						description: value.description
					});
					//this.add(sm);
					parsed.push(sm);
				},this);
			return parsed;
		},
		fetch: function(options){
			console.log('SlidesCollection : fetch : ');
			options || (options = {});
    		options.dataType="xml";
    		Backbone.Collection.prototype.fetch.call(this, options);
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
		},
		onCollectionReset: function(ev){
			console.log('SlidesCollection : onCollectionReset : ');
		}
	});
	return SlidesCollection;
});

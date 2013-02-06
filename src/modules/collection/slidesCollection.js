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
			//initialise the collection with models
			var page1=new SlideModel({pageNumber:1,description:'First page'});
			
			//event handlers
			this.on('add', this.onCollectionChange,this);
		},
		onCollectionChange: function(ev){
			console.log('SlidesCollection : onCollectionChange : ');
		}
	});
	return SlidesCollection;
});

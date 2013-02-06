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
			//event handlers
			this.on('add', this.onModelAdd,this);
			this.on('remove', this.onModelRemove,this);
			this.on('change', this.onCollectionChange,this);
		},
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

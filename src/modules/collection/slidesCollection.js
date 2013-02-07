/**
 * @author saumya
 * 
 */
define('modules/collection/SlidesCollection',
['modules/model/SlideModel'],
function(SlideModel){
	var SlidesCollection = Backbone.Collection.extend({
		model: SlideModel, //localStorage: new Store('todos-backbone'),
		url: "/assets/data/slides.json",  
		initialize: function(){
			console.log('SlidesCollection : initialize : ');
			//event handlers
			this.on('add', this.onModelAdd,this);
			this.on('remove', this.onModelRemove,this);
			this.on('change', this.onCollectionChange,this);
			this.on('reset', this.onCollectionReset,this);
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

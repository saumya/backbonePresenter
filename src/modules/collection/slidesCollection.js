/**
 * @author saumya
 * 
 * requireJS : template : define('modules/collection/SlidesCollection',['modules/model/SlidesModel'],function(){});
 * Complete :
 * define('modules/collection/SlidesCollection',
 * ['modules/model/SlidesModel'],
 * function(SlidesModel){
 * 	var SlidesCollection = Backbone.Collection.extend({});
 * });
 * 
 */
define('modules/collection/SlidesCollection',
['modules/model/SlidesModel'],
function(SlidesModel){
	var SlidesCollection = Backbone.Collection.extend({
		model: SlidesModel, //localStorage: new Store('todos-backbone'),  
		initialize: function(){
			console.log('SlidesCollection : initialize : ');
			//event handlers
			this.on('add', this.onCollectionChange,this);
		},
		onCollectionChange: function(ev){
			console.log('SlidesCollection : onCollectionChange : ');
		}
	});
});

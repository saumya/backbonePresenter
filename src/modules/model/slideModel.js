/**
 * @author saumya
 * 
 * requireJS : template : define('modules/model/SlideModel',function(){});
 * Complete :
 * define('modules/model/SlideModel',function(){
 * 	var SlideModel = Backbone.model.extend({});
 * 	return SlideModel;
 * });
 * 
 */
define('modules/model/SlideModel',function(){
	var SlideModel = Backbone.model.extend({
		defaults:{
			pageNumber: 0,
			pageTitle: 'This is page title',
			punchLine: 'This is punch line',
			description: 'Description of the page. This is simply dummy text of the typesetting industry. Lorem Ipsum.'
		},
		intialize:{
			console.log('SlideModel : intialize : ');
		}
	});
	return SlideModel;
});

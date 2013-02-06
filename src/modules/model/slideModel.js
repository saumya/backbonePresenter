/**
 * @author saumya
 * 
 * requireJS : template : define('modules/model/SlideModel',function(){});
 * Complete :
 * define('modules/model/SlideModel',function(){
 * 	var SlideModel = Backbone.Model.extend({});
 * 	return SlideModel;
 * });
 * 
 */
define('modules/model/SlideModel',
function(){
	var SlideModel = Backbone.Model.extend({
		defaults:{
			pageNumber: 0,
			pageTitle: 'The Beginning.',
			subTitle: 'BackboneJS',
			punchLine: 'This is punch line',
			description: 'Description of the page. This is simply dummy text of the typesetting industry. Lorem Ipsum.'
		},
		initialize:function(){
			console.log('SlideModel : initialize : ');
		}
	});
	return SlideModel;
});

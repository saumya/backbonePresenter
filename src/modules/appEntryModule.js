define('modules/appEntryModule',
	['modules/collection/SlidesCollection','modules/model/SlideModel','modules/view/SlideView'],
	function(SlidesCollection,SlideModel,SlideView){
		console.log('AppEntry Module');
		var slideModel=new SlideModel();
		var slidesCollection=new SlidesCollection();
		var slide=new SlideView();
		slide.setData(slideModel);
	});

define('modules/appEntryModule',
	['modules/collection/SlidesCollection','modules/view/SlideView'],
	function(SlidesCollection,SlideView){
		console.log('AppEntry Module');
		var slidesCollection=new SlidesCollection();
		var slide=new SlideView();
	});

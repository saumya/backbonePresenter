define('modules/appEntryModule',
	['modules/collection/SlidesCollection'],
	function(SlidesCollection){
		console.log('AppEntry Module');
		var slidesCollection=new SlidesCollection();
	});

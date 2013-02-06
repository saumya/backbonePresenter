define('modules/appEntryModule',
	['modules/collection/todosCollection'],
	function(TodosCollection){
		console.log('AppEntry Module');
		var todosCollection=new TodosCollection();
	});

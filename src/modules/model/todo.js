define('modules/model/todo',function(){
	//return 'Todo Model : Hello World.';
	//backbone
	var Todo = Backbone.Model.extend({
	  // Default todo attribute values
	  initialize: function(){
	      console.log('Todo : MODEL : has been initialized.');
	       this.on('change', this.onModelChange,this);//adding event handlers
	  },
	  defaults: {
	    title: 'DefaultTitle',
	    completed: false
	  },
	  onModelChange : function(ev){
	  	console.log('---------------');
	  	console.log('Todo : onModelChange : ');
	  	//console.log(ev);
	  	//checking for what is changed
	  	if(ev.changed.title)
	  	{
	  		console.log('TITLE is changed');
	  	}else{
	  		console.log('COMPLETED is changed');
	  	}
	  	console.log('---------------');
	  }
	});
	//end backbone
	return Todo;//this is requireJS
});
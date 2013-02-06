define('modules/collection/todosCollection',
		['modules/model/todo'],
		function(TodoModel){
			//backbone
			var TodosCollection = Backbone.Collection.extend({
			  model: TodoModel,
			  	//localStorage: new Store('todos-backbone'),  
			  initialize: function(){
			      console.log('Todos COLLECTION has been initialized.');
			       /*
			       console.log(this);
			       var t1=new TodoModel({title: 'first',completed: false});
			       var t2=new TodoModel();
			       var t3=new TodoModel({title: 'third',completed: false});
			       t2.set('title','Second Model');
			       this.add([t1,t2,t3]);
			       */
			      this.on('add', this.onCollectionChange,this);//adding event handlers
			  },
			  onCollectionChange: function(ev){
			  	console.log('onCollectionChange');
			  }
			});
			//End backbone
			return TodosCollection;
		});


import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodosService {

  constructor(public http:Http) { }
	
	// Get all todos
	getTodos(){
		return this.http.get('/api/todos');
	}
	
	// Post todo
	saveTodo(todo) {
		var headers = new Headers();
		headers.append('Content-Type','application/json');
    return this.http.post('/api/todo', JSON.stringify(todo),{headers: headers})
       .map(res => res.json());
    }
	
	// Edit todo
	updateTodo(todo){
  	var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('/api/todo/'+todo._id, JSON.stringify(todo),{headers: headers});
   }

	// Delete todo
 	deleteTodo(id){
    return this.http.delete('/api/todo/'+id);
  }
	

}

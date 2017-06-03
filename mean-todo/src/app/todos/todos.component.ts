import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../../models/Todo';
import 'rxjs/add/operator/map';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
	todos: Todo[];
  constructor( private todoService:TodosService) { }

  ngOnInit() {
		this.todoService.getTodos()
			.map(res => res.json())
			.subscribe(todos => this.todos = todos)
  }

	
	 addTodo($event, todoText){
    if($event.which === 1){
      var result;
      var newTodo = {
        text: todoText.value,
        isCompleted: false
      };
			console.log(newTodo);      
      result = this.todoService.saveTodo(newTodo);
      result.subscribe(x => {
        this.todos.push(newTodo)
      })
			todoText.value = '';
    }
  }
	
	updateStatus(todo) {
		var temp = {
			_id: todo._id,
			text: todo.text,
			isCompleted: !todo.isCompleted
		};
		
		this.todoService.updateTodo(temp)
			.map(res => res.json)
			.subscribe( data => {todo.isCompleted = !todo.isCompleted});
	}
	
	
}

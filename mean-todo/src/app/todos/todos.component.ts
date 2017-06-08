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

	// Get all todos on init
  ngOnInit() {
		this.todoService.getTodos()
			.map(res => res.json())
			.subscribe(todos => this.todos = todos)
  }

	
	 // Add new todo
	 addTodo($event, todoText){
		// if event is click
    if($event.which === 1){
      var result;
      var newTodo = {
        text: todoText.value,
        isCompleted: false
      };
			// Create new todo and save
      result = this.todoService.saveTodo(newTodo);
      result.subscribe(x => {
        this.todos.push(newTodo)
      })
			todoText.value = ''; // Clear input
    }
  }
	
	// Edit todo status
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
	
	// Function to switch edit states
	setEditState(todo, state) {
		if(state)
			todo.isEditMode = state;
		else
			delete todo.isEditMode;
	}
	

	// Edit todo text
	updateTodoText($event, todo) {
		// Enter key is pressed
		if($event.which === 13) {
			todo.text = $event.target.value;
			var temp = {
				_id: todo._id,
				text: todo.text,
				isCompleted: todo.isCompleted
			};
			
			// Save and change edit state
			this.todoService.updateTodo(temp)
      	.map(res => res.json())
      	.subscribe(data => {
        	this.setEditState(todo, false);
      });
		}
	}
	
	/*
	deleteTodo(todo) {
		var todos = this.todos;
		this.todoService.deleteTodo(todo._id)
			.map(res => res.json)
			.subscribe( data => {
				if(data.n == 1){
          for(var i = 0;i < todos.length;i++){
            if(todos[i]._id == todo._id){
              todos.splice(i, 1);
            }
          }
        }
		});
	}
	*/
	
}

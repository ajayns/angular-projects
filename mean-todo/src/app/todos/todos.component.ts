import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
	todos: Todo[];
  constructor( private todoservice:TodosService) { }

  ngOnInit() {
		this.todoservice.getTodos()
			.map(res => res.json())
			.subscribe(todos => this.todos = todos)
  }

}

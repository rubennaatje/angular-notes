import { Component, OnInit } from '@angular/core';

import { Todo } from './todo'
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoList: Array<Todo> = [];

  constructor(private todoService: TodoService) {}

  getTodoList(){
    this.todoService.getTodoList().subscribe((data) => {this.todoList = data.notes });
  }

  ngOnInit(): void {
    this.getTodoList();
  }
  
}

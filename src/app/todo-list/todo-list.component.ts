import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../todo'

import { TodoService } from '../services/todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todoList: Array<Todo> = [];

  constructor(private todoService: TodoService) { }

  deleteTodo(todo: Todo){
    this.todoService.deleteTodo(todo.id).subscribe(x => console.log(x));
    const index: number = this.todoList.indexOf(todo);
    if (index !== -1) {
        this.todoList.splice(index, 1);
    }   
  }

  invertTodoStatus(id){
    let todo = this.todoList.find(t => t.id === id);

    todo.done = !todo.done;

    this.todoService.updateTodo(todo).subscribe(x => console.log(x));
  }

  getTodoList(){
    this.todoService.getTodoList().subscribe((data) => {this.todoList = data.notes });
  }

  ngOnInit(): void { }
}
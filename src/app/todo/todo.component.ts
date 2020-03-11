import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TodoService } from '../services/todo.service'

import { Todo } from '../todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todoList: Array<Todo> = [];

  todoForm: FormGroup;
  todo: Todo;

  constructor(private todoService: TodoService) { }

  addTodo(){
    this.todoService.addTodo(this.todo).subscribe(x => console.log(x));
    this.todoList.push(this.todo);
    this.todo = new Todo();
  }


  ngOnInit(): void {
    this.todo = new Todo();

    this.todoForm = new FormGroup({
      'title': new FormControl(this.todo.title, [
        Validators.required,
        Validators.minLength(5),
      ])
    });
  }
}

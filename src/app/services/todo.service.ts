import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Todo } from '../todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  configUrl = 'http://localhost:3000/notes/';

  constructor(private http: HttpClient) { 
  }

  addTodo(object: Todo): Observable<any>{
    return this.http.post(this.configUrl, object);
  }

  deleteTodo(id: string):  Observable<any>{
    return this.http.delete(this.configUrl + id);
  }

  updateTodo(object: Todo): Observable<any>{
    return this.http.put(this.configUrl, object);
  }

  getTodoList(): Observable<any>{
    return this.http.get(this.configUrl);
  }
}

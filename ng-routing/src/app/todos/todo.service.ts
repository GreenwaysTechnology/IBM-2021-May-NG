import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../types/todo.type';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  public findAll(): Observable<Todo[]> {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    const fallbackResponse = [{
      userId: 0,
      id: 0,
      title: "fallback todo",
      completed: false
    }];
    return this.http.get<Todo[]>(url).pipe(
      //map(todos => todos.filter(todo => todo.completed)),
      // map(todos => todos.filter(todo => todo.id===40)),
      catchError(this.handleError<Todo[]>('findAll-Todos', fallbackResponse)))
  }
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(error.message);
      return of(result as T);
    }
  }
}

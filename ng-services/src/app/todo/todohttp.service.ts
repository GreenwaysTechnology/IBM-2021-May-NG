import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Todo } from '../types/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodohttpService {

  constructor(private http: HttpClient) { }
  //findAll
  public findAll(): Observable<Todo[]> {
    const url = `http://localhost:3000/todos`;
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
  save(todo: Todo) {
    console.log(todo)
    const url = `http://localhost:3000/todos`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    //sending todo data to server
    return this.http.post<Todo>(url, todo, httpOptions).pipe(tap(() => console.log(`added Post`)),
      catchError(this.handleError<Todo>('save Post'))
    )
  }
  findById(id: number): Observable<Todo> {
    const url = `http://localhost:3000/todos/${id}`;
    return this.http.get<Todo>(url).pipe(
      tap(() => console.log(`fetched todo id = ${id}`)),
      catchError(this.handleError<Todo>(`findByid id=${id}`))
    )
  }
  remove(id: number): Observable<Todo> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    const url = `http://localhost:3000/todos/${id}`;
    return this.http.delete<Todo>(url, httpOptions)
      .pipe(tap(() => console.log(`deleted Post ${id}`)),
        catchError(this.handleError<Todo>('delete Post'))
      )
  }
  update(id: number, todo: Todo): Observable<Todo> {
    console.log('service update method')
    const url = `http://localhost:3000/todos/${id}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put<Todo>(url, todo, httpOptions)
      .pipe(tap(() => console.log(`updated Post ${todo.id}`)),
        catchError(this.handleError<any>('update Post'))
      )
  }
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(error.message);
      return of(result as T);
    }
  }

}

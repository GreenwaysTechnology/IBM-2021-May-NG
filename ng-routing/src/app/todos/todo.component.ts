import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, range } from 'rxjs';
import { Todo } from '../types/todo.type';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {

  @Input()
  title: string = "";
  loading: boolean = true;
  status: string = "Loading..."

  todos: Observable<Array<Todo>>;

  constructor(private todoService: TodoService, private todohttp: TodoService) { }

  ngOnInit(): void {
    this.init()
  }

  init() {
    this.todos = this.todohttp.findAll();
  }

  ngOnDestroy(): void {
    //when ever the component is removed from memory
  }

}

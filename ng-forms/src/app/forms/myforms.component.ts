import { Component, OnInit } from '@angular/core';
import { Post } from './form.model';

@Component({
  selector: 'app-myforms',
  templateUrl: './myforms.component.html',
  styleUrls: ['./myforms.component.css']
})
export class MyformsComponent implements OnInit {

  post: any;
  submitted: boolean = false;
  categories: Array<string> = ["User interface", "MicroServices", "Devops"];
  constructor() {
    //default form values
    this.post = new Post(Math.random(), 'Learn Angular', 'Misko', this.categories[0]);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    alert(JSON.stringify(this.post))
    this.submitted = true;

  }
}

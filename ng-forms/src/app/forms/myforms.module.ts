import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyformsComponent } from './myforms.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyformsComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [MyformsComponent]
})
export class MyformsModule { }

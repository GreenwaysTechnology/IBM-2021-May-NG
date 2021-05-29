import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './myheroes/hero.component';
import { MenComponent } from './myheroes/men.component';
import { WomenComponent } from './myheroes/women.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TodoComponent } from './todos/todo.component';

//route Configuration :Root Configuration
const routes: Routes = [{
  path: 'todo', component: TodoComponent
},
{
  path: 'myheroes', component: HeroComponent,
  children: [{
    path: 'men', component: MenComponent

  }, {
    path: 'women', component: WomenComponent
  },
  {
    path: '', redirectTo: '/myheroes/men', pathMatch: 'full'
  }
  ]
},
{
  path: '', redirectTo: '/superheroes', pathMatch: 'full'
},
{
  path: '**', component: PagenotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

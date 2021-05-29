import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeroComponent } from './myheroes/hero.component';
import { MenComponent } from './myheroes/men.component';
import { WomenComponent } from './myheroes/women.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
     PagenotfoundComponent, HeroComponent, MenComponent, WomenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { TodoesComponent } from './todoes/todoes.component';
import { TodoComponent } from './todo/todo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'todoes', component: TodoesComponent, pathMatch: 'full' },
  { path: 'todoes/:id', component: TodoComponent },
  { path: '',   redirectTo: '/main', pathMatch: 'full' }, 
  { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

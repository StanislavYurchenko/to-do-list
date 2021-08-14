import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { MainRoutingModule } from './main-routing.module';
import { TodoesComponent } from './todoes/todoes.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    TodoesComponent,
    TodoComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PageNotFoundComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbNavModule,
    NgbModule,
    TooltipModule,
  ]
})
export class MainModule { }

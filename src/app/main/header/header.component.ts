import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links = [
    { title: 'About', routerLink: '/about' },
    { title: 'Todoes', routerLink: '/todoes' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

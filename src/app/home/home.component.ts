import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../routing-animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

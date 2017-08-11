import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../routing-animation';


@Component({
  selector: 'app-actuality',
  templateUrl: './actuality.component.html',
  styleUrls: ['./actuality.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ActualityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

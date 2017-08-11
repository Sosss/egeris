import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../routing-animation';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class EntrepriseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

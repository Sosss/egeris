import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../routing-animation';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

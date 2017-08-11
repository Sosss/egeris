import { Component,Input,OnInit } from '@angular/core';
// import { routerTransition } from '../../routing-animation';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
  // animations: [routerTransition()],
  // host: {'[@routerTransition]': ''}
})
export class ViewProductComponent implements OnInit {
  @Input()categorysContent;
  constructor() { }

  ngOnInit() {
  }

}

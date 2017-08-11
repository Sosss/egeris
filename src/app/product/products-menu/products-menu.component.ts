import { Component, OnInit,Input } from '@angular/core';
import { ContentCategoryService } from '../../content-category.service';
// import { slideToBottom } from '../../routing-animation';

@Component({
  selector: 'app-products-menu',
  templateUrl: './products-menu.component.html',
  styleUrls: ['./products-menu.component.css'],
  // animations: [slideToBottom()],
  // host: {'[@routerTransition]': ''}
})
export class ProductsMenuComponent implements OnInit {
  @Input()categorysContent;

  categorysMenu;

  constructor(private categoryService:ContentCategoryService) { }

  ngOnInit() {
    this.categorysMenu = this.categoryService.categorysMenu;
  }

}

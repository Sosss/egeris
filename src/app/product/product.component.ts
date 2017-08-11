import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContentCategoryService } from '../content-category.service';
import {trigger, state, style, animate, transition} from '@angular/animations';
// import { routerTransition } from '../routing-animation';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('nextCategory', [
      state('start',style({
        transform: 'translate(0)'
      })),
      state('end',style({
        transform: 'translate(-50%)'
      })),
      transition('start => end', animate('300ms'))
    ])
  ]

})
export class ProductComponent implements OnInit {

    categorysContent;
    nextCategorysContent;
    nextCategory = 'start';


  constructor(private route: ActivatedRoute,private categoryService:ContentCategoryService) { }

  ngOnInit() {
    // on s'abonne au changement de route
    this.route.params.subscribe(
        (params: Params) => {
            // console.log(this.categoryService.categorysContent[params.category]);
            // console.log(this.route.snapshot.params);

            //a faire la fin de l'anim
            // this.categorysContent = this.categoryService.categorysContent[params.category];

            // this.nextCategorysContent = this.categoryService.categorysContent[params .category];

            if(!this.categorysContent) {
              // 1er clic sur le menu categorie
              // affiche dans categorycontent
              this.categorysContent = this.categoryService.categorysContent[params.category];
            } else {
              // mettre dans next
              this.nextCategorysContent = this.categoryService.categorysContent[params .category];
              //lance l'anim = changer letat

                if (this.nextCategory == 'start') {
                  this.nextCategory = 'end';

                }
            }
        }
      );
  }

  animationDone(){
    if(this.nextCategorysContent){
      this.categorysContent = this.nextCategorysContent;
      this.nextCategory = 'start';


    }
  }
}


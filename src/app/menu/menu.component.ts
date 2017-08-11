import { Component, OnInit } from '@angular/core';
import { ContentPageService } from '../content-page.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  pagesContent;
  
  constructor(private contentService:ContentPageService) { }
  

  ngOnInit() {
    this.pagesContent = this.contentService.pagesContent;
  }

}

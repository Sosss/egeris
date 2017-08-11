import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ContactComponent } from './contact/contact.component';
import { ActualityComponent } from './actuality/actuality.component';
import { ProductComponent } from './product/product.component';
import { ProductsMenuComponent } from './product/products-menu/products-menu.component';


import { ContentPageService } from './content-page.service';
import { ContentCategoryService } from './content-category.service';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ViewProductComponent,
    EntrepriseComponent,
    ContactComponent,
    ActualityComponent,
    ProductComponent,
    ProductsMenuComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [ContentPageService, ContentCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

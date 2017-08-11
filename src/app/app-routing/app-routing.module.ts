import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { ActualityComponent } from '../actuality/actuality.component';
import { EntrepriseComponent } from '../entreprise/entreprise.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductComponent } from '../product/product.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'entreprise', component: EntrepriseComponent,
  },
  {
    path: 'actualites', component: ActualityComponent,
  },
  {
    path: 'contact', component: ContactComponent,
  },
  { path: 'produit', component: ProductComponent,
  },
  { path: 'produit/:category', component: ProductComponent
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

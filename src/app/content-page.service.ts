import { Injectable } from '@angular/core';

@Injectable()
export class ContentPageService {

  constructor() { }

  pagesContent =[
    {
      title : 'Home',
      link :'/',
    },
    {
      title : 'Produit',
      link: '/produit'
    },
    {
      title : 'Entreprise',
      link: '/entreprise'
    },
    {
      title : 'Actualités',
      link: '/actualites'
    },
    {
      title : 'Contact',
      link: '/contact'
    },
  ]
}

import { Injectable } from '@angular/core';

@Injectable()
export class ContentCategoryService {

  categorysMenu =[
      {
          title : 'La Nuit',
  link :'nuit',
  img: '../assets/img/vignette-nuit.jpg'
},
{
  title : "L'Evénementiel",
    link: 'evenement',
  img: '../assets/img/vignette-leSport.jpg'
},
{
  title : 'Le Sport',
    link: 'sport',
  img: '../assets/img/vignette-leSport.jpg'
},
{
  title : 'Les Sports Mécaniques',
    link: 'sport-mecanique',
  img: '../assets/img/vignette-mecanique.jpg'
},
{
  title : 'Le Sponsoring',
    link: 'sponsoring',
  img: '../assets/img/vignette-nuit.jpg'
},
  ];

  categorysContent = {
      nuit: {
          bgClass: 'bgNuit',
          title: 'La Nuit',
          img: '../assets/img/nuit.jpg'
      },
      sport: {
        bgClass: 'bgSport',
          title: 'Le Sport',
          img: '../assets/img/leSport.jpg'
      },
      'sport-mecanique': {
        bgClass: 'bgSportMeca',
          title: 'Les Sports Mécaniques',
          img: '../assets/img/mecanique.jpg'
      },
      sponsoring: {
        bgClass: 'bgSponsoring',
          title: 'Le Sponsoring',
          img: '../assets/img/nuit.jpg'
      },
      evenement: {
        bgClass: 'bgEvent',
          title: "L'Evénementiel",
          img: '../assets/img/leSport.jpg'
      },
  }}

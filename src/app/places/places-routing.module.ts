import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverPageModule)
          },
          {
            path: ':placeId',
            loadChildren: () => import('./place-details/place-details.module').then(m => m.PlaceDetailsPageModule)
          }
        ]
      },
      {
        path: 'offers',
        children: [
          {
            path: '',
            loadChildren: () => import('./offers/offers.module').then(m => m.OffersPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('./offers/new-offer/new-offer-routing.module').then(m => m.NewOfferPageRoutingModule)
          },
          {
            path: 'edit/:placeId',
            loadChildren: () => import('./offers/edit-offer/edit-offer-routing.module').then(m => m.EditOfferPageRoutingModule)
          },
          {
            path: ':placeId',
            loadChildren: () => import('./offers/offer-bookings/offer-bookings-routing.module').then(m => m.OfferBookingsPageRoutingModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/places/tabs/discover',
    pathMatch: 'full'
  }
];

//   {
//     path: 'discover',
//     loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverPageModule)
//   },
//   {
//     path: 'offers',
//     loadChildren: () => import('./offers/offers.module').then(m => m.OffersPageModule)
//   },
//   {
//     path: 'place-details',
//     loadChildren: () => import('./place-details/place-details.module').then(m => m.PlaceDetailsPageModule)
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule { }

import { Place } from './place.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place [] = [
    new Place(
      'p1',
      'Manhattan mansion',
      'In the heart of New Your City',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrhomWDpYRQwjIajIfNZsKtWXLP6SKtIcFlg&usqp=CAU',
      149.99
      ),
      new Place(
        'p2',
        'Bahamas',
        'A Romantic Place',
        'https://cdn.aarp.net/content/dam/aarp/travel/destination-guides/2018/04/1140-trv-dst-bahamas-plan-trip.imgcache.revbe9455f1c206a8107f6bb70a1b4d758f.jpg',
        299.99
      ),
      new Place(
        'p2',
        'San Francisco',
        'A Beautiful Place',
        'https://www.flytap.com/-/media/Flytap/destinations/images/Lead/sfrancisco_lead.jpg',
        199.99
      )

  ];
  get places(){
    return [...this._places]
  }

  constructor() { }
}

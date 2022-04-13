import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

export interface MenuItem {
  name: string;
  price: number; // w groszach!
  description: string;
}

export interface Restaurant {
  id: number;
  name: string;
  menu: MenuItem[];
}

@Injectable({
  providedIn: 'root',
})
export class RestaurantsApiService {
  public getRestaurants() {
    return of<Restaurant[]>([
      {
        id: 1,
        name: 'Kura',
        menu: [],
      },
      {
        id: 2,
        name: 'Roger that',
        menu: [],
      },
      {
        id: 3,
        name: 'Chong bom thum',
        menu: [],
      },
    ]).pipe(delay(300));
  }
}

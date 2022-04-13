import { Injectable } from '@angular/core';
import { ReplaySubject, tap } from 'rxjs';
import { Restaurant, RestaurantsApiService } from './restaurants-api.service';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  private restaurants = new ReplaySubject<Restaurant[]>(1);

  constructor(private restaurantsApiService: RestaurantsApiService) {}

  public get restaurants$() {
    return this.restaurants.asObservable();
  }

  public getRestaurants() {
    return this.restaurantsApiService.getRestaurants().pipe(
      tap(restaurants => {
        console.log('wrzuć dane do subjecta');
        this.restaurants.next(restaurants);
      })
    );
  }
}

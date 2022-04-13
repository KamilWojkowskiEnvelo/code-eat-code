import { Component, ChangeDetectionStrategy } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Restaurant } from './restaurants-api.service';
import { RestaurantsService } from './restaurants.service';

export interface RestaurantTile {
  restaurant: Restaurant;
  cols: number;
  rows: number;
  color: string;
}

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantsComponent {
  public restaurantsTiles$: Observable<RestaurantTile[]> = this.restaurantsService.getRestaurants().pipe(
    map(restaurants =>
      restaurants.map(restaurant => ({
        restaurant,
        cols: 1,
        rows: 1,
        color: 'lightblue',
      }))
    )
  );

  constructor(private restaurantsService: RestaurantsService) {}
}

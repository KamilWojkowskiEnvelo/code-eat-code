import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantDetailsComponent {
  public restaurant$ = this.restaurantService.restaurants$.pipe(
    map(restaurants => restaurants.find(restaurant => restaurant.id === Number(this.route.snapshot.params['id'])))
  );

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantsService) {}
}

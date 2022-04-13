import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';

@NgModule({
  declarations: [RestaurantsComponent, RestaurantDetailsComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RestaurantsComponent,
      },
      {
        path: ':id',
        component: RestaurantDetailsComponent,
      },
    ]),
  ],
})
export class RestaurantsModule {}

import { Injectable } from '@angular/core';
import { MenuItem } from '@features/restaurants/restaurants-api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private order = new BehaviorSubject<{ restaurantName: string; item: MenuItem }[]>([]);

  public get order$() {
    return this.order.asObservable();
  }

  public addItemToOrder(item: MenuItem, restaurantName: string) {
    this.order.next([...this.order.value, { item, restaurantName }]);
  }

  public removeItemFromOrder(item: { restaurantName: string; item: MenuItem }) {
    this.order.next(this.order.value.filter(orderItem => orderItem !== item));
  }
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent {
  public order$ = this.orderService.order$;

  constructor(private orderService: OrderService) {}
}

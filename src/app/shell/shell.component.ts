import { Component, ChangeDetectionStrategy } from '@angular/core';
import { OrderService } from '@features/order/order.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  public today = format(new Date(), 'dd/MM/yyyy');

  public order$ = this.orderService.order$;

  constructor(private orderService: OrderService) {}
}

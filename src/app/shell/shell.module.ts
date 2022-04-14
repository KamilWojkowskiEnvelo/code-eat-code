import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // tutaj zacznij dodawać routing aplikacji
      // nie zapomnij o przekierwaniu na domyślny path z  path === ''
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: 'restaurants',
            loadChildren: async () => (await import('../features/restaurants/restaurants.module')).RestaurantsModule,
          },
          {
            path: 'order',
            loadChildren: async () => (await import('../features/order/order.module')).OrderModule,
          },
        ],
      },
    ]),
  ],
})
export class ShellModule {}

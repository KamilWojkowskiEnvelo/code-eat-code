import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';

@NgModule({
  declarations: [ShellComponent],
  imports: [
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
        ],
      },
    ]),
  ],
})
export class ShellModule {}

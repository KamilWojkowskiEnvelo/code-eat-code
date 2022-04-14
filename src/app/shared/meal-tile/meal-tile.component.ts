import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MenuItem } from '@features/restaurants/restaurants-api.service';

@Component({
  selector: 'app-meal-tile[meal]',
  templateUrl: './meal-tile.component.html',
  styleUrls: ['./meal-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealTileComponent {
  @Input() public meal!: MenuItem;
}

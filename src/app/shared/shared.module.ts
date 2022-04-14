import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MealTileComponent } from './meal-tile/meal-tile.component';

const MATERIALS_MODULES = [MatCardModule, MatButtonModule, MatGridListModule, MatInputModule, MatProgressSpinnerModule];

@NgModule({
  declarations: [MealTileComponent],
  imports: [CommonModule, MATERIALS_MODULES],
  exports: [MATERIALS_MODULES, MealTileComponent],
})
export class SharedModule {}

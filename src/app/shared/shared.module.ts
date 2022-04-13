import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

const MATERIALS_MODULES = [MatButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, MATERIALS_MODULES],
  exports: [MATERIALS_MODULES],
})
export class SharedModule {}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealTileComponent } from './meal-tile.component';

describe('MealTileComponent', () => {
  let component: MealTileComponent;
  let fixture: ComponentFixture<MealTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeodysseyComponent } from './bikeodyssey.component';

describe('BikeodysseyComponent', () => {
  let component: BikeodysseyComponent;
  let fixture: ComponentFixture<BikeodysseyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeodysseyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeodysseyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

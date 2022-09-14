import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoceryComponent } from './gocery.component';

describe('GoceryComponent', () => {
  let component: GoceryComponent;
  let fixture: ComponentFixture<GoceryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoceryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

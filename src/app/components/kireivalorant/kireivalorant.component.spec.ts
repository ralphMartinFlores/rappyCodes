import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KireivalorantComponent } from './kireivalorant.component';

describe('KireivalorantComponent', () => {
  let component: KireivalorantComponent;
  let fixture: ComponentFixture<KireivalorantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KireivalorantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KireivalorantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

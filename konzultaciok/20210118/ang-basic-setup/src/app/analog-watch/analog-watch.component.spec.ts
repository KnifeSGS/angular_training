import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogWatchComponent } from './analog-watch.component';

describe('AnalogWatchComponent', () => {
  let component: AnalogWatchComponent;
  let fixture: ComponentFixture<AnalogWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalogWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

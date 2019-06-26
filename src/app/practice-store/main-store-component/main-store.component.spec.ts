import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainObservablesComponent } from './main-observables.component';

describe('MainObservablesComponent', () => {
  let component: MainObservablesComponent;
  let fixture: ComponentFixture<MainObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

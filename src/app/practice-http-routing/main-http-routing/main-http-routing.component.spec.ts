import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHttpRoutingComponent } from './main-http-routing.component';

describe('MainHttpRoutingComponent', () => {
  let component: MainHttpRoutingComponent;
  let fixture: ComponentFixture<MainHttpRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHttpRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHttpRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

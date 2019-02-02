import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDirectiveComponent } from './main-directive.component';

describe('MainDirectiveComponent', () => {
  let component: MainDirectiveComponent;
  let fixture: ComponentFixture<MainDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

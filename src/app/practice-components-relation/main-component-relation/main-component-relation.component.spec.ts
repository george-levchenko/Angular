import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponentRelationComponent } from './main-component-relation.component';

describe('MainComponentRelationComponent', () => {
  let component: MainComponentRelationComponent;
  let fixture: ComponentFixture<MainComponentRelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponentRelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponentRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

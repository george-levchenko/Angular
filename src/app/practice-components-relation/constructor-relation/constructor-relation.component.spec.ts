import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorRelationComponent } from './constructor-relation.component';

describe('ConstructorRelationComponent', () => {
  let component: ConstructorRelationComponent;
  let fixture: ComponentFixture<ConstructorRelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructorRelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

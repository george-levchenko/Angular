import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRelationComponent } from './service-relation.component';

describe('ServiceRelationComponent', () => {
  let component: ServiceRelationComponent;
  let fixture: ComponentFixture<ServiceRelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceRelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

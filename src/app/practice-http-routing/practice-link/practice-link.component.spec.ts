import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeLinkComponent } from './practice-link.component';

describe('PracticeLinkComponent', () => {
  let component: PracticeLinkComponent;
  let fixture: ComponentFixture<PracticeLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeIdComponent } from './practice-id.component';

describe('PracticeIdComponent', () => {
  let component: PracticeIdComponent;
  let fixture: ComponentFixture<PracticeIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

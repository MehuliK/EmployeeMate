import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailedBodyComponent } from './card-detailed-body.component';

describe('CardDetailedBodyComponent', () => {
  let component: CardDetailedBodyComponent;
  let fixture: ComponentFixture<CardDetailedBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDetailedBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailedBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

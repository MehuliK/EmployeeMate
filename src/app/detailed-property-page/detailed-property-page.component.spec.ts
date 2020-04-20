import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedPropertyPageComponent } from './detailed-property-page.component';

describe('DetailedPropertyPageComponent', () => {
  let component: DetailedPropertyPageComponent;
  let fixture: ComponentFixture<DetailedPropertyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedPropertyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedPropertyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

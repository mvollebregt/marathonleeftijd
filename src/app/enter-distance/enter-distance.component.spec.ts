import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EnterDistanceComponent} from './enter-distance.component';

describe('EnterDistanceComponent', () => {
  let component: EnterDistanceComponent;
  let fixture: ComponentFixture<EnterDistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnterDistanceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

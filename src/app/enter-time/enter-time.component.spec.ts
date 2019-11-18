import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EnterTimeComponent} from './enter-time.component';

describe('EnterTimeComponent', () => {
  let component: EnterTimeComponent;
  let fixture: ComponentFixture<EnterTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnterTimeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EnterGenderComponent} from './enter-gender.component';

describe('EnterGenderComponent', () => {
  let component: EnterGenderComponent;
  let fixture: ComponentFixture<EnterGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnterGenderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

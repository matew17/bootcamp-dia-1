import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponentComponent } from './counter-component.component';

describe('CounterComponentComponent', () => {
  let component: CounterComponentComponent;
  let fixture: ComponentFixture<CounterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

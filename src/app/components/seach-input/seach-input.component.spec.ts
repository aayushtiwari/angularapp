import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachInputComponent } from './seach-input.component';

describe('SeachInputComponent', () => {
  let component: SeachInputComponent;
  let fixture: ComponentFixture<SeachInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeachInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeachInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

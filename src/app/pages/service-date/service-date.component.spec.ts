import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDateComponent } from './service-date.component';

describe('ServiceDateComponent', () => {
  let component: ServiceDateComponent;
  let fixture: ComponentFixture<ServiceDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

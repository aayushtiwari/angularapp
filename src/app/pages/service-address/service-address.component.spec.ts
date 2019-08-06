import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAddressComponent } from './service-address.component';

describe('ServiceAddressComponent', () => {
  let component: ServiceAddressComponent;
  let fixture: ComponentFixture<ServiceAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

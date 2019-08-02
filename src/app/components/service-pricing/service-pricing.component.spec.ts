import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePricingComponent } from './service-pricing.component';

describe('ServicePricingComponent', () => {
  let component: ServicePricingComponent;
  let fixture: ComponentFixture<ServicePricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

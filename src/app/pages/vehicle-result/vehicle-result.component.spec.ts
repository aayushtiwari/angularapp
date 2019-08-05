import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleResultComponent } from './vehicle-result.component';

describe('VehicleResultComponent', () => {
  let component: VehicleResultComponent;
  let fixture: ComponentFixture<VehicleResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

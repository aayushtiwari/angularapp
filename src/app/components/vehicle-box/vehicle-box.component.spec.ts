import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleBoxComponent } from './vehicle-box.component';

describe('VehicleBoxComponent', () => {
  let component: VehicleBoxComponent;
  let fixture: ComponentFixture<VehicleBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

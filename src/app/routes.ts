import { Routes } from "@angular/router";
import { SelectVehicleComponent } from "./pages/select-vehicle/select-vehicle.component";
import { SelectServiceComponent } from "./pages/select-service/select-service.component";
import { ServiceFormComponent } from "./pages/service-form/service-form.component";
import { ReviewOrderComponent } from "./pages/review-order/review-order.component";
import { ServiceAddressComponent } from "./pages/service-address/service-address.component";
import { ServiceDateComponent } from "./pages/service-date/service-date.component";
import { CompleteOrderComponent } from "./pages/complete-order/complete-order.component";
import { VehicleResultComponent } from "./pages/vehicle-result/vehicle-result.component";

export const routes: Routes = [
  { path: "", component: SelectVehicleComponent },
  { path: "search-result", component: VehicleResultComponent },
  { path: "select-service", component: SelectServiceComponent },
  { path: "service-add", component: ServiceAddressComponent },
  { path: "service-form", component: ServiceFormComponent },
  { path: "select-date", component: ServiceDateComponent },
  { path: "review-order", component: ReviewOrderComponent },
  { path: "complete-order", component: CompleteOrderComponent }
];

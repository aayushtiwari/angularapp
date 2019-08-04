import {Routes} from '@angular/router';
import { SelectVehicleComponent } from './pages/select-vehicle/select-vehicle.component';
import { SelectServiceComponent } from './pages/select-service/select-service.component';
import { ServiceFormComponent } from './pages/service-form/service-form.component';
import { ReviewOrderComponent } from './pages/review-order/review-order.component';

export const routes: Routes = [
  {path: '', component: SelectVehicleComponent},
  {path: 'select-service', component: SelectServiceComponent},
  {path: 'service-form', component: ServiceFormComponent},
  {path: 'review-order', component: ReviewOrderComponent}
];

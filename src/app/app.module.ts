import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { QuestionBoxComponent } from "./components/question-box/question-box.component";
import { VehicleBoxComponent } from "./components/vehicle-box/vehicle-box.component";
import { ServicesComponent } from "./components/services/services.component";
import { ButtonComponent } from "./components/button/button.component";
import { ServiceElementComponent } from "./components/service-element/service-element.component";
import { SearchResultsComponent } from "./components/search-results/search-results.component";
import { ServiceSelectComponent } from './components/service-select/service-select.component';
import { SeachInputComponent } from './components/seach-input/seach-input.component';
import { ServicePricingComponent } from './components/service-pricing/service-pricing.component';
import { SelectVehicleComponent } from './pages/select-vehicle/select-vehicle.component';
import { SelectServiceComponent } from './pages/select-service/select-service.component';

import { routes } from './routes';
import { ServiceFormComponent } from './pages/service-form/service-form.component';
import { ReviewOrderComponent } from './pages/review-order/review-order.component';
import { SelectDateComponent } from './questionBox/select-date/select-date.component';
import { MechanicFormComponent } from './servicePart/mechanic-form/mechanic-form.component';
import { ScheduleComponent } from './servicePart/schedule/schedule.component';
import { TechnicianComponent } from './servicePart/technician/technician.component';
import { OrderComponent } from './servicePart/order/order.component';
import { ServiceAddressComponent } from './pages/service-address/service-address.component';
import { ServiceDateComponent } from './pages/service-date/service-date.component';
import { CompleteOrderComponent } from './pages/complete-order/complete-order.component';
import { VehicleResultComponent } from './pages/vehicle-result/vehicle-result.component';
import { FilterVehiclePipe } from './filter-vehicle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionBoxComponent,
    VehicleBoxComponent,
    ServicesComponent,
    ButtonComponent,
    ServiceElementComponent,
    SearchResultsComponent,
    ServiceSelectComponent,
    SeachInputComponent,
    ServicePricingComponent,
    SelectVehicleComponent,
    SelectServiceComponent,
    ServiceFormComponent,
    ReviewOrderComponent,
    SelectDateComponent,
    MechanicFormComponent,
    ScheduleComponent,
    TechnicianComponent,
    OrderComponent,
    ServiceAddressComponent,
    ServiceDateComponent,
    CompleteOrderComponent,
    VehicleResultComponent,
    FilterVehiclePipe
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

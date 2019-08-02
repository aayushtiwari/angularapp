import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { QuestionBoxComponent } from "./components/question-box/question-box.component";
import { VehicleBoxComponent } from "./components/vehicle-box/vehicle-box.component";
import { ServicesComponent } from "./components/services/services.component";
import { ButtonComponent } from "./components/button/button.component";
import { ServiceElementComponent } from "./components/service-element/service-element.component";
import { SearchResultsComponent } from "./components/search-results/search-results.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionBoxComponent,
    VehicleBoxComponent,
    ServicesComponent,
    ButtonComponent,
    ServiceElementComponent,
    SearchResultsComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

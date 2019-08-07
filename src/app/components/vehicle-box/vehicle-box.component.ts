import { Component, OnInit } from "@angular/core";
import { Router, Event, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-vehicle-box",
  templateUrl: "./vehicle-box.component.html",
  styleUrls: ["./vehicle-box.component.css"]
})
export class VehicleBoxComponent implements OnInit {
  details: string;
  nextDetails: string;
  event: Event;
  url: any;

  constructor(public router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (
          event.url === "/review-order"
          // && localStorage.technician && localStorage.technician.length
        ) {
          this.details = "Review your order";
          this.nextDetails = null;
        }
        // if (event.url === '/review-order' && !localStorage.technician && !localStorage.technician.length) {
        //   this.buttonText = 'Continue';
        // }
        if (event.url === "/") {
          this.details = "Enter yor vehicle's";
          this.nextDetails = "year, make and";
        }
        if (event.url === "/select-service") {
          this.details = "Select a service";
          this.nextDetails = null;
        }
        if (event.url === "/service-form") {
          this.details = "Enter a service";
          this.nextDetails = null;
        }
        if (event.url === "/complete-order") {
          this.details = "Complete your";
          this.nextDetails = null;
        }
        if (event.url === "/service-add") {
          this.details = "Enter a service";
          this.nextDetails = "address";
        }
        if (event.url === "/select-date") {
          this.details = "Enter a service";
          this.nextDetails = null;
        }
        if (event.url === "/search-result") {
          this.details = "Select your vehicle";
          this.nextDetails = "from the results";
        }
      }
    });
  }
}

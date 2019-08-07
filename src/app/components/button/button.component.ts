import { Component, OnInit } from "@angular/core";
import { Router, Event, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent implements OnInit {
  buttonText: string;
  // NavigationEnd: any;
  event: Event;
  url: any;
  constructor(public router: Router) {}

  ngOnInit() {
    this.buttonText = "Continue";

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (
          event.url === "/review-order"
          // && localStorage.technician && localStorage.technician.length
        ) {
          this.buttonText = "Continue";
        }
        // if (event.url === '/review-order' && !localStorage.technician && !localStorage.technician.length) {
        //   this.buttonText = 'Continue';
        // }
        if (event.url === "/") {
          this.buttonText = "Continue";
        }
        if (event.url === "/select-service" || event.url === "/search-result") {
          this.buttonText = "Continue";
        }
        if (
          event.url === "/service-form" ||
          event.url === "/select-date" ||
          event.url === "/service-date"
        ) {
          this.buttonText = "Review and Book";
        }
        if (event.url === "/complete-order") {
          this.buttonText = "Book";
        }
      }
    });
  }

  onClick() {
    if (
      this.router.url === "/"
      // && localStorage.vehicle && localStorage.vehicle.length
    ) {
      this.router.navigateByUrl("/search-result");
    }
    if (this.router.url === "/search-result") {
      this.router.navigateByUrl("/select-service");
    }
    if (
      this.router.url === "/select-service"
      // && localStorage.service && localStorage.service.length
    ) {
      this.router.navigateByUrl("/service-add");
    }
    if (this.router.url === "/service-add") {
      this.router.navigateByUrl("/service-form");
    }
    if (
      this.router.url === "/service-form"
      // && localStorage.serviceAdd && localStorage.serviceDate &&  localStorage.serviceAdd.length && localStorage.serviceDate.length
    ) {
      this.router.navigateByUrl("/select-date");
    }
    if (this.router.url === "/select-date") {
      this.router.navigateByUrl("/review-order");
    }
    if (this.router.url === "/review-order") {
      console.log("Confirm Booking");
      this.router.navigateByUrl("/complete-order");
    }
    // else{
    //   alert('Please Select the Service First');
    // }
  }
}

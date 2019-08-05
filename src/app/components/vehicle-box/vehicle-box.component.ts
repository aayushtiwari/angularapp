import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vehicle-box',
  templateUrl: './vehicle-box.component.html',
  styleUrls: ['./vehicle-box.component.css']
})
export class VehicleBoxComponent implements OnInit {
  details: string;
  nextDetails: string;

  constructor(public router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event.url === '/review-order'
      // && localStorage.technician && localStorage.technician.length
      ) {
        this.details = 'Review your order';
      }
      // if (event.url === '/review-order' && !localStorage.technician && !localStorage.technician.length) {
      //   this.buttonText = 'Continue';
      // }
      if (event.url === '/') {
        this.details = "Enter yor vehicle's";
        this.nextDetails = "year, make and"
      }
      if (event.url === '/select-service') {
        this.details = "Select a service"
      }
      if (event.url === '/service-form') {
        this.details = 'Enter a service';
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  buttonText: string;
  constructor(public router: Router) {
   }

  ngOnInit() {
    this.buttonText = 'Continue';

    this.router.events.subscribe((event) => {
      if (event.url === '/review-order' 
      // && localStorage.technician && localStorage.technician.length
      ) {
        this.buttonText = 'Book';
      }
      // if (event.url === '/review-order' && !localStorage.technician && !localStorage.technician.length) {
      //   this.buttonText = 'Continue';
      // }
      if (event.url === '/') {
        this.buttonText = 'Continue';
      }
      if (event.url === '/select-service') {
        this.buttonText = 'Continue';
      }
      if (event.url === '/service-form') {
        this.buttonText = 'Review and Book';
      }
    });
  }

  onClick() {
    if (this.router.url === '/' 
    // && localStorage.vehicle && localStorage.vehicle.length 
    ) {
      this.router.navigateByUrl('/select-service');
    }
    if (this.router.url === '/select-service' 
    // && localStorage.service && localStorage.service.length
     ) {
      this.router.navigateByUrl('/service-form');
    }
    if (this.router.url === '/service-form' 
    // && localStorage.serviceAdd && localStorage.serviceDate &&  localStorage.serviceAdd.length && localStorage.serviceDate.length
    ) {
      this.router.navigateByUrl('/review-order');
    }
    if (this.router.url === '/review-order') {
      console.log('Confirm Booking');
    }
    // else{
    //   alert('Please Select the Service First');
    // }
  }
}

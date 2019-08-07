import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-element',
  templateUrl: './service-element.component.html',
  styleUrls: ['./service-element.component.css']
})
export class ServiceElementComponent implements OnInit {
  constructor() { }

  services: Array<any> = [{
    serviceName: 'Service name',
    serviceRed: '$TBD',
    serviceCost: 'Average $30-40'
  }, {
    serviceName: 'Service name',
    serviceRed: '$TBD',
    serviceCost: 'Average $30-40'
  }, {
    serviceName: 'Service name',
    serviceRed: '$TBD',
    serviceCost: 'Average $30-40'
  }, {
    serviceName: 'Service name',
    serviceRed: '$TBD',
    serviceCost: 'Average $30-40'
  }, {
    serviceName: 'Service name',
    serviceRed: '$TBD',
    serviceCost: 'Average $30-40'
  }, ];

  ngOnInit() {
  }

}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-service-address",
  templateUrl: "./service-address.component.html",
  styleUrls: ["./service-address.component.css"],
  host: {
    class: "select-vehicle"
  }
})
export class ServiceAddressComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

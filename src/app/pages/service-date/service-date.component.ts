import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-service-date",
  templateUrl: "./service-date.component.html",
  styleUrls: ["./service-date.component.css"],
  host: {
    class: "select-vehicle"
  }
})
export class ServiceDateComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

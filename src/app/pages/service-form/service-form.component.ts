import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-service-form",
  templateUrl: "./service-form.component.html",
  host: {
    class: "select-vehicle"
  },
  styleUrls: ["./service-form.component.css"]
})
export class ServiceFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

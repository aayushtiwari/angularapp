import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-vehicle-result",
  templateUrl: "./vehicle-result.component.html",
  host: {
    class: "select-vehicle"
  },
  styleUrls: ["./vehicle-result.component.css"]
})
export class VehicleResultComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

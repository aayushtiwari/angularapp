import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-technician",
  templateUrl: "./technician.component.html",
  styleUrls: ["./technician.component.css"],
  host: {
    class: "select-vehicle"
  }
})
export class TechnicianComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

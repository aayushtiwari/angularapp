import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-complete-order",
  templateUrl: "./complete-order.component.html",
  styleUrls: ["./complete-order.component.css"],
  host: {
    class: "select-vehicle"
  }
})
export class CompleteOrderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

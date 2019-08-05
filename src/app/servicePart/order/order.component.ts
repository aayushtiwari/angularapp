import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  date = '12/27/2019 at 9:00AM';
  address = '10122 Wilnor';
  constructor() { }

  ngOnInit() {
  }

}

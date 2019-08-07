import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../localStorage';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-seach-input',
  templateUrl: './seach-input.component.html',
  styleUrls: ['./seach-input.component.css'],
  providers: [GlobalService]
})
export class SeachInputComponent implements OnInit {
  inputVal: string;

  constructor(public globalSrv: GlobalService, public router: Router) {
    this.inputVal = '';
  }

  ngOnInit() {
    if (localStorage.inputVal) {
      this.inputVal = localStorage.getItem('inputVal');
    }
  }

  eventHandler(e) {
    // localStorage.inputVal = e;
    this.globalSrv.setItem('inputVal', e);
  }
}

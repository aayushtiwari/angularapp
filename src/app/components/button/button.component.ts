import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  buttonText: string;
  link: string;
  constructor() { }

  ngOnInit() {
    this.buttonText = 'Continue';
    this.link = 'review-order';
  }
  // this.router.url === '/login'


}

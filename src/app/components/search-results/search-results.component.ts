import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../localStorage';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: [GlobalService]
})
export class SearchResultsComponent implements OnInit {
  localValue = localStorage.inputVal;
  jeepSelect: any;

  constructor(public globalSrv: GlobalService) {
    setInterval(() => {
      if ( localStorage.inputVal !==  this.localValue) {
        this.localValue = localStorage.inputVal;
      }
    }, 500);
  }

  jeeps: Array<any> = [{
    id: 2007,
    name: '2007 jeep wrangler'
  }, {
    id: 2008,
    name: '2008 jeep wrangler'
  }, {
    id: 2009,
    name: '2009 jeep wrangler'
  }, {
    id: 2010,
    name: '2010 jeep wrangler'
  }, {
    id: 2011,
    name: '2011 jeep wrangler'
  }, {
    id: 2012,
    name: '2012 jeep wrangler'
  }, {
    id: 2013,
    name: '2013 jeep wrangler'
  }, ];

  ngOnInit() {
    if (localStorage.inputVal) {
      this.localValue = localStorage.getItem('inputVal');
    }
  }
}

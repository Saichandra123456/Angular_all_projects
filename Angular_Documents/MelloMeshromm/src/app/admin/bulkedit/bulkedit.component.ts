import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulkedit',
  templateUrl: './bulkedit.component.html',
  styleUrls: ['./bulkedit.component.css']
})
export class BulkeditComponent implements OnInit {

  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;
  path: any;



  constructor() { }

  franchisee: any[] = [
    { checkbox: '', storeid: 511, storename: 'Anil' },
    { checkbox: '', storeid: 512, storename: 'Anil' },
    { checkbox: '', storeid: 513, storename: 'Anil' },
    { checkbox: '', storeid: 514, storename: 'Anil' },
    { checkbox: '', storeid: 515, storename: 'Anil' },
    { checkbox: '', storeid: 516, storename: 'Anil' },
    { checkbox: '', storeid: 517, storename: 'Anil' },
    { checkbox: '', storeid: 518, storename: 'Anil' },
    { checkbox: '', storeid: 519, storename: 'Anil' },
    { checkbox: '', storeid: 520, storename: 'Anil' },
    { checkbox: '', storeid: 521, storename: 'Anil' },
    { checkbox: '', storeid: 522, storename: 'Anil' },
    { checkbox: '', storeid: 523, storename: 'Anil' },
    { checkbox: '', storeid: 524, storename: 'Anil' },
    { checkbox: '', storeid: 525, storename: 'Anil' },
    { checkbox: '', storeid: 526, storename: 'Anil' },
    { checkbox: '', storeid: 527, storename: 'Anil' },
    { checkbox: '', storeid: 528, storename: 'Anil' },

  ]


  saleschannel = [
    { name: 'anil', actions: '' },
    { name: 'Keerthana' },
    { name: 'Sai' },
    { name: 'Santosh' },
    { name: 'Vinit' },

  ]

  marketingProgram = [
    { name: 'Anil', startdate: '12-25-2021', enddate: '12-24-2022', actions: '' },
    { name: 'Keerthana', startdate: '12-25-2021', enddate: '12-24-2022' },
    { name: 'Sai', startdate: '12-25-2021', enddate: '12-24-2022' },
    { name: 'Mahendra', startdate: '12-25-2021', enddate: '12-24-2022' },
    { name: 'Vinit', startdate: '12-25-2021', enddate: '12-24-2022' },

  ]


  storefeatures = [
    { name: 'Anil', status: 22 },
    { name: 'sai', status: 'yes' },
    { name: 'Nagendra', status: 'yes' },
    { name: 'Vinit', status: 'yes' },
    { name: 'Harshada', status: 'yes' },
    { name: 'Bhanu', status: 'yes' },

  ]


  technology = [
    { name: 'Anil', status: 262 },
    { name: 'keerthana', status: 'yes' },
    { name: 'Sai', status: 'yes' },
    { name: 'Bharath', status: 'yes' },
    { name: 'Rakesh', status: 'yes' },
    { name: 'Vinit', status: 'yes' },

  ]

  ngOnInit(): void {
  }


  key: string = 'id';
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  business() {

  }

  TechnologyBulkEdit() {

  }
  technologyEdit() {

  }
}

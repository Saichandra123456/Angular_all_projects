import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketingprogram',
  templateUrl: './marketingprogram.component.html',
  styleUrls: ['./marketingprogram.component.css']
})
export class MarketingprogramComponent implements OnInit {

  constructor() { }

  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;






  franchisee: any[] = [
    { marketingprogramname: 'Anil', startdate: '02-09-1999', enddate: '02-09-2023', noofstores: 5 },
    { marketingprogramname: 'Anil', startdate: '02-09-1999', enddate: '02-09-2023', noofstores: 5 },
    { marketingprogramname: 'Anil', startdate: '02-09-1999', enddate: '02-09-2023', noofstores: 5 },
    { marketingprogramname: 'Anil', startdate: '02-09-1999', enddate: '02-09-2023', noofstores: 5 },
    { marketingprogramname: 'Anil', startdate: '02-09-1999', enddate: '02-09-2023', noofstores: 5 },
    { marketingprogramname: 'Anil', startdate: '02-09-1999', enddate: '02-09-2023', noofstores: 5 },
    { marketingprogramname: 'Anil', startdate: '02-09-1999', enddate: '02-09-2023', noofstores: 5 },
    { marketingprogramname: 'Anil', startdate: '02-09-1999', enddate: '02-09-2023', noofstores: 5 },
    { marketingprogramname: 'Anil', startdate: '02-09-1999', enddate: '02-09-2023', noofstores: 5 },
    { marketingprogramname: 'Anil', startdate: '02-09-1999', enddate: '02-09-2023', noofstores: 5 },
    { marketingprogramname: 'Anil', startdate: '02-09-1999', enddate: '02-09-2023', noofstores: 5 },
    { marketingprogramname: 'Anil', startdate: '02-09-1999', enddate: '02-09-2023', noofstores: 5 },

  ]

  ngOnInit(): void {
  }

}

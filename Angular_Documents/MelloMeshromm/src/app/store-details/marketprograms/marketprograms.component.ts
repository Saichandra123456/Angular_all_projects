import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketprograms',
  templateUrl: './marketprograms.component.html',
  styleUrls: ['./marketprograms.component.css']
})
export class MarketprogramsComponent implements OnInit {

  constructor() { }

  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;






  marketprograms: any[] = [
    { Name: 'Anil', Status: 'Active', StartDate: '10-24-2018', EndDate:'02-03-2023'},
    { Name: 'Anil', Status: 'Active', StartDate: '10-24-2018', EndDate:'02-03-2023'},
    { Name: 'Anil', Status: 'Active', StartDate: '10-24-2018', EndDate:'02-03-2023'},
    { Name: 'Anil', Status: 'Active', StartDate: '10-24-2018', EndDate:'02-03-2023'},
    { Name: 'Anil', Status: 'Active', StartDate: '10-24-2018', EndDate:'02-03-2023'},
    { Name: 'Anil', Status: 'Active', StartDate: '10-24-2018', EndDate:'02-03-2023'},
    { Name: 'Anil', Status: 'Active', StartDate: '10-24-2018', EndDate:'02-03-2023'},
    { Name: 'Anil', Status: 'Active', StartDate: '10-24-2018', EndDate:'02-03-2023'},


 

   

  ]
  ngOnInit(): void {
  }

}

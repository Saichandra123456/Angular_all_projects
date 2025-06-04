import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketingprograms',
  templateUrl: './marketingprograms.component.html',
  styleUrls: ['./marketingprograms.component.css']
})
export class MarketingprogramsComponent implements OnInit {

  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;
  path: any;



  constructor() { }

  franchisee: any[] = [
   {name:'anil',scope:'Local MArketing Program', status:'active',startdate:'10-24-2018',enddate:'10-24-2021',action:''},
   {name:'Sai',scope:'Local MArketing Program', status:'active',startdate:'10-24-2018',enddate:'10-24-2021'},
   {name:'Keerthana',scope:'Local MArketing Program', status:'active',startdate:'10-24-2018',enddate:'10-24-2021'},
   {name:'Chandra Kala',scope:'Local MArketing Program', status:'inactive',startdate:'10-24-2018',enddate:'10-24-2021'},
   

    


  ]


 

  ngOnInit(): void {
  }


  key: string = 'id';
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  business(){

  }

}

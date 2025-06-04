import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;
  path: any;



  constructor() { }

  franchisee: any[] = [
   {id:1, name:'anil', status:'active',action:''},
   {id:2, name:'Bharath', status:'active'},
   {id:3, name:'Sai', status:'active'},
   {id:4, name:'Keerthana', status:'inactive'},
   {id:5, name:'VInit', status:'active'},
   {id:6, name:'Mahendra', status:'active'},
   {id:7, name:'Santosh', status:'active'},
   {id:8, name:'Ganesh', status:'active'},
   {id:9, name:'Chandra Kala', status:'inactive'},
   {id:10, name:'Nagendra', status:'active'}

    


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

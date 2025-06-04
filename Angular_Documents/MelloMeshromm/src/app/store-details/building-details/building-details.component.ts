import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building-details',
  templateUrl: './building-details.component.html',
  styleUrls: ['./building-details.component.css']
})
export class BuildingDetailsComponent implements OnInit {
  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;
  details:any=false

  constructor() { }

  artistdetails=[
    {artistname: 'Anil', phonenumber:9676230888, emailid:'anil@gmail.com'}
  ]

  ngOnInit(): void {


   
  }


  // functionName() {
  //   if(details == 'building') 
  //   {
  //      this.details = true // make pictures div true     
  // }
  //  else if (details == 'design') 
  // {
  //   this.details = true // make building details true 
  //   }}



  Design(){

  }
  
  buildingdetails(){

  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;

  myform: FormGroup = new FormGroup({
    name: new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }
 
  logout(){

  }
}

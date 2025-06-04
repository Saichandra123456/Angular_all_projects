import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { AfterViewInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-franchisee',
  templateUrl: './franchisee.component.html',
  styleUrls: ['./franchisee.component.css']
})
export class FranchiseeComponent implements OnInit {
  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;


  name: FormControl = new FormControl();




  franchisee: any[] = [
    { Name: 'Anil', Email: 'anil@gmail', PhoneNumber: 9765246261, BusinessEntities: 45, Stores: 5 },
    { Name: 'Anil Reddy', Email: 'anil@gmail', PhoneNumber: 9676230888, BusinessEntities: 5, Stores: 5 },
    { Name: 'Anil', Email: 'anil@gmail', PhoneNumber: 9765246261, BusinessEntities: 5, Stores: 2 },
    { Name: 'Anil', Email: 'anil@gmail', PhoneNumber: 9765246261, BusinessEntities: 67, Stores: 5 },
    { Name: 'Anil Kumar Reddy', Email: 'anil@gmail', PhoneNumber: 9765246261, BusinessEntities: 5, Stores: 5 },
    { Name: 'Anil', Email: 'anil@gmail', PhoneNumber: 9765246261, BusinessEntities: 5, Stores: 5 },
    { Name: 'Anil Kumar', Email: 'anil@gmail', PhoneNumber: 9765246261, BusinessEntities: 5, Stores: 5 },
    { Name: 'Anil', Email: 'anil@gmail', PhoneNumber: 9765246261, BusinessEntities: 5, Stores: 5 },
    { Name: 'Anil', Email: 'anil@gmail', PhoneNumber: 9765246261, BusinessEntities: 5, Stores: 5 },
    { Name: 'Anil', Email: 'anil@gmail', PhoneNumber: 9765246261, BusinessEntities: 5, Stores: 5 },
    { Name: 'Anil', Email: 'anil@gmail', PhoneNumber: 9765246261, BusinessEntities: 5, Stores: 5 },
    { Name: 'Anil', Email: 'anil@gmail', PhoneNumber: 9765246261, BusinessEntities: 5, Stores: 5 },

  ]


  // dataSource = new MatTableDataSource(this.franchisee);
  constructor() { }

  // @ViewChild(MatSort) sort !: MatSort;
  // @ViewChild(MatPaginator) paginator !: MatPaginator;


  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;


  // }
  ngOnInit(): void {
  }

  key: string = 'id';
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}


// name: FormControl = new FormControl();
// franchisee: Array<any> = [];
// });
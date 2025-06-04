import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


// export interface PeriodicElement {
//   id: number;
//   storename: string;
//   state: string;
//   date: any;
//   businesscoach: string;
//   status: string;
//   operatinghours: string;
// }



@Component({
  selector: 'app-storelist',
  templateUrl: './storelist.component.html',
  styleUrls: ['./storelist.component.css']
})
export class StorelistComponent implements OnInit, AfterViewInit {
  search: any;
  storeId: any;
  // @ViewChild('dt') table: Table;
  displayedColumns: string[] = ['id', 'storename', 'state', 'date', 'businesscoach', 'status', 'operatinghours', 'favourite', 'view'];
  clickedRows = new Set<StorelistComponent>();


  //displayedColumns: string[] = ['storeId', 'storeName', 'state', 'lastContactedDate', 'businessCoach', 'status', 'operatingHours'];



  stores = [
    { id: 1, storename: 'Anil', state: 'AP', date: 27 - 12 - 2022, businesscoach: 'Anil', status: 'Activate', operatinghours: '9:30am-6:30pm', favourite: '', view: '' },
    { id: 2, storename: 'Anil Reddy', state: 'AP', date: 27 - 12 - 2022, businesscoach: 'Anil', status: 'Activate', operatinghours: '9:30am-6:30pm' },
    { id: 3, storename: 'Anil', state: 'AP', date: 27 - 12 - 2022, businesscoach: 'Anil', status: 'Activate', operatinghours: '9:30am-6:30pm' },
    { id: 4, storename: 'Anil', state: 'AP', date: 27 - 12 - 2022, businesscoach: 'Anil', status: 'Activate', operatinghours: '9:30am-6:30pm' },
    { id: 5, storename: 'Anil', state: 'AP', date: 27 - 12 - 2022, businesscoach: 'Anil', status: 'Activate', operatinghours: '9:30am-6:30pm' },
    { id: 1, storename: 'Anil', state: 'AP', date: 27 - 12 - 2022, businesscoach: 'Anil', status: 'Activate', operatinghours: '9:30am-6:30pm' },
    { id: 1, storename: 'Anil', state: 'AP', date: 27 - 12 - 2022, businesscoach: 'Anil', status: 'Activate', operatinghours: '9:30am-6:30pm' },
    { id: 1, storename: 'Anil', state: 'AP', date: 27 - 12 - 2022, businesscoach: 'Anil', status: 'Activate', operatinghours: '9:30am-6:30pm' },

    // { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];
  dataSource = new MatTableDataSource(this.stores);
  constructor() { }

  @ViewChild(MatSort) sort !: MatSort;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  // @ViewChild('dt') table: Table;


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;


  }

  ngOnInit(): void {
  }




}
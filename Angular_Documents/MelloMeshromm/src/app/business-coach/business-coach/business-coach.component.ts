import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-coach',
  templateUrl: './business-coach.component.html',
  styleUrls: ['./business-coach.component.css']
})
export class BusinessCoachComponent implements OnInit {

  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;


  // name: FormControl = new FormControl();

  


  franchisee:any[] = [
    { Name: 'Anil', Email: 'anil@gmail', PhoneNumber: 9765246261, BusinessEntities: 5, Stores: 5 },
    { Name: 'Anil', Email: 'anil@gmail', PhoneNumber: 9765246261, BusinessEntities: 5, Stores: 5 },
    { Name: 'Anil', Email: 'anil@gmail', PhoneNumber: 9765246261, BusinessEntities: 5, Stores: 5 },
    { Name: 'Anil', Email: 'anil@gmail', PhoneNumber: 9765246261, BusinessEntities: 5, Stores: 5 },
    { Name: 'Anil', Email: 'anil@gmail', PhoneNumber: 9765246261, BusinessEntities: 5, Stores: 5 },
    { Name: 'Anil', Email: 'anil@gmail', PhoneNumber: 9765246261, BusinessEntities: 5, Stores: 5 },
    { Name: 'Anil', Email: 'anil@gmail', PhoneNumber: 9765246261, BusinessEntities: 5, Stores: 5 },
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

 
}


// name: FormControl = new FormControl();
// franchisee: Array<any> = [];
// });
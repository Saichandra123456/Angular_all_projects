import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createstores',
  templateUrl: './createstores.component.html',
  styleUrls: ['./createstores.component.css']
})
export class CreatestoresComponent implements OnInit {

  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;







  createstores: any[] = [
    { Name: 'Anil',Email:'anil@gmail.com', Status: 'Active', PhoneNumber:'9652546261' },
    { Name: 'Anil',Email:'anil@gmail.com', Status: 'Active', PhoneNumber:'9652546261' },
    { Name: 'Anil',Email:'anil@gmail.com', Status: 'Active', PhoneNumber:'9652546261' },
    { Name: 'Anil',Email:'anil@gmail.com', Status: 'Active', PhoneNumber:'9652546261' },
    { Name: 'Anil',Email:'anil@gmail.com', Status: 'InActive', PhoneNumber:'9652546261' },



  ]
  ngOnInit(): void {
  }
  key: string = 'id';
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isSearch: any;
  searchText: any;
  onSearchClick: any;

  mform: FormGroup = new FormGroup({
    name: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }
  sidenavbar() {

  }
  logout() {

  }
}

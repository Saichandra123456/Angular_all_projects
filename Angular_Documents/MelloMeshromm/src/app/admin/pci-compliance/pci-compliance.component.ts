import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pci-compliance',
  templateUrl: './pci-compliance.component.html',
  styleUrls: ['./pci-compliance.component.css']
})
export class PciComplianceComponent implements OnInit {
  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;
  path: any;

  constructor() { }

 
  ngOnInit(): void {
  }
  logout(){

  }
}

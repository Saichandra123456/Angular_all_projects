import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;
  constructor() { }


  technology=[
    {terminaltype:'Aloha R15', memory:'8gb',disktype:'500 GB'},
    {terminaltype:'Aloha R15', memory:'8gb',disktype:'500 GB'},
    {terminaltype:'Aloha R15', memory:'8gb',disktype:'500 GB'}

  ]

  ngOnInit(): void {
  }


  
}

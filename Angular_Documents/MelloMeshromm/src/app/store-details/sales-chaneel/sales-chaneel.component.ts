import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-chaneel',
  templateUrl: './sales-chaneel.component.html',
  styleUrls: ['./sales-chaneel.component.css']
})
export class SalesChaneelComponent implements OnInit {

  constructor() { }
  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;







  VisitCommunicationLog: any[] = [
    { id: '1', Name: 'Anil', Status: 'Active', Sales: '$5620k/week' },
    { id: '2', Name: 'Sai', Status: 'Active', Sales: '$5623k/week' },
    { id: '3', Name: 'Bharath', Status: 'Active', Sales: '$5323k/week' },
    { id: '4', Name: 'Nagendra', Status: 'Active', Sales: '$5123k/week' },
    { id: '5', Name: 'Keerthana', Status: 'Active', Sales: '$5623k/week' },
    { id: '6', Name: 'Mahendra', Status: 'Active', Sales: '$5623k/week' },
    { id: '7', Name: 'Anil', Status: 'Active', Sales: '$5621k/week' },



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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;







  menu: any[] = [
   {item:'pick 2 for',category:'Local',storepricing:'$35',lowestprice:'$25',averageprice:'$32',highestprice:'$32', changefrompriormenu:'16%'},
   {item:'pick 2 for',category:'Local',storepricing:'$35',lowestprice:'$25',averageprice:'$32',highestprice:'$32', changefrompriormenu:'16%'},
   {item:'pick 2 for',category:'Local',storepricing:'$35',lowestprice:'$25',averageprice:'$32',highestprice:'$32', changefrompriormenu:'16%'},
   {item:'pick 2 for',category:'Local',storepricing:'$35',lowestprice:'$25',averageprice:'$32',highestprice:'$32', changefrompriormenu:'16%'},
   {item:'pick 2 for',category:'Local',storepricing:'$35',lowestprice:'$25',averageprice:'$32',highestprice:'$32', changefrompriormenu:'16%'},
   {item:'pick 2 for',category:'Local',storepricing:'$35',lowestprice:'$25',averageprice:'$32',highestprice:'$32', changefrompriormenu:'16%'},
   {item:'pick 2 for',category:'Local',storepricing:'$35',lowestprice:'$25',averageprice:'$32',highestprice:'$32', changefrompriormenu:'16%'},
   {item:'pick 2 for',category:'Local',storepricing:'$35',lowestprice:'$25',averageprice:'$32',highestprice:'$32', changefrompriormenu:'16%'},
   {item:'pick 2 for',category:'Local',storepricing:'$35',lowestprice:'$25',averageprice:'$32',highestprice:'$32', changefrompriormenu:'16%'},




  ]
  ngOnInit(): void {
  }
  key: string = 'id';
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  FetchMenu() {

  }
}

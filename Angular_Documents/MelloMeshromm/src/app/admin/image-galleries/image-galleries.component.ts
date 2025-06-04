import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-galleries',
  templateUrl: './image-galleries.component.html',
  styleUrls: ['./image-galleries.component.css']
})
export class ImageGalleriesComponent implements OnInit {

  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;
  constructor() { }

  ngOnInit(): void {
  }
  uploadImagesDialog(){

  }
  downloadAllImages(){

  }

  
}

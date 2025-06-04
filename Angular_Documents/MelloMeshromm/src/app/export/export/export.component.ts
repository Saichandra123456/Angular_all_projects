import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {
  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;




  // filename: any;
  // errorMessage: any;
  // stateList: any;
  // storeList: any;
  // businessCoachList: any;
  // marketProgramsList: any;
  // salesChannelList: any;
  // wareHouseList: any;
  // marketSegmentList: any;
  // buildingTypeList: any;
   exportDropDown !: { name: string; label: string }[];


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  exportStoreDataForm = this.formBuilder.group({})
}

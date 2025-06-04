import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-franchisee-business-entity',
  templateUrl: './franchisee-business-entity.component.html',
  styleUrls: ['./franchisee-business-entity.component.css']
})
export class FranchiseeBusinessEntityComponent implements OnInit {


  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;
  path: any;



  constructor() { }

  franchisee: any[] = [
    { businessentityname: 'Anil', streetaddress: 'pulivendula', city: 'Kadapa', state:'AP',zipcode:'516396', Status: 'Active',actions:'' },
    { businessentityname: 'Anil', streetaddress: 'Tirupati', city: 'Kadapa', state:'AP',zipcode:'516392', Status: 'Active',},
    { businessentityname: 'Anil', streetaddress: 'Hyd', city: 'Kadapa', state:'AP',zipcode:'516392', Status: 'Active' },
    { businessentityname: 'Anil', streetaddress: 'pulivendula', city: 'Kadapa',state:'AP',zipcode:'516393', Status: 'Active' },
    { businessentityname: 'Anil', streetaddress: 'pulivendula', city: 'Kadapa',state:'AP',zipcode:'516394', Status: 'Active' },
    { businessentityname: 'Anil', streetaddress: 'pulivendula', city: 'Kadapa',state:'AP',zipcode:'516395', Status: 'Active' },
    { businessentityname: 'Anil', streetaddress: 'pulivendula', city: 'Kadapa',state:'TS',zipcode:'516396', Status: 'Active' },
    { businessentityname: 'Anil', streetaddress: 'pulivendula', city: 'Kadapa',state:'Delhi',zipcode:'516391', Status: 'Active' },
    { businessentityname: 'Anil', streetaddress: 'pulivendula', city: 'Kadapa',state:'UP',zipcode:'516398', Status: 'Active' },
    { businessentityname: 'Anil', streetaddress: 'pulivendula', city: 'Kadapa',state:'TN',zipcode:'5163996', Status: 'InActive' },

    


  ]


  Franchisees: any[] = [
    { name: 'Anil', email: 'anil12@gmail.com', phonenumber:9652546261, Status: 'Active',actions:'' },
    { name: 'Sai', email: 'anil122@gmail.com', phonenumber:9652546262, Status: 'Active',actions:'' },
    { name: 'Bharath', email: 'anil123@gmail.com', phonenumber:9652546263, Status: 'Active',actions:'' },
    { name: 'Keerthana', email: 'anil1223@gmail.com', phonenumber:9652546260, Status: 'Active',actions:'' },
    { name: 'Vinit', email: 'anil2@gmail.com', phonenumber:9652546264, Status: 'Active',actions:'' },
    { name: 'Mahendra', email: 'sai@gmail.com', phonenumber:9652546258, Status: 'Active',actions:'' },
    { name: 'Harshada', email: 'nagendra@gmail.com', phonenumber:96525462659, Status: 'Active',actions:'' },
    { name: 'Santosh', email: 'anil1212@gmail.com', phonenumber:9652546260, Status: 'Active',actions:'' },
    { name: 'Krishna', email: 'anil1200@gmail.com', phonenumber:965254651, Status: 'Active',actions:'' },
    { name: 'Ghanesh', email: 'anil120@gmail.com', phonenumber:9652546252, Status: 'Active',actions:'' },
   

    


  ]

  ngOnInit(): void {
  }


  key: string = 'id';
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  business(){

  }

}

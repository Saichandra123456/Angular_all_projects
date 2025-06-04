import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userpermission',
  templateUrl: './userpermission.component.html',
  styleUrls: ['./userpermission.component.css']
})
export class UserpermissionComponent implements OnInit {

  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;
  path: any;



  constructor() { }

  userpermission: any[] = [

    {username:'Anil',phonenumber:9652546261,emailid:'anil@gmail.com',role:'Admin',view:''},
    {username:'Anil Reddy',phonenumber:9652946261,emailid:'anilreddy@gmail.com',role:'Admin'},
    {username:'Keerthana',phonenumber:9652516261,emailid:'keerthana@gmail.com',role:'Admin'},
    {username:'Nagendra Reddy',phonenumber:8652546261,emailid:'nagendra@gmail.com',role:'Business Coach'},
    {username:'Vinit',phonenumber:96525467661,emailid:'vinit@gmail.com',role:'Business Coach'},
    {username:'Krishna',phonenumber:9652526261,emailid:'krishna@gmail.com',role:'Admin'},
    {username:'Sai',phonenumber:9652546265,emailid:'sai@gmail.com',role:'Business Coach'},
    {username:'Magendra',phonenumber:9652544261,emailid:'mahendra@gmail.com',role:'Admin'},
    {username:'Santosh',phonenumber:9652546361,emailid:'santosh@gmail.com',role:'Admin'},
    {username:'Venu',phonenumber:9652546266,emailid:'venu@gmail.com',role:'Business Coach'},


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


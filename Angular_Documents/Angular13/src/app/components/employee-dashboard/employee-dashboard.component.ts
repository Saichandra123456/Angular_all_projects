import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { ApiService } from '../../service/api.service';
import { EmployeeModel } from './employee-dashboard.model';
import swl from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-dashboard',

  providers: [ApiService],
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  employeeModelObj: EmployeeModel = new EmployeeModel();

  p: number = 1;
  formValue !: FormGroup;
  employeeData: any = [];
  showAdd !: boolean;
  showUpdate!: boolean;


  showUpdateTitle!: boolean;
  showAddTitle!: boolean;
  validatefirstName: any;






  constructor(private formBuilder: FormBuilder, private api: ApiService, private http: HttpClient, private router: Router) {

  }

  addButtonClickFunction() {
    this.formValue.reset();
    this.showUpdate = false;
    this.showAdd = true;

    this.showUpdateTitle = false;
    // this.showAddTitle = true;
  }


  // public imageSrc: string = '';

  // handleInputChange(e: any) {
  //   var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
  //   var pattern = /image-*/;
  //   var reader = new FileReader();
  //   if (!file.type.match(pattern)) {
  //     alert('invalid format');
  //     return;

  //   }
  //   reader.onload = this._handleReaderLoaded.bind(this);
  //   reader.readAsDataURL(file);
  // }
  // _handleReaderLoaded(e: any) {
  //   let reader = e.target;
  //   this.imageSrc = reader.result;
  //   console.log(e)
  // }

  ngOnInit(): void {


    this.formValue = this.formBuilder.group({
      // firstName : [{value: null, disabled: false}, 
      //   [Validators.required, this.validatefirstName()]],
      firstName: ['', [Validators.required, Validators.pattern('^[a-z A-a]+$')]],
      lastName: ['null'],
      Email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      // Photo: ['']
    })





    this.getAllEmployee();
  }

  // image(photo:any){
  //   console.log("---------------------------------",photo)
  //   return Observable.create((observer: Observer<string>) => {
  //     // create an image object
  //     let img = new Image();
  //     img.crossOrigin = "Anonymous";
  //     img.src = photo;
  //     if (!img.complete) {
  //       // This will call another method that will create image from url
  //       img.onload = () => {
  //         observer.next(this.getBase64Image(img));
  //         observer.complete();
  //       };
  //       img.onerror = err => {
  //         observer.error(err);
  //       };
  //     } else {
  //       observer.next(this.getBase64Image(img));
  //       observer.complete();
  //     }
  //   });

  // }

  postEmployeeDetails() {
    //alert("fucntion call");
    this.employeeModelObj.id = this.formValue.value.id;

    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.Email = this.formValue.value.Email;
    this.employeeModelObj.Mobile = this.formValue.value.Mobile;
    // this.formValue.controls['Photo'].setValue(this.imageSrc)
    // this.employeeModelObj.Photo = this.formValue.value.Photo;
    console.log(this.formValue.value.Photo)
    // this.employeeModelObj.Password=this.formValue.value.Password;


    let cancel = document.getElementById("cancel");
    this.http.get<any>("http://localhost:3000/posts",)
      .subscribe(res => {
        const user = res.find((tera: any) => {
          // if(tera.email === this.formValue.value.email){
          //   return "Email Exist"
          // }
          // if(tera.Mobile === this.formValue.value.Mobile){
          //   return "Mobile Exist"
          // }
          // if(tera.email === this.formValue.value.email && tera.Mobile === this.formValue.value.Mobile){
          //   return "Email and Mobile Exist"
          // }

          return (tera.Email === this.formValue.value.Email)
        });
        const mobile = res.find((tera: any) => {


          return (tera.Mobile === this.formValue.value.Mobile)
        });

        if (user) {
          alert("Email is Already exist");
        } else if (mobile) {
          alert("Mobile Number is Already exist");
        } else {
          this.api.postData(this.employeeModelObj).subscribe(a => {
            console.log(a);
            alert("Record inserted successfully");
            cancel?.click(); this.formValue.reset();
            this.getAllEmployee();
          })


        }
      })


  }


  getAllEmployee() {
    this.api.getData().subscribe(anil => {
      this.employeeData = anil;
    })

  }
  // deleteEmployee(row:any){

  //   this.api.deleteData(row.id).subscribe(a=>{
  //     alert("Record Deleted Succesfully");
  //     let cancel=document.getElementById("cancel");

  //     cancel?.click();
  //     this.formValue.reset();
  //     this.getAllEmployee();

  //   })

  // }
  updateEmployee(row: any) {
    this.showUpdate = true;
    this.showAdd = false;

    this.showUpdateTitle = true;
    this.showAddTitle = false;
    this.employeeModelObj.id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['Email'].setValue(row.Email);
    this.formValue.controls['Mobile'].setValue(row.Mobile);
    // this.formValue.controls['Photo'].setValue(row.Photo);
    // this.imageSrc = row.Photo
    // console.log(row)
    this.router.navigate(['/view/' + row.id]);
    // const imagePath = row.Photo;
    // console.log(this.imageSrc)
  }

  updateEmployeeDetails() {

    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.Email = this.formValue.value.Email;
    this.employeeModelObj.Mobile = this.formValue.value.Mobile;
    // this.employeeModelObj.Photo = this.formValue.value.imageSrc;
    this.api.updateData(this.employeeModelObj, this.employeeModelObj.id).subscribe(a => {
      alert("Record updated Succesfully");

      let cancel = document.getElementById("cancel");

      cancel?.click();
      this.formValue.reset();
      this.getAllEmployee();
    })
  }



  deleteEmployee(id: any) {
    swl.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.DeleteData(id);
      }
    })
  }
  DeleteData(id: any): void {
    this.api.deleteData(id).subscribe((res) => {
      this.getAllEmployee()
      swl.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    },
      err => {
        alert('some thing went wrong');
      }
    )
  }

  logout() {
    this.router.navigate(['login'])

  }
  job() {
    this.router.navigate(['job'])

  }




}

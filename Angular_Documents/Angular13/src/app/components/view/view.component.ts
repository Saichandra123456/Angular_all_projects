import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeModel } from '../employee-dashboard/employee-dashboard.model';
import swl from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  employeeModelObj: EmployeeModel = new EmployeeModel();

  p: number = 1;
  formValue !: FormGroup;
  employeeData: any = [];
  showAdd !: boolean;
  showUpdate!: boolean;


  showUpdateTitle!: boolean;
  showAddTitle!: boolean;

  // 




  constructor(private formBuilder: FormBuilder, private apiservice: ApiService, private http: HttpClient, private router: Router, private activateRoute: ActivatedRoute) {

  }

  addButtonClickFunction() {
    this.formValue.reset();
    this.showUpdate = false;
    this.showAdd = true;

    this.showUpdateTitle = false;
    this.showAddTitle = true;
  }


  public imageSrc: string = '';

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
  paramsId!: any;
  ngOnInit(): void {


    this.activateRoute.params.subscribe(data => {
      this.paramsId = data['id'];
    })

    this.formValue = this.formBuilder.group({

      firstName: ['', [Validators.required, Validators.pattern('^[a-z A-a]+$')]],
      lastName: ['null'],
      Email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      // Photo: ['']
    })




    this.getDetailsById();
  }
  getDetailsById() {
    if (this.paramsId) {
      this.showUpdate = true;
      this.showAdd = false;

      this.apiservice.getEmployeesById(this.paramsId).subscribe((res) => {
        this.formValue.controls['firstName'].setValue(res.firstName);
        this.formValue.controls['lastName'].setValue(res.lastName);
        this.formValue.controls['Email'].setValue(res.Email);
        this.formValue.controls['Mobile'].setValue(res.Mobile);
        // this.formValue.controls['Photo'].setValue(res.Photo);

      })

    } else {
      this.showUpdate = false;
      this.showAdd = true;
    }
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

  // postEmployeeDetails() {
  //   //alert("fucntion call");
  //   this.employeeModelObj.id = this.formValue.value.id;

  //   this.employeeModelObj.firstName = this.formValue.value.firstName;
  //   this.employeeModelObj.lastName = this.formValue.value.lastName;
  //   this.employeeModelObj.Email = this.formValue.value.Email;
  //   this.employeeModelObj.Mobile = this.formValue.value.Mobile;
  //   this.formValue.controls['Photo'].setValue(this.imageSrc)
  //   this.employeeModelObj.Photo = this.formValue.value.Photo;
  //   console.log(this.formValue.value.Photo)
  //   // this.employeeModelObj.Password=this.formValue.value.Password;

  //   let cancel = document.getElementById("cancel");
  //   this.apiservice.postData(this.employeeModelObj).subscribe(a => {

  //     console.log(a);
  //     alert("Record inserted successfully");
  //     cancel?.click(); this.formValue.reset();
  //     this.getAllEmployee();
  //   })
  // }


  // getAllEmployee() {
  //   this.apiservice.getData().subscribe(anil => {
  //     this.employeeData = anil;
  //   })

  // }
  // deleteEmployee(row:any){

  //   this.api.deleteData(row.id).subscribe(a=>{
  //     alert("Record Deleted Succesfully");
  //     let cancel=document.getElementById("cancel");

  //     cancel?.click();
  //     this.formValue.reset();
  //     this.getAllEmployee();
  // this.router.navigate(['/employee-dashboard'])


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
    // this.formValue.controls['Photo'].setValue(row.imageSrc)
    // const imagePath = row.Photo;

  }

  updateEmployeeDetails() {

    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.Email = this.formValue.value.Email;
    this.employeeModelObj.Mobile = this.formValue.value.Mobile;
    // this.employeeModelObj.Photo = this.imageSrc;
    this.apiservice.updateData(this.employeeModelObj, this.paramsId).subscribe(a => {
      alert("Record updated Succesfully");

      let cancel = document.getElementById("cancel");

      cancel?.click();
      this.formValue.reset();
      this.getDetailsById();
      this.router.navigate(['/employee-dashboard'])
    })
  }



  // deleteEmployee(id: any) {
  //   swl.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.DeleteData(id);
  //     }
  //   })
  // }
  // DeleteData(id: any): void {
  //   this.apiservice.deleteData(id).subscribe((res) => {
  //     this.getAllEmployee()
  //     swl.fire(
  //       'Deleted!',
  //       'Your file has been deleted.',
  //       'success'
  //     )
  //   },
  //     err => {
  //       alert('some thing went wrong');
  //     }
  //   )
  // }
  navigateToDashboard() {
    this.router.navigate(['/employee-dashboard'])
  }
  cancel() {
    this.router.navigate(['/employee-dashboard'])

  }
}


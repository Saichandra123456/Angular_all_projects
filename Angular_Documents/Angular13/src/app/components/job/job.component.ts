import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { jobModel } from './job.model';
import swl from 'sweetalert2'
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  jobForm !: FormGroup;
  id: any;
  data: any;
  jobdata: any

  constructor(
    private router: Router,
    private api: ApiService
  ) { }

  ngOnInit(): void {

    this.getAllEmployees();
  }
  getAllEmployees(): void {
    this.api.getjobdetails().subscribe((res) => {
      this.jobdata = res
      console.log(res, 'sadfgdsa')
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
    this.api.deletejobdetails(id).subscribe((res) => {
      this.getAllEmployees()
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

  clickaddemployee() {
    this.router.navigate(['/employee'])
  }
  onEdit(id: any) {
    console.log(id)
    this.router.navigate([/employee/ + id])

  }
  logout() {
    this.router.navigate(['/login'])

  }
  dashboard() {
    this.router.navigate(['/employee-dashboard'])
  }
}




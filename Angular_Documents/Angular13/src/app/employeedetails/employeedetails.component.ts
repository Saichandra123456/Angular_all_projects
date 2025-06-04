import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { jobModel } from '../components/job/job.model';
import { ApiService } from '../service/api.service';
import swl from 'sweetalert2'


@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  jobForm !: FormGroup;
  id: any;
  data: any;
  jobdata: any
  showAdd: boolean = true;
  showUpdate!: boolean;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private api: ApiService,
    private activateRoute: ActivatedRoute
  ) { }

  paramsId!: any;
  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.paramsId = data['id'];
    })

    this.getDetailsById();

    this.jobForm = this.fb.group({
      name: [null, [Validators.required, Validators.pattern('^[a-z A-a]+$')]],
      job: [null, [Validators.required, Validators.pattern('^[a-z A-a]+$')]],
    })
  }

  getDetailsById() {
    if (this.paramsId) {
      this.showUpdate = true;
      this.showAdd = false;

      this.api.getEmployeeById(this.paramsId).subscribe((res) => {
        this.jobForm.controls['name'].setValue(res.name);
        this.jobForm.controls['job'].setValue(res.job)
      })

    } else {
      this.showUpdate = false;
      this.showAdd = true;
    }
  }



  postdetails(): void {
    let obj = {
      name: this.jobForm.value.name,
      job: this.jobForm.value.job,

    };

    this.api.postjobdetails(obj).subscribe((res) => {
      console.log(res)
      swl.fire(
        'Success!',
        'Employee has been Added.',
        'success'
      )
      this.jobForm.reset();
      this.router.navigate(['/job'])
    },
      err => {
        alert('some thing went wrong');
      }
    )
  }

  updatedetails(): void {
    let obj = {
      id: this.jobForm.value.id,
      name: this.jobForm.value.name,
      job: this.jobForm.value.job,

    };
    this.api.updatejobdetails(obj, this.paramsId).subscribe((res) => {
      console.log(res)
      swl.fire(
        'Success',
        'Employee has been Updated.',
        'success'
      )
      this.jobForm.reset();
      this.router.navigate(['/job'])
    }
    )
  }

  navigateToDashboard() {
    this.router.navigate(['/job'])
  }


}

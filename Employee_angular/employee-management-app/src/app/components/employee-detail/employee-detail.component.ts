// src/app/components/employee-detail/employee-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  saveEmployee(): void {
    if (this.employee.id) {
      // Update existing employee
      this.employeeService.updateEmployee(this.employee).subscribe();
    } else {
      // Add new employee
      this.employeeService.addEmployee(this.employee).subscribe();
    }
  }
}

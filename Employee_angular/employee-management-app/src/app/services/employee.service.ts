// src/app/services/employee.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [];

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }

  addEmployee(employee: Employee): Observable<Employee[]> {
    employee.id = this.employees.length + 1;
    this.employees.push(employee);
    return of(this.employees);
  }

  updateEmployee(employee: Employee): Observable<Employee[]> {
    const index = this.employees.findIndex((e) => e.id === employee.id);
    if (index !== -1) {
      this.employees[index] = employee;
    }
    return of(this.employees);
  }

  deleteEmployee(id: number): Observable<Employee[]> {
    this.employees = this.employees.filter((e) => e.id !== id);
    return of(this.employees);
  }
}


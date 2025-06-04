import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  taskObj: Task = new Task();
  taskArr: Task[] = [];

  addTaskValue: string = '';

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }

  getAllTask() {
    this.crudService.getAllTask().subscribe({
      next: (res: Task[]) => {
        this.taskArr = res;
      },
      error: (err: any) => {
        alert("Unable to get the list of tasks");
      }
    });
  }

  addTask() {
    this.taskObj.task_name = this.addTaskValue;
    this.crudService.addTask(this.taskObj).subscribe({
      next: (res: Task) => {
        this.ngOnInit();
        this.addTaskValue = '';
      },
      error: (err: any) => {
        alert(err);
      }
    });
  }

  editTask() {
    this.crudService.edit(this.taskObj).subscribe({
      next: (res: Task) => {
        this.ngOnInit();
      },
      error: (err: any) => {
        alert("Failed to update task");
      }
    });
  }

  deleteTask(etask: Task) {
    this.crudService.deleteTask(etask).subscribe({
      next: (res: Task) => {
        this.ngOnInit();
      },
      error: (err: any) => {
        alert("Failed to delete");
      }
    });
  }
}

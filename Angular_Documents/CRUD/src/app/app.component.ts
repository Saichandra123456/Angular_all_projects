import { Component } from '@angular/core';
import { RestService } from './rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees=[] as any;
  constructor(private rest:RestService){
  }

  ngOnInit() 
   {
    this.rest.getEmployee().subscribe(data=>this.employees=data)
 
}
}
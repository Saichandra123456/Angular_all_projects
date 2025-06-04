import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() userData: any; // Define a property to hold the user data
  @Output() userDataEvent=new EventEmitter();

  // userDetails:any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userData = params;
      console.log(this.userData)
    });
  }
}

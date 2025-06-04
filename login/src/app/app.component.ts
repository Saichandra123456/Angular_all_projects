import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//property binding

// export class AppComponent {
//   pageTitle = 'Angular One-Way Binding';
//   // imageUrl = 'path/to/angular-logo.png';
//   isButtonDisabled = false;
// }

//event binding

// export class AppComponent {
//   userInput = '';

//   onButtonClick() {
//     console.log('Button clicked!');
//   }

//   onInputChange(event: any) {
//     this.userInput = event.target.value;
//   }
// }

//interpolation

// export class AppComponent {
//   username = 'John Doe';
//   isUserLoggedIn = true;
// }

//attribute binding

// export class AppComponent {
//   inputPlaceholder = 'Enter text';
//   textColor = 'blue';
//   fontSize = '18px';
// }


//class binding

export class AppComponent {
  hasError = true;
  buttonClass = 'highlight';
}
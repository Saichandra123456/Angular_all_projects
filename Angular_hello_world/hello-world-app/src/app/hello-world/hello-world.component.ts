import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
  showMessage = true;
  languages = ['JavaScript', 'TypeScript', 'Python', 'Java'];
  textColor = 'blue';
  isHighlighted = false;

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
}
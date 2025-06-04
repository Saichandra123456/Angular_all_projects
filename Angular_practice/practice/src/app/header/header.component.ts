import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.css'], // Use styleUrls instead of styleUrl
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  @Output() customeve = new EventEmitter();

  message = "this is passed to parent";

  asstoParent() {
    this.customeve.emit(this.message);
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @ViewChild('scrollBottom')
  private scrollBottom!: ElementRef;


  constructor() { }

  scroll(){
    
  }

  ngOnInit(): void {
  }
scrollToBottom(): void {}
}

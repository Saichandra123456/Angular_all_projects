import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-request-ticket',
  templateUrl: './request-ticket.component.html',
  styleUrls: ['./request-ticket.component.css']
})
export class RequestTicketComponent implements OnInit {

  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;


  name: FormControl = new FormControl();

  constructor() { }

  franchisee: any[] = [
    { TicketSubject: 'OLO Not Working anfd there was problem with an order', SubmittedBy: 'OLO No Replay Email', TicketDate: "10-24-2018", Status: 'Closed' },
    { TicketSubject: 'OLO Not Working anfd there was problem with an order', SubmittedBy: 'OLO No Replay Email', TicketDate: "10-24-2018", Status: 'Open' },
    { TicketSubject: 'OLO Not Working anfd there was problem with an order', SubmittedBy: 'OLO No Replay Email', TicketDate: "10-24-2018", Status: 'Open' },
    { TicketSubject: 'OLO Not Working anfd there was problem with an order', SubmittedBy: 'OLO No Replay Email', TicketDate: "10-24-2018", Status: 'Open' },
    { TicketSubject: 'OLO Not Working anfd there was problem with an order', SubmittedBy: 'OLO No Replay Email', TicketDate: "10-24-2018", Status: 'Open' },
    { TicketSubject: 'OLO Not Working anfd there was problem with an order', SubmittedBy: 'OLO No Replay Email', TicketDate: "10-24-2018", Status: 'Open' },
    { TicketSubject: 'OLO Not Working anfd there was problem with an order', SubmittedBy: 'OLO No Replay Email', TicketDate: "10-24-2018", Status: 'Open' },
    { TicketSubject: 'OLO Not Working anfd there was problem with an order', SubmittedBy: 'OLO No Replay Email', TicketDate: "10-24-2018", Status: 'Open' },
    { TicketSubject: 'OLO Not Working anfd there was problem with an order', SubmittedBy: 'OLO No Replay Email', TicketDate: "10-24-2018", Status: 'Open' },


  ]

  ngOnInit(): void {
  }


  key: string = 'id';
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }


}

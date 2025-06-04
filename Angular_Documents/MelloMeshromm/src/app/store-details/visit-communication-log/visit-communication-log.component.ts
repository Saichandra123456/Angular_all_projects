import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit-communication-log',
  templateUrl: './visit-communication-log.component.html',
  styleUrls: ['./visit-communication-log.component.css']
})
export class VisitCommunicationLogComponent implements OnInit {

  constructor() { }

  search: any;
  isSearch: any;
  searchText: any;
  onSearchClick: any;






  VisitCommunicationLog: any[] = [
    { Name: 'Anil', Designation: 'Business Coach', VisitDate: '02-09-2023', VisitType: 'yearly Audit', Notes: 'Internal Audit report Done', Attachments: 'yes' , view: ''},
    { Name: 'Anil', Designation: 'Business Coach', VisitDate: '02-09-2023', VisitType: 'yearly Audit', Notes: 'Internal Audit report Done', Attachments: 'yes' },
    { Name: 'Anil', Designation: 'Business Coach', VisitDate: '02-09-2023', VisitType: 'yearly Audit', Notes: 'Internal Audit report Done', Attachments: 'yes' },
    { Name: 'Anil', Designation: 'Business Coach', VisitDate: '02-09-2023', VisitType: 'yearly Audit', Notes: 'Internal Audit report Done', Attachments: 'yes' },
    { Name: 'Anil', Designation: 'Business Coach', VisitDate: '02-09-2023', VisitType: 'yearly Audit', Notes: 'Internal Audit report Done', Attachments: 'yes' },
    { Name: 'Anil', Designation: 'Business Coach', VisitDate: '02-09-2023', VisitType: 'yearly Audit', Notes: 'Internal Audit report Done', Attachments: 'yes' },
    { Name: 'Anil', Designation: 'Business Coach', VisitDate: '02-09-2023', VisitType: 'yearly Audit', Notes: 'Internal Audit report Done', Attachments: 'yes' },


  ]

  ngOnInit(): void {
  }

}


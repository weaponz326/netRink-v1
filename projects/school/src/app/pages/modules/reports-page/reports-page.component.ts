import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss']
})
export class ReportsPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Reports", url: "/home/reports/all-reports", icon: "bi bi-list-ul" },
    { text: "New Report", url: "/home/reports/new-report", icon: "bi bi-plus-square" },
  ]

  ngOnInit(): void {
  }

}

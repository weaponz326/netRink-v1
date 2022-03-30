import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance-page',
  templateUrl: './attendance-page.component.html',
  styleUrls: ['./attendance-page.component.scss']
})
export class AttendancePageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Attendance", url: "/home/attendance/all-attendance", icon: "bi bi-list-ul" },
    { text: "New Attendance", url: "/home/attendance/new-attendance", icon: "bi bi-plus-square" },
  ]

  ngOnInit(): void {
  }

}

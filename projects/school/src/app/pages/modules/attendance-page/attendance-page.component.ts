import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance-page',
  templateUrl: './attendance-page.component.html',
  styleUrls: ['./attendance-page.component.scss']
})
export class AttendancePageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Attendance", url: "/home/attendance/all-attendance", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

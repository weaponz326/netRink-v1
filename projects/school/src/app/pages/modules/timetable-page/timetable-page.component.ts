import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timetable-page',
  templateUrl: './timetable-page.component.html',
  styleUrls: ['./timetable-page.component.scss']
})
export class TimetablePageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Timetables", url: "/home/timetable/all-timetable", icon: "bi bi-list-ul" },
    { text: "New Timetable", url: "/home/timetable/new-timetable", icon: "bi bi-plus-square" },
  ]

  ngOnInit(): void {
  }

}

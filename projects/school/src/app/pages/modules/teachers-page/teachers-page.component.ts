import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers-page',
  templateUrl: './teachers-page.component.html',
  styleUrls: ['./teachers-page.component.scss']
})
export class TeachersPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Teachers", url: "/home/teachers/all-teachers", icon: "bi bi-list-ul" },
    { text: "New Teacher", url: "/home/teachers/new-teacher", icon: "bi bi-plus-square" }
  ]

  ngOnInit(): void {
  }

}

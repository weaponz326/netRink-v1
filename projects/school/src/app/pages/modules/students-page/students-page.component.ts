import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Students", url: "/home/students/all-students", icon: "bi bi-list-ul" },
    { text: "New Student", url: "/home/students/new-student", icon: "bi bi-plus-square" }
  ]

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes-page',
  templateUrl: './classes-page.component.html',
  styleUrls: ['./classes-page.component.scss']
})
export class ClassesPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Classes", url: "/home/classes/all-classes", icon: "bi bi-list-ul" },
    { text: "New Class", url: "/home/classes/new-class", icon: "bi bi-plus-square" },
    { text: "All Departments", url: "/home/classes/all-departments", icon: "bi bi-list-ul" }
  ]

  ngOnInit(): void {
  }

}

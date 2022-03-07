import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes-page',
  templateUrl: './classes-page.component.html',
  styleUrls: ['./classes-page.component.scss']
})
export class ClassesPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Classes", url: "/home/classes/all-classes", icon: "fa fa-fw fa-list" },
    { text: "New Class", url: "/home/classes/new-class", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

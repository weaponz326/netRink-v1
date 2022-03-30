import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrls: ['./subjects-page.component.scss']
})
export class SubjectsPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Subjects", url: "/home/subjects/all-subjects", icon: "bi bi-list-ul" },
    { text: "Add Subject", url: "/home/subjects/add-subject", icon: "bi bi-plus-square" }
  ]

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrls: ['./subjects-page.component.scss']
})
export class SubjectsPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Subjects", url: "/home/subjects/all-subjects", icon: "fa fa-fw fa-list" },
    { text: "Add Subject", url: "/home/subjects/add-subject", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

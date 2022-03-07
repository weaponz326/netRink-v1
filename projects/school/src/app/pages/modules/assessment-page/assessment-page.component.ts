import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment-page',
  templateUrl: './assessment-page.component.html',
  styleUrls: ['./assessment-page.component.scss']
})
export class AssessmentPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Assessment", url: "/home/assessment/all-assessment", icon: "fa fa-fw fa-list" },
    { text: "New Assessment", url: "/home/assessment/new-assessment", icon: "fa fa-fw fa-plus" },
  ]

  ngOnInit(): void {
  }

}

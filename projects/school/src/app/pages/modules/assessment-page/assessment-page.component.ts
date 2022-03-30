import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment-page',
  templateUrl: './assessment-page.component.html',
  styleUrls: ['./assessment-page.component.scss']
})
export class AssessmentPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Assessment", url: "/home/assessment/all-assessment", icon: "bi bi-list-ul" },
    { text: "New Assessment", url: "/home/assessment/new-assessment", icon: "bi bi-plus-square" },
  ]

  ngOnInit(): void {
  }

}

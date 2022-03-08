import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-plan-page',
  templateUrl: './lesson-plan-page.component.html',
  styleUrls: ['./lesson-plan-page.component.scss']
})
export class LessonPlanPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Plans", url: "/home/lesson-plan/all-plans", icon: "bi bi-list-ul" },
    { text: "New Plan", url: "/home/lesson-plan/new-plan", icon: "bi bi-plus-square" },
  ]

  ngOnInit(): void {
  }

}

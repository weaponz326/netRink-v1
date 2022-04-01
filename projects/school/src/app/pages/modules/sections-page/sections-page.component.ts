import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections-page',
  templateUrl: './sections-page.component.html',
  styleUrls: ['./sections-page.component.scss']
})
export class SectionsPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Sections", url: "/home/sections/all-sections", icon: "bi bi-list-ul" },
    { text: "New Section", url: "/home/sections/new-section", icon: "bi bi-plus-square" },
  ]

  ngOnInit(): void {
  }

}

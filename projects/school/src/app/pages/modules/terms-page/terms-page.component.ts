import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-page',
  templateUrl: './terms-page.component.html',
  styleUrls: ['./terms-page.component.scss']
})
export class TermsPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Terms", url: "/home/terms/all-terms", icon: "bi bi-list-ul" },
    { text: "New Term", url: "/home/terms/new-term", icon: "bi bi-plus-square" }
  ]

  ngOnInit(): void {
  }

}

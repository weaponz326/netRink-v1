import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents-page',
  templateUrl: './parents-page.component.html',
  styleUrls: ['./parents-page.component.scss']
})
export class ParentsPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Parents", url: "/home/parents/all-parents", icon: "bi bi-list-ul" },
    { text: "New Parent", url: "/home/parents/new-parent", icon: "bi bi-plus-square" },
  ]

  ngOnInit(): void {
  }

}

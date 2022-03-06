import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables-page',
  templateUrl: './tables-page.component.html',
  styleUrls: ['./tables-page.component.scss']
})
export class TablesPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Tables", url: "/home/tables/all-tables", icon: "bi bi-list-ul" },
  ]

  ngOnInit(): void {
  }

}

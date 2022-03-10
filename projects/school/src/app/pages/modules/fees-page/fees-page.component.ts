import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fees-page',
  templateUrl: './fees-page.component.html',
  styleUrls: ['./fees-page.component.scss']
})
export class FeesPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Fees", url: "/home/fees/all-fees", icon: "bi bi-list-ul" },
  ]

  ngOnInit(): void {
  }

}

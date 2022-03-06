import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deliveries-page',
  templateUrl: './deliveries-page.component.html',
  styleUrls: ['./deliveries-page.component.scss']
})
export class DeliveriesPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Deliveries", url: "/home/deliveries/all-deliveries", icon: "bi bi-list-ul" },
  ]

  ngOnInit(): void {
  }

}

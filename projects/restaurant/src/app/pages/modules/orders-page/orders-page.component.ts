import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Orders", url: "/home/orders/all-orders", icon: "bi bi-list-ul" },
  ]

  ngOnInit(): void {
  }

}

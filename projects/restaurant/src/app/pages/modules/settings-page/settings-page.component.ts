import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "Profile", url: "/home/settings/profile", icon: "bi bi-building" },
    { text: "Subscription", url: "/home/settings/billing", icon: "bi bi-cash" },
  ]

  ngOnInit(): void {
  }

}

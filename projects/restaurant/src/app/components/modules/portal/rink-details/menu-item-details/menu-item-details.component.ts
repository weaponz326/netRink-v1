import { Component, OnInit, ViewChild } from '@angular/core';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';


@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrls: ['./menu-item-details.component.scss']
})
export class MenuItemDetailsComponent implements OnInit {

  constructor(private menuApi: MenuApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  menuItemData: any;

  ngOnInit(): void {
    let sourceId = sessionStorage.getItem("restaurant_rink_source_id") as string;
    sessionStorage.setItem("restaurant_menu_item_id", sourceId);

    this.getMenuItem();
  }

  getMenuItem(){
    this.menuApi.getMenuItem()
      .then(
        (res: any) => {
          console.log(res);
          this.menuItemData = res;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}

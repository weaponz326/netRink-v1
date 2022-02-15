import { Component, OnInit, ViewChild } from '@angular/core';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';


@Component({
  selector: 'app-menu-group-details',
  templateUrl: './menu-group-details.component.html',
  styleUrls: ['./menu-group-details.component.scss']
})
export class MenuGroupDetailsComponent implements OnInit {

  constructor(private menuApi: MenuApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  menuGroupData: any;
  menuItemsCount: any;

  ngOnInit(): void {
    let sourceId = sessionStorage.getItem("restaurant_rink_source_id") as string;
    sessionStorage.setItem("restaurant_menu_group_id", sourceId);

    this.getMenuGroup();
    this.getMenuGroupMenuItem();
  }

  getMenuGroup(){
    this.menuApi.getMenuGroup()
      .then(
        (res: any) => {
          console.log(res);
          this.menuGroupData = res;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getMenuGroupMenuItem(){
    this.menuApi.getMenuGroupMenuItem()
      .then(
        (res: any) => {
          console.log(res);
          this.menuItemsCount = res.docs.length;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}

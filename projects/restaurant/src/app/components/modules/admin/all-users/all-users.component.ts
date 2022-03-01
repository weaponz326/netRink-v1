import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { AdminApiService } from 'projects/restaurant/src/app/services/modules/admin-api/admin-api.service';

import { AccountUser } from 'projects/restaurant/src/app/models/modules/admin/admin.model';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  constructor(
    private router: Router,
    private adminApi: AdminApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Users", url: "/home/admin/all-users" },
  ];

  usersGridData: any[] = [];

  isFetchingGridData = false;

  sortParams = {
    field: "created_at",
    direction: "asc"
  }

  ngOnInit(): void {
    this.getAccountAccountUser();
  }

  getAccountAccountUser() {
    this.isFetchingGridData = true;

    this.adminApi.getAccountAccountUser(this.sortParams)
      .then(
        (res: any) => {
          console.log(res);

          this.usersGridData = res.docs;
          this.isFetchingGridData = false;
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  sortTable(field: any, direction: any){
    this.sortParams.field = field;
    this.sortParams.direction = direction;

    this.getAccountAccountUser();
  }

  viewUser(personalId: any){
    console.log(personalId);
    sessionStorage.setItem('restaurant_account_user_id', personalId);

    this.router.navigateByUrl('/home/admin/view-user');
  }

}

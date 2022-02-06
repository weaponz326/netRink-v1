import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'

import { AdminApiService } from 'projects/restaurant/src/app/services/modules/admin-api/admin-api.service';

import { User } from 'projects/restaurant/src/app/models/modules/admin/admin.model';


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
  @ViewChild('personalNameCodeSortingComponentReference', { read: TableSortingComponent, static: false }) personalNameSorting!: TableSortingComponent;
  @ViewChild('userLevelSortingComponentReference', { read: TableSortingComponent, static: false }) userLevelSorting!: TableSortingComponent;

  navHeading: any[] = [
    { text: "All Users", url: "/home/admin/all-users" },
  ];

  usersGridData: User[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAllAccountAdminUser();
  }

  getAllAccountAdminUser() {
    this.adminApi.getAllAccountAdminUser()
      .then(
        (res: any) => {
          console.log(res);
          this.usersGridData = res;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  viewUser(personalId: any){
    console.log(personalId);
    sessionStorage.setItem('restaurant_admin_user_id', personalId);

    this.router.navigateByUrl('/home/admin/view-user');
  }

  sortTable(field: any){
    console.log(field);
    this.getAllAccountAdminUser();

    if((field == 'personal_name') || (field == "-personal_name")){
      this.personalNameSorting.resetSort();
    }
    else if((field == 'user_level') || (field == "-user_level")){
      this.userLevelSorting.resetSort();
    }
  }

}

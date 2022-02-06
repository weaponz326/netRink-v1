import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { AdminApiService } from 'projects/restaurant/src/app/services/modules/admin-api/admin-api.service';

import { Invitation } from 'projects/restaurant/src/app/models/modules/admin/admin.model';


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  constructor(
    private router: Router,
    private adminApi: AdminApiService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Invitation", url: "/home/admin/search" },
  ];

  searchInput = '';

  isSearchResultsReady = false;
  isSearchDetailReady = false;
  searchResults: any;
  searchDetail: any;
  searchQuery: any;

  ngOnInit(): void {
    console.log(sessionStorage.getItem('restaurantAdminSearchInput'));

    if(sessionStorage.getItem('restaurantAdminSearchInput')){
      this.searchQuery = sessionStorage.getItem('restaurantAdminSearchInput');
      this.doSearch();
    }
  }

  doSearch(){
    if (this.searchInput.trim() != ""){
      // put search input in url
      this.router.navigate(['/home/admin/search/', { input: this.searchInput }]);

      sessionStorage.setItem('restaurantAdminSearchInput', this.searchInput);
      this.searchQuery = this.searchInput;

      this.getSearchResult();
    }
  }

  getSearchResult(){
    this.adminApi.getSearchResult(this.searchInput)
      .then(
        (res: any) => {
          console.log(res);
          this.searchResults = res;

          this.isSearchResultsReady = true;
          this.isSearchDetailReady = false;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getSearchDetail(){
    this.adminApi.getSearchDetail(String(sessionStorage.getItem('restaurantAdminSearchUser')))
      .then(
        (res: any) => {
          console.log(res);
          this.searchDetail = res;

          this.isSearchResultsReady = false;
          this.isSearchDetailReady = true;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  sendInvitation() {
    let data: Invitation = {
      uid: "",
      account: localStorage.getItem('restaurant_id') as string,
      invitation_date: new Date(),
      invitee_id: this.searchDetail.id,
      invitee_name: this.searchDetail.first_name + " " + this.searchDetail.last_name,
      invitation_status: 'Awaiting',
    }

    console.log(data);

    this.adminApi.createInvitation(data)
      .then(
        (res: any) => {
          console.log(res);
          sessionStorage.setItem('restaurant_invitation_id', res.data.id);
          this.router.navigateByUrl('/home/admin/view-invitation');
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  gotoSearchDetail(userId: any){
    sessionStorage.setItem('restaurantAdminSearchUser', userId);
    this.getSearchDetail();
  }

}

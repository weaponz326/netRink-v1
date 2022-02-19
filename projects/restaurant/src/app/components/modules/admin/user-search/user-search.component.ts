import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/compat/app';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { SearchResultsComponent } from '../search-results/search-results.component';
import { SearchDetailComponent } from '../search-detail/search-detail.component';

import { AdminApiService } from 'projects/restaurant/src/app/services/modules/admin-api/admin-api.service';
import { SettingsApiService } from 'projects/personal/src/app/services/modules/settings-api/settings-api.service';

import { Invitation as RestaurantInvitation } from 'projects/restaurant/src/app/models/modules/admin/admin.model';
import { Invitation as PersonalInvitation } from 'projects/personal/src/app/models/modules/settings/settings.model';


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  constructor(
    private router: Router,
    private adminApi: AdminApiService,
    private settingsApi: SettingsApiService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('searchResultsComponentReference', { read: SearchResultsComponent, static: false }) searchResults!: SearchResultsComponent;
  @ViewChild('searchDetailComponentReference', { read: SearchDetailComponent, static: false }) searchDetail!: SearchDetailComponent;

  navHeading: any[] = [
    { text: "New Invitation", url: "/home/admin/search" },
  ];

  searchInput = '';

  isSearchResultsReady = false;
  isSearchDetailReady = false;
  searchResultsData: any;
  searchDetailData: any;
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
          this.searchResultsData = res.docs;

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
          this.searchDetailData = res;

          this.isSearchResultsReady = false;
          this.isSearchDetailReady = true;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  createInvitation() {
    // restaurant invitation

    let restaurantData: RestaurantInvitation = {
      created_at: firebase.default.firestore.FieldValue.serverTimestamp(),
      account: localStorage.getItem('restaurant_id') as string,
      invitee_id: this.searchDetailData.id,
      invitee_name: this.searchDetailData.data().first_name + " " + this.searchDetailData.data().last_name,
      invitation_status: 'Awaiting',
    }

    console.log(restaurantData);
    this.searchDetail.isSending = true;

    this.adminApi.createInvitation(restaurantData)
      .then(
        (res: any) => {
          console.log(res);

          sessionStorage.setItem('restaurant_invitation_id', res.id);
          this.router.navigateByUrl('/home/admin/invitations');

          this.searchDetail.isSending = false;
        },
        (err: any) => {
          console.log(err);
          this.searchDetail.isSending = false;
          this.connectionToast.openToast();
        }
      )

    // personal invitation

    let personalData: PersonalInvitation = {
      created_at: firebase.default.firestore.FieldValue.serverTimestamp(),
      account_id: localStorage.getItem('restaurant_id') as string,
      account_name: localStorage.getItem('restaurant_name') as string,
      account_type: "Restaurant",
      invitee_id: this.searchDetailData.id,
      invitation_status: 'Awaiting',
    }

    this.settingsApi.createInvitation(personalData)
      .then(
        (res: any) => {
          console.log(res);
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

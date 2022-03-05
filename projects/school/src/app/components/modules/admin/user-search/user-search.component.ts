import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { SearchResultsComponent } from '../search-results/search-results.component';
import { SearchDetailComponent } from '../search-detail/search-detail.component';

import { AccountApiService } from 'projects/school/src/app/services/account-api/account-api.service';
import { AdminApiService } from 'projects/school/src/app/services/modules/admin-api/admin-api.service';
import { SettingsApiService as SschoolSettingsApiService } from 'projects/school/src/app/services/modules/settings-api/settings-api.service';
import { SettingsApiService as PersonalSettingsApiService } from 'projects/personal/src/app/services/modules/settings-api/settings-api.service';

import { Invitation as SschoolInvitation } from 'projects/school/src/app/models/modules/admin/admin.model';
import { Invitation as PersonalInvitation } from 'projects/personal/src/app/models/modules/settings/settings.model';


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  constructor(
    private router: Router,
    private accountApi: AccountApiService,
    private adminApi: AdminApiService,
    private schoolSettingsApi: SschoolSettingsApiService,
    private personalSettingsApi: PersonalSettingsApiService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('searchResultsComponentReference', { read: SearchResultsComponent, static: false }) searchResults!: SearchResultsComponent;
  @ViewChild('searchDetailComponentReference', { read: SearchDetailComponent, static: false }) searchDetail!: SearchDetailComponent;

  navHeading: any[] = [
    { text: "New Invitation", url: "/home/admin/search" },
  ];

  searchInput = '';

  accountData: any;

  isSearchResultsReady = false;
  isSearchDetailReady = false;
  searchResultsData: any;
  searchDetailData: any;
  searchQuery: any;

  sortParams = {
    field: "access_level",
    direction: "asc"
  }

  ngOnInit(): void {
    this.getAccount();

    console.log(sessionStorage.getItem('schoolAdminSearchInput'));

    if(sessionStorage.getItem('schoolAdminSearchInput')){
      this.searchQuery = sessionStorage.getItem('schoolAdminSearchInput');
      this.doSearch();
    }
  }

  doSearch(){
    if (this.searchInput.trim() != ""){
      // put search input in url
      this.router.navigate(['/home/admin/search/', { input: this.searchInput }]);

      sessionStorage.setItem('schoolAdminSearchInput', this.searchInput);
      this.searchQuery = this.searchInput;

      this.getSearchResult();
    }
  }

  getAccount(){
    this.accountApi.getAccount()
      .then(
        (res: any) => {
          console.log(res);
          this.accountData = res;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
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
    this.adminApi.getSearchDetail(String(sessionStorage.getItem('schoolAdminSearchUser')))
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

  async checkSubscriptionStatus(){
    this.searchDetail.isSending = true;

    const accountUsersPromise = this.adminApi.getAccountAccountUser(this.sortParams);
    const subscriptionPromise = this.schoolSettingsApi.getSubscription();
    const [accountUsersData, subscriptionData] = await Promise.all([accountUsersPromise, subscriptionPromise]);

    let accountNumberUsers = accountUsersData.docs.length;
    let subscriptionNumberUsers: any = subscriptionData?.data();

    if (accountNumberUsers >= subscriptionNumberUsers.number_users){
      console.log('maximum users reached');

      this.searchDetail.isSending = false;
      this.searchDetail.openModal();
    }
    else {
      this.createAccountInvitation();
    }
  }

  createAccountInvitation() {
    let data: SschoolInvitation = {
      created_at: serverTimestamp(),
      account: localStorage.getItem('school_id') as string,
      invitation_status: 'Awaiting',
      user: {
        id: this.searchDetailData.id,
        data: this.searchDetailData.data()
      }
    }

    console.log(data);
    this.searchDetail.isSending = true;

    this.adminApi.createInvitation(data)
      .then(
        (res: any) => {
          console.log(res);

          sessionStorage.setItem('school_invitation_id', res.id);
          this.createUserInvitation();
          this.searchDetail.isSending = false;

          this.router.navigateByUrl('/home/admin/invitations');
        },
        (err: any) => {
          console.log(err);
          this.searchDetail.isSending = false;
          this.connectionToast.openToast();
        }
      )
  }

  createUserInvitation(){
    let data: PersonalInvitation = {
      created_at: serverTimestamp(),
      user: this.searchDetailData.id,
      invitation_status: 'Awaiting',
      account_type: "Sschool",
      account_invitaion: sessionStorage.getItem('school_invitation_id') as string,
      account: {
        id: localStorage.getItem('school_id') as string,
        data: this.accountData.data(),
      }
    }

    console.log(data);

    this.personalSettingsApi.createInvitation(data)
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
    sessionStorage.setItem('schoolAdminSearchUser', userId);
    this.getSearchDetail();
  }

}

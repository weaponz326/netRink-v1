import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminApiService } from '../../services/modules/admin-api/admin-api.service';


@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.scss']
})
export class UserLandingPageComponent implements OnInit {

  constructor(
    private router: Router,
    private adminApi: AdminApiService
  ) { }

  accountsData: any;
  isAccountLoading: boolean = false;

  ngOnInit(): void {
    this.getUserAccountUser();
  }

  getUserAccountUser(){
    this.isAccountLoading = true;

    this.adminApi.getUserAccountUser()
      .then(
        (res: any) => {
          console.log(res);
          this.accountsData = res.docs;
          this.isAccountLoading = false;
        },
        (err: any) => {
          console.log(err);
          this.isAccountLoading = false;
        }
      )
  }

  activateAccount(data: any){
    console.log(data);
    localStorage.setItem('restaurant_id', data.data().account.id);
    localStorage.setItem('restaurant_name', data.data().account.data.name);
    sessionStorage.setItem('restaurant_account_user_id', data.id);
    this.router.navigateByUrl('/home');

    // TODO: store selected account in server session
  }

  gotoAbout() {
    console.log('to about...');
    document.querySelector('#aboutComponentReference')?.scrollIntoView({ behavior: 'smooth' });
  }

  gotoPricing() {
    console.log('to pricing...');
    document.querySelector('#pricingComponentReference')?.scrollIntoView({ behavior: 'smooth'});
  }

  gotoContact() {
    console.log('to contact...');
    document.querySelector('#contactComponentReference')?.scrollIntoView({ behavior: 'smooth'});
  }

}

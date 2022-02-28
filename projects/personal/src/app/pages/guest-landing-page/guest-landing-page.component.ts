import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthApiService } from 'projects/personal/src/app/services/user/auth-api/auth-api.service';


@Component({
  selector: 'app-guest-landing-page',
  templateUrl: './guest-landing-page.component.html',
  styleUrls: ['./guest-landing-page.component.scss']
})
export class GuestLandingPageComponent implements OnInit {

  constructor(
    private authApi: AuthApiService,
    private router: Router,
  ) { }

  isLoading: boolean = false;

  ngOnInit(): void {
    this.getAuth();
  }

  getAuth(){
    this.isLoading = true;

    this.authApi.getAuth()
      .subscribe(
        (res: any) => {
          console.log(res);
          this.isLoading = false;

          if (res.emailVerified){
            this.router.navigateByUrl("/home");
          }
        },
        (err: any) => {
          console.log(err);
          this.isLoading = false;
        }
      )
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

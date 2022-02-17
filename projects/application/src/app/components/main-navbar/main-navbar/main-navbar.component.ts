import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { AuthApiService } from 'projects/personal/src/app/services/user/auth-api/auth-api.service';
import { UserApiService } from 'projects/personal/src/app/services/user/user-api/user-api.service';

import { User } from 'projects/personal/src/app/models/user/user.model';


@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private authApi: AuthApiService,
    private userApi: UserApiService,
  ) { }

  @Input() source: string = "Application";
  @Input() navBrand: string = "NetRink";
  @Input() isForms: boolean = false;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  userData: any;

  isLoggedIn: boolean = false;
  isAuthLoading: boolean = false;

  name: string = "";
  email: string = "";
  profilePhotoSrc: string = "../../../../assets/images/utilities/photo-avatar.jpg";

  ngOnInit(): void {
    this.getAuth();
    this.getUser();

    if(!this.isForms){
      this.setSource();
    }
  }

  setSource(){
    sessionStorage.setItem('app_source', this.navBrand);
  }

  getAuth(){
    this.isAuthLoading = true;

    this.authApi.getAuth()
      .subscribe(
        (res: any) => {
          console.log(res);
          this.isAuthLoading = false;

          if (res.uid){
            this.isLoggedIn = true;
            this.email = res.email;
          }
        },
        (err: any) => {
          console.log(err);
          this.isLoggedIn = false;
          this.isAuthLoading = false;
        }
      )
  }

  getUser(){
    this.userApi.getUser()
      .then(
        (res: any) => {
          console.log(res);
          this.userData = res.data();

          this.name = this.userData.first_name;
          // this.profilePhotoSrc = res.photoUrl;

          let full_name = this.userData.first_name + " " + this.userData.last_name;;
          sessionStorage.setItem('personal_name', full_name);
        },
        (err: any) => {
          console.log(err);
        }
      )
  }

  logout(e: any){
    e.stopPropagation();
    console.log("u logging out? ...where u going?");

    this.authApi.logout()
      .then(
        (res: any) => {
          console.log(res);

          localStorage.removeItem("personal_id");
          localStorage.removeItem("hospital_id");
          localStorage.removeItem("restaurant_id");
          localStorage.removeItem("school_id");
          localStorage.removeItem("enterprise_id");
          localStorage.removeItem("association_id");
          localStorage.removeItem("hotel_id");
          localStorage.removeItem("shop_id");
          localStorage.removeItem("production_id");

          window.location.href = "/";
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}

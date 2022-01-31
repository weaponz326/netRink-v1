import { Component, Input, OnInit } from '@angular/core';

import { environment } from 'projects/personal/src/environments/environment';

import { AuthApiService } from 'projects/personal/src/app/services/auth-api/auth-api.service';
import { AuthService } from 'projects/personal/src/app/services/auth/auth.service';


@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  constructor(
    private authApi: AuthApiService,
    private auth: AuthService,
  ) { }

  @Input() source: string = "Application";
  @Input() navBrand: string = "NetRink";
  @Input() isForms: boolean = false;

  isLoggedIn: boolean = false;
  name: string = "";
  email: string = "";
  profilePhotoSrc: string = "../../../../assets/images/utilities/photo-avatar.jpg";

  ngOnInit(): void {
    this.getUser();

    if(!this.isForms){
      this.setSource();
    }
  }

  setSource(){
    sessionStorage.setItem('app_source', this.navBrand);
  }

  getUser(){
    // this.auth.getLoggedIn()
    //   .subscribe(
    //     (res: any) => {
    //       console.log(res);

    //       if(res.id) {
    //         this.isLoggedIn = true;
    //         this.name = res.first_name;
    //         this.email = res.email;
    //         this.profilePhotoSrc = res.photoUrl;

    //         let full_name = res.first_name + " " + res.last_name;;
    //         localStorage.setItem('personal_id', res.uid);
    //         sessionStorage.setItem('personal_name', full_name);
    //       }
    //     },
    //     (err: any) => {
    //       console.log(err);
    //       this.isLoggedIn = false;
    //     }
    //   )
  }

  logout(e: any){
    e.stopPropagation();

    // this.auth.logOut()
    //   .subscribe(
    //     (res: any) => {
    //       console.log(res);

    //       localStorage.removeItem("personal_id");
    //       localStorage.removeItem("hospital_id");
    //       localStorage.removeItem("restaurant_id");
    //       localStorage.removeItem("school_id");
    //       localStorage.removeItem("enterprise_id");
    //       localStorage.removeItem("association_id");
    //       localStorage.removeItem("hotel_id");
    //       localStorage.removeItem("shop_id");
    //       localStorage.removeItem("production_id");

    //       window.location.href = "/";
    //     },
    //     (err: any) => {
    //       console.log(err);
    //     }
    //   )

    console.log("u logging out? ...where u going?");
  }

}

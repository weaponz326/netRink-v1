import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { AuthApiService } from 'projects/personal/src/app/services/user/auth-api/auth-api.service';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  constructor(
    private authApi: AuthApiService,
  ) { }

  @Input() source: string = "Application";
  @Input() navBrand: string = "NetRink";
  @Input() isForms: boolean = false;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

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
    // this.userApi.getUser()
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

    this.authApi.logout();
    window.location.href = "/";

    console.log("u logging out? ...where u going?");
  }

}

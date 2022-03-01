import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import { environment } from 'projects/personal/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  login(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string){
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  async sendEmailVerification() {
    var user: any;
    await this.afAuth.currentUser.then((res: any) => user = res);

    const baseUrl = this.getBaseUrl();
    const url = `${baseUrl}/auth/success?id=${user.uid}&email=${user.email}`;
    // const url = `http://localhost:4200/auth/signup-success?id=${user.uid}&email=${user.email}`;

    return user.sendEmailVerification({url: url});
  }

  sendPasswordResetEmail(email: string){
    const baseUrl = this.getBaseUrl();
    const url = `${baseUrl}/auth/success?email=${email}`;
    // const url = `http://localhost:4200/auth/reset-success?email=${email}`;

    return this.afAuth.sendPasswordResetEmail(email);
  }

  logout(){
    return this.afAuth.signOut();
  }

  getAuth(){
    return this.afAuth.authState;
  }

  getBaseUrl(){
    const source = sessionStorage.getItem('app_source');

    switch(source){
      case "netRink":
        return environment.baseUrl;
        break;
      case "nR Personal":
        return environment.personalUrl;
        break;
      case "nR Restaurant":
        return environment.restaurantUrl;
        break;
      case "nR School":
        return environment.schoolUrl;
        break;
      case "nR Enterprise":
        return environment.enterpriseUrl;
        break;
      case "nR Association":
        return environment.associationUrl;
        break;
      case "nR Hospital":
        return environment.hospitalUrl;
        break;
      case "nR Hotel":
        return environment.hotelUrl;
        break;
      case "nR Shop":
        return environment.shopUrl;
        break;
      case "nR Production":
        return environment.productionUrl;
        break;
      default:
        return environment.baseUrl;
        break;
    }
  }

}

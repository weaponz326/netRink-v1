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

  async sendEmailVerification(actionCode: any) {
    let user: any;
    await this.afAuth.currentUser.then((res: any) => user = res);
    // const url = `${environment.baseUrl}/auth/success?id=${user.uid}&email=${user.email}&source=${sessionStorage.getItem('app_source')}`;
    const url = `http://localhost:4200/auth/success?id=${user.uid}&email=${user.email}&source=${sessionStorage.getItem('app_source')}`;

    return user.sendEmailVerification({url: url});
  }

  sendPasswordResetEmail(email: string){
    // const url = `${environment.baseUrl}/auth/success?email=${email}&source=${sessionStorage.getItem('app_source')}`;
    const url = `http://localhost:4200/auth/success?email=${email}&source=${sessionStorage.getItem('app_source')}`;

    return this.afAuth.sendPasswordResetEmail(email);
  }

  logout(){
    return this.afAuth.signOut();
  }

  getAuth(){
    return this.afAuth.authState;
  }

}

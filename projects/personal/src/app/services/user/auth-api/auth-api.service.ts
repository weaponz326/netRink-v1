import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';


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

  sendRecoveryEmail(email: string){
    return this.afAuth.sendPasswordResetEmail(email);
  }

  logout(){
    return this.afAuth.signOut();
  }

  getAuth(){
    return this.afAuth.authState;
  }

}

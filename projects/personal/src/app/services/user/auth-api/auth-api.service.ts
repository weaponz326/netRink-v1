import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(
    public afAuth: AngularFireAuth
  ) {
    this.afAuth.authState
      .subscribe(user => {
        if(user)
          localStorage.setItem('user', JSON.stringify(user));
        else
          localStorage.setItem('user', '');
      }
    );
  }

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
    this.afAuth.signOut();

    localStorage.removeItem("personal_id");
    localStorage.removeItem("hospital_id");
    localStorage.removeItem("restaurant_id");
    localStorage.removeItem("school_id");
    localStorage.removeItem("enterprise_id");
    localStorage.removeItem("association_id");
    localStorage.removeItem("hotel_id");
    localStorage.removeItem("shop_id");
    localStorage.removeItem("production_id");
  }

}

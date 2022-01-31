import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";

// import { auth } from 'firebase/app';
// import { AngularFireAuth } from "@angular/fire/auth";
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { UserModel } from "../../models/user-model";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    // public afs: AngularFirestore,
    // public afAuth: AngularFireAuth,
    // public router: Router,
    // public ngZone: NgZone
  ) { }

  userData: any;

  logIn(email: any, password: any) {
    // return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    return null;
  }

  signUp(email: any, password: any) {
    // return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    return null;
  }

  SendVerificationMail() {
    // return this.afAuth.auth.currentUser.sendEmailVerification();
    return null;
  }

  forgotPassword(email: any) {
    // return this.afAuth.auth.sendPasswordResetEmail(email);
    return null;
  }

  logOut() {
    // return this.afAuth.auth.signOut();
    return null;
  }

  getLoggedIn() {
    // return this.afAuth.authState;
    return null;
  }

   setUserData(user: any) {
    // const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: UserModel = {
      uid: user.uid,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      about: user.about,
      photoUrl: user.photoUrl,
      emailVerified: user.emailVerified
    }
    // return userRef.set(userData, {
    //   merge: true
    // })
  }

}

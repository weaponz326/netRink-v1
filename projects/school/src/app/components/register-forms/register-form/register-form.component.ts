import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { serverTimestamp } from 'firebase/firestore';

import { UserApiService } from 'projects/personal/src/app/services/user/user-api/user-api.service';
import { AccountApiService } from '../../../services/account-api/account-api.service';
import { AdminApiService } from '../../../services/modules/admin-api/admin-api.service';
import { SettingsApiService } from '../../../services/modules/settings-api/settings-api.service';

import { Account } from '../../../models/account/account.model';
import { AccountUser, UserAccess } from '../../../models/modules/admin/admin.model';
import { ExtendedProfile, Subscription } from '../../../models/modules/settings/settings.model';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(
    private router: Router,
    private userApi: UserApiService,
    private accountApi: AccountApiService,
    private adminApi: AdminApiService,
    private settingsApi: SettingsApiService,
  ) { }

  accountForm = new FormGroup({
    name: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    about: new FormControl('', Validators.required),
  })

  thisUser: any;

  saved: boolean = false;
  isSending: boolean = false;
  showPrompt: boolean = false;

  nameErrors: any;
  locErrors: any;
  abtErrors: any;

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.userApi.getUser()
      .then(
        (res: any) => {
          console.log(res);
          this.thisUser = res.data();
        },
        (err: any) => {
          console.log(err);
        }
      )
  }

  onSubmit(){
    let accountData: Account = {
      created_at: serverTimestamp(),
      name: this.accountForm.controls.name.value,
      location: this.accountForm.controls.location.value,
      about: this.accountForm.controls.about.value,
      created_by: localStorage.getItem('personal_id') as string,
      logo: ""
    }

    this.saved = true;

    if (this.accountForm.valid){
      this.isSending = true;

      this.accountApi.createAccount(accountData)
        .then(
          (res: any) => {
            console.log(res);

            localStorage.setItem('school_id', res.id);
            this.showPrompt = true;
            this.isSending = false;

            this.createAccountUser(accountData);
            this.createExtendedProfile();
            this.createSubscription();
          },
          (err: any) => {
            console.log(err);
            this.isSending = false;
          }
        )
    }
    else{
      console.log("form is invalid");
    }

    console.log(this.accountForm.value);
  }

  createAccountUser(account: any){
    let userData: AccountUser = {
      created_at: serverTimestamp(),
      user: {
        id: localStorage.getItem('personal_id') as string,
        data: this.thisUser,
      },
      access_level: "Admin",
      account: {
        id: localStorage.getItem('school_id') as string,
        data: account,
      }
    }

    console.log(userData);

    this.adminApi.createAccountUser(userData)
      .then(
        (res: any) => {
          console.log(res);
          sessionStorage.setItem('school_account_user_id', res.id)
          this.createUserAccess(res.id);
        },
        (err: any) => {
          console.log(err)
        }
      )
  }

  createUserAccess(accountUserId: any){
    let accessData: UserAccess = {
      admin_access: true,
      assessment_access: true,
      attendance_access: true,
      classes_stock_access: true,
      fees_access: true,
      lesson_notes_access: true,
      parents_access: true,
      payments_access: true,
      portal_access: true,
      reports_access: true,
      sections_access: true,
      settings_access: true,
      staff_access: true,
      students_access: true,
      subjects_access: true,
      teachers_access: true,
      timetable_access: true,
    }

    this.adminApi.createUserAccess(accountUserId, accessData)
      .then(
        (res: any) => console.log(res),
        (err: any) => console.log(err)
      )
  }

  createExtendedProfile(){
    let data: ExtendedProfile = {
      email: "",
      phone: "",
      address: "",
      country: "",
      state: "",
      city: "",
    }

    this.settingsApi.createExtendedProfile(data)
      .then(
        (res: any) => console.log(res),
        (err: any) => console.log(err)
      )
  }

  createSubscription(){
    let data: Subscription = {
      subscription_type: "Individual",
      billing_frequency: "",
      number_users: 1,
      email: "school." + localStorage.getItem('school_id') + "@netrink.com",
      status: "",
    }

    this.settingsApi.createSubscription(data)
      .then(
        (res: any) => console.log(res),
        (err: any) => console.log(err)
      )
  }

  onAddressChange(address: any) {
    this.accountForm.controls.location.setValue(address.formatted_address);
    console.log(address);
  }

}

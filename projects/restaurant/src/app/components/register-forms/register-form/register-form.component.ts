import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as firebase from 'firebase/compat/app';

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
    private accountApi: AccountApiService,
    private adminApi: AdminApiService,
    private settingsApi: SettingsApiService,
  ) { }

  accountForm = new FormGroup({
    name: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    about: new FormControl('', Validators.required),
  })

  isSending: boolean = false;
  showPrompt: boolean = false;

  nameErrors: any;
  locErrors: any;
  abtErrors: any;

  ngOnInit(): void {
  }

  onSubmit(){
    let accountData: Account = {
      created_at: firebase.default.firestore.FieldValue.serverTimestamp(),
      name: this.accountForm.controls.name.value,
      location: this.accountForm.controls.location.value,
      about: this.accountForm.controls.about.value,
      created_by: localStorage.getItem('personal_id') as string,
    }

    this.isSending = true;

    this.accountApi.createAccount(accountData)
      .then(
        (res: any) => {
          console.log(res);

          localStorage.setItem('restaurant_id', res.id);
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

    console.log(this.accountForm.value);
  }

  createAccountUser(account: any){
    let userData: AccountUser = {
      user: {
        id: localStorage.getItem('personal_id') as string,
        name: sessionStorage.getItem('personal_name') as string,
      },
      access_level: "Admin",
      account: {
        id: localStorage.getItem('restaurant_id') as string,
        data: account,
      }
    }

    this.adminApi.createAccountUser(userData)
      .then(
        (res: any) => {
          console.log(res);
          sessionStorage.setItem('restaurant_account_user_id', res.id)
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
      customers_access: true,
      deliveries_access: true,
      kitchen_stock_access: true,
      menu_access: true,
      orders_access: true,
      payments_access: true,
      portal_access: true,
      roster_access: true,
      settings_access: true,
      staff_access: true,
      reservations_access: true,
      tables_access: true,
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

import { Component, OnInit, ViewChild } from '@angular/core';

import { PaystackOptions } from 'angular4-paystack';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { environment } from 'projects/restaurant/src/environments/environment';
import { SettingsApiService } from 'projects/restaurant/src/app/services/modules/settings-api/settings-api.service';

import { Subscription } from 'projects/restaurant/src/app/models/modules/settings/settings.model';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Subscription", url: "/home/settings/billing" },
  ];

  isSubscriptionLoading = false;
  isSubscriptionSaving = false;

  subscriptionData: any;

  subscriptionTypeValue = "";
  billingFrequencyValue = "";
  numberUsersValue = 0;

  selectedSubscription = '';
  selectedFrequency = '';
  usersTextBoxIncrement = 1;

  subscriptionSource = ["Individual", "Small Team", "Large Team", "Comprehensive"];
  frequencySource = ["Monthly", "Yearly", ""];
  numberUsersStep = 1;

  isFrequencyDisabled = false;
  isnumberUsersDisabled = false;

  isSubscriptionValid = true;
  isFrequencyValid = true;
  isNumberUsersValid = true;

  options: PaystackOptions = { email: "", amount: 0, ref: ""};

  ngOnInit(): void {
    this.getSubscription();
  }

  getSubscription(){
    this.isSubscriptionLoading = true;

    this.settingsApi.getSubscription()
      .then(
        (res: any) => {
          console.log(res);
          this.subscriptionData = res;

          this.subscriptionTypeValue = this.subscriptionData.data().subscription_type;
          this.billingFrequencyValue = this.subscriptionData.data().billing_frequency;
          this.numberUsersValue = this.subscriptionData.data().number_users;

          this.isSubscriptionLoading = false;
          this.setSubscription(this.subscriptionTypeValue);
        },
        (err: any) => {
          console.log(err);
          this.isSubscriptionLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateSubscription(){
    let data = {
      subscription_type: this.subscriptionTypeValue,
      billing_frequency: this.billingFrequencyValue,
      number_users: this.numberUsersValue,
    }

    this.settingsApi.updateSubscription(data)
      .then(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setSubscription(subscription: any){
    this.selectedSubscription = subscription;
    console.log(this.selectedSubscription);

    if (this.selectedSubscription == "Individual"){
      this.billingFrequencyValue = "";
      this.numberUsersValue = 1;
      this.isFrequencyDisabled = true;
      this.isnumberUsersDisabled = true;
    }
    else if (this.selectedSubscription == "Small Team"){
      this.numberUsersStep = 10;
      this.numberUsersValue = 10;
      this.isFrequencyDisabled = false;
      this.isnumberUsersDisabled = false;
    }
    else if (this.selectedSubscription == "Large Team"){
      this.numberUsersStep = 50;
      this.numberUsersValue = 50;
      this.isFrequencyDisabled = false;
      this.isnumberUsersDisabled = false;
    }
    else if (this.selectedSubscription == "Comprehensive"){
      this.billingFrequencyValue = "";
      this.numberUsersValue = 0;
      this.isFrequencyDisabled = true;
      this.isnumberUsersDisabled = true;
    }
  }

  setFrequency(event: any){
    this.selectedFrequency = event.target.value;
    console.log(this.selectedFrequency);
  }

  setOptions(){
    var plan;
    // TODO: set plan

    this.options = {
      email: `restaurant.${localStorage.getItem('restaurant_id')}@netrink.com`,
      amount: 200,
      plan: plan,
      ref: `${Math.ceil(Math.random() * 10e10)}`
    }
  }

  paymentInit() {
    console.log('Payment initialized');

    if ((this.subscriptionTypeValue == "Small Team" || this.subscriptionTypeValue == "Large Team") && this.billingFrequencyValue == ""){
      this.isFrequencyValid = false;
      return false;
    }
    else{
      this.isFrequencyValid = true;
    }

    if (this.subscriptionTypeValue == "Small Team" && (this.numberUsersValue % 10) != 0){
      this.isNumberUsersValid = false;
      return false;
    }
    else{
      this.isNumberUsersValid = true;
    }

    if (this.subscriptionTypeValue == "Large Team" && (this.numberUsersValue % 50) != 0){
      this.isNumberUsersValid = false;
      return false;
    }
    else{
      this.isNumberUsersValid = true;
    }

    this.setOptions();

    return true;
  }

  paymentDone(ref: any) {
    console.log('Payment done');
  }

  paymentCancel() {
    console.log('payment failed');
  }

}

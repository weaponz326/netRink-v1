import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { PaystackOptions } from 'angular4-paystack';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { environment } from 'projects/school/src/environments/environment';
import { SettingsApiService } from 'projects/school/src/app/services/modules/settings-api/settings-api.service';

import { Subscription } from 'projects/school/src/app/models/modules/settings/settings.model';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('paystackButtonElementReference', { read: ElementRef, static: false }) paystackButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Subscription", url: "/home/settings/billing" },
  ];

  // paystackPublicKey = environment.paystackPublicKey;
  paystackPublicKey = "";

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

  paystackOptions: PaystackOptions = { email: "", amount: 0, ref: ""};

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
          this.setOptions();
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

    this.setOptions();
  }

  setFrequency(event: any){
    this.selectedFrequency = event.target.value;
    console.log(this.selectedFrequency);

    if (this.selectedSubscription == "Small Team"){
      this.numberUsersStep = 10;
      this.numberUsersValue = 10;
    }
    else if (this.selectedSubscription == "Large Team"){
      this.numberUsersStep = 50;
      this.numberUsersValue = 50;
    }

    this.setOptions();
  }

  setOptions(){
    var plan;
    var quantity;

    if (this.subscriptionTypeValue == "Small Team"){
      if (this.billingFrequencyValue == "Monthly")
        plan = "PLN_c8d7gmxsxu46txm";
      else if (this.billingFrequencyValue == "Yearly")
        plan = "PLN_4f7s2k14b7avsqk";
    }
    else if (this.subscriptionTypeValue == "Large Team"){
      if (this.billingFrequencyValue == "Monthly")
        plan = "PLN_r6z7mitp4leqrsn";
      else if (this.billingFrequencyValue == "Yearly")
        plan = "PLN_vqyw66kl64t8xwq";
    }

    if (this.subscriptionTypeValue == "Small Team"){
      quantity = String(this.numberUsersValue / 10);
    }
    else if (this.subscriptionTypeValue == "Large Team"){
      quantity = String(this.numberUsersValue / 50);
    }

    this.paystackOptions = {
      email: `school.${localStorage.getItem('school_id')}@netrink.com`,
      amount: 200,
      plan: plan,
      quantity: quantity,
      currency: 'GHS',
      ref: `${Math.ceil(Math.random() * 10e10)}`
    }

    console.log(this.paystackOptions);
  }

  validateSubcriptionForm() {
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

    console.log("opening paystack!");
    this.paystackButton.nativeElement.click();
    return true;
  }

  paymentInit(){
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    console.log('Payment done');
  }

  paymentCancel() {
    console.log('payment failed');
  }

}

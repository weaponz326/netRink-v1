import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { Angular4PaystackModule } from 'angular4-paystack';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { BillingComponent } from './billing/billing.component';
import { BasicComponent } from './profile-content/basic/basic.component';
import { LogoComponent } from './profile-content/logo/logo.component';
import { LocationComponent } from './profile-content/location/location.component';
import { ContactComponent } from './profile-content/contact/contact.component';
import { PaymentsHistoryComponent } from './payments-history/payments-history.component';

import { environment } from 'projects/school/src/environments/environment';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    ProfileComponent,
    BillingComponent,
    BasicComponent,
    LogoComponent,
    LocationComponent,
    ContactComponent,
    PaymentsHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    GooglePlaceModule,
    Angular4PaystackModule.forRoot(environment.paystackLivePublicKey),
    ModuleUtilitiesModule,
  ]
})
export class SettingsModule { }

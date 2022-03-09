import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TermsPageComponent } from './terms-page.component';
import { AllTermsComponent } from '../../../components/modules/terms/all-terms/all-terms.component';
import { NewTermComponent } from '../../../components/modules/terms/new-term/new-term.component';
import { ViewTermComponent } from '../../../components/modules/terms/view-term/view-term.component';
import { DashboardComponent } from '../../../components/modules/terms/dashboard/dashboard.component';
import { SettingsComponent } from '../../../components/modules/terms/settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: TermsPageComponent,
    children: [
      { path: "", component: AllTermsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-terms", component: AllTermsComponent },
      { path: "new-term", component: NewTermComponent },
      { path: "view-term", component: ViewTermComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsPageRoutingModule { }

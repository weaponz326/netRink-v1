import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LegalitiesPageComponent } from './legalities-page.component';
import { TermsComponent } from '../../components/legalities/terms/terms.component';
import { PrivacyComponent } from '../../components/legalities/privacy/privacy.component';

const routes: Routes = [
  { 
    path: "", 
    component: LegalitiesPageComponent,
    children: [
      { path: "", component: TermsComponent },
      { path: "terms", component: TermsComponent },
      { path: "privacy", component: PrivacyComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalitiesPageRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionsPageComponent } from './sections-page.component';
import { AllSectionsComponent } from '../../../components/modules/sections/all-sections/all-sections.component';
import { ViewSectionComponent } from '../../../components/modules/sections/view-section/view-section.component';
import { DashboardComponent } from '../../../components/modules/sections/dashboard/dashboard.component';
import { SettingsComponent } from '../../../components/modules/sections/settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: SectionsPageComponent,
    children: [
      { path: "", component: SectionsPageComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-sections", component: AllSectionsComponent },
      { path: "view-section", component: ViewSectionComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsPageRoutingModule { }

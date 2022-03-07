import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentsPageComponent } from './parents-page.component';
import { AllParentsComponent } from '../../../components/modules/parents/all-parents/all-parents.component';
import { NewParentComponent } from '../../../components/modules/parents/new-parent/new-parent.component';
import { ViewParentComponent } from '../../../components/modules/parents/view-parent/view-parent.component';
import { DashboardComponent } from '../../../components/modules/parents/dashboard/dashboard.component';
import { SettingsComponent } from '../../../components/modules/parents/settings/settings.component';

const routes: Routes = [
  {
    path: "",
    component: ParentsPageComponent,
    children: [
      { path: "", component: AllParentsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-parents", component: AllParentsComponent },
      { path: "new-parent", component: NewParentComponent },
      { path: "view-parent", component: ViewParentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsPageRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassesPageComponent } from './classes-page.component';
import { AllClassesComponent } from '../../../components/modules/classes/all-classes/all-classes.component';
import { NewClassComponent } from '../../../components/modules/classes/new-class/new-class.component';
import { ViewClassComponent } from '../../../components/modules/classes/view-class/view-class.component';
import { DashboardComponent } from '../../../components/modules/classes/dashboard/dashboard.component';
import { SettingsComponent } from '../../../components/modules/classes/settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: ClassesPageComponent,
    children: [
      { path: "", component: AllClassesComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-classes", component: AllClassesComponent },
      { path: "new-class", component: NewClassComponent },
      { path: "view-class", component: ViewClassComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesPageRoutingModule { }

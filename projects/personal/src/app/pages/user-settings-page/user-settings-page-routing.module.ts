import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserSettingsPageComponent } from './user-settings-page.component';

const routes: Routes = [
  { path: "", component: UserSettingsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSettingsPageRoutingModule { }

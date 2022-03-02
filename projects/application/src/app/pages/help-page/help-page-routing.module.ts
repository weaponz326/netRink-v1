import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelpPageComponent } from './help-page.component';
import { HelpHomeComponent } from '../../components/help/help-home/help-home.component';
import { GettingStartedComponent } from '../../components/help/article-contents/getting-started/getting-started.component';
import { InfrastructureComponent } from '../../components/help/article-contents/infrastructure/infrastructure.component';
import { AddingUsersComponent } from '../../components/help/article-contents/adding-users/adding-users.component';


const routes: Routes = [
  { 
    path: "", 
    component: HelpPageComponent,
    children: [
      { path: "", component: HelpHomeComponent },
      { path: "articles/getting-started", component: GettingStartedComponent },
      { path: "articles/infrastructure", component: InfrastructureComponent },
      { path: "articles/adding-users", component: AddingUsersComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpPageRoutingModule { }

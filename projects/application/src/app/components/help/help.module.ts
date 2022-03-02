import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MainNavbarModule } from '../../components/main-navbar/main-navbar.module';

import { HelpHomeComponent } from './help-home/help-home.component';
import { ArticlesComponent } from './articles/articles.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { GettingStartedComponent } from './article-contents/getting-started/getting-started.component';
import { InfrastructureComponent } from './article-contents/infrastructure/infrastructure.component';
import { AddingUsersComponent } from './article-contents/adding-users/adding-users.component';



@NgModule({
  declarations: [
    HelpHomeComponent,
    ArticlesComponent,
    FaqComponent,
    ContactComponent,
    GettingStartedComponent,
    InfrastructureComponent,
    AddingUsersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MainNavbarModule
  ],
  exports: [
    // HelpHomeComponent,
    // ArticlesComponent,
    // FaqComponent,
    // ContactComponent,
    // GettingStartedComponent,
    // InfrastructureComponent,
    // AddingUsersComponent,
  ]
})
export class HelpModule { }

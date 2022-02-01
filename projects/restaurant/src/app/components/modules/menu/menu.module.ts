import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllMenuItemsComponent } from './all-menu-items/all-menu-items.component';
import { AddMenuItemComponent } from './add-menu-item/add-menu-item.component';
import { ViewMenuItemComponent } from './view-menu-item/view-menu-item.component';
import { MenuItemFormComponent } from './menu-item-form/menu-item-form.component';
import { AllMenuGroupsComponent } from './all-menu-groups/all-menu-groups.component';
import { NewMenuGroupComponent } from './new-menu-group/new-menu-group.component';
import { ViewMenuGroupComponent } from './view-menu-group/view-menu-group.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { EditMenuItemComponent } from './edit-menu-item/edit-menu-item.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllMenuItemsComponent,
    AddMenuItemComponent,
    ViewMenuItemComponent,
    MenuItemFormComponent,
    AllMenuGroupsComponent,
    NewMenuGroupComponent,
    ViewMenuGroupComponent,
    MenuItemsComponent,
    EditMenuItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class MenuModule { }

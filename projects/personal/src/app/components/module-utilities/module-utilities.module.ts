

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ModuleSidenavComponent } from './module-sidenav/module-sidenav.component';
import { ModuleTopnavComponent } from './module-topnav/module-topnav.component';
import { ConnectionToastComponent } from './connection-toast/connection-toast.component';
import { AccessToastComponent } from './access-toast/access-toast.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { ImageInputComponent } from './image-input/image-input.component';
import { BdayInputComponent } from './bday-input/bday-input.component';


@NgModule({
  declarations: [
    ModuleSidenavComponent,
    ModuleTopnavComponent,
    ConnectionToastComponent,
    AccessToastComponent,
    DeleteModalComponent,
    ImageInputComponent,
    BdayInputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    ModuleSidenavComponent,
    ModuleTopnavComponent,
    ConnectionToastComponent,
    AccessToastComponent,
    DeleteModalComponent,
    ImageInputComponent,
    BdayInputComponent,
  ]
})
export class ModuleUtilitiesModule { }

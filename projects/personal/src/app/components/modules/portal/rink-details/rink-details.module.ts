import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleUtilitiesModule } from '../../../module-utilities/module-utilities.module';

import { CalendarDetailsComponent } from './calendar-details/calendar-details.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';
import { BudgetDetailsComponent } from './budget-details/budget-details.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { TaskGroupDetailsComponent } from './task-group-details/task-group-details.component';
import { TaskItemDetailsComponent } from './task-item-details/task-item-details.component';


@NgModule({
  declarations: [    
    CalendarDetailsComponent,
    ScheduleDetailsComponent,
    BudgetDetailsComponent,
    NoteDetailsComponent,
    AccountDetailsComponent,
    TransactionDetailsComponent,
    TaskGroupDetailsComponent,
    TaskItemDetailsComponent,
  ],
  imports: [
    CommonModule,
    ModuleUtilitiesModule,
  ],
  exports: [
    CalendarDetailsComponent,
    ScheduleDetailsComponent,
    BudgetDetailsComponent,
    NoteDetailsComponent,
    AccountDetailsComponent,
    TransactionDetailsComponent,
    TaskGroupDetailsComponent,
    TaskItemDetailsComponent,
  ]
})
export class RinkDetailsModule { }

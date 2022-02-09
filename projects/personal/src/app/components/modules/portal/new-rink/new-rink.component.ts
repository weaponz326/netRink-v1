import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component';

import { SelectCalendarComponent } from '../../../select-windows/calendar-windows/select-calendar/select-calendar.component';
import { SelectScheduleComponent } from '../../../select-windows/calendar-windows/select-schedule/select-schedule.component';
import { SelectBudgetComponent } from '../../../select-windows/budget-windows/select-budget/select-budget.component';
import { SelectNoteComponent } from '../../../select-windows/notes-windows/select-note/select-note.component';
import { SelectAccountComponent } from '../../../select-windows/accounts-windows/select-account/select-account.component';
import { SelectTransactionComponent } from '../../../select-windows/accounts-windows/select-transaction/select-transaction.component';
import { SelectTaskGroupComponent } from '../../../select-windows/tasks-windows/select-task-group/select-task-group.component';
import { SelectTaskItemComponent } from '../../../select-windows/tasks-windows/select-task-item/select-task-item.component';

import { UserApiService } from 'projects/personal/src/app/services/user/user-api/user-api.service';
import { PortalApiService } from 'projects/personal/src/app/services/modules/portal-api/portal-api.service';

import { User } from 'projects/personal/src/app/models/user/user.model';
import { Rink } from 'projects/personal/src/app/models/modules/portal/portal.model';


@Component({
  selector: 'app-new-rink',
  templateUrl: './new-rink.component.html',
  styleUrls: ['./new-rink.component.scss']
})
export class NewRinkComponent implements OnInit {

  constructor(
    private router: Router,
    private userApi: UserApiService,
    private portalApi: PortalApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  @ViewChild('selectCalendarComponentReference', { read: SelectCalendarComponent, static: false }) selectCalendar!: SelectCalendarComponent;
  @ViewChild('selectScheduleComponentReference', { read: SelectScheduleComponent, static: false }) selectSchedule!: SelectScheduleComponent;
  @ViewChild('selectBudgetComponentReference', { read: SelectBudgetComponent, static: false }) selectBudget!: SelectBudgetComponent;
  @ViewChild('selectNoteComponentReference', { read: SelectNoteComponent, static: false }) selectNote!: SelectNoteComponent;
  @ViewChild('selectAccountComponentReference', { read: SelectAccountComponent, static: false }) selectAccount!: SelectAccountComponent;
  @ViewChild('selectTransactionComponentReference', { read: SelectTransactionComponent, static: false }) selectTransaction!: SelectTransactionComponent;
  @ViewChild('selectTaskGroupComponentReference', { read: SelectTaskGroupComponent, static: false }) selectTaskGroup!: SelectTaskGroupComponent;
  @ViewChild('selectTaskItemComponentReference', { read: SelectTaskItemComponent, static: false }) selectTaskItem!: SelectTaskItemComponent;

  navHeading: any[] = [
    { text: "New Rink", url: "/home/portal/search" },
    { text: "Send Rink", url: "/home/portal/search/new-rink" },
  ];

  rinkForm: FormGroup = new FormGroup({});
  senderData: User = {first_name: "", last_name: "", location: "", about: ""};
  recipientData: User = {first_name: "", last_name: "", location: "", about: ""};
  rinkFormData: Rink = {uid: "", sender: this.senderData, recipient: this.recipientData, rink_date: new Date, rink_type: "", rink_source: "", comment: "" };

  selectedSourceId: any;
  typeSource: any[] = ['Calendar', 'Schedule', 'Budget', 'Note', 'Account', 'Transaction', 'Task Group', 'Task Item'];

  isRinkSending = false;

  ngOnInit(): void {
    this.initRinkForm();
  }

  ngAfterViewInit(): void {
    this.getUserDetail()
    this.getSearchDetail();
  }

  initRinkForm(){
    this.rinkForm = new FormGroup({
      recipientName: new FormControl(''),
      recipientLocation: new FormControl(''),
      rinkType: new FormControl('Calendar'),
      rinkSource: new FormControl(''),
      comment: new FormControl('')
    })
  }

  getUserDetail(){
    this.userApi.getUser()
      .then(
        (res: any) => {
          console.log(res);
          this.senderData = res;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getSearchDetail(){
    this.portalApi.getSearchDetail(String(sessionStorage.getItem('restaurantSearchUser')))
      .then(
        (res: any) => {
          console.log(res);

          this.recipientData = res;

          this.rinkForm.controls.recipientName.setValue(this.recipientData.first_name + " " + this.recipientData.last_name);
          this.rinkForm.controls.recipientLocation.setValue(this.recipientData.location);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  createRink(){
    let data = {
      uid: "",
      sender: this.senderData,
      recipient: this.recipientData,
      rink_type: this.rinkForm.controls.rinkType.value,
      rink_source: this.rinkForm.controls.rinkSource.value,
      comment: this.rinkForm.controls.comment.value
    }

    console.log(data);
    this.isRinkSending = true;

    this.portalApi.createRink(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isRinkSending = false;

          sessionStorage.setItem('restaurant_rink_id', res.data.uid);
          this.router.navigateByUrl('/home/portal/view-rink');
        },
        err => {
          console.log(err);
          this.isRinkSending = false;
          this.connectionToast.openToast();
        }
      )
  }

  onTypeSelected(){
    console.log("why did u change the type?");
    this.rinkForm.controls.rinkSource.setValue("");
  }

  openSourceWindow(){
    let type = this.rinkForm.controls.rinkType.value;
    console.log("You are opening a " + type + " rink type")

    if (type == "Calendar")
      this.selectCalendar.openModal();
    else if (type == "Schedule")
      this.selectSchedule.openModal();
    else if (type == "Budget")
      this.selectBudget.openModal();
    else if (type == "Note")
      this.selectNote.openModal();
    else if (type == "Account")
      this.selectAccount.openModal();
    else if (type == "Transaction")
      this.selectTransaction.openModal();
    else if (type == "Task Group")
      this.selectTaskGroup.openModal();
    else if (type == "Task Item")
      this.selectTaskItem.openModal();
  }

  onSourceSelected(sourceData: any){
    console.log(sourceData);
    let type = this.rinkForm.controls.rinkType.value;
    this.selectedSourceId = sourceData.id;

    if (type == "Calendar")
      this.rinkForm.controls.rinkSource.setValue(sourceData.calendar_name);
    else if (type == "Schedule")
      this.rinkForm.controls.rinkSource.setValue(sourceData.schedule_name);
    else if (type == "Budget")
      this.rinkForm.controls.rinkSource.setValue(sourceData.budget_name);
    else if (type == "Note")
      this.rinkForm.controls.rinkSource.setValue(sourceData.subject);
    else if (type == "Account")
      this.rinkForm.controls.rinkSource.setValue(sourceData.account_name);
    else if (type == "Transaction")
      this.rinkForm.controls.rinkSource.setValue(sourceData.description);
    else if (type == "Task Group")
      this.rinkForm.controls.rinkSource.setValue(sourceData.task_group);
    else if (type == "Task Item")
      this.rinkForm.controls.rinkSource.setValue(sourceData.item_description);
  }

}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { AccountApiService } from 'projects/school/src/app/services/account-api/account-api.service';
import { PortalApiService } from 'projects/school/src/app/services/modules/portal-api/portal-api.service';

import { Account } from 'projects/school/src/app/models/account/account.model';
import { Rink } from 'projects/school/src/app/models/modules/portal/portal.model';


@Component({
  selector: 'app-new-rink',
  templateUrl: './new-rink.component.html',
  styleUrls: ['./new-rink.component.scss']
})
export class NewRinkComponent implements OnInit {

  constructor(
    private router: Router,
    private accountApi: AccountApiService,
    private portalApi: PortalApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Rink", url: "/home/portal/search" },
    { text: "Send Rink", url: "/home/portal/search/new-rink" },
  ];

  rinkForm: FormGroup = new FormGroup({});
  senderData: any;
  recipientData: any;

  selectedSourceId: any;
  typeSource: any[] = [
  ];

  isRinkSending = false;

  ngOnInit(): void {
    this.initRinkForm();
  }

  ngAfterViewInit(): void {
    this.getSenderDetail()
    this.getRecipientDetail();
  }

  initRinkForm(){
    this.rinkForm = new FormGroup({
      recipientName: new FormControl({valaue: "", disabled: true}),
      recipientLocation: new FormControl({valaue: "", disabled: true}),
      rinkType: new FormControl('Customer'),
      rinkSource: new FormControl({value: "", disabled: true}),
      comment: new FormControl('')
    })
  }

  getSenderDetail(){
    this.accountApi.getAccount()
      .then(
        (res: any) => {
          console.log(res);
          this.senderData = res.data();
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getRecipientDetail(){
    this.portalApi.getSearchDetail(String(sessionStorage.getItem('schoolSearchAccount')))
      .then(
        (res: any) => {
          console.log(res);
          this.recipientData = res.data();

          this.rinkForm.controls.recipientName.setValue(this.recipientData.name);
          this.rinkForm.controls.recipientLocation.setValue(this.recipientData.location);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  createRink(){
    let data: Rink = {
      created_at: serverTimestamp(),
      rink_type: this.rinkForm.controls.rinkType.value,
      rink_source: this.selectedSourceId,
      comment: this.rinkForm.controls.comment.value,
      sender: {
        id: localStorage.getItem('school_id') as string,
        data: this.senderData,
      },
      recipient: {
        id: sessionStorage.getItem('schoolSearchAccount') as string,
        data: this.recipientData
      }
    }

    console.log(data);
    this.isRinkSending = true;

    this.portalApi.createRink(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isRinkSending = false;

          sessionStorage.setItem('school_rink_id', res.id);
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

  }

  onSourceSelected(sourceData: any){
    console.log(sourceData);
    let type = this.rinkForm.controls.rinkType.value;
    this.selectedSourceId = sourceData.id;

  }

}

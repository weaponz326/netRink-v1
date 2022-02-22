import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';

import { Roster } from 'projects/restaurant/src/app/models/modules/roster/roster.model';


@Component({
  selector: 'app-new-roster',
  templateUrl: './new-roster.component.html',
  styleUrls: ['./new-roster.component.scss']
})
export class NewRosterComponent implements OnInit {

  constructor(
    private router: Router,
    private rosterApi: RosterApiService
  ) { }

  @ViewChild('newButtonElementReference', { read: ElementRef, static: false }) newButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  rosterForm: FormGroup = new FormGroup({});

  isRosterSaving = false;

  ngOnInit(): void {
    this.initRosterForm();
  }

  openModal(){
    this.newButton.nativeElement.click();
  }

  initRosterForm(){
    this.rosterForm = new FormGroup({
      rosterCode: new FormControl(''),
      rosterName: new FormControl(''),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
    })
  }

  postRoster(){
    let data: Roster = {
      created_at: serverTimestamp(),
      account: localStorage.getItem('restaurant_id') as string,
      roster_code: this.rosterForm.controls.rosterCode.value,
      roster_name: this.rosterForm.controls.rosterName.value,
      from_date: this.rosterForm.controls.fromDate.value,
      to_date: this.rosterForm.controls.toDate.value,
    }

    this.isRosterSaving = true;

    this.rosterApi.createRoster(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            sessionStorage.setItem('restaurant_roster_id', res.id);
            this.dismissButton.nativeElement.click();
            this.router.navigateByUrl('/home/roster/view-roster');
            this.isRosterSaving = false;
          }
        },
        (err: any) => {
          console.log(err);
            this.isRosterSaving = false;
            this.connectionToast.openToast();
        }
      )

    console.log(data);
  }

}

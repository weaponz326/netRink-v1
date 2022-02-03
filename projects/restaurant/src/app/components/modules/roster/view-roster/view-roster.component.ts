import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';

import { ShiftsComponent } from '../shifts/shifts.component';
import { RosterSheetComponent } from '../roster-sheet/roster-sheet.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'


@Component({
  selector: 'app-view-roster',
  templateUrl: './view-roster.component.html',
  styleUrls: ['./view-roster.component.scss']
})
export class ViewRosterComponent implements OnInit {

  constructor(
    private router: Router,
    private rosterApi: RosterApiService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;
  @ViewChild('rosterSheetComponentReference', { read: RosterSheetComponent, static: false }) rosterSheet!: RosterSheetComponent;
  @ViewChild('shiftsComponentReference', { read: ShiftsComponent, static: false }) shifts!: ShiftsComponent;

  navHeading: any[] = [
    { text: "All Roster", url: "/home/roster/all-roster" },
    { text: "View Roster", url: "/home/roster/view-roster" },
  ];

  rosterForm: FormGroup = new FormGroup({});

  isRosterSaving: boolean = false;
  isRosterDeleting: boolean = false;

  ngOnInit(): void {
    this.initRosterForm();
  }

  ngAfterViewInit(): void {
    this.getSingleRoster();
  }

  initRosterForm(){
    this.rosterForm = new FormGroup({
      rosterCode: new FormControl(''),
      rosterName: new FormControl(''),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
    })
  }

  getSingleRoster(){
    this.rosterApi.getSingleRoster()
      .subscribe(
        res => {
          console.log(res);

          this.rosterForm.controls.rosterCode.setValue(res.roster_code);
          this.rosterForm.controls.rosterName.setValue(res.roster_name);
          this.rosterForm.controls.fromDate.setValue(res.from_date);
          this.rosterForm.controls.toDate.setValue(res.to_date);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  putRoster(){
    let rosterData = {
      account: localStorage.getItem('restaurant_id'),
      roster_name: this.rosterForm.controls.rosterName.value,
      roster_code: this.rosterForm.controls.rosterCode.value,
      from_date: this.rosterForm.controls.fromDate.value,
      to_date: this.rosterForm.controls.toDate.value,
    }

    this.rosterApi.putRoster(rosterData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )

    console.log(rosterData);

    // this.rosterSheet.postSheetData();
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteOrder(){
    this.isRosterDeleting = true;

    this.rosterApi.deleteRoster()
      .subscribe(
        res => {
          console.log(res);

          this.router.navigateByUrl('/home/roster/all-roster');
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
  }

}

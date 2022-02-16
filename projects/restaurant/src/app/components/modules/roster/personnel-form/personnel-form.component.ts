import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { SelectStaffComponent } from '../../../select-windows/staff-windows/select-staff/select-staff.component';

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';


@Component({
  selector: 'app-personnel-form',
  templateUrl: './personnel-form.component.html',
  styleUrls: ['./personnel-form.component.scss']
})
export class PersonnelFormComponent implements OnInit {

  constructor(private rosterApi: RosterApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('selectStaffComponentReference', { read: SelectStaffComponent, static: false }) selectStaff!: SelectStaffComponent;

  personnelForm: FormGroup = new FormGroup({});

  batchSource: any[] = [];

  selectedStaffId: any;

  ngOnInit(): void {
    this.initPersonnelForm();
  }

  ngAfterViewInit(): void {
    this.getBatches();
  }

  initPersonnelForm(){
    this.personnelForm = new FormGroup({
      personnelCode: new FormControl(''),
      personnelName: new FormControl(''),
      batchSymbol: new FormControl(''),
    })
  }

  getBatches(){
    this.rosterApi.getRosterBatch()
      .then(
        (res: any) => {
          console.log(res);        
          this.batchSource = res.docs;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  onStaffSelected(staffData: any){
    console.log(staffData);

    this.selectedStaffId = staffData.id;
    this.personnelForm.controls.personnelCode.setValue(staffData.data().staff_code);
    this.personnelForm.controls.personnelName.setValue(staffData.data().first_name + " " + staffData.data().first_name);
    this.personnelForm.controls.batchSymbol.setValue(staffData.data().batch_symbol);
  }

  openStaffWindow(){
    console.log("You are opening select staff window")
    this.selectStaff.openModal();
  }

}

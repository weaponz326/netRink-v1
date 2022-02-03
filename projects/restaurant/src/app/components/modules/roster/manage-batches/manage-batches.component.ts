import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';

import { ManagePersonnelComponent } from '../manage-personnel/manage-personnel.component';
import { AddBatchComponent } from '../add-batch/add-batch.component'
import { EditBatchComponent } from '../edit-batch/edit-batch.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'


@Component({
  selector: 'app-manage-batches',
  templateUrl: './manage-batches.component.html',
  styleUrls: ['./manage-batches.component.scss']
})
export class ManageBatchesComponent implements OnInit {

  constructor(
    private router: Router,
    private rosterApi: RosterApiService
  ) { }

  @ViewChild('managePersonnelComponentReference', { read: ManagePersonnelComponent, static: false }) managePersonnel!: ManagePersonnelComponent;
  @ViewChild('addBatchComponentReference', { read: AddBatchComponent, static: false }) addBatch!: AddBatchComponent;
  @ViewChild('editBatchComponentReference', { read: EditBatchComponent, static: false }) editBatch!: EditBatchComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Roster", url: "/home/roster/all-roster" },
    { text: "View Roster", url: "/home/roster/view-roster" },
    { text: "Manage Batches", url: "/home/roster/manage-batches" },
  ];

  rosterForm: FormGroup = new FormGroup({});

  batchesGridData: any[] = [];

  deleteId = "";
  deleteIndex = 0;

  ngOnInit(): void {
    this.initRosterForm();
  }

  ngAfterViewInit(): void {
    this.getSingleRoster();
    this.getBatches();
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
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  // --------------------------------------------------------------------------------------
  // grid

  getBatches(){
    this.rosterApi.getBatches()
      .subscribe(
        res => {
          console.log(res);
          this.batchesGridData = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  postBatch(data: any){
    console.log(data);

    this.rosterApi.postBatch(data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.batchesGridData.push(res);
            this.addBatch.resetForm();
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  putBatch(data: any){
    console.log(data);

    this.rosterApi.putBatch(data.id, data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.batchesGridData[data.index] = res;
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteBatch(){
    this.rosterApi.deleteBatch(this.deleteId)
      .subscribe(
        res => {
          console.log(res);
          this.batchesGridData.splice(this.deleteIndex, 1);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditBatch(index: any){
    console.log(index);
    this.editBatch.openModal(index, this.batchesGridData[index]);
  }

  confirmDelete(e: any){
    this.deleteIndex = e.index;
    this.deleteId = e.id;

    this.deleteModal.openModal();
  }

  onPrint(){
    console.log("lets start printing...");
  }

}

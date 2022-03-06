import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { ManagePersonnelComponent } from '../manage-personnel/manage-personnel.component';
import { AddBatchComponent } from '../add-batch/add-batch.component'
import { EditBatchComponent } from '../edit-batch/edit-batch.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';


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
  isFetchingGridData: boolean = false;

  deleteId: any;

  ngOnInit(): void {
    this.initRosterForm();

    this.getRoster();
    this.getRosterBatch();
  }

  initRosterForm(){
    this.rosterForm = new FormGroup({
      rosterCode: new FormControl({value: "", disabled: true}),
      rosterName: new FormControl({value: "", disabled: true}),
    })
  }

  getRoster(){
    this.rosterApi.getRoster()
      .then(
        (res: any) => {
          console.log(res);

          this.rosterForm.controls.rosterCode.setValue(res.data().roster_code);
          this.rosterForm.controls.rosterName.setValue(res.data().roster_name);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  // --------------------------------------------------------------------------------------
  // grid

  getRosterBatch(){
    this.isFetchingGridData = true;

    this.rosterApi.getRosterBatch()
      .then(
        (res: any) => {
          console.log(res);
          this.batchesGridData = res.docs
          this.isFetchingGridData = false;
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  createBatch(data: any){
    console.log(data);
    this.addBatch.isSaving = true;

    this.rosterApi.createBatch(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.getRosterBatch();
            this.addBatch.isSaving = false;
            this.addBatch.dismissButton.nativeElement.click();
            this.addBatch.resetForm();
          }
        },
        err => {
          console.log(err);
          this.addBatch.isSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateBatch(data: any){
    console.log(data);
    this.editBatch.isSaving = true;

    this.rosterApi.updateBatch(data.id, data.batch)
      .then(
        (res: any) => {
          console.log(res);

          this.getRosterBatch();
          this.editBatch.isSaving = false;
          this.editBatch.dismissButton.nativeElement.click();
        },
        (err: any) => {
          console.log(err);
          this.editBatch.isSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  deleteBatch(){
    this.rosterApi.deleteBatch(this.deleteId)
      .then(
        (res: any) => {
          console.log(res);
          this.getRosterBatch();
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditBatch(data: any){
    console.log(data);
    this.editBatch.openModal(data);
  }

  confirmDelete(id: any){
    this.deleteId = id;
    this.deleteModal.openModal();
  }

  onPrint(){
    console.log("lets start printing...");
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';

import { AddPersonnelComponent } from '../add-personnel/add-personnel.component'
import { EditPersonnelComponent } from '../edit-personnel/edit-personnel.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'


@Component({
  selector: 'app-manage-personnel',
  templateUrl: './manage-personnel.component.html',
  styleUrls: ['./manage-personnel.component.scss']
})
export class ManagePersonnelComponent implements OnInit {

  constructor(
    private router: Router,
    private rosterApi: RosterApiService
  ) { }

  @ViewChild('addPersonnelComponentReference', { read: AddPersonnelComponent, static: false }) addPersonnel!: AddPersonnelComponent;
  @ViewChild('editPersonnelComponentReference', { read: EditPersonnelComponent, static: false }) editPersonnel!: EditPersonnelComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  personnelGridData: any[] = [];

  deleteId = "";
  deleteIndex = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getPersonnel();
  }

  getPersonnel(){
    this.rosterApi.getShiftPersonnel()
      .subscribe(
        res => {
          console.log(res);
          this.personnelGridData = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  postPersonnel(data: any){
    console.log(data);

    this.rosterApi.postShiftPersonnel(data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.personnelGridData.push(res);
            this.addPersonnel.resetForm();
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  putPersonnel(data: any){
    console.log(data);

    this.rosterApi.putShiftPersonnel(data.id, data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.personnelGridData[data.index] = res;
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deletePersonnel(){
    this.rosterApi.deleteShiftPersonnel(this.deleteId)
      .subscribe(
        res => {
          console.log(res);
          this.personnelGridData.splice(this.deleteIndex, 1);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditPersonnel(index: any){
    console.log(index);
    this.editPersonnel.openModal(index, this.personnelGridData[index]);
  }

  confirmDelete(e: any){
    this.deleteIndex = e.index;
    this.deleteId = e.id;

    this.deleteModal.openModal();
  }

}

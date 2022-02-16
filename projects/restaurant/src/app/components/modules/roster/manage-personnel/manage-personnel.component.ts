import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { AddPersonnelComponent } from '../add-personnel/add-personnel.component'
import { EditPersonnelComponent } from '../edit-personnel/edit-personnel.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';


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
    this.getRosterPersonnel();
  }

  getRosterPersonnel(){
    this.rosterApi.getRosterPersonnel()
      .then(
        (res: any) => {
          console.log(res);
          this.personnelGridData = res.docs;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  createPersonnel(data: any){
    console.log(data);

    this.rosterApi.createPersonnel(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.personnelGridData.push(res);
            this.addPersonnel.resetForm();
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updatePersonnel(data: any){
    console.log(data);

    this.rosterApi.updatePersonnel(data.id, data.personnel)
      .then(
        (res: any) => {
          console.log(res);
          this.personnelGridData[data.index] = data.personnel;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deletePersonnel(){
    this.rosterApi.deletePersonnel(this.deleteId)
      .then(
        (res: any) => {
          console.log(res);
          this.personnelGridData.splice(this.deleteIndex, 1);
        },
        (err: any) => {
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

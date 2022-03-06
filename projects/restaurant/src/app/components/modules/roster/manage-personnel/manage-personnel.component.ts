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
  isFetchingGridData = false;

  deleteId = "";

  ngOnInit(): void {
    this.getRosterPersonnel();
  }

  getRosterPersonnel(){
    this.isFetchingGridData = true;

    this.rosterApi.getRosterPersonnel()
      .then(
        (res: any) => {
          console.log(res);
          this.personnelGridData = res.docs;
          this.isFetchingGridData = false;
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  createPersonnel(data: any){
    console.log(data);
    this.addPersonnel.isSaving = true;

    this.rosterApi.createPersonnel(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.getRosterPersonnel();
            this.addPersonnel.isSaving = false;
            this.addPersonnel.dismissButton.nativeElement.ckick();
            this.addPersonnel.resetForm();
          }
        },
        (err: any) => {
          console.log(err);
            this.addPersonnel.isSaving = false;
            this.connectionToast.openToast();
        }
      )
  }

  updatePersonnel(data: any){
    console.log(data);
    this.editPersonnel.isSaving = true;

    this.rosterApi.updatePersonnel(data.id, data.personnel)
      .then(
        (res: any) => {
          console.log(res);
          
          this.getRosterPersonnel();
          this.editPersonnel.isSaving = false;
          this.editPersonnel.dismissButton.nativeElement.ckick();
        },
        (err: any) => {
          console.log(err);
          this.editPersonnel.isSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  deletePersonnel(){
    this.rosterApi.deletePersonnel(this.deleteId)
      .then(
        (res: any) => {
          console.log(res);        
          this.getRosterPersonnel();
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditPersonnel(data: any){
    console.log(data);
    this.editPersonnel.openModal(data);
  }

  confirmDelete(id: any){
    this.deleteId = id;
    this.deleteModal.openModal();
  }

}

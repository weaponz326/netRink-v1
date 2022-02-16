import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { AddShiftComponent } from '../add-shift/add-shift.component'
import { EditShiftComponent } from '../edit-shift/edit-shift.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';


@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss']
})
export class ShiftsComponent implements OnInit {

  constructor(
    private rosterApi: RosterApiService
  ) { }

  @ViewChild('addShiftComponentReference', { read: AddShiftComponent, static: false }) addShift!: AddShiftComponent;
  @ViewChild('editShiftComponentReference', { read: EditShiftComponent, static: false }) editShift!: EditShiftComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  shiftsGridData: any[] = [];

  deleteId = "";
  deleteIndex = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getRosterShift();
  }

  getRosterShift(){
    this.rosterApi.getRosterShift()
      .then(
        (res: any) => {
          console.log(res);
          this.shiftsGridData = res.docs;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  createShift(data: any){
    console.log(data);

    this.rosterApi.createShift(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.shiftsGridData.push(data);
            this.addShift.resetForm();
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updateShift(data: any){
    console.log(data);

    this.rosterApi.updateShift(data.id, data.shift)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.shiftsGridData[data.index] = data.shift;
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteShift(){
    console.log(this.deleteId);

    this.rosterApi.deleteShift(this.deleteId)
      .then(
        (res: any) => {
          console.log(res);
          this.shiftsGridData.splice(this.deleteIndex, 1);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditShift(index: any){
    console.log(index);
    this.editShift.openModal(index, this.shiftsGridData[index]);
  }

  confirmDelete(index: any, id: any){
    this.deleteIndex = index;
    this.deleteId = id;

    this.deleteModal.openModal();
  }

}

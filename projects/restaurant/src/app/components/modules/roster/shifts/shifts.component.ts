import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';

import { AddShiftComponent } from '../add-shift/add-shift.component'
import { EditShiftComponent } from '../edit-shift/edit-shift.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'


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
    this.getShifts();
  }

  getShifts(){
    this.rosterApi.getShifts()
      .subscribe(
        res => {
          console.log(res);
          this.shiftsGridData = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  postShift(data: any){
    console.log(data);

    this.rosterApi.postShift(data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.shiftsGridData.push(res);
            this.addShift.resetForm();
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  putShift(data: any){
    console.log(data);

    this.rosterApi.putShift(data.id, data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.shiftsGridData[data.index] = res;
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteShift(){
    console.log(this.deleteId);

    this.rosterApi.deleteShift(this.deleteId)
      .subscribe(
        res => {
          console.log(res);
          this.shiftsGridData.splice(this.deleteIndex, 1);
        },
        err => {
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

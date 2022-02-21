import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Shift } from 'projects/restaurant/src/app/models/modules/roster/roster.model';


@Component({
  selector: 'app-edit-shift',
  templateUrl: './edit-shift.component.html',
  styleUrls: ['./edit-shift.component.scss']
})
export class EditShiftComponent implements OnInit {

  constructor() { }

  @Output() saveShiftEvent = new EventEmitter<any>();

  @ViewChild('editButtonElementReference', { read: ElementRef, static: false }) editButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  shiftForm: FormGroup = new FormGroup({});
  shiftData: any;

  isSaving = false;

  ngOnInit(): void {
    this.initShiftForm();
  }

  initShiftForm(){
    this.shiftForm = new FormGroup({
      shiftName: new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl(''),
    })
  }

  openModal(data: any){
    this.shiftData = data;

    this.shiftForm.controls.shiftName.setValue(data.data().shift_name);
    this.shiftForm.controls.startTime.setValue(data.data().start_time);
    this.shiftForm.controls.endTime.setValue(data.data().end_time);

    this.editButton.nativeElement.click();
  }

  saveShift(){
    let data: Shift = {
      created_at: this.shiftData.data().created_at,
      roster: sessionStorage.getItem('restaurant_roster_id') as string,
      shift_name: this.shiftForm.controls.shiftName.value,
      start_time: this.shiftForm.controls.startTime.value,
      end_time: this.shiftForm.controls.endTime.value,
    }

    let shift = {
      id: this.shiftData.id,
      data: data
    }

    this.saveShiftEvent.emit(shift);
  }


}

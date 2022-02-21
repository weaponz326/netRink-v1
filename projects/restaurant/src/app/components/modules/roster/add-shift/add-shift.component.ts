import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import * as firebase from 'firebase/compat/app';

import { Shift } from 'projects/restaurant/src/app/models/modules/roster/roster.model';


@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.scss']
})
export class AddShiftComponent implements OnInit {

  constructor() { }

  @Output() saveShiftEvent = new EventEmitter<any>();

  @ViewChild('addButtonElementReference', { read: ElementRef, static: false }) addButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  shiftForm: FormGroup = new FormGroup({});

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

  openModal(){
    this.addButton.nativeElement.click();
  }

  saveShift(){
    let data: Shift = {
      created_at: firebase.default.firestore.FieldValue.serverTimestamp(),
      roster: sessionStorage.getItem('restaurant_roster_id') as string,
      shift_name: this.shiftForm.controls.shiftName.value,
      start_time: this.shiftForm.controls.startTime.value,
      end_time: this.shiftForm.controls.endTime.value,
    }

    this.saveShiftEvent.emit(data);
  }

  resetForm(){
    this.shiftForm.controls.shiftName.setValue('');
    this.shiftForm.controls.startTime.setValue('');
    this.shiftForm.controls.endTime.setValue('');
  }

}

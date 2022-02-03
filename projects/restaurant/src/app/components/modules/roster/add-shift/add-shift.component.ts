import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.scss']
})
export class AddShiftComponent implements OnInit {

  constructor() { }

  @Output() saveShiftEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  shiftForm: FormGroup = new FormGroup({});

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
    this.buttonElement.nativeElement.click();
  }

  saveShift(){
    let data = {
      roster: sessionStorage.getItem('restaurant_roster_id'),
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

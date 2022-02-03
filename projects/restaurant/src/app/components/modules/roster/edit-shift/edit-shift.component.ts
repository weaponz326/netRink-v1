import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-shift',
  templateUrl: './edit-shift.component.html',
  styleUrls: ['./edit-shift.component.scss']
})
export class EditShiftComponent implements OnInit {

  constructor() { }

  @Output() saveShiftEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  shiftForm: FormGroup = new FormGroup({});

  selectedIndex: any = 0;
  selectedId: any = "";

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

  openModal(index: any, data: any){
    this.selectedIndex = index;
    this.selectedId = data.id;

    this.shiftForm.controls.shiftName.setValue(data.shift_name);
    this.shiftForm.controls.startTime.setValue(data.start_time);
    this.shiftForm.controls.endTime.setValue(data.end_time);

    this.buttonElement.nativeElement.click();
  }

  saveShift(){
    let data = {
      index: this.selectedIndex,
      id: this.selectedId,

      roster: sessionStorage.getItem('restaurant_roster_id'),
      shift_name: this.shiftForm.controls.shiftName.value,
      start_time: this.shiftForm.controls.startTime.value,
      end_time: this.shiftForm.controls.endTime.value,
    }

    this.saveShiftEvent.emit(data);
  }


}

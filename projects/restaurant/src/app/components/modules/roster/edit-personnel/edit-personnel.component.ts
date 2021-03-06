import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { PersonnelFormComponent } from '../personnel-form/personnel-form.component';

import { Personnel } from 'projects/restaurant/src/app/models/modules/roster/roster.model';


@Component({
  selector: 'app-edit-personnel',
  templateUrl: './edit-personnel.component.html',
  styleUrls: ['./edit-personnel.component.scss']
})
export class EditPersonnelComponent implements OnInit {

  @Output() savePersonnelEvent = new EventEmitter<any>();
  @Output() deletePersonnelEvent = new EventEmitter<any>();

  @ViewChild('editButtonElementReference', { read: ElementRef, static: false }) editButton!: ElementRef;
  @ViewChild('dismssButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('personnelFormComponentReference', { read: PersonnelFormComponent, static: false }) personnelForm!: PersonnelFormComponent;

  personnelData: any

  isSaving = false;

  ngOnInit(): void {
  }

  openModal(data: any){
    this.personnelData = data;

    this.personnelForm.personnelForm.controls.personnelCode.setValue(data.data().personnel_code);
    this.personnelForm.personnelForm.controls.personnelName.setValue(data.data().personnel_name);

    this.personnelForm.getBatches(data.data().batch_symbol);

    this.editButton.nativeElement.click();
  }

  savePersonnel(){
    let data = {
      batch_symbol: this.personnelForm.personnelForm.controls.symbol.value,
      staff: {
        id: this.personnelForm.selectedStaffId,
        staff_code: this.personnelForm.personnelForm.controls.personnelCode.value,
        staff_name: this.personnelForm.personnelForm.controls.personnelName.value,
      }
    }

    let personnel = {
      id: this.personnelData.id,
      data: data
    }

    this.savePersonnelEvent.emit(personnel);
  }

}

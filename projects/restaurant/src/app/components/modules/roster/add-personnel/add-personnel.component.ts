import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { PersonnelFormComponent } from '../personnel-form/personnel-form.component';

import { Personnel } from 'projects/restaurant/src/app/models/modules/roster/roster.model';


@Component({
  selector: 'app-add-personnel',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.scss']
})
export class AddPersonnelComponent implements OnInit {

  constructor() { }

  @Output() savePersonnelEvent = new EventEmitter<any>();

  @ViewChild('addButtonElementReference', { read: ElementRef, static: false }) addButton!: ElementRef;
  @ViewChild('dismssButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('personnelFormComponentReference', { read: PersonnelFormComponent, static: false }) personnelForm!: PersonnelFormComponent;

  isSaving = false;

  ngOnInit(): void {
  }

  openModal(){
    this.addButton.nativeElement.click();
    this.personnelForm.getBatches("");
  }

  savePersonnel(){
    let data: Personnel = {
      roster: sessionStorage.getItem('restaurant_roster_id') as string,      
      batch_symbol: this.personnelForm.personnelForm.controls.symbol.value,
      staff: {
        id: this.personnelForm.selectedStaffId,
        staff_code: this.personnelForm.personnelForm.controls.personnelCode.value,
        staff_name: this.personnelForm.personnelForm.controls.personnelName.value,
      }
    }
    this.savePersonnelEvent.emit(data);
  }

  resetForm(){
    this.personnelForm.personnelForm.controls.personnelCode.setValue('');
    this.personnelForm.personnelForm.controls.personnelName.setValue('');
    this.personnelForm.personnelForm.controls.batch.setValue('');
  }

}

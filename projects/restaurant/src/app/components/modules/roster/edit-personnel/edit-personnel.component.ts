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

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  @ViewChild('personnelFormComponentReference', { read: PersonnelFormComponent, static: false }) personnelForm!: PersonnelFormComponent;

  selectedIndex: any = 0;
  selectedId: any = "";

  ngOnInit(): void {
  }

  openModal(index: any, data: any){
    this.selectedIndex = index;
    this.selectedId = data.id;

    this.personnelForm.personnelForm.controls.personnelCode.setValue(data.personnel_code);
    this.personnelForm.personnelForm.controls.personnelName.setValue(data.personnel_name);
    this.personnelForm.personnelForm.controls.batch.setValue(data.batch);

    this.buttonElement.nativeElement.click();
  }

  savePersonnel(){
    let personnel: Personnel = {
      roster: sessionStorage.getItem('restaurant_roster_id') as string,      
      batch_symbol: this.personnelForm.personnelForm.controls.symbol.value,
      staff: {
        id: this.personnelForm.selectedStaffId,
        staff_code: this.personnelForm.personnelForm.controls.personnelCode.value,
        staff_name: this.personnelForm.personnelForm.controls.personnelName.value,
      }
    }

    let data = {
      index: this.selectedIndex,
      id: this.selectedId,
      personnel: personnel
    }

    this.savePersonnelEvent.emit(data);
  }

  deletePersonnel(){
    let data = {
      index: this.selectedIndex,
      id: this.selectedId,
    }

    this.deletePersonnelEvent.emit(data);
  }

}

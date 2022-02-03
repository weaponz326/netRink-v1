import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { PersonnelFormComponent } from '../personnel-form/personnel-form.component';


@Component({
  selector: 'app-add-personnel',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.scss']
})
export class AddPersonnelComponent implements OnInit {

  constructor() { }

  @Output() savePersonnelEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  @ViewChild('personnelFormComponentReference', { read: PersonnelFormComponent, static: false }) personnelForm!: PersonnelFormComponent;

  ngOnInit(): void {
  }

  openModal(){
    this.buttonElement.nativeElement.click();
  }

  savePersonnel(){
    let data = {
      roster: sessionStorage.getItem('restaurant_roster_id'),
      personnel_code: this.personnelForm.personnelForm.controls.personnelCode.value,
      personnel_name: this.personnelForm.personnelForm.controls.personnelName.value,
      batch: this.personnelForm.personnelForm.controls.symbol.value,
    }
    this.savePersonnelEvent.emit(data);
  }

  resetForm(){
    this.personnelForm.personnelForm.controls.personnelCode.setValue('');
    this.personnelForm.personnelForm.controls.personnelName.setValue('');
    this.personnelForm.personnelForm.controls.batch.setValue('');
  }

}

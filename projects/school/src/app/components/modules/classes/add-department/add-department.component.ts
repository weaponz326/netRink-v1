import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { serverTimestamp } from 'firebase/firestore';

import { DepartmentFormComponent } from '../department-form/department-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { ActiveTermService } from 'projects/school/src/app/services/active-term/active-term.service';

import { Department } from 'projects/school/src/app/models/modules/classes/classes.model';


@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {

  constructor(private activeTerm: ActiveTermService) { }

  @Output() saveDepartmentEvent = new EventEmitter<any>();

  @ViewChild('departmentFormComponentReference', { read: DepartmentFormComponent, static: false }) departmentForm!: DepartmentFormComponent;
  @ViewChild('addButtonElementReference', { read: ElementRef, static: false }) addButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  isDepartmentSaving = false;

  ngOnInit(): void {
  }

  openModal(){
    this.addButton.nativeElement.click();
    this.setActiveTerm();
  }

  setActiveTerm(){
    let activeTermData = this.activeTerm.getActiveTerm();

    this.departmentForm.selectedTermId = activeTermData.id;
    this.departmentForm.selectedTermData = activeTermData.data;
    this.departmentForm.departmentForm.controls.term.setValue(activeTermData.data.term_name);
  }

  saveDepartment(){
    let data: Department = {
      created_at: serverTimestamp(),
      account: localStorage.getItem('school_id') as string,
      department_code: this.departmentForm.departmentForm.controls.departmentCode.value,
      department_name: this.departmentForm.departmentForm.controls.departmentName.value,
      department_description: this.departmentForm.departmentForm.controls.departmentDescription.value,
      terms: [{
        id: this.departmentForm.selectedTermId,
        data: this.departmentForm.selectedTermData,
      }],
      department_head: {
        id: this.departmentForm.selectedTeacherId,
        data: {
          teacher_code: this.departmentForm.selectedTeacherData.teacher_code,
          first_name: this.departmentForm.selectedTeacherData.first_name,
          last_name: this.departmentForm.selectedTeacherData.last_name,
        }
      }
    }

    this.saveDepartmentEvent.emit(data);
  }

  resetForm(){
    this.departmentForm.departmentForm.controls.departmentCode.setValue("");
    this.departmentForm.departmentForm.controls.departmentName.setValue("");
    this.departmentForm.departmentForm.controls.term.setValue("");
    this.departmentForm.departmentForm.controls.departmentHead.setValue("");
    this.departmentForm.departmentForm.controls.departmentDescription.setValue("");
  }

}

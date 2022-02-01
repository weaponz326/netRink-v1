import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { BdayInputComponent } from 'projects/personal/src/app/components/module-utilities/bday-input/bday-input.component'
import { ImageInputComponent } from 'projects/personal/src/app/components/module-utilities/image-input/image-input.component'


@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.scss']
})
export class StaffFormComponent implements OnInit {

  constructor() { }

  staffForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initStaffForm();
  }

  initStaffForm(){
    this.staffForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      sex: new FormControl(''),
      dob: new FormControl(''),
      photo: new FormControl(''),
      nationality: new FormControl(''),
      religion: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      postCode: new FormControl(''),
      staffCode: new FormControl(''),
      department: new FormControl(''),
      job: new FormControl(''),
    })
  }

}

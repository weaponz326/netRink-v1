import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ImageInputComponent } from 'projects/personal/src/app/components/module-utilities/image-input/image-input.component';


@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss']
})
export class ParentFormComponent implements OnInit {

  constructor() { }

  parentForm: FormGroup = new FormGroup({});

  @ViewChild('imageInputComponentReference', { read: ImageInputComponent, static: false }) photo!: ImageInputComponent;

  ngOnInit(): void {
    this.initParentForm();
  }

  initParentForm(){
    this.parentForm = new FormGroup({
      parentCode: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      sex: new FormControl(''),
      photo: new FormControl(''),
      nationality: new FormControl(''),
      religion: new FormControl(''),
      occupation: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      postCode: new FormControl(''),
    });
  }

}

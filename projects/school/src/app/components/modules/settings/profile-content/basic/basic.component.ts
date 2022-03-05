import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { AccountApiService } from 'projects/school/src/app/services/account-api/account-api.service';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor(private accountApi: AccountApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  basicForm: FormGroup = new FormGroup({});

  isAccountLoading = true;
  isBasicSaving = true;

  ngOnInit(): void {
    this.initBasicForm();
  }

  initBasicForm(){
    this.basicForm = new FormGroup({
      name: new FormControl(''),
      about: new FormControl('')
    })
  }

  updateAccount(){
    let data = {
      name: this.basicForm.controls.name.value,
      about: this.basicForm.controls.about.value,
    }

    this.isBasicSaving = true;

    this.accountApi.updateAccount(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isBasicSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isBasicSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

}

import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { UserApiService } from 'projects/personal/src/app/services/user/user-api/user-api.service';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor(private userApi: UserApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  basicForm: FormGroup = new FormGroup({});

  isUserLoading = false;
  isUserSaving = false;

  ngOnInit(): void {
    this.initBasicForm();
  }

  initBasicForm(){
    this.basicForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      about: new FormControl('')
    })
  }

  updateUser(){
    this.isUserSaving = true;

    let data = {
      first_name: this.basicForm.controls.first_name.value,
      last_name: this.basicForm.controls.last_name.value,
      about: this.basicForm.controls.about.value,
    }

    this.userApi.updateUser(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isUserSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isUserSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

}

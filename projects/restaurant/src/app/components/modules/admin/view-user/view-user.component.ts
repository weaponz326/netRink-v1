import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component';
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'
import { AccessFormComponent } from '../access-form/access-form.component';

import { AdminApiService } from 'projects/restaurant/src/app/services/modules/admin-api/admin-api.service';

import { AccountUser } from 'projects/restaurant/src/app/models/modules/admin/admin.model';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  constructor(
    private router: Router,
    private adminApi: AdminApiService
  ) { }

  @ViewChild('accessFormComponentReference', { read: AccessFormComponent, static: false }) accessFormComponent!: AccessFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Users", url: "/home/admin/all-users" },
    { text: "View User", url: "/home/admin/view-user" },
  ];

  userForm: FormGroup = new FormGroup({});
  userFormData: any;

  isUserLoading: boolean = false;
  isUserSaving: boolean = false;
  isUserDeleting: boolean = false;

  ngOnInit(): void {
    this.initUserForm();
    this.getAccountUser();
  }

  ngAfterViewInit(): void {
    this.accessFormComponent.getUserAccess();
  }

  initUserForm(){
    this.userForm = new FormGroup({
      personalName: new FormControl(''),
      accessLevel: new FormControl(''),
    })
  }

  getAccountUser() {
    this.isUserLoading = true;

    this.adminApi.getAccountUser()
      .then(
        (res: any) => {
          console.log(res);
          this.userFormData = res;

          this.userForm.controls.personalName.setValue(this.userFormData.data().personal_name);
          this.userForm.controls.accessLevel.setValue(this.userFormData.data().access_level);

          this.isUserLoading = false;
        },
        (err: any) => {
          console.log(err);
          this.isUserLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateAdminUser(){
    // sends both user access details

    this.isUserSaving = true;

    let data = {
      personal_name: this.userFormData.personal_name,
      access_level: this.userForm.controls.accessLevel.value,
    }

    this.adminApi.updateAccountUser(data)
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

    this.accessFormComponent.updateUserAccess();
  }

  changeLevel(event: any)  {
    console.log(event.target.value);
    this.accessFormComponent.setLevelAccess(event.target.value);
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteAdminUser(){
    this.isUserDeleting = true;

    this.adminApi.deleteAccountUser()
      .then(
        (res: any) => {
          console.log(res);
          this.isUserDeleting = false;

          this.router.navigateByUrl('/home/admin/all-users');
        },
        (err: any) => {
          console.log(err);
          this.isUserDeleting = false;
          this.connectionToast.openToast();
        }
      )
  }

}

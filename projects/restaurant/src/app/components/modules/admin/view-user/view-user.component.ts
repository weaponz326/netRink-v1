import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component';
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'
import { AccessFormComponent } from '../access-form/access-form.component';

import { AdminApiService } from 'projects/restaurant/src/app/services/modules/admin-api/admin-api.service';

import { User } from 'projects/restaurant/src/app/models/modules/admin/admin.model';


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
  userFormData: User = {uid: "", account: "", personal_id: "", personal_name: "", access_level: ""}

  isUserSaving: boolean = false;
  isUserDeleting: boolean = false;

  ngOnInit(): void {
    this.initUserForm();
  }

  ngAfterViewInit(): void {
    this.getAdminUser();
  }

  initUserForm(){
    this.userForm = new FormGroup({
      personalName: new FormControl(''),
      accessLevel: new FormControl(''),
    })
  }

  getAdminUser() {
    this.adminApi.getAdminUser()
      .then(
        (res: any) => {
          console.log(res);

          this.userFormData = res;

          this.userForm.controls.personalName.setValue(this.userFormData.personal_name);
          this.userForm.controls.accessLevel.setValue(this.userFormData.access_level);

          this.accessFormComponent.getUserAccess();
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updateAdminUser(){
    // sends both user access details

    this.isUserSaving = true;

    let data: User = {
      uid: this.userFormData.uid,
      account: localStorage.getItem('restaurant_id') as string,
      personal_id: this.userFormData.personal_id,
      personal_name: this.userFormData.personal_name,
      access_level: this.userForm.controls.accessLevel.value,
    }

    this.adminApi.updateAdminUser(data)
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

    this.accessFormComponent.saveAccessLevel();
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

    this.adminApi.deleteAdminUser()
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

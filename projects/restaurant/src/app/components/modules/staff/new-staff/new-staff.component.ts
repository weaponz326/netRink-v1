import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { StaffApiService } from 'projects/restaurant/src/app/services/modules/staff-api/staff-api.service';

import { StaffFormComponent } from '../staff-form/staff-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-new-staff',
  templateUrl: './new-staff.component.html',
  styleUrls: ['./new-staff.component.scss']
})
export class NewStaffComponent implements OnInit {

  constructor(
    private router: Router,
    private staffApi: StaffApiService
  ) { }

  @ViewChild('staffFormComponentReference', { read: StaffFormComponent, static: false }) staffForm!: StaffFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Staff", url: "/home/staff/new-staff" },
  ];

  isStaffSaving = false;

  ngOnInit(): void {
  }

  saveStaff(){
    console.log('u are saving a new staff');

    var staffData = {
      account: localStorage.getItem('restaurant_id'),
      first_name: this.staffForm.staffForm.controls.firstName.value,
      last_name: this.staffForm.staffForm.controls.lastName.value,
      sex: this.staffForm.staffForm.controls.sex.value,
      // date_of_birth: this.staffForm.staffForm.controls.dobCustomWidget.value,
      // photo: this.staffForm.staffForm.controls.photoCustomWidget.image,
      nationality: this.staffForm.staffForm.controls.nationality.value,
      religion: this.staffForm.staffForm.controls.religion.value,
      phone: this.staffForm.staffForm.controls.phone.value,
      email: this.staffForm.staffForm.controls.email.value,
      address: this.staffForm.staffForm.controls.address.value,
      state: this.staffForm.staffForm.controls.state.value,
      city: this.staffForm.staffForm.controls.city.value,
      post_code: this.staffForm.staffForm.controls.postCode.value,
      staff_code: this.staffForm.staffForm.controls.staffCode.value,
      department: this.staffForm.staffForm.controls.department.value,
      job: this.staffForm.staffForm.controls.job.value,
    }

    console.log(staffData);
    this.isStaffSaving = true;

    this.staffApi.postStaff(staffData)
      .subscribe(
        res => {
          console.log(res);
          this.isStaffSaving = false;

          sessionStorage.setItem('staff_id', res.id);
          this.router.navigateByUrl('/suite/staff/view-staff');
        },
        err => {
          console.log(err);
          this.isStaffSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

}

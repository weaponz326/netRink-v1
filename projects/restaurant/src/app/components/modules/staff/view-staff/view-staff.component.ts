import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { StaffApiService } from 'projects/restaurant/src/app/services/modules/staff-api/staff-api.service';

import { StaffFormComponent } from '../staff-form/staff-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'


@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.scss']
})
export class ViewStaffComponent implements OnInit {

  constructor(
    private router: Router,
    private staffApi: StaffApiService
  ) { }

  @ViewChild('staffFormComponentReference', { read: StaffFormComponent, static: false }) staffForm!: StaffFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Staff", url: "/home/staff/all-staff" },
    { text: "View Staff", url: "/home/staff/view-staff" },
  ];

  isStaffSaving = false;
  isStaffDeleting = false;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getStaff();
  }

  getStaff(){
    this.staffApi.getSingleStaff()
      .subscribe(
        res => {
          console.log(res);

          this.staffForm.staffForm.controls.firstName.setValue(res.first_name);
          this.staffForm.staffForm.controls.lastName.setValue(res.last_name);
          this.staffForm.staffForm.controls.sex.setValue(res.sex);
          // this.staffForm.staffForm.controls.dobCustomWidget.value = res.date_of_birth;
          // this.staffForm.staffForm.controls.photoCustomWidget.image = res.photo;
          this.staffForm.staffForm.controls.nationality.setValue(res.nationality);
          this.staffForm.staffForm.controls.religion.setValue(res.religion);
          this.staffForm.staffForm.controls.phone.setValue(res.phone);
          this.staffForm.staffForm.controls.email.setValue(res.email);
          this.staffForm.staffForm.controls.address.setValue(res.address);
          this.staffForm.staffForm.controls.state.setValue(res.state);
          this.staffForm.staffForm.controls.city.setValue(res.city);
          this.staffForm.staffForm.controls.postCode.setValue(res.post_code);
          this.staffForm.staffForm.controls.staffCode.setValue(res.staff_code);
          this.staffForm.staffForm.controls.department.setValue(res.department);
          this.staffForm.staffForm.controls.job.setValue(res.job);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  saveStaff(){
    console.log('u are saving a new staff');

    var staffData = {
      account: localStorage.getItem('restaurant_id'),
      first_name: this.staffForm.staffForm.controls.firstName.value,
      last_name: this.staffForm.staffForm.controls.lastName.value,
      sex: this.staffForm.staffForm.controls.sexDropDownList.value,
      // date_of_birth: this.staffForm.staffForm.controls.dobCustomWidget.value,
      // photo: this.staffForm.staffForm.controls.photoCustomWidget.image,
      nationality: this.staffForm.staffForm.controls.nationality.value,
      religion: this.staffForm.staffForm.controls.religion.value,
      phone: this.staffForm.staffForm.controls.phone.value,
      email: this.staffForm.staffForm.controls.email.value,
      address: this.staffForm.staffForm.controls.addressTextBox.value,
      state: this.staffForm.staffForm.controls.state.value,
      city: this.staffForm.staffForm.controls.city.value,
      post_code: this.staffForm.staffForm.controls.postCode.value,
      staff_code: this.staffForm.staffForm.controls.staffCode.value,
      department: this.staffForm.staffForm.controls.department.value,
      job: this.staffForm.staffForm.controls.job.value,
    }

    console.log(staffData);
    this.isStaffSaving = true;

    this.staffApi.putStaff(staffData)
      .subscribe(
        res => {
          console.log(res);
          this.isStaffSaving = false;
        },
        err => {
          console.log(err);
          this.isStaffSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteMenuGroup(){
    this.isStaffDeleting = true;

    this.staffApi.deleteStaff()
      .subscribe(
        res => {
          console.log(res);

          this.router.navigateByUrl('/home/staff/all-staff');
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
  }

}

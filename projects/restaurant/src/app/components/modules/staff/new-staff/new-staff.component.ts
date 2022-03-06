import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { serverTimestamp } from 'firebase/firestore';

import { StaffFormComponent } from '../staff-form/staff-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { StaffApiService } from 'projects/restaurant/src/app/services/modules/staff-api/staff-api.service';

import { Staff } from 'projects/restaurant/src/app/models/modules/staff/staff.model';


@Component({
  selector: 'app-new-staff',
  templateUrl: './new-staff.component.html',
  styleUrls: ['./new-staff.component.scss']
})
export class NewStaffComponent implements OnInit {

  constructor(
    private router: Router,
    private storage: AngularFireStorage,
    private staffApi: StaffApiService
  ) { }

  @ViewChild('staffFormComponentReference', { read: StaffFormComponent, static: false }) staffForm!: StaffFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Staff", url: "/home/staff/new-staff" },
  ];

  storageBasePath = "/restaurant/" + localStorage.getItem('restaurant_id') + "/module_staff/";

  isStaffSaving = false;

  ngOnInit(): void {
  }

  createStaff(){
    console.log('u are saving a new staff');

    var data: Staff = {
      created_at: serverTimestamp(),
      account: localStorage.getItem('restaurant_id') as string,
      first_name: this.staffForm.staffForm.controls.firstName.value,
      last_name: this.staffForm.staffForm.controls.lastName.value,
      sex: this.staffForm.staffForm.controls.sex.value,
      date_of_birth: this.staffForm.bday.value,
      photo: "",
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

    console.log(data);
    this.isStaffSaving = true;

    this.staffApi.createStaff(data)
      .then(
        async (res: any) => {
          console.log(res);
          sessionStorage.setItem('restaurant_staff_id', res.id);

          if (!this.staffForm.photo.isImageSet){
            this.isStaffSaving = false;
            this.router.navigateByUrl('/home/staff/view-staff');
          }
          else{
            const storagePath = this.storageBasePath + res.id;
            const storageRef = this.storage.ref(storagePath);
            const task = this.storage.upload(storagePath, this.staffForm.photo.image);

            task.snapshotChanges().pipe(
                finalize(() => {
                  storageRef.getDownloadURL().subscribe(downloadUrl => {
                    this.updateImage({photo: downloadUrl});
                  });
                })
              ).subscribe();
          }
        },
        (err: any) => {
          console.log(err);
          this.isStaffSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateImage(data: any){
    console.log('u are updating staff photo url');
    console.log(data);

    this.staffApi.updateStaff(data)
      .then(
        (res: any) => {
          console.log(res);
          this.router.navigateByUrl('/home/staff/view-staff');
          this.isStaffSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isStaffSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

}

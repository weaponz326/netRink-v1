import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { AngularFireStorage } from '@angular/fire/compat/storage';

import { StaffFormComponent } from '../staff-form/staff-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { StaffApiService } from 'projects/restaurant/src/app/services/modules/staff-api/staff-api.service';
import { StaffPrintService } from 'projects/restaurant/src/app/services/printing/staff-print/staff-print.service';

import { Staff } from 'projects/restaurant/src/app/models/modules/staff/staff.model';


@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.scss']
})
export class ViewStaffComponent implements OnInit {

  constructor(
    private router: Router,
    private storage: AngularFireStorage,
    private staffApi: StaffApiService,
    private staffPrint: StaffPrintService
  ) { }

  @ViewChild('staffFormComponentReference', { read: StaffFormComponent, static: false }) staffForm!: StaffFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Staff", url: "/home/staff/all-staff" },
    { text: "View Staff", url: "/home/staff/view-staff" },
  ];

  storageBasePath = "/restaurant/" + localStorage.getItem('restaurant_id') + "/module_staff/";

  staffFormData: any;

  isStaffLoading = false;
  isStaffSaving = false;
  isStaffDeleting = false;

  ngOnInit(): void {
    this.getStaff();
  }

  getStaff(){
    this.isStaffLoading = true;

    this.staffApi.getStaff()
      .then(
        (res: any) => {
          console.log(res.data());

          this.staffFormData = res;
          this.isStaffLoading = false;

          this.staffForm.staffForm.controls.firstName.setValue(this.staffFormData.data().first_name);
          this.staffForm.staffForm.controls.lastName.setValue(this.staffFormData.data().last_name);
          this.staffForm.staffForm.controls.sex.setValue(this.staffFormData.data().sex);
          this.staffForm.bday.setValue(this.staffFormData.data().date_of_birth);
          this.staffForm.staffForm.controls.nationality.setValue(this.staffFormData.data().nationality);
          this.staffForm.staffForm.controls.religion.setValue(this.staffFormData.data().religion);
          this.staffForm.staffForm.controls.phone.setValue(this.staffFormData.data().phone);
          this.staffForm.staffForm.controls.email.setValue(this.staffFormData.data().email);
          this.staffForm.staffForm.controls.address.setValue(this.staffFormData.data().address);
          this.staffForm.staffForm.controls.state.setValue(this.staffFormData.data().state);
          this.staffForm.staffForm.controls.city.setValue(this.staffFormData.data().city);
          this.staffForm.staffForm.controls.postCode.setValue(this.staffFormData.data().post_code);
          this.staffForm.staffForm.controls.staffCode.setValue(this.staffFormData.data().staff_code);
          this.staffForm.staffForm.controls.department.setValue(this.staffFormData.data().department);
          this.staffForm.staffForm.controls.job.setValue(this.staffFormData.data().job);

          if (this.staffFormData.data().photo != ""){
            this.staffForm.photo.imgSrc = this.staffFormData.data().photo;
            this.staffForm.photo.isImageSet = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isStaffLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateStaff(){
    console.log('u are saving a new staff');

    var data = {
      first_name: this.staffForm.staffForm.controls.firstName.value,
      last_name: this.staffForm.staffForm.controls.lastName.value,
      sex: this.staffForm.staffForm.controls.sex.value,
      date_of_birth: this.staffForm.bday.value,
      photo: this.staffForm.photo.imgSrc,
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

    this.staffApi.updateStaff(data)
      .then(
        (res: any) => {
          console.log(res);

          if (this.staffForm.photo.isImageSet && !this.staffForm.photo.isImageChanged){
            this.isStaffSaving = false;
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

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteStaff(){
    this.isStaffDeleting = true;

    this.staffApi.deleteStaff()
      .then(
        (res: any) => {
          console.log(res);
          this.isStaffDeleting = false;
          this.router.navigateByUrl('/home/staff/all-staff');
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
          this.isStaffDeleting = false;
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

  onPrint(){
    console.log("lets start printing...");
    this.staffPrint.printViewStaff();
  }

}

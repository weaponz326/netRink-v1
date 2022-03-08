import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { AngularFireStorage } from '@angular/fire/compat/storage';

import { ParentFormComponent } from '../parent-form/parent-form.component';
import { ParentWardsComponent } from '../parent-wards/parent-wards.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { ParentsApiService } from 'projects/school/src/app/services/modules/parents-api/parents-api.service';
// import { ParentsPrintService } from 'projects/school/src/app/services/printing/parents-print/parents-print.service';

import { Parent } from 'projects/school/src/app/models/modules/parents/parents.model';


@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.scss']
})
export class ViewParentComponent implements OnInit {

  constructor(
    private router: Router,
    private storage: AngularFireStorage,
    private parentsApi: ParentsApiService,
    // private parentsPrint: ParentsPrintService,
  ) { }

  @ViewChild('parentFormComponentReference', { read: ParentFormComponent, static: false }) parentForm!: ParentFormComponent;
  @ViewChild('parentWardsComponentReference', { read: ParentWardsComponent, static: false }) parentWards!: ParentWardsComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Parents", url: "/home/parents/all-parents" },
    { text: "View Parent", url: "/home/parents/view-parent" },
  ];

  storageBasePath = "/school/" + localStorage.getItem('school_id') + "/module_parents/";

  parentData: any;

  isParentLoading = false;
  isParentSaving = false;
  isParentDeleting = false;

  ngOnInit(): void {
    this.getParent();
  }

  getParent(){
    this.isParentLoading = true;

    this.parentsApi.getParent()
      .then(
        (res: any) => {
          console.log(res);
          this.parentData = res;
          this.isParentLoading = false;

          this.parentForm.parentForm.controls.parentCode.setValue(this.parentData.data().parent_code);
          this.parentForm.parentForm.controls.firstName.setValue(this.parentData.data().first_name);
          this.parentForm.parentForm.controls.lastName.setValue(this.parentData.data().last_name);
          this.parentForm.parentForm.controls.sex.setValue(this.parentData.data().sex);
          this.parentForm.parentForm.controls.photo.setValue(this.parentData.data().photo);
          this.parentForm.parentForm.controls.nationalty.setValue(this.parentData.data().nationality);
          this.parentForm.parentForm.controls.religion.setValue(this.parentData.data().religion);
          this.parentForm.parentForm.controls.occupation.setValue(this.parentData.data().occupation);
          this.parentForm.parentForm.controls.phone.setValue(this.parentData.data().phone);
          this.parentForm.parentForm.controls.email.setValue(this.parentData.data().email);
          this.parentForm.parentForm.controls.address.setValue(this.parentData.data().address);
          this.parentForm.parentForm.controls.state.setValue(this.parentData.data().state);
          this.parentForm.parentForm.controls.city.setValue(this.parentData.data().city);
          this.parentForm.parentForm.controls.post_code.setValue(this.parentData.data().post_code);

          if (this.parentData.data().photo != ""){
            this.parentForm.photo.imgSrc = this.parentData.data().photo;
            this.parentForm.photo.isImageSet = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isParentLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateParent(){
    console.log('u are saving a new parent');

    var data = {
      parent_code: this.parentForm.parentForm.controls.parentCode.value,
      first_name: this.parentForm.parentForm.controls.firstName.value,
      last_name: this.parentForm.parentForm.controls.lastName.value,
      sex: this.parentForm.parentForm.controls.sex.value,
      nationality: this.parentForm.parentForm.controls.nationality.value,
      religion: this.parentForm.parentForm.controls.religion.value,
      occupation: this.parentForm.parentForm.controls.occupation.value,
      phone: this.parentForm.parentForm.controls.phone.value,
      email: this.parentForm.parentForm.controls.email.value,
      address: this.parentForm.parentForm.controls.address.value,
      state: this.parentForm.parentForm.controls.state.value,
      city: this.parentForm.parentForm.controls.city.value,
      post_code: this.parentForm.parentForm.controls.post_code.value,
    }

    console.log(data);
    this.isParentSaving = true;

    this.parentsApi.updateParent(data)
    .then(
      (res: any) => {
        console.log(res);

        if (this.parentForm.photo.isImageSet && !this.parentForm.photo.isImageChanged){
          this.isParentSaving = false;
        }
        else{
          const storagePath = this.storageBasePath + res.id;
          const storageRef = this.storage.ref(storagePath);
          const task = this.storage.upload(storagePath, this.parentForm.photo.image);

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
        this.isParentSaving = false;
        this.connectionToast.openToast();
      }
    )
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteParent(){
    this.isParentDeleting = true;

    this.parentsApi.deleteParent()
      .then(
        (res: any) => {
          console.log(res);
          this.router.navigateByUrl('/home/parents/all-parents');
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updateImage(data: any){
    console.log('u are updating parent photo url');
    console.log(data);

    this.parentsApi.updateParent(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isParentSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isParentSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
    // this.parentsPrint.printViewParent();
  }

}

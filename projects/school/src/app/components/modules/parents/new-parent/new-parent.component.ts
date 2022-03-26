import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { serverTimestamp } from 'firebase/firestore';

import { ParentFormComponent } from '../parent-form/parent-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { ActiveTermService } from 'projects/school/src/app/services/active-term/active-term.service';
import { ParentsApiService } from 'projects/school/src/app/services/modules/parents-api/parents-api.service';

import { Parent } from 'projects/school/src/app/models/modules/parents/parents.model';


@Component({
  selector: 'app-new-parent',
  templateUrl: './new-parent.component.html',
  styleUrls: ['./new-parent.component.scss']
})
export class NewParentComponent implements OnInit {

  constructor(
    private router: Router,
    private storage: AngularFireStorage,
    private activeTerm: ActiveTermService,
    private parentsApi: ParentsApiService
  ) { }

  @ViewChild('parentFormComponentReference', { read: ParentFormComponent, static: false }) parentForm!: ParentFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Parent", url: "/home/parents/new-parent" },
  ];

  storageBasePath = "/school/" + localStorage.getItem('school_id') + "/module_parents/";

  isParentSaving = false;

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.setActiveTerm()
  }

  setActiveTerm(){
    let activeTermData = this.activeTerm.getActiveTerm();

    this.parentForm.selectedTermId = activeTermData.id;
    this.parentForm.selectedTermData = activeTermData.data;
    this.parentForm.parentForm.controls.term.setValue(activeTermData.data.term_name);
  }

  createParent(){
    console.log('u are saving a new parent');

    var data: Parent = {
      created_at: serverTimestamp(),
      account: localStorage.getItem('school_id') as string,
      parent_code: this.parentForm.parentForm.controls.parentCode.value,
      first_name: this.parentForm.parentForm.controls.firstName.value,
      last_name: this.parentForm.parentForm.controls.lastName.value,
      sex: this.parentForm.parentForm.controls.sex.value,
      photo: "",
      nationality: this.parentForm.parentForm.controls.nationality.value,
      religion: this.parentForm.parentForm.controls.religion.value,
      occupation: this.parentForm.parentForm.controls.occupation.value,
      phone: this.parentForm.parentForm.controls.phone.value,
      email: this.parentForm.parentForm.controls.email.value,
      address: this.parentForm.parentForm.controls.address.value,
      state: this.parentForm.parentForm.controls.state.value,
      city: this.parentForm.parentForm.controls.city.value,
      country: this.parentForm.parentForm.controls.city.value,
      post_code: this.parentForm.parentForm.controls.postCode.value,
      terms: [{
        id: this.parentForm.selectedTermId,
        data: this.parentForm.selectedTermData,
      }],
    }

    console.log(data);
    this.isParentSaving = true;

    this.parentsApi.createParent(data)
      .then(
        (res: any) => {
          console.log(res);
          sessionStorage.setItem('school_parent_id', res.id);

          this.updateImage();
        },
        (err: any) => {
          console.log(err);
          this.isParentSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateImage(){
    console.log('u are updating parent photo url');

    if (!this.parentForm.photo.isImageSet){
      this.isParentSaving = false;
      this.router.navigateByUrl('/home/parents/view-parent');
    }
    else{
      const storagePath = this.storageBasePath + sessionStorage.getItem('school_parent_id');
      const storageRef = this.storage.ref(storagePath);
      const task = this.storage.upload(storagePath, this.parentForm.photo.image);

      task.snapshotChanges().pipe(
          finalize(() => {
            storageRef.getDownloadURL().subscribe(downloadUrl => {
              console.log(downloadUrl);
              let data = { photo: downloadUrl };

              this.parentsApi.updateParent(data)
                .then(
                  (res: any) => {
                    console.log(res);
                    this.router.navigateByUrl('/home/parents/view-parent');
                    this.isParentSaving = false;
                  },
                  (err: any) => {
                    console.log(err);
                    this.isParentSaving = false;
                    this.connectionToast.openToast();
                  }
                )
            });
          })
        ).subscribe();
    }
  }

}

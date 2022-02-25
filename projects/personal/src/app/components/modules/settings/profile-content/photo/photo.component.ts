import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { AngularFireStorage } from '@angular/fire/compat/storage';

import { ImageInputComponent } from 'projects/personal/src/app/components/module-utilities/image-input/image-input.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { UserApiService } from 'projects/personal/src/app/services/user/user-api/user-api.service';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor(
    private storage: AngularFireStorage,
    private userApi: UserApiService
  ) { }

  @ViewChild('imageInputComponentReference', { read: ImageInputComponent, static: false }) imageInput!: ImageInputComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  storageBasePath = "/personal/" + localStorage.getItem('personal_id') + "/user/";

  isUserSaving = false;

  ngOnInit(): void {
  }

  uploadImage(){
    if (this.imageInput.isImageChanged){
      this.isUserSaving = true;

      const storagePath = this.storageBasePath;
      const storageRef = this.storage.ref(storagePath);
      const task = this.storage.upload(storagePath, this.imageInput.image);

      task.snapshotChanges().pipe(
          finalize(() => {
            storageRef.getDownloadURL().subscribe(downloadUrl => {
              this.updateUser({photo: downloadUrl});
            });
          })
        ).subscribe();
    }
  }

  updateUser(data: any){
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

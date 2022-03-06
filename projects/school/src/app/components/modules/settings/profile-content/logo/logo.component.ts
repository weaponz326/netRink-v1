import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { AngularFireStorage } from '@angular/fire/compat/storage';

import { ImageInputComponent } from 'projects/personal/src/app/components/module-utilities/image-input/image-input.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { AccountApiService } from 'projects/school/src/app/services/account-api/account-api.service';


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor(
    private storage: AngularFireStorage,
    private accountApi: AccountApiService
  ) { }

  @ViewChild('imageInputComponentReference', { read: ImageInputComponent, static: false }) imageInput!: ImageInputComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  storageBasePath = "/school/" + localStorage.getItem('school_id') + "/account/";

  isAccountLoading = false;
  isLogoSaving = false;

  ngOnInit(): void {
  }

  uploadImage(){
    if (this.imageInput.isImageChanged){
      this.isLogoSaving = true;

      const storagePath = this.storageBasePath;
      const storageRef = this.storage.ref(storagePath);
      const task = this.storage.upload(storagePath, this.imageInput.image);

      task.snapshotChanges().pipe(
          finalize(() => {
            storageRef.getDownloadURL().subscribe(downloadUrl => {
              this.updateAccount({logo: downloadUrl});
            });
          })
        ).subscribe();
    }
  }

  updateAccount(data: any){
    this.accountApi.updateAccount(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isLogoSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isLogoSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

}

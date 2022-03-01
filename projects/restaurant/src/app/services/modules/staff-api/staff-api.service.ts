import { Injectable } from '@angular/core';
import { map, finalize } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Injectable({
  providedIn: 'root'
})
export class StaffApiService {

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  staffRef = this.afs.collection('restaurant/module_staff/restaurant_staff');

  storagePath = "/restaurant/" + localStorage.getItem('restaurant_id');
  storageRef = this.storage.ref(this.storagePath);

  // staff

  createStaff(staff: any){
    return this.staffRef.add(staff);
  }

  getStaff(){
    return this.staffRef.doc(String(sessionStorage.getItem('restaurant_staff_id'))).ref.get();
  }

  updateStaff(staff: any){
    return this.staffRef.doc(String(sessionStorage.getItem('restaurant_staff_id'))).update(staff);
  }

  deleteStaff(){
    return this.staffRef.doc(String(sessionStorage.getItem('restaurant_staff_id'))).delete();
  }

  getAccountStaff(sorting: any, pageSize: any){
    return this.staffRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .limit(pageSize)
      .get();
  }

  getAccountStaffNext(sorting: any, pageSize: any, pageStart: any){
    return this.staffRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getAccountStaffPrev(sorting: any, pageSize: any, pageStart: any){
    return this.staffRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  getAllAccountStaff(){
    return this.staffRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy("created_at", "asc")
      .get();
  }

  uploadStaffPhoto(photo: File){
    return this.storage.upload(this.storagePath, photo);
    // const uploadTask = this.storage.upload(this.storagePath, photo);
    // uploadTask.snapshotChanges().pipe(
    //   finalize(() => {
    //     this.storageRef.getDownloadURL().subscribe((downloadURL: any) => {
    //       fileUpload.url = downloadURL;
    //       fileUpload.name = fileUpload.file.name;
    //       this.saveFileData(fileUpload);
    //     });
    //   })
    // )
  }
}

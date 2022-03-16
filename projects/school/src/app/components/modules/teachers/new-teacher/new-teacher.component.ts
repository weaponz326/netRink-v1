import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { serverTimestamp } from 'firebase/firestore';

import { TeacherFormComponent } from '../teacher-form/teacher-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { TeachersApiService } from 'projects/school/src/app/services/modules/teachers-api/teachers-api.service';

import { Teacher } from 'projects/school/src/app/models/modules/teachers/teachers.model';


@Component({
  selector: 'app-new-teacher',
  templateUrl: './new-teacher.component.html',
  styleUrls: ['./new-teacher.component.scss']
})
export class NewTeacherComponent implements OnInit {

  constructor(
    private router: Router,
    private storage: AngularFireStorage,
    private teachersApi: TeachersApiService
  ) { }

  @ViewChild('teacherFormComponentReference', { read: TeacherFormComponent, static: false }) teacherForm!: TeacherFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Teacher", url: "/home/teachers/new-teacher" },
  ];

  storageBasePath = "/school/" + localStorage.getItem('school_id') + "/module_teachers/";

  isTeacherSaving = false;

  ngOnInit(): void {
  }

  createTeacher(){
    console.log('u are saving a new teacher');

    var data: Teacher = {
      created_at: serverTimestamp(),
      account: localStorage.getItem('school_id') as string,
      first_name: this.teacherForm.teacherForm.controls.firstName.value,
      last_name: this.teacherForm.teacherForm.controls.lastName.value,
      sex: this.teacherForm.teacherForm.controls.sex.value,
      date_of_birth: this.teacherForm.bday.value,
      teacher_code: this.teacherForm.teacherForm.controls.teacherCode.value,
      grade: this.teacherForm.teacherForm.controls.grade.value,
      photo: "",
      nationality: this.teacherForm.teacherForm.controls.nationality.value,
      religion: this.teacherForm.teacherForm.controls.religion.value,
      phone: this.teacherForm.teacherForm.controls.phone.value,
      email: this.teacherForm.teacherForm.controls.email.value,
      address: this.teacherForm.teacherForm.controls.address.value,
      state: this.teacherForm.teacherForm.controls.state.value,
      city: this.teacherForm.teacherForm.controls.city.value,
      post_code: this.teacherForm.teacherForm.controls.postCode.value,
      term: {
        id: this.teacherForm.selectedTermId,
        data: this.teacherForm.selectedTermData,
      },
      department: {
        id: this.teacherForm.selectedDepartmentId,
        data: this.teacherForm.selectedDepartmentData,
      }
    }

    console.log(data);
    this.isTeacherSaving = true;

    this.teachersApi.createTeacher(data)
      .then(
        async (res: any) => {
          console.log(res);
          sessionStorage.setItem('restaurant_teacher_id', res.id);

          if (!this.teacherForm.photo.isImageSet){
            this.isTeacherSaving = false;
            this.router.navigateByUrl('/home/teachers/view-teacher');
          }
          else{
            const storagePath = this.storageBasePath + res.id;
            const storageRef = this.storage.ref(storagePath);
            const task = this.storage.upload(storagePath, this.teacherForm.photo.image);

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
          this.isTeacherSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateImage(data: any){
    console.log('u are updating teacher photo url');
    console.log(data);

    this.teachersApi.updateTeacher(data)
      .then(
        (res: any) => {
          console.log(res);
          this.router.navigateByUrl('/home/teachers/view-teacher');
          this.isTeacherSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isTeacherSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { serverTimestamp } from 'firebase/firestore';

import { StudentFormComponent } from '../student-form/student-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { StudentsApiService } from 'projects/school/src/app/services/modules/students-api/students-api.service';

import { Student } from 'projects/school/src/app/models/modules/students/students.model';


@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {

  constructor(
    private router: Router,
    private storage: AngularFireStorage,
    private studentsApi: StudentsApiService
  ) { }

  @ViewChild('studentFormComponentReference', { read: StudentFormComponent, static: false }) studentForm!: StudentFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Student", url: "/home/students/new-student" },
  ];

  storageBasePath = "/school/" + localStorage.getItem('school_id') + "/module_students/";

  isStudentSaving = false;

  ngOnInit(): void {
  }

  createStudent(){
    console.log('u are saving a new student');

    var data: Student = {
      created_at: serverTimestamp(),
      account: localStorage.getItem('school_id') as string,
      first_name: this.studentForm.studentForm.controls.firstName.value,
      last_name: this.studentForm.studentForm.controls.lastName.value,
      sex: this.studentForm.studentForm.controls.sex.value,
      date_of_birth: this.studentForm.bday.value,
      student_code: this.studentForm.studentForm.controls.studentCode.value,
      admission_date: this.studentForm.studentForm.controls.admissionDate.value,
      previous_school: this.studentForm.studentForm.controls.previousSchool.value,
      photo: "",
      nationality: this.studentForm.studentForm.controls.nationality.value,
      religion: this.studentForm.studentForm.controls.religion.value,
      phone: this.studentForm.studentForm.controls.phone.value,
      email: this.studentForm.studentForm.controls.email.value,
      address: this.studentForm.studentForm.controls.address.value,
      state: this.studentForm.studentForm.controls.state.value,
      city: this.studentForm.studentForm.controls.city.value,
      post_code: this.studentForm.studentForm.controls.postCode.value,
      term: {
        id: this.studentForm.selectedTermId,
        data: this.studentForm.selectedTermData,
      },
      clase: {
        id: this.studentForm.selectedClassId,
        data: this.studentForm.selectedClassData,
      }
    }

    console.log(data);
    this.isStudentSaving = true;

    this.studentsApi.createStudent(data)
      .then(
        async (res: any) => {
          console.log(res);
          sessionStorage.setItem('restaurant_student_id', res.id);

          if (!this.studentForm.photo.isImageSet){
            this.isStudentSaving = false;
            this.router.navigateByUrl('/home/students/view-student');
          }
          else{
            const storagePath = this.storageBasePath + res.id;
            const storageRef = this.storage.ref(storagePath);
            const task = this.storage.upload(storagePath, this.studentForm.photo.image);

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
          this.isStudentSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateImage(data: any){
    console.log('u are updating student photo url');
    console.log(data);

    this.studentsApi.updateStudent(data)
      .then(
        (res: any) => {
          console.log(res);
          this.router.navigateByUrl('/home/students/view-student');
          this.isStudentSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isStudentSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

}

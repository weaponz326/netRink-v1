import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'
// import { SelectTeacherComponent } from '../../../select-windows/teachers-windows/select-teacher/select-teacher.component';

import { SubjectsApiService } from 'projects/school/src/app/services/modules/subjects-api/subjects-api.service';

import { SubjectTeacher } from 'projects/school/src/app/models/modules/subjects/subjects.model';


@Component({
  selector: 'app-subject-teachers',
  templateUrl: './subject-teachers.component.html',
  styleUrls: ['./subject-teachers.component.scss']
})
export class SubjectTeachersComponent implements OnInit {

  constructor(
    private router: Router,
    private subjectsApi: SubjectsApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalTwoComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;
  // @ViewChild('selectTeacherComponentReference', { read: SelectTeacherComponent, static: false }) selectTeacher!: SelectTeacherComponent;

  subjectTeachersGridData: any[] = [];

  deleteId = "";

  isFetchingGridData = false;
  isTeacherDeleting = false;

  ngOnInit(): void {
    this.getSubjectSubjectTeacher();
  }

  getSubjectSubjectTeacher(){
    this.isFetchingGridData = true;

    this.subjectsApi.getSubjectSubjectTeacher()
      .then(
        (res: any) => {
          console.log(res);
          this.isFetchingGridData = false;
          this.subjectTeachersGridData = res.docs;
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  createSubjectTeacher(teacherData: any){
    let data: SubjectTeacher = {
      subject: sessionStorage.getItem('school_subject_id') as string,
      teacher: {
        id: teacherData.id,
        data: {

        }
      }
    }

    this.subjectsApi.createSubjectTeacher(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.getSubjectSubjectTeacher();
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteSubjectTeacher(id: any){
    this.isTeacherDeleting = true;

    this.subjectsApi.deleteSubjectTeacher()
      .then(
        (res: any) => {
          console.log(res);
          this.isTeacherDeleting = false;
          this.getSubjectSubjectTeacher();
        },
        (err: any) => {
          console.log(err);
          this.isTeacherDeleting = false;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(id: any){
    this.deleteId = id;
    this.deleteModal.openModal();
  }

}

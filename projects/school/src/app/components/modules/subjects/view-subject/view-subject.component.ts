import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { SubjectFormComponent } from '../subject-form/subject-form.component';
import { SubjectTeachersComponent } from '../subject-teachers/subject-teachers.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { SubjectsApiService } from 'projects/school/src/app/services/modules/subjects-api/subjects-api.service';
// import { SubjectsPrintService } from 'projects/school/src/app/services/printing/subjects-print/subjects-print.service';

import { Subject } from 'projects/school/src/app/models/modules/subjects/subjects.model';


@Component({
  selector: 'app-view-subject',
  templateUrl: './view-subject.component.html',
  styleUrls: ['./view-subject.component.scss']
})
export class ViewSubjectComponent implements OnInit {

  constructor(
    private router: Router,
    private subjectsApi: SubjectsApiService,
    // private subjectsPrint: SubjectsPrintService,
  ) { }

  @ViewChild('subjectFormComponentReference', { read: SubjectFormComponent, static: false }) subjectForm!: SubjectFormComponent;
  @ViewChild('subjectTeachersComponentReference', { read: SubjectTeachersComponent, static: false }) subjectTeachers!: SubjectTeachersComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Subjects", url: "/home/subjects/all-subjects" },
    { text: "View Subject", url: "/home/subjects/view-subject" },
  ];

  subjectData: any;

  isSubjectLoading = false;
  isSubjectSaving = false;
  isSubjectDeleting = false;

  ngOnInit(): void {
    this.getSubject();
  }

  getSubject(){
    this.isSubjectLoading = true;

    this.subjectsApi.getSubject()
      .then(
        (res: any) => {
          console.log(res);
          this.subjectData = res;
          this.isSubjectLoading = false;

          this.subjectForm.subjectForm.controls.subjectCode.setValue(this.subjectData.data().subject_code);
          this.subjectForm.subjectForm.controls.subjectName.setValue(this.subjectData.data().subject_name);
          this.subjectForm.subjectForm.controls.term.setValue(this.subjectData.data().term.data.term_name);
          this.subjectForm.subjectForm.controls.department.setValue(this.subjectData.data().department);
          this.subjectForm.subjectForm.controls.description.setValue(this.subjectData.data().description);
        },
        (err: any) => {
          console.log(err);
          this.isSubjectLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateSubject(){
    console.log('u are saving a new subject');

    var data = {
      subject_code: this.subjectForm.subjectForm.controls.subjectCode.value,
      subject_name: this.subjectForm.subjectForm.controls.subjectName.value,
      term: this.subjectForm.subjectForm.controls.term.value,
      department: this.subjectForm.subjectForm.controls.department.value,
      description: this.subjectForm.subjectForm.controls.description.value,
    }

    console.log(data);
    this.isSubjectSaving = true;

    this.subjectsApi.updateSubject(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isSubjectSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isSubjectSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteSubject(){
    this.isSubjectDeleting = true;

    this.subjectsApi.deleteSubject()
      .then(
        (res: any) => {
          console.log(res);
          this.router.navigateByUrl('/home/subjects/all-subjects');
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
    // this.subjectsPrint.printViewSubject();
  }

}

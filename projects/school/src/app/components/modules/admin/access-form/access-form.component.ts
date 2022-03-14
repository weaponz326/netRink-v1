import { Component, OnInit, ViewChild } from '@angular/core';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component';

import { AdminApiService } from 'projects/school/src/app/services/modules/admin-api/admin-api.service';

import { UserAccess } from 'projects/school/src/app/models/modules/admin/admin.model';


@Component({
  selector: 'app-access-form',
  templateUrl: './access-form.component.html',
  styleUrls: ['./access-form.component.scss']
})
export class AccessFormComponent implements OnInit {

  constructor(
    private adminApi: AdminApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  accessForm: UserAccess = {
    admin_access: false,
    assessment_access: false,
    attendance_access: false,
    classes_stock_access: false,
    fees_access: false,
    lesson_plan_access: false,
    parents_access: false,
    payments_access: false,
    portal_access: false,
    reports_access: false,
    sections_access: false,
    settings_access: false,
    students_access: false,
    subjects_access: false,
    teachers_access: false,
    terms_access: false,
    timetable_access: false,
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getUserAccess();
  }

  getUserAccess(){
    this.adminApi.getUserAccess()
      .then(
        (res: any) => {
          console.log(res);

          this.accessForm.admin_access = res.data().admin_access;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updateUserAccess(){
    let access: UserAccess = {
      admin_access: this.accessForm.admin_access,
      assessment_access: this.accessForm.assessment_access,
      attendance_access: this.accessForm.attendance_access,
      classes_stock_access: this.accessForm.classes_stock_access,
      fees_access: this.accessForm.fees_access,
      lesson_plan_access: this.accessForm.lesson_plan_access,
      parents_access: this.accessForm.parents_access,
      payments_access: this.accessForm.payments_access,
      portal_access: this.accessForm.portal_access,
      reports_access: this.accessForm.reports_access,
      sections_access: this.accessForm.sections_access,
      settings_access: this.accessForm.settings_access,
      students_access: this.accessForm.students_access,
      subjects_access: this.accessForm.subjects_access,
      teachers_access: this.accessForm.teachers_access,
      terms_access: this.accessForm.terms_access,
      timetable_access: this.accessForm.timetable_access,
    }

    this.adminApi.updateUserAccess(access)
      .then(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setLevelAccess(level: string) {
    console.log("u are changing user level to " + level);

    if (level == 'Admin'){
      this.accessForm.admin_access = true;
      this.accessForm.assessment_access = true;
      this.accessForm.attendance_access = true;
      this.accessForm.classes_stock_access = true;
      this.accessForm.fees_access = true;
      this.accessForm.lesson_plan_access = true;
      this.accessForm.parents_access = true;
      this.accessForm.payments_access = true;
      this.accessForm.portal_access = true;
      this.accessForm.reports_access = true;
      this.accessForm.sections_access = true;
      this.accessForm.settings_access = true;
      this.accessForm.students_access = true;
      this.accessForm.subjects_access = true;
      this.accessForm.teachers_access = true;
      this.accessForm.terms_access = true;
      this.accessForm.timetable_access = true;
    }
    else if (level == 'Manager'){
      this.accessForm.admin_access = false;
      this.accessForm.assessment_access = true;
      this.accessForm.attendance_access = true;
      this.accessForm.classes_stock_access = true;
      this.accessForm.fees_access = true;
      this.accessForm.lesson_plan_access = true;
      this.accessForm.parents_access = true;
      this.accessForm.payments_access = true;
      this.accessForm.portal_access = false;
      this.accessForm.reports_access = true;
      this.accessForm.sections_access = false;
      this.accessForm.settings_access = true;
      this.accessForm.students_access = true;
      this.accessForm.subjects_access = true;
      this.accessForm.teachers_access = true;
      this.accessForm.terms_access = true;
      this.accessForm.timetable_access = true;
    }
    else if (level == 'Staff'){
      this.accessForm.admin_access = false;
      this.accessForm.assessment_access = false;
      this.accessForm.attendance_access = false;
      this.accessForm.classes_stock_access = false;
      this.accessForm.fees_access = false;
      this.accessForm.lesson_plan_access = false;
      this.accessForm.parents_access = false;
      this.accessForm.payments_access = false;
      this.accessForm.portal_access = false;
      this.accessForm.reports_access = false;
      this.accessForm.sections_access = false;
      this.accessForm.settings_access = false;
      this.accessForm.students_access = false;
      this.accessForm.subjects_access = false;
      this.accessForm.teachers_access = false;
      this.accessForm.terms_access = false;
      this.accessForm.timetable_access = false;
    }
  }

}

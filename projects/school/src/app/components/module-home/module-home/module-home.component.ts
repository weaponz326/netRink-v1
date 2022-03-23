import { Component, OnInit, ViewChild } from '@angular/core';

import { AccessToastComponent } from 'projects/personal/src/app/components/module-utilities/access-toast/access-toast.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { AdminApiService } from 'projects/school/src/app/services/modules/admin-api/admin-api.service';
import { TermsApiService } from 'projects/school/src/app/services/modules/terms-api/terms-api.service';


@Component({
  selector: 'app-module-home',
  templateUrl: './module-home.component.html',
  styleUrls: ['./module-home.component.scss']
})
export class ModuleHomeComponent implements OnInit {

  constructor(
    private adminApi: AdminApiService,
    private termsApi: TermsApiService,
  ) { }

  @ViewChild('accessToastComponentReference', { read: AccessToastComponent, static: false }) accessToast!: AccessToastComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  access: any;

  isAccessLoading = false;

  ngOnInit(): void {
    this.getUserAccess();
    this.getActiveTerm();
  }

  getUserAccess() {
    this.isAccessLoading = true;

    this.adminApi.getUserAccess()
      .then(
        (res: any) => {
          console.log(res);

          this.access = res.data();
          const data = JSON.stringify(res.data());
          localStorage.setItem("schoolUserAccess", data);

          this.isAccessLoading = false;
        },
        (err: any) => {
          console.log(err);
          this.isAccessLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  getActiveTerm(){
    this.termsApi.getActiveTerm()
      .then(
        (res: any) => {
          console.log(res);

          let data = {
            id: res.data().id,
            data: {
              term_code: res.data().data.term_code,
              term_name: res.data().data.term_name,
            }
          }

          console.log(data);

          const dataString = JSON.stringify(data);
          localStorage.setItem('schoolActiveTerm', dataString);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  checkAccess(module: string){
    console.log(this.access);

    if (module == "admin" && !this.access.admin_access)
      this.accessToast.openToast();
    else if (module == "portal" && !this.access.portal_access)
      this.accessToast.openToast();
    else if (module == "settings" && !this.access.settings_access)
      this.accessToast.openToast();
    else if ("assessment_access"  && !this.access.assessment_access)
      this.accessToast.openToast();
    else if ("attendance_access"  && !this.access.attendance_access)
      this.accessToast.openToast();
    else if ("classes_access"  && !this.access.classes_access)
      this.accessToast.openToast();
    else if ("fees_access"  && !this.access.fees_access)
      this.accessToast.openToast();
    else if ("lesson_notes_access"  && !this.access.lesson_notes_access)
      this.accessToast.openToast();
    else if ("parents_access"  && !this.access.parents_access)
      this.accessToast.openToast();
    else if ("payments_access"  && !this.access.payments_access)
      this.accessToast.openToast();
    else if ("reports_access"  && !this.access.reports_access)
      this.accessToast.openToast();
    else if ("sections_access"  && !this.access.sections_access)
      this.accessToast.openToast();
    else if ("students_access"  && !this.access.students_access)
      this.accessToast.openToast();
    else if ("subjects_access"  && !this.access.subjects_access)
      this.accessToast.openToast();
    else if ("teachers_access"  && !this.access.teachers_access)
      this.accessToast.openToast();
    else if ("terms_access"  && !this.access.terms_access)
      this.accessToast.openToast();
    else if ("timetable_access"  && !this.access.timetable_access)
      this.accessToast.openToast();
    else
      console.log("Access granted :)");
  }

}

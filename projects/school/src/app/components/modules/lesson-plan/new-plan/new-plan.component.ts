import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { serverTimestamp } from 'firebase/firestore';

import { PlanFormComponent } from '../plan-form/plan-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { LessonPlanApiService } from 'projects/school/src/app/services/modules/lesson-plan-api/lesson-plan-api.service';

import { LessonPlan } from 'projects/school/src/app/models/modules/lesson-plan/lesson-plan.model';


@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.component.html',
  styleUrls: ['./new-plan.component.scss']
})
export class NewPlanComponent implements OnInit {

  constructor(
    private router: Router,
    private storage: AngularFireStorage,
    private lessonPlanApi: LessonPlanApiService
  ) { }

  @ViewChild('planFormComponentReference', { read: PlanFormComponent, static: false }) planForm!: PlanFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Plan", url: "/home/lesson-plan/new-plan" },
  ];

  isPlanSaving = false;

  ngOnInit(): void {
  }

  createLessonPlan(){
    console.log('u are saving a new plan');

    let data: LessonPlan = {
      created_at: serverTimestamp(),
      account: localStorage.getItem('school_id') as string,
      plan_code: this.planForm.planForm.controls.planCode.value,
      plan_name: this.planForm.planForm.controls.planName.value,
      plan_date: this.planForm.planForm.controls.planDate.value,
      term: {
        id: this.planForm.selectedTermId,
        data: this.planForm.selectedTermData,
      },
      subject: {
        id: this.planForm.selectedSubjectId,
        data: this.planForm.selectedSubjectData,
      },
      teacher: {
        id: this.planForm.selectedTeacherId,
        data: this.planForm.selectedTeacherData,
      },
      objectives: "",
      materials: "",
      introduction: "",
      main_activity: "",
      closure: "",
      assessment: "",
    }

    console.log(data);
    this.isPlanSaving = true;

    this.lessonPlanApi.createLessonPlan(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isPlanSaving = false;

          sessionStorage.setItem('school_lesson_plan_id', res.id);
          this.router.navigateByUrl('/home/lesson-plan/view-plan');
        },
        (err: any) => {
          console.log(err);
          this.isPlanSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

}

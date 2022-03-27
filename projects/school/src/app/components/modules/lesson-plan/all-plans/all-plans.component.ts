import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { NewPlanComponent } from '../new-plan/new-plan.component'
import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';

import { ActiveTermService } from 'projects/school/src/app/services/active-term/active-term.service';
import { LessonPlanApiService } from 'projects/school/src/app/services/modules/lesson-plan-api/lesson-plan-api.service';
// import { LessonPlanPrintService } from 'projects/school/src/app/services/printing/lessonPlan-print/lessonPlan-print.service';


@Component({
  selector: 'app-all-plans',
  templateUrl: './all-plans.component.html',
  styleUrls: ['./all-plans.component.scss']
})
export class AllPlansComponent implements OnInit {

  constructor(
    private router: Router,
    private activeTerm: ActiveTermService,
    private lessonPlanApi: LessonPlanApiService,
    // private lessonPlanPrint: LessonPlanPrintService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('newPlanComponentReference', { read: NewPlanComponent, static: false }) newPlan!: NewPlanComponent;
  @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;

  navHeading: any[] = [
    { text: "All Lesson Plans", url: "/home/lesson-plan/all-plans" },
  ];

  activeTermName: any;

  lessonPlanGridData: any[] = [];

  isFetchingGridData: boolean =  false;
  isDataAvailable: boolean =  true;

  firstInResponse: any = [];
  lastInResponse: any = [];
  nextStartAfter: any = [];
  prevStartAt: any = [];
  pageNumber = 0;
  disableNext: boolean = true;
  disablePrev: boolean = true;

  sortParams = {
    field: "created_at",
    direction: "desc"
  }

  ngOnInit(): void {
    this.getActiveTerm();
    this.getAccountLessonPlan();
  }

  getActiveTerm(){
    this.activeTermName = this.activeTerm.getActiveTerm().data.term_name;
  }

  getAccountLessonPlan(){
    this.isFetchingGridData = true;

    this.lessonPlanApi.getAccountLessonPlan(this.sortParams, 20)
      .then(
        (res: any) => {
          console.log(res);
          this.lessonPlanGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber = 1;

          if (!res.docs.length) this.isDataAvailable = false;
          else this.isDataAvailable = true;

          if (!res.docs.length || res.docs.length < 20){
            this.disableNext = true;
            this.disablePrev = true;
          }
          else{
            this.disableNext = false;
            this.disablePrev = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  nextPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.lessonPlanApi.getAccountLessonPlanNext(this.sortParams, 20, this.nextStartAfter)
      .then(
        (res: any) => {
          console.log(res);
          this.lessonPlanGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber++;

          if (res.docs.length < 20){
            this.disableNext = true;
            this.disablePrev = false;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  previousPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.lessonPlanApi.getAccountLessonPlanPrev(this.sortParams, 20, this.prevStartAt)
      .then(
        (res: any) => {
          console.log(res);
          this.lessonPlanGridData = res.docs;

          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber--;

          if (this.pageNumber == 1){
            this.disableNext = false;
            this.disablePrev = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  sortTable(field: any, direction: any){
    this.sortParams.field = field;
    this.sortParams.direction = direction;

    this.getAccountLessonPlan();
  }

  viewLessonPlan(lessonPlanId: any){
    console.log(lessonPlanId);

    sessionStorage.setItem('school_lesson_plan_id', lessonPlanId);
    this.router.navigateByUrl('/home/lesson-plan/view-plan');
  }

  openTermWindow(){
    console.log("You are opening select term window")
    this.selectTerm.openModal();
  }

  onTermSelected(termData: any){
    console.log(termData);

    this.activeTerm.setActiveTerm(termData);
    this.getActiveTerm();
    this.getAccountLessonPlan();
  }

  onPrint(){
    console.log("lets start printing...");
    // this.lessonPlanPrint.printAllLessonPlan();
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import moment from 'moment/moment';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { LessonPlanApiService } from 'projects/school/src/app/services/modules/lesson-plan-api/lesson-plan-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private lessonPlanApi: LessonPlanApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/customers/dashboard" },
  ];

  weekLessonPlanData: any;

  weekLessonPlanCount: number = 0;

  lessonPlanLineChartData: ChartDataSets[] = [{ data: [0], label: 'Menu Groups' }];
  lessonPlanLineChartLabels: Label[] = [""]

  chartOptions = {};

  today = moment();

  ngOnInit(): void {
    this.initChart();
    this.getWeekLessonPlan();
  }

  initChart(){
    this.chartOptions = {
      responsive: true,
      scales: {
        yAxes: [{
          min: 0,
          ticks: {
            stepSize: 1,
            beginAtZero: true,
          }
        }]
      }
    };
  }

  getWeekLessonPlan(){
    this.lessonPlanApi.getWeekLessonPlan(moment(this.today).add(-1, 'months').toDate(), this.today.toDate())
      .then(
        res => {
          console.log(res);
          this.weekLessonPlanData = res.docs;
          this.weekLessonPlanCount = res.docs.length;

          this.setLessonPlanChartData();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setLessonPlanChartData(){
    this.lessonPlanLineChartLabels = [];
    for (let i = 7; i > 0; i--) {
      var d = moment(this.today).add(-i, 'days');
      this.lessonPlanLineChartLabels.push(d.toDate().toISOString().slice(0, 10));
    }
    console.log(this.lessonPlanLineChartLabels);

    let dataCount: any[] = [];
    for (let i = 7; i > 0; i--) {
      dataCount.push(0);
    }
    console.log(dataCount);

    this.weekLessonPlanData.forEach((lessonPlan: any) => {
      var lessonPlanDate = lessonPlan.data().created_at.toDate().toISOString().slice(0, 10);
      for (let i = 7; i > 0; i--){
        if (this.lessonPlanLineChartLabels[i] == lessonPlanDate){
          dataCount[i]++;
        }
      }
    })
    console.log(dataCount);
    this.lessonPlanLineChartData = [{ data: dataCount, label: 'LessonPlan' }];
  }

}

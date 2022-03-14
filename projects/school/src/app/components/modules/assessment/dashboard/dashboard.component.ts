import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import moment from 'moment/moment';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { AssessmentApiService } from 'projects/school/src/app/services/modules/assessment-api/assessment-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private assessmentApi: AssessmentApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/assessment/dashboard" },
  ];

  weekAssessmentData: any;

  weekAssessmentCount: number = 0;

  assessmentLineChartData: ChartDataSets[] = [{ data: [0], label: 'Menu Groups' }];
  assessmentLineChartLabels: Label[] = [""]

  chartOptions = {};

  today = moment();

  ngOnInit(): void {
    this.initChart();
    this.getWeekAssessment();
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

  getWeekAssessment(){
    this.assessmentApi.getWeekAssessment(moment(this.today).add(-1, 'months').toDate(), this.today.toDate())
      .then(
        res => {
          console.log(res);
          this.weekAssessmentData = res.docs;
          this.weekAssessmentCount = res.docs.length;

          this.setAssessmentChartData();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setAssessmentChartData(){
    this.assessmentLineChartLabels = [];
    for (let i = 7; i > 0; i--) {
      var d = moment(this.today).add(-i, 'days');
      this.assessmentLineChartLabels.push(d.toDate().toISOString().slice(0, 10));
    }
    console.log(this.assessmentLineChartLabels);

    let dataCount: any[] = [];
    for (let i = 7; i > 0; i--) {
      dataCount.push(0);
    }
    console.log(dataCount);

    this.weekAssessmentData.forEach((assessment: any) => {
      var assessmentDate = assessment.data().created_at.toDate().toISOString().slice(0, 10);
      for (let i = 7; i > 0; i--){
        if (this.assessmentLineChartLabels[i] == assessmentDate){
          dataCount[i]++;
        }
      }
    })
    console.log(dataCount);
    this.assessmentLineChartData = [{ data: dataCount, label: 'Assessment' }];
  }

}

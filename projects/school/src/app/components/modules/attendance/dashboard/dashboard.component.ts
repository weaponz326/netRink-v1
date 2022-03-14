import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import moment from 'moment/moment';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { AttendanceApiService } from 'projects/school/src/app/services/modules/attendance-api/attendance-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private attendanceApi: AttendanceApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/attendance/dashboard" },
  ];

  weekAttendanceData: any;

  weekAttendanceCount: number = 0;

  attendanceLineChartData: ChartDataSets[] = [{ data: [0], label: 'Menu Groups' }];
  attendanceLineChartLabels: Label[] = [""]

  chartOptions = {};

  today = moment();

  ngOnInit(): void {
    this.initChart();
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


}

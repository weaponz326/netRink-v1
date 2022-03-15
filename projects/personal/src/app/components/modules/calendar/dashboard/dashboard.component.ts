import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import moment from 'moment/moment';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private calendarApi: CalendarApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/calendar/dashboard" },
  ];

  monthCalendarsData: any;
  weekSchedulesData: any;

  monthCalendarsCount: number = 0;
  weekSchedulesCount: number = 0;

  schedulesLineChartData: ChartDataSets[] = [{ data: [0], label: 'Schedules' }];
  schedulesLineChartLabels: Label[] = [""]

  chartOptions = {};

  today = moment();

  ngOnInit(): void {
    this.initChart();

    this.getMonthCalendar();
    this.getWeekSchedule();
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

  getMonthCalendar(){
    this.calendarApi.getMonthCalendar(moment(this.today).add(-1, 'months').toDate(), this.today.toDate())
      .then(
        res => {
          console.log(res);
          this.monthCalendarsData = res.docs;
          this.monthCalendarsCount = res.docs.length;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getWeekSchedule(){
    this.calendarApi.getWeekSchedule(moment(this.today).add(-6, 'days').toDate(), this.today.toDate())
      .then(
        res => {
          console.log(res);
          this.weekSchedulesData = res.docs;
          this.weekSchedulesCount = res.docs.length;

          this.setScheduleChartData();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setScheduleChartData(){
    this.schedulesLineChartLabels = [];
    for (let i = 6; i >= 0; i--) {
      var d = moment(this.today).add(-i, 'days');
      this.schedulesLineChartLabels.push(d.toDate().toISOString().slice(0, 10));
    }
    console.log(this.schedulesLineChartLabels);

    let dataCount: any[] = [];
    for (let i = 6; i >= 0; i--) {
      dataCount.push(0);
    }
    console.log(dataCount);

    this.weekSchedulesData.forEach((schedule: any) => {
      var scheduleDate = schedule.data().created_at.toDate().toISOString().slice(0, 10);
      for (let i = 6; i >= 0; i--){
        if (this.schedulesLineChartLabels[i] == scheduleDate){
          dataCount[i]++;
        }
      }
    })
    console.log(dataCount);
    this.schedulesLineChartData = [{ data: dataCount, label: 'Schedules' }];
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import moment from 'moment/moment';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private tasksApi: TasksApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/tasks/dashboard" },
  ];

  weekTaskGroupsData: any;
  weekTaskItemsData: any;

  weekTaskGroupsCount: number = 0;
  weekTaskItemsCount: number = 0;

  taskGroupsLineChartData: ChartDataSets[] = [{ data: [0], label: 'Task Groups' }];
  taskGroupsLineChartLabels: Label[] = [""]
  taskItemsLineChartData: ChartDataSets[] = [{ data: [0], label: 'Task Items' }];
  taskItemsLineChartLabels: Label[] = [""]

  chartOptions = {};

  today = moment();

  ngOnInit(): void {
    this.initChart();

    this.getWeekTaskGroup();
    this.getWeekTaskItem();
  }

  initChart(){
    this.chartOptions = {
      responsive: true,
      scales: {
        yAxes: [{
          beginAtZero: true,
          min: 0,
          ticks: {
            stepSize: 1
          }
        }]
      }
    };
  }

  getWeekTaskGroup(){
    this.tasksApi.getWeekTaskGroup(moment(this.today).add(-1, 'months'), this.today)
      .then(
        res => {
          console.log(res);
          this.weekTaskGroupsData = res.docs;
          this.weekTaskGroupsCount = res.docs.length;

          this.setTaskGroupChartData();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getWeekTaskItem(){
    this.tasksApi.getWeekTaskItem(moment(this.today).add(-6, 'days'), this.today)
      .then(
        res => {
          console.log(res);
          this.weekTaskItemsData = res.docs;
          this.weekTaskItemsCount = res.docs.length;

          this.setTaskItemChartData();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setTaskGroupChartData(){
    this.taskGroupsLineChartLabels = [];
    for (let i = 7; i > 0; i--) {
      var d = moment(this.today).add(-i, 'days');
      this.taskGroupsLineChartLabels.push(d.toDate().toISOString().slice(0, 10));
    }
    console.log(this.taskGroupsLineChartLabels);

    let dataCount: any[] = [];
    for (let i = 7; i > 0; i--) {
      dataCount.push(0);
    }
    console.log(dataCount);

    this.weekTaskGroupsData.forEach((taskGroup: any) => {
      var taskGroupDate = taskGroup.data().created_at.toDate().toISOString().slice(0, 10);
      for (let i = 7; i > 0; i--){
        if (this.taskGroupsLineChartLabels[i] == taskGroupDate){
          dataCount[i]++;
        }
      }
    })
    console.log(dataCount);
    this.taskGroupsLineChartData = [{ data: dataCount, label: 'TaskGroups' }];
  }

  setTaskItemChartData(){
    this.taskItemsLineChartLabels = [];
    for (let i = 7; i > 0; i--) {
      var d = moment(this.today).add(-i, 'days');
      this.taskItemsLineChartLabels.push(d.toDate().toISOString().slice(0, 10));
    }
    console.log(this.taskItemsLineChartLabels);

    let dataCount: any[] = [];
    for (let i = 7; i > 0; i--) {
      dataCount.push(0);
    }
    console.log(dataCount);

    this.weekTaskItemsData.forEach((taskItem: any) => {
      var taskItemDate = taskItem.data().created_at.toDate().toISOString().slice(0, 10);
      for (let i = 7; i > 0; i--){
        if (this.taskItemsLineChartLabels[i] == taskItemDate){
          dataCount[i]++;
        }
      }
    })
    console.log(dataCount);
    this.taskItemsLineChartData = [{ data: dataCount, label: 'TaskItems' }];
  }

}

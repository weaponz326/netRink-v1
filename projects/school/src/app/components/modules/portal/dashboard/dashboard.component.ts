import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import moment from 'moment/moment';

import { PortalApiService } from 'projects/school/src/app/services/modules/portal-api/portal-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private portalApi: PortalApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/portal/dashboard" },
  ];

  weekRinkOutCount: number = 0;
  weekRinkInCount: number = 0;

  rinksLineChartData: ChartDataSets[] = [{ data: [0], label: 'Rink In' }, { data: [0], label: 'Rink Out' }];
  rinksLineChartLabels: Label[] = [""];
  rinkInGlobalData: any[] = [];
  rinkOutGlobalData: any[] = [];

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

  getWeekRinkIn(){
    this.portalApi.getWeekRinkIn(moment(this.today).add(-6, 'days').toDate(), this.today.toDate())
      .then(
        res => {
          console.log(res);
          this.weekRinkInCount = res.docs.length;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getWeekRinkOut(){
    this.portalApi.getWeekRinkOut(moment(this.today).add(-6, 'days').toDate(), this.today.toDate())
      .then(
        res => {
          console.log(res);
          this.weekRinkOutCount = res.docs.length;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setRinkLineChartLabels(data: any){
    this.rinksLineChartLabels = [];
    for(let x = 0; x < data.length; x++){
      this.rinksLineChartLabels.push(data[x].date);
    }
    console.log(this.rinksLineChartLabels);
  }

  // setRinkInChartData(data: any){
  //   let rawRinkInData = [];
  //   for(let x = 0; x < data.length; x++){
  //     rawRinkInData.push(data[x].count);
  //   }
  //   console.log(rawRinkInData);

  //   this.rinkInGlobalData = rawRinkInData;
  //   this.rinksLineChartData = [
  //     { data: this.rinkOutGlobalData, label: 'Rink In' },
  //     { data: rawRinkInData, label: 'Rink Out' }
  //   ];
  // }

  // setRinkOutChartData(data: any){
  //   let rawRinkOutData = [];
  //   for(let x = 0; x < data.length; x++){
  //     rawRinkOutData.push(data[x].count);
  //   }
  //   console.log(rawRinkOutData);

  //   this.rinkOutGlobalData = rawRinkOutData;
  //   this.rinksLineChartData = [
  //     { data: rawRinkOutData, label: 'Rink In' },
  //     { data: this.rinkInGlobalData, label: 'Rink Out' }
  //   ];
  // }

}

import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import moment from 'moment/moment';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private menuApi: MenuApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/menu/dashboard" },
  ];

  weekMenuGroupsData: any;
  weekMenuItemsData: any;

  weekMenuGroupsCount: number = 0;
  weekMenuItemsCount: number = 0;

  menuGroupsLineChartData: ChartDataSets[] = [{ data: [0], label: 'Menu Groups' }];
  menuGroupsLineChartLabels: Label[] = [""]
  menuItemsLineChartData: ChartDataSets[] = [{ data: [0], label: 'Menu Items' }];
  menuItemsLineChartLabels: Label[] = [""]

  chartOptions = {};

  today = moment();

  ngOnInit(): void {
    this.initChart();

    this.getWeekMenuGroup();
    this.getWeekMenuItem();
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

  getWeekMenuGroup(){
    this.menuApi.getWeekMenuGroup(moment(this.today).add(-1, 'months'), this.today)
      .then(
        res => {
          console.log(res);
          this.weekMenuGroupsData = res.docs;
          this.weekMenuGroupsCount = res.docs.length;

          this.setMenuGroupChartData();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getWeekMenuItem(){
    this.menuApi.getWeekMenuItem(moment(this.today).add(-6, 'days'), this.today)
      .then(
        res => {
          console.log(res);
          this.weekMenuItemsData = res.docs;
          this.weekMenuItemsCount = res.docs.length;

          this.setMenuItemChartData();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setMenuGroupChartData(){
    this.menuGroupsLineChartLabels = [];
    for (let i = 7; i > 0; i--) {
      var d = moment(this.today).add(-i, 'days');
      this.menuGroupsLineChartLabels.push(d.toDate().toISOString().slice(0, 10));
    }
    console.log(this.menuGroupsLineChartLabels);

    let dataCount: any[] = [];
    for (let i = 7; i > 0; i--) {
      dataCount.push(0);
    }
    console.log(dataCount);

    this.weekMenuGroupsData.forEach((menuGroup: any) => {
      var menuGroupDate = menuGroup.data().created_at.toDate().toISOString().slice(0, 10);
      for (let i = 7; i > 0; i--){
        if (this.menuGroupsLineChartLabels[i] == menuGroupDate){
          dataCount[i]++;
        }
      }
    })
    console.log(dataCount);
    this.menuGroupsLineChartData = [{ data: dataCount, label: 'MenuGroups' }];
  }

  setMenuItemChartData(){
    this.menuItemsLineChartLabels = [];
    for (let i = 7; i > 0; i--) {
      var d = moment(this.today).add(-i, 'days');
      this.menuItemsLineChartLabels.push(d.toDate().toISOString().slice(0, 10));
    }
    console.log(this.menuItemsLineChartLabels);

    let dataCount: any[] = [];
    for (let i = 7; i > 0; i--) {
      dataCount.push(0);
    }
    console.log(dataCount);

    this.weekMenuItemsData.forEach((menuItem: any) => {
      var menuItemDate = menuItem.data().created_at.toDate().toISOString().slice(0, 10);
      for (let i = 7; i > 0; i--){
        if (this.menuItemsLineChartLabels[i] == menuItemDate){
          dataCount[i]++;
        }
      }
    })
    console.log(dataCount);
    this.menuItemsLineChartData = [{ data: dataCount, label: 'MenuItems' }];
  }

}

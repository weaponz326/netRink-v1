import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import moment from 'moment/moment';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { OrdersApiService } from 'projects/restaurant/src/app/services/modules/orders-api/orders-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private ordersApi: OrdersApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/orders/dashboard" },
  ];

  weekOrdersData: any;

  weekOrdersCount: number = 0;

  ordersLineChartData: ChartDataSets[] = [{ data: [0], label: 'Menu Groups' }];
  ordersLineChartLabels: Label[] = [""]

  chartOptions = {};

  today = moment();

  ngOnInit(): void {
    this.initChart();
    this.getWeekOrder();
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

  getWeekOrder(){
    this.ordersApi.getWeekOrder(moment(this.today).add(-1, 'months').toDate(), this.today.toDate())
      .then(
        res => {
          console.log(res);
          this.weekOrdersData = res.docs;
          this.weekOrdersCount = res.docs.length;

          this.setOrderChartData();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setOrderChartData(){
    this.ordersLineChartLabels = [];
    for (let i = 6; i >= 0; i--) {
      var d = moment(this.today).add(-i, 'days');
      this.ordersLineChartLabels.push(d.toDate().toISOString().slice(0, 10));
    }
    console.log(this.ordersLineChartLabels);

    let dataCount: any[] = [];
    for (let i = 6; i >= 0; i--) {
      dataCount.push(0);
    }
    console.log(dataCount);

    this.weekOrdersData.forEach((order: any) => {
      var orderDate = order.data().created_at.toDate().toISOString().slice(0, 10);
      for (let i = 6; i >= 0; i--){
        if (this.ordersLineChartLabels[i] == orderDate){
          dataCount[i]++;
        }
      }
    })
    console.log(dataCount);
    this.ordersLineChartData = [{ data: dataCount, label: 'Orders' }];
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import moment from 'moment/moment';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { DeliveriesApiService } from 'projects/restaurant/src/app/services/modules/deliveries-api/deliveries-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private deliveriesApi: DeliveriesApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/deliveries/dashboard" },
  ];

  weekDeliveriesData: any;

  weekDeliveriesCount: number = 0;

  deliveriesLineChartData: ChartDataSets[] = [{ data: [0], label: 'Menu Groups' }];
  deliveriesLineChartLabels: Label[] = [""]

  chartOptions = {};

  today = moment();

  ngOnInit(): void {
    this.initChart();
    this.getWeekDelivery();
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

  getWeekDelivery(){
    this.deliveriesApi.getWeekDelivery(moment(this.today).add(-1, 'months').toDate(), this.today.toDate())
      .then(
        res => {
          console.log(res);
          this.weekDeliveriesData = res.docs;
          this.weekDeliveriesCount = res.docs.length;

          this.setDeliveryChartData();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setDeliveryChartData(){
    this.deliveriesLineChartLabels = [];
    for (let i = 7; i > 0; i--) {
      var d = moment(this.today).add(-i, 'days');
      this.deliveriesLineChartLabels.push(d.toDate().toISOString().slice(0, 10));
    }
    console.log(this.deliveriesLineChartLabels);

    let dataCount: any[] = [];
    for (let i = 7; i > 0; i--) {
      dataCount.push(0);
    }
    console.log(dataCount);

    this.weekDeliveriesData.forEach((delivery: any) => {
      var deliveryDate = delivery.data().created_at.toDate().toISOString().slice(0, 10);
      for (let i = 7; i > 0; i--){
        if (this.deliveriesLineChartLabels[i] == deliveryDate){
          dataCount[i]++;
        }
      }
    })
    console.log(dataCount);
    this.deliveriesLineChartData = [{ data: dataCount, label: 'Deliveries' }];
  }

}

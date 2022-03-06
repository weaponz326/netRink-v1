import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import moment from 'moment/moment';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { CustomersApiService } from 'projects/restaurant/src/app/services/modules/customers-api/customers-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private customersApi: CustomersApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/customers/dashboard" },
  ];

  weekCustomersData: any;

  weekCustomersCount: number = 0;

  customersLineChartData: ChartDataSets[] = [{ data: [0], label: 'Menu Groups' }];
  customersLineChartLabels: Label[] = [""]

  chartOptions = {};

  today = moment();

  ngOnInit(): void {
    this.initChart();
    this.getWeekCustomer();
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

  getWeekCustomer(){
    this.customersApi.getWeekCustomer(moment(this.today).add(-1, 'months').toDate(), this.today.toDate())
      .then(
        res => {
          console.log(res);
          this.weekCustomersData = res.docs;
          this.weekCustomersCount = res.docs.length;

          this.setCustomerChartData();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setCustomerChartData(){
    this.customersLineChartLabels = [];
    for (let i = 7; i > 0; i--) {
      var d = moment(this.today).add(-i, 'days');
      this.customersLineChartLabels.push(d.toDate().toISOString().slice(0, 10));
    }
    console.log(this.customersLineChartLabels);

    let dataCount: any[] = [];
    for (let i = 7; i > 0; i--) {
      dataCount.push(0);
    }
    console.log(dataCount);

    this.weekCustomersData.forEach((customer: any) => {
      var customerDate = customer.data().created_at.toDate().toISOString().slice(0, 10);
      for (let i = 7; i > 0; i--){
        if (this.customersLineChartLabels[i] == customerDate){
          dataCount[i]++;
        }
      }
    })
    console.log(dataCount);
    this.customersLineChartData = [{ data: dataCount, label: 'Customers' }];
  }

}

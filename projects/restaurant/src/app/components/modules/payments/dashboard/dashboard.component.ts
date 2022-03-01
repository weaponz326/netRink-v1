import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import moment from 'moment/moment';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { PaymentsApiService } from 'projects/restaurant/src/app/services/modules/payments-api/payments-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private paymentsApi: PaymentsApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/payments/dashboard" },
  ];

  weekPaymentsData: any;

  weekPaymentsCount: number = 0;
  weekPaymentsTotal: number = 0;

  paymentsLineChartData: ChartDataSets[] = [{ data: [0], label: 'Menu Groups' }];
  paymentsLineChartLabels: Label[] = [""]

  chartOptions = {};

  today = moment();

  ngOnInit(): void {
    this.initChart();

    this.getWeekPayment();
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

  getWeekPayment(){
    this.paymentsApi.getWeekPayment(moment(this.today).add(-1, 'months').toDate(), this.today.toDate())
      .then(
        res => {
          console.log(res);
          this.weekPaymentsData = res.docs;
          this.weekPaymentsCount = res.docs.length;

          this.setPaymentChartData();
          this.calculateTotalPayments();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setPaymentChartData(){
    this.paymentsLineChartLabels = [];
    for (let i = 7; i > 0; i--) {
      var d = moment(this.today).add(-i, 'days');
      this.paymentsLineChartLabels.push(d.toDate().toISOString().slice(0, 10));
    }
    console.log(this.paymentsLineChartLabels);

    let dataCount: any[] = [];
    for (let i = 7; i > 0; i--) {
      dataCount.push(0);
    }
    console.log(dataCount);

    this.weekPaymentsData.forEach((payment: any) => {
      var paymentDate = payment.data().created_at.toDate().toISOString().slice(0, 10);
      for (let i = 7; i > 0; i--){
        if (this.paymentsLineChartLabels[i] == paymentDate){
          dataCount[i]++;
        }
      }
    })
    console.log(dataCount);
    this.paymentsLineChartData = [{ data: dataCount, label: 'Payments' }];
  }

  calculateTotalPayments(){
    this.weekPaymentsTotal = 0;

    this.weekPaymentsData.forEach((payment: any) => {
      this.weekPaymentsTotal = payment.data().amount_paid;
    })
    console.log(this.weekPaymentsTotal);
  }

}

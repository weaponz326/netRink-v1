import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import moment from 'moment/moment';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private accountsApi: AccountsApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/accounts/dashboard" },
  ];

  allAccountsData: any;
  weekTransactionsData: any;

  allAccountsCount: number = 0;
  weekTransactionsCount: number = 0;

  transactionsLineChartData: ChartDataSets[] = [{ data: [0], label: 'Transactions' }];
  transactionsLineChartLabels: Label[] = [""]

  chartOptions = {};

  today = moment();

  ngOnInit(): void {
    this.initChart();

    this.getAllUserAccount();
    this.getWeekTransaction();
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

  getAllUserAccount(){
    this.accountsApi.getAllUserAccount()
      .then(
        res => {
          console.log(res);
          this.allAccountsData = res.docs;
          this.allAccountsCount = res.docs.length;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getWeekTransaction(){
    this.accountsApi.getWeekTransaction(moment(this.today).add(-6, 'days'), this.today)
      .then(
        res => {
          console.log(res);
          this.weekTransactionsData = res.docs;
          this.weekTransactionsCount = res.docs.length;

          this.setTransactionChartData();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setTransactionChartData(){
    this.transactionsLineChartLabels = [];
    for (let i = 7; i > 0; i--) {
      var d = moment(this.today).add(-i, 'days');
      this.transactionsLineChartLabels.push(d.toDate().toISOString().slice(0, 10));
    }
    console.log(this.transactionsLineChartLabels);

    let dataCount: any[] = [];
    for (let i = 7; i > 0; i--) {
      dataCount.push(0);
    }
    console.log(dataCount);

    this.weekTransactionsData.forEach((transaction: any) => {
      var transactionDate = transaction.data().created_at.toDate().toISOString().slice(0, 10);
      for (let i = 7; i > 0; i--){
        if (this.transactionsLineChartLabels[i] == transactionDate){
          dataCount[i]++;
        }
      }
    })
    console.log(dataCount);
    this.transactionsLineChartData = [{ data: dataCount, label: 'Transactions' }];
  }

}

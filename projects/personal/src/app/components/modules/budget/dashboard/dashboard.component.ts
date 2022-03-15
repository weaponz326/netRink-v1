import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import moment from 'moment/moment';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private budgetApi: BudgetApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/budget/dashboard" },
  ];

  monthBudgetCount = 0;
  weekIncomeCount = 0;
  weekExpenditureCount = 0;

  weekIncomeData: any[] = [];
  weekExpenditureData: any[] = [];

  ieBarChartData: ChartDataSets[] = [{ data: [0], label: 'Income' }, { data: [0], label: 'Expendture' }];
  ieBarChartLabels: Label[] = [""];

  iePieChartLabels: Label[] = ['Income', 'Expenditure'];
  iePieChartData: SingleDataSet = [0, 0];

  chartOptions = {};

  today = moment();

  ngOnInit(): void {
    this.initChart();

    this.getMonthBudget();
    this.getWeekIncome();
    this.getWeekExpenditure();
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

  getMonthBudget(){
    this.budgetApi.getMonthBudget(moment(this.today).add(-7, 'days').toDate(), this.today.toDate())
      .then(
        res => {
          console.log(res);
          this.monthBudgetCount = res.docs.length;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getWeekIncome(){
    this.budgetApi.getWeekIncome(moment(this.today).add(-7, 'days').toDate(), this.today.toDate())
      .then(
        res => {
          console.log(res);
          this.weekIncomeData = res.docs;
          this.weekIncomeCount = res.docs.length;
          this.iePieChartData[0] = res.docs.length;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getWeekExpenditure(){
    this.budgetApi.getWeekExpenditure(moment(this.today).add(-1, 'months').toDate(), this.today.toDate())
      .then(
        res => {
          console.log(res);
          this.weekExpenditureData = res.docs;
          this.weekExpenditureCount = res.docs.length;
          this.iePieChartData[1] = res.docs.length;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setIEBarChartLabels(data: any){
    this.ieBarChartLabels = [];
    for (let i = 6; i >= 0; i--) {
      var d = moment(this.today).add(-i, 'days');
      this.ieBarChartLabels.push(d.toDate().toISOString().slice(0, 10));
    }
    console.log(this.ieBarChartLabels);
  }

  // setIncomeChartData(data: any){
  //   let rawIncomeData = [];
  //   for(let x = 0; x < data.length; x++){
  //     rawIncomeData.push(data[x].count);
  //   }
  //   console.log(rawIncomeData);
  //   this.weekIncomeData = rawIncomeData;
  // }

  // setExpenditureChartData(data: any){
  //   let rawExpenditureData = [];
  //   for(let x = 0; x < data.length; x++){
  //     rawExpenditureData.push(data[x].count);
  //   }
  //   console.log(rawExpenditureData);
  //   this.weekExpenditureData = rawExpenditureData;
  // }

}

import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import moment from 'moment/moment';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { ReservationsApiService } from 'projects/restaurant/src/app/services/modules/reservations-api/reservations-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private reservationsApi: ReservationsApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/reservations/dashboard" },
  ];

  weekReservationsData: any;

  weekReservationsCount: number = 0;

  reservationsLineChartData: ChartDataSets[] = [{ data: [0], label: 'Menu Groups' }];
  reservationsLineChartLabels: Label[] = [""]

  chartOptions = {};

  today = moment();

  ngOnInit(): void {
    this.initChart();
    this.getWeekReservation();
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

  getWeekReservation(){
    this.reservationsApi.getWeekReservation(moment(this.today).add(-1, 'months').toDate(), this.today.toDate())
      .then(
        res => {
          console.log(res);
          this.weekReservationsData = res.docs;
          this.weekReservationsCount = res.docs.length;

          this.setReservationChartData();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setReservationChartData(){
    this.reservationsLineChartLabels = [];
    for (let i = 7; i > 0; i--) {
      var d = moment(this.today).add(-i, 'days');
      this.reservationsLineChartLabels.push(d.toDate().toISOString().slice(0, 10));
    }
    console.log(this.reservationsLineChartLabels);

    let dataCount: any[] = [];
    for (let i = 7; i > 0; i--) {
      dataCount.push(0);
    }
    console.log(dataCount);

    this.weekReservationsData.forEach((reservation: any) => {
      var reservationDate = reservation.data().created_at.toDate().toISOString().slice(0, 10);
      for (let i = 7; i > 0; i--){
        if (this.reservationsLineChartLabels[i] == reservationDate){
          dataCount[i]++;
        }
      }
    })
    console.log(dataCount);
    this.reservationsLineChartData = [{ data: dataCount, label: 'Reservations' }];
  }

}

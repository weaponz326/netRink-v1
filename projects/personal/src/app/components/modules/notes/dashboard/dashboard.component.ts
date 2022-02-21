import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import moment from 'moment/moment';

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private notesApi: NotesApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/notes/dashboard" },
  ];

  weekNotesData: any;
  weekNotesCount: number = 0;

  notesLineChartData: ChartDataSets[] = [{ data: [0], label: 'Notes' }];
  notesLineChartLabels: Label[] = [""]

  chartOptions = {};

  today = moment();

  ngOnInit(): void {
    this.initChart();
    this.getWeekNote();
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

  getWeekNote(){
    this.notesApi.getWeekNote(moment(this.today).add(-6, 'days'), this.today)
      .then(
        res => {
          console.log(res);
          this.weekNotesData = res.docs;
          this.weekNotesCount = res.docs.length;

          this.setNoteChartData();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setNoteChartData(){
    this.notesLineChartLabels = [];
    for (let i = 7; i > 0; i--) {
      var d = moment(this.today).add(-i, 'days');
      this.notesLineChartLabels.push(d.toDate().toISOString().slice(0, 10));
    }
    console.log(this.notesLineChartLabels);

    let dataCount: any[] = [];
    for (let i = 7; i > 0; i--) {
      dataCount.push(0);
    }
    console.log(dataCount);

    this.weekNotesData.forEach((note: any) => {
      var noteDate = note.data().created_at.toDate().toISOString().slice(0, 10);
      for (let i = 7; i > 0; i--){
        if (this.notesLineChartLabels[i] == noteDate){
          dataCount[i]++;
        }
      }
    })
    console.log(dataCount);
    this.notesLineChartData = [{ data: dataCount, label: 'Notes' }];
  }

}

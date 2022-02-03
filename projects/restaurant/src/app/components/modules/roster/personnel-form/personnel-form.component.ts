import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-personnel-form',
  templateUrl: './personnel-form.component.html',
  styleUrls: ['./personnel-form.component.scss']
})
export class PersonnelFormComponent implements OnInit {

  constructor(private rosterApi: RosterApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  personnelForm: FormGroup = new FormGroup({});

  batchSource: any[] = [];

  selectedPersonnelCode: any;
  selectedBatchCode: any;

  ngOnInit(): void {
    this.initPersonnelForm();
  }

  ngAfterViewInit(): void {
    this.getBatches();
  }

  initPersonnelForm(){
    this.personnelForm = new FormGroup({
      personnelCode: new FormControl(''),
      personnelName: new FormControl(''),
      batch: new FormControl(''),
    })
  }

  getBatches(){
    this.rosterApi.getBatches()
      .subscribe(
        res => {
          console.log(res);
          this.batchSource = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}

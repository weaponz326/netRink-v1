import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { TablesApiService } from 'projects/restaurant/src/app/services/modules/tables-api/tables-api.service';

import { TableFormComponent } from '../table-form/table-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.scss']
})
export class AddTableComponent implements OnInit {

  constructor(
    private router: Router,
    private tablesApi: TablesApiService
  ) { }

  @ViewChild('tableFormComponentReference', { read: TableFormComponent, static: false }) tableForm!: TableFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Add Table", url: "/home/tables/add-table" },
  ];

  isTableSaving = false;

  ngOnInit(): void {
  }

  saveTable(){
    console.log('u are saving a new table');

    var tableData = {
      account: localStorage.getItem('restaurant_id'),
      table_number: this.tableForm.tableForm.controls.tableNumber.value,
      table_type: this.tableForm.tableForm.controls.tableType.value,
      capacity: this.tableForm.tableForm.controls.capacity.value,
      location: this.tableForm.tableForm.controls.location.value,
      table_status: this.tableForm.tableForm.controls.tableStatus.value,
    }

    console.log(tableData);
    this.isTableSaving = true;

    this.tablesApi.postTable(tableData)
      .subscribe(
        res => {
          console.log(res);
          this.isTableSaving = false;

          sessionStorage.setItem('restaurant_table_id', res.id);
          this.router.navigateByUrl('/suite/tables/view-table');
        },
        err => {
          console.log(err);
          this.isTableSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

}

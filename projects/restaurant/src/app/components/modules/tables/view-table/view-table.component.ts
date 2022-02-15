import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { TableFormComponent } from '../table-form/table-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { TablesApiService } from 'projects/restaurant/src/app/services/modules/tables-api/tables-api.service';
import { TablesPrintService } from 'projects/restaurant/src/app/services/printing/tables-print/tables-print.service';

import { Table } from 'projects/restaurant/src/app/models/modules/tables/tables.model';


@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss']
})
export class ViewTableComponent implements OnInit {

  constructor(
    private router: Router,
    private tablesApi: TablesApiService,
    private tablesPrint: TablesPrintService
  ) { }

  @ViewChild('tableFormComponentReference', { read: TableFormComponent, static: false }) tableForm!: TableFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Tables", url: "/home/tables/all-tables" },
    { text: "View Table", url: "/home/tables/view-table" },
  ];

  tableData: any;

  isTableSaving = false;
  isTableDeleting = false;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getTable();
  }

  getTable(){
    this.tablesApi.getTable()
      .then(
        (res: any) => {
          console.log(res);
          this.tableData = res;

          this.tableForm.tableForm.controls.tableNumber.setValue(res.data().table_number);
          this.tableForm.tableForm.controls.tableType.setValue(res.data().table_type);
          this.tableForm.tableForm.controls.capacity.setValue(res.data().capacity);
          this.tableForm.tableForm.controls.location.setValue(res.data().location);
          this.tableForm.tableForm.controls.tableStatus.setValue(res.data().table_status);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updateTable(){
    console.log('u are saving a new table');

    var data = {
      created_at: this.tableData.data().created_at,
      account: localStorage.getItem('restaurant_id'),
      table_number: this.tableForm.tableForm.controls.tableNumber.value,
      table_type: this.tableForm.tableForm.controls.tableType.value,
      capacity: this.tableForm.tableForm.controls.capacity.value,
      location: this.tableForm.tableForm.controls.location.value,
      table_status: this.tableForm.tableForm.controls.tableStatus.value,
    }

    console.log(data);
    this.isTableSaving = true;

    this.tablesApi.updateTable(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isTableSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isTableSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteTable(){
    this.isTableDeleting = true;

    this.tablesApi.deleteTable()
      .then(
        (res: any) => {
          console.log(res);
          this.router.navigateByUrl('/home/tables/all-tables');
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
    this.tablesPrint.printViewTable();
  }

}

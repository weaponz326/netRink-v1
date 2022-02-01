import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { TablesApiService } from 'projects/restaurant/src/app/services/modules/tables-api/tables-api.service';

import { TableFormComponent } from '../table-form/table-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'


@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss']
})
export class ViewTableComponent implements OnInit {

  constructor(
    private router: Router,
    private tablesApi: TablesApiService
  ) { }

  @ViewChild('tableFormComponentReference', { read: TableFormComponent, static: false }) tableForm!: TableFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Tables", url: "/home/tables/all-tables" },
    { text: "View Table", url: "/home/tables/view-table" },
  ];

  isTableSaving = false;
  isTableDeleting = false;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getSingleTable();
  }

  getSingleTable(){
    this.tablesApi.getSingleTable()
      .subscribe(
        res => {
          console.log(res);
          this.tableForm.tableForm.controls.tableNumber.setValue(res.table_number);
          this.tableForm.tableForm.controls.tableType.setValue(res.table_type);
          this.tableForm.tableForm.controls.capacity.setValue(res.capacity);
          this.tableForm.tableForm.controls.location.setValue(res.location);
          this.tableForm.tableForm.controls.tableStatus.setValue(res.table_status);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
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
        },
        err => {
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
      .subscribe(
        res => {
          console.log(res);

          this.router.navigateByUrl('/home/tables/all-tables');
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
  }

}

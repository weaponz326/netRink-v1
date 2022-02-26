import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AddTableComponent } from '../add-table/add-table.component';
import { ViewTableComponent } from '../view-table/view-table.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { TablesApiService } from 'projects/restaurant/src/app/services/modules/tables-api/tables-api.service';
import { TablesPrintService } from 'projects/restaurant/src/app/services/printing/tables-print/tables-print.service';


@Component({
  selector: 'app-all-tables',
  templateUrl: './all-tables.component.html',
  styleUrls: ['./all-tables.component.scss']
})
export class AllTablesComponent implements OnInit {

  constructor(
    private router: Router,
    private tablesApi: TablesApiService,
    private tablesPrint: TablesPrintService
  ) { }

  @ViewChild('addTableComponentReference', { read: AddTableComponent, static: false }) addTable!: AddTableComponent;
  @ViewChild('viewTableComponentReference', { read: ViewTableComponent, static: false }) viewTable!: ViewTableComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Tables", url: "/home/tables/all-tables" },
  ];

  tablesGridData: any[] = [];

  isFetchingGridData: boolean =  false;
  isDataAvailable: boolean =  true;

  firstInResponse: any = [];
  lastInResponse: any = [];
  nextStartAfter: any = [];
  prevStartAt: any = [];
  pageNumber = 0;
  disableNext: boolean = true;
  disablePrev: boolean = true;

  sortParams = {
    field: "created_at",
    direction: "desc"
  }

  deleteId: any;

  ngOnInit(): void {
    this.getAccountTable();
  }

  getAccountTable(){
    this.isFetchingGridData = true;

    this.tablesApi.getAccountTable(this.sortParams, 20)
      .then(
        (res: any) => {
          console.log(res);
          this.tablesGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber = 1;
          if (!res.docs.length) this.isDataAvailable = false;

          if (!res.docs.length || res.docs.length < 20){
            this.disableNext = true;
            this.disablePrev = true;
          }
          else{
            this.disableNext = false;
            this.disablePrev = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  nextPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.tablesApi.getAccountTableNext(this.sortParams, 20, this.nextStartAfter)
      .then(
        (res: any) => {
          console.log(res);
          this.tablesGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber++;

          if (res.docs.length < 20){
            this.disableNext = true;
            this.disablePrev = false;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  previousPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.tablesApi.getAccountTablePrev(this.sortParams, 20, this.prevStartAt)
      .then(
        (res: any) => {
          console.log(res);
          this.tablesGridData = res.docs;

          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber--;

          if (this.pageNumber == 1){
            this.disableNext = false;
            this.disablePrev = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  sortTable(field: any, direction: any){
    this.sortParams.field = field;
    this.sortParams.direction = direction;

    this.getAccountTable();
  }

  createTable(data: any){
    console.log('u are saving a new table');

    console.log(data);
    this.addTable.isTableSaving = true;

    this.tablesApi.createTable(data)
      .then(
        (res: any) => {
          console.log(res);
          this.addTable.isTableSaving = false;
          this.addTable.dismissButton.nativeElement.click();
          this.isDataAvailable = false;

          this.getAccountTable();
        },
        (err: any) => {
          console.log(err);
          this.addTable.isTableSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateTable(table: any){
    console.log('u are saving a new table');

    console.log(table);
    this.viewTable.isTableSaving = true;

    this.tablesApi.updateTable(table.id, table.data)
      .then(
        (res: any) => {
          console.log(res);
          this.viewTable.isTableSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.viewTable.isTableSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(id: any){
    this.deleteId = id;
    this.deleteModal.openModal();
  }

  deleteTable(){
    this.viewTable.isTableDeleting = true;

    this.tablesApi.deleteTable(this.deleteId)
      .then(
        (res: any) => {
          console.log(res);
          this.viewTable.isTableDeleting = false;
        },
        (err: any) => {
          console.log(err);
          this.viewTable.isTableDeleting = false;
          this.connectionToast.openToast();
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
    this.tablesPrint.printAllTables()
  }

}

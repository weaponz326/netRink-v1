import { Component, OnInit, ViewChild } from '@angular/core';

import { AddStockItemComponent } from '../add-stock-item/add-stock-item.component'
import { EditStockItemComponent } from '../edit-stock-item/edit-stock-item.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { KitchenStockApiService } from 'projects/restaurant/src/app/services/modules/kitchen-stock-api/kitchen-stock-api.service';
import { KitchenStockPrintService } from 'projects/restaurant/src/app/services/printing/kitchen-stock-print/kitchen-stock-print.service';


@Component({
  selector: 'app-all-stock-items',
  templateUrl: './all-stock-items.component.html',
  styleUrls: ['./all-stock-items.component.scss']
})
export class AllStockItemsComponent implements OnInit {

  constructor(
    private kitchenStockApi: KitchenStockApiService,
    private kitchenStockPrint: KitchenStockPrintService
  ) { }

  @ViewChild('addStockItemComponentReference', { read: AddStockItemComponent, static: false }) addStockItem!: AddStockItemComponent;
  @ViewChild('editStockItemComponentReference', { read: EditStockItemComponent, static: false }) editStockItem!: EditStockItemComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Items", url: "/home/kitchenStock/all-stock-items" },
  ];

  itemsGridData: any[] = [];

  deleteId = "";

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
    direction: "asc"
  }

  ngOnInit(): void {
    this.getAccountStockItem();
  }

  getAccountStockItem(){
    this.isFetchingGridData = true;

    this.kitchenStockApi.getAccountStockItem(this.sortParams, 20)
      .then(
        (res: any) => {
          console.log(res);
          this.itemsGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber = 1;

          if (!res.docs.length) this.isDataAvailable = false;
          else this.isDataAvailable = true;

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

    this.kitchenStockApi.getAccountStockItemNext(this.sortParams, 20, this.nextStartAfter)
      .then(
        (res: any) => {
          console.log(res);
          this.itemsGridData = res.docs;

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

    this.kitchenStockApi.getAccountStockItemPrev(this.sortParams, 20, this.prevStartAt)
      .then(
        (res: any) => {
          console.log(res);
          this.itemsGridData = res.docs;

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

    this.getAccountStockItem();
  }

  createStockItem(data: any){
    console.log(data);
    this.addStockItem.isItemSaving = true;

    this.kitchenStockApi.createStockItem(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.getAccountStockItem();
            this.addStockItem.isItemSaving = false;
            this.addStockItem.addButton.nativeElement.click();
            this.isDataAvailable = false;

            this.addStockItem.resetForm();
          }
        },
        (err: any) => {
          console.log(err);
          this.addStockItem.isItemSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateStockItem(item: any){
    console.log(item);
    this.editStockItem.isItemSaving = true;

    this.kitchenStockApi.updateStockItem(item.id, item.data)
      .then(
        (res: any) => {
          console.log(res);
          this.editStockItem.isItemSaving = false;
          this.editStockItem.editButton.nativeElement.click();
          this.getAccountStockItem();
        },
        (err: any) => {
          console.log(err);
          this.addStockItem.isItemSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  deleteStockItem(){
    this.editStockItem.isItemDeleting = true;

    this.kitchenStockApi.deleteStockItem(this.deleteId)
      .then(
        (res: any) => {
          console.log(res);
          this.editStockItem.isItemDeleting = false;
          this.editStockItem.editButton.nativeElement.click();
          this.getAccountStockItem();
        },
        (err: any) => {
          console.log(err);
          this.editStockItem.isItemDeleting = false;
          this.connectionToast.openToast();
        }
      )
  }

  openEditItem(data: any){
    console.log(data);
    this.editStockItem.openModal(data);
  }

  confirmDelete(id: any){
    this.deleteId = id;
    this.deleteModal.openModal();
  }

  onPrint(){
    console.log("lets start printing...");
    this.kitchenStockPrint.printAllStockItems();
  }

}

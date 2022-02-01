import { Component, OnInit, ViewChild } from '@angular/core';

import { KitchenStockApiService } from 'projects/restaurant/src/app/services/modules/kitchen-stock-api/kitchen-stock-api.service';

import { AddStockItemComponent } from '../add-stock-item/add-stock-item.component'
import { EditStockItemComponent } from '../edit-stock-item/edit-stock-item.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'


@Component({
  selector: 'app-all-stock-items',
  templateUrl: './all-stock-items.component.html',
  styleUrls: ['./all-stock-items.component.scss']
})
export class AllStockItemsComponent implements OnInit {

  constructor(private kitchenStockApi: KitchenStockApiService) { }

  @ViewChild('addStockItemComponentReference', { read: AddStockItemComponent, static: false }) addStockItem!: AddStockItemComponent;
  @ViewChild('editStockItemComponentReference', { read: EditStockItemComponent, static: false }) editStockItem!: EditStockItemComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('itemCodeSortingComponentReference', { read: TableSortingComponent, static: false }) itemCodeSorting!: TableSortingComponent;
  @ViewChild('itemNameSortingComponentReference', { read: TableSortingComponent, static: false }) itemNameSorting!: TableSortingComponent;
  @ViewChild('quantitySortingComponentReference', { read: TableSortingComponent, static: false }) quantitySorting!: TableSortingComponent;
  @ViewChild('itemTypeSortingComponentReference', { read: TableSortingComponent, static: false }) itemTypeSorting!: TableSortingComponent;
  @ViewChild('categorySortingComponentReference', { read: TableSortingComponent, static: false }) categorySorting!: TableSortingComponent;
  @ViewChild('refillOrderedSortingComponentReference', { read: TableSortingComponent, static: false }) refillOrderedSorting!: TableSortingComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Items", url: "/home/kitchenStock/all-stock-items" },
  ];

  itemsGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;
  totalItems = 0;

  deleteId = "";
  deleteIndex = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getItems();
  }

  getItems(){
    this.kitchenStockApi.getItems()
      .subscribe(
        res => {
          console.log(res);
          this.itemsGridData = res;
          this.currentPage = res.current_page;
          this.totalPages = res.total_pages;
          this.totalItems = res.count;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  sortTable(field: any){
    console.log(field);
    this.getItems();

    if((field == 'item_Code') || (field == "-item_Code")){
      this.itemCodeSorting.resetSort();
    }
    else if((field == 'item_name') || (field == "-item_name")){
      this.itemNameSorting.resetSort();
    }
    else if((field == 'quantity') || (field == "-quantity")){
      this.quantitySorting.resetSort();
    }
    else if((field == 'item_type') || (field == "-item_type")){
      this.itemTypeSorting.resetSort();
    }
    else if((field == 'category') || (field == "-category")){
      this.categorySorting.resetSort();
    }
    else if((field == 'refill_ordered') || (field == "-refill_ordered")){
      this.refillOrderedSorting.resetSort();
    }
  }

  postItem(data: any){
    console.log(data);

    this.kitchenStockApi.postItem(data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.itemsGridData.push(res);
            this.addStockItem.resetForm();
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  putItem(data: any){
    console.log(data);

    this.kitchenStockApi.putItem(data.id, data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.itemsGridData[data.index] = res;
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteItem(){
    this.kitchenStockApi.deleteItem(this.deleteId)
      .subscribe(
        res => {
          console.log(res);
          this.itemsGridData.splice(this.deleteIndex, 1);
          this.itemsGridData.splice(this.deleteIndex, 1);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditItem(index: any){
    console.log(index);
    this.editStockItem.openModal(index, this.itemsGridData[index]);
  }

  confirmDelete(e: any){
    this.deleteIndex = e.index;
    this.deleteId = e.id;

    this.deleteModal.openModal();
  }

  onPrint(){
    console.log("lets start printing...");
  }

}

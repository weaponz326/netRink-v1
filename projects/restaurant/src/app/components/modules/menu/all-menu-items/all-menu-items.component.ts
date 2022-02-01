import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'


@Component({
  selector: 'app-all-menu-items',
  templateUrl: './all-menu-items.component.html',
  styleUrls: ['./all-menu-items.component.scss']
})
export class AllMenuItemsComponent implements OnInit {

  constructor(private menuApi: MenuApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('itemCodeSortingComponentReference', { read: TableSortingComponent, static: false }) itemCodeSorting!: TableSortingComponent;
  @ViewChild('itemNameSortingComponentReference', { read: TableSortingComponent, static: false }) itemNameSorting!: TableSortingComponent;
  @ViewChild('priceSortingComponentReference', { read: TableSortingComponent, static: false }) priceSorting!: TableSortingComponent;
  @ViewChild('menuGroupSortingComponentReference', { read: TableSortingComponent, static: false }) menuGroupSorting!: TableSortingComponent;
  @ViewChild('categorySortingComponentReference', { read: TableSortingComponent, static: false }) categorySorting!: TableSortingComponent;

  navHeading: any[] = [
    { text: "All Menu Items", url: "/home/menu/all-menu-items" },
  ];

  menuItemsGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;
  totalItems = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAllMenuItems();
  }

  getAllMenuItems(){
    this.menuApi.getAllMenuItems()
      .subscribe(
        res => {
          console.log(res);
          this.menuItemsGridData = res.results;
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
    this.getAllMenuItems();

    if((field == 'item_code') || (field == "-item_code")){
      this.itemCodeSorting.resetSort();
    }
    else if((field == 'item_name') || (field == "-item_name")){
      this.itemNameSorting.resetSort();
    }
    else if((field == 'price') || (field == "-price")){
      this.priceSorting.resetSort();
    }
    else if((field == 'menu_group') || (field == "-menu_group")){
      this.menuGroupSorting.resetSort();
    }
    else if((field == 'category') || (field == "-category")){
      this.categorySorting.resetSort();
    }
  }

  onPrint(){
    console.log("lets start printing...");
  }

}

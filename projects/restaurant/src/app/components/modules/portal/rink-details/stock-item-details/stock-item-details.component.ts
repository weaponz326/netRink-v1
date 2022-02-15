import { Component, OnInit, ViewChild } from '@angular/core';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { KitchenStockApiService } from 'projects/restaurant/src/app/services/modules/kitchen-stock-api/kitchen-stock-api.service';


@Component({
  selector: 'app-stock-item-details',
  templateUrl: './stock-item-details.component.html',
  styleUrls: ['./stock-item-details.component.scss']
})
export class StockItemDetailsComponent implements OnInit {

  constructor(private kitchenStockApi: KitchenStockApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  stockItemData: any;

  ngOnInit(): void {
    let sourceId = sessionStorage.getItem("restaurant_rink_source_id") as string;
    sessionStorage.setItem("restaurant_stock_item_id", sourceId);

    this.getStockItem();
  }

  getStockItem(){
    this.kitchenStockApi.getStockItem(sessionStorage.getItem("restaurant_stock_item_id"))
      .then(
        (res: any) => {
          console.log(res);
          this.stockItemData = res;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}

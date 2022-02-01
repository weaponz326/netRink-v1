import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { KitchenStockApiService } from 'projects/restaurant/src/app/services/modules/kitchen-stock-api/kitchen-stock-api.service';

import { StockItemFormComponent } from '../stock-item-form/stock-item-form.component';


@Component({
  selector: 'app-edit-stock-item',
  templateUrl: './edit-stock-item.component.html',
  styleUrls: ['./edit-stock-item.component.scss']
})
export class EditStockItemComponent implements OnInit {

  constructor(
    private kitchenStockApi: KitchenStockApiService
  ) { }

  @Output() saveItemEvent = new EventEmitter<any>();
  @Output() deleteItemEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  @ViewChild('stockItemFormComponentReference', { read: StockItemFormComponent, static: false }) stockItemForm!: StockItemFormComponent;

  navHeading: any[] = [
    { text: "All Items", url: "/home/kitchen-stock/all-stock-items" },
    { text: "View Item", url: "/home/kitchen-stock/view-stock-item" },
  ];

  selectedIndex: any = 0;
  selectedId: any = "";

  ngOnInit(): void {
  }

  openModal(index: any, data: any){
    this.selectedIndex = index;
    this.selectedId = data.id;

    this.stockItemForm.stockItemForm.controls.itemCode.setValue(data.item_code);
    this.stockItemForm.stockItemForm.controls.itemName.setValue(data.item_name);
    this.stockItemForm.stockItemForm.controls.category.setValue(data.category);
    this.stockItemForm.stockItemForm.controls.itemType.setValue(data.item_type);
    this.stockItemForm.stockItemForm.controls.quantity.setValue(data.quantity);
    this.stockItemForm.stockItemForm.controls.refillOrdered.setValue(data.refill_ordered);

    this.buttonElement.nativeElement.click();
  }

  saveItem(){
    let data = {
      index: this.selectedIndex,
      id: this.selectedId,

      account: localStorage.getItem('restaurant_id'),
      item_code: this.stockItemForm.stockItemForm.controls.itemCode.value,
      item_name: this.stockItemForm.stockItemForm.controls.itemName.value,
      category: this.stockItemForm.stockItemForm.controls.category.value,
      item_type: this.stockItemForm.stockItemForm.controls.itemType.value,
      quantity: this.stockItemForm.stockItemForm.controls.quantity.value,
      refill_ordered: this.stockItemForm.stockItemForm.controls.refillOrdered.value,
    }

    this.saveItemEvent.emit(data);
  }

  deleteItem(){
    let data = {
      index: this.selectedIndex,
      id: this.selectedId,
    }

    this.deleteItemEvent.emit(data);
  }

}

import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { KitchenStockApiService } from 'projects/restaurant/src/app/services/modules/kitchen-stock-api/kitchen-stock-api.service';

import { StockItemFormComponent } from '../stock-item-form/stock-item-form.component';


@Component({
  selector: 'app-add-stock-item',
  templateUrl: './add-stock-item.component.html',
  styleUrls: ['./add-stock-item.component.scss']
})
export class AddStockItemComponent implements OnInit {

  constructor(
    private kitchenStockApi: KitchenStockApiService
  ) { }

  @Output() saveItemEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  @ViewChild('stockItemFormComponentReference', { read: StockItemFormComponent, static: false }) stockItemForm!: StockItemFormComponent;

  navHeading: any[] = [
    { text: "New Item", url: "/home/kitchen-stock/add-stock-item" },
  ];

  ngOnInit(): void {
  }

  openModal(){
    this.buttonElement.nativeElement.click();
  }

  saveItem(){
    let data = {
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

  resetForm(){
    this.stockItemForm.stockItemForm.controls.itemCode.setValue('');
    this.stockItemForm.stockItemForm.controls.itemName.setValue('');
    this.stockItemForm.stockItemForm.controls.category.setValue('');
    this.stockItemForm.stockItemForm.controls.itemType.setValue('');
    this.stockItemForm.stockItemForm.controls.quantity.setValue('');
    this.stockItemForm.stockItemForm.controls.refillOrdered.setValue('');
  }

}

import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { serverTimestamp } from 'firebase/firestore';

import { ItemFormComponent } from '../item-form/item-form.component'

import { OrderItem } from 'projects/restaurant/src/app/models/modules/orders/orders.model';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  @Output() saveItemEvent = new EventEmitter<any>();

  @ViewChild('addButtonElementReference', { read: ElementRef, static: false }) addButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('itemFormComponentReference', { read: ItemFormComponent, static: false }) itemForm!: ItemFormComponent;

  isItemSaving = false;

  ngOnInit(): void {
  }

  openModal(){
    this.addButton.nativeElement.click();
  }

  saveItem(){
    let data: OrderItem = {
      created_at: serverTimestamp(),
      order: sessionStorage.getItem('restaurant_order_id') as string,
      quantity: this.itemForm.itemForm.controls.quantity.value,
      menu_item: {
        id: this.itemForm.selectedMenuItemId,
        data: this.itemForm.selectedMenuItemData,
      }
    }

    this.saveItemEvent.emit(data);
  }

  resetForm(){
    this.itemForm.itemForm.controls.menuItem.setValue('');
    this.itemForm.itemForm.controls.price.setValue('');
    this.itemForm.itemForm.controls.quantity.setValue('');
  }

}

import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import * as firebase from 'firebase/compat/app';

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
      created_at: firebase.default.firestore.FieldValue.serverTimestamp(),
      order: sessionStorage.getItem('restaurant_order_id') as string,
      quantity: this.itemForm.itemForm.controls.quantity.value,
      menu_item: {
        id: this.itemForm.selectedMenuItemId,
        item_name: this.itemForm.itemForm.controls.menuItem.value,
        price: this.itemForm.itemForm.controls.price.value,
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

import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { ItemFormComponent } from '../item-form/item-form.component'

import { OrderItem } from 'projects/restaurant/src/app/models/modules/orders/orders.model';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  constructor() { }

  @Output() saveItemEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  @ViewChild('itemFormComponentReference', { read: ItemFormComponent, static: false }) itemForm!: ItemFormComponent;

  selectedIndex: any = 0;
  selectedId: any = "";

  orderItemData: any;

  ngOnInit(): void {
  }

  openModal(index: any, data: any){
    this.orderItemData = data;

    this.selectedIndex = index;
    this.selectedId = data.id;

    this.itemForm.itemForm.controls.menuItem.setValue(data.menu_item.item_name);
    this.itemForm.itemForm.controls.price.setValue(data.menu_item.price);
    this.itemForm.itemForm.controls.quantity.setValue(data.quantity);
    this.itemForm.selectedMenuItemId = data.menu_item.id;

    this.buttonElement.nativeElement.click();
  }

  saveItem(){
    let order_item: OrderItem = {
      created_at: this.orderItemData.created_at,
      order: sessionStorage.getItem('restaurant_order_id') as string,
      quantity: this.itemForm.itemForm.controls.quantity.value,
      menu_item: {
        id: this.itemForm.selectedMenuItemId,
        item_name: this.itemForm.itemForm.controls.menuItem.value,
        price: this.itemForm.itemForm.controls.price.value,
      }
    }

    let data = {
      index: this.selectedIndex,
      id: this.selectedId,
      order_item: order_item
    }

    this.saveItemEvent.emit(data);
  }

}

import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { ItemFormComponent } from '../item-form/item-form.component'


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  constructor() { }

  @Output() saveItemEvent = new EventEmitter<any>();
  @Output() deleteItemEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  @ViewChild('itemFormComponentReference', { read: ItemFormComponent, static: false }) itemForm!: ItemFormComponent;

  selectedIndex: any = 0;
  selectedId: any = "";

  ngOnInit(): void {
  }

  openModal(index: any, data: any){
    this.selectedIndex = index;
    this.selectedId = data.id;

    this.itemForm.itemForm.controls.menuItem.setValue(data.item_code);
    this.itemForm.itemForm.controls.price.setValue(data.item_name);
    this.itemForm.itemForm.controls.quantity.setValue(data.price);
    this.itemForm.selectedMenuItemId = data.menu_item_id;

    this.buttonElement.nativeElement.click();
  }

  saveItem(){
    let data = {
      index: this.selectedIndex,
      id: this.selectedId,

      account: sessionStorage.getItem('restaurant_menu_item_id'),
      menu_item: this.itemForm.itemForm.controls.menu_item.value,
      price: this.itemForm.itemForm.controls.price.value,
      quantity: this.itemForm.itemForm.controls.quantity.value,
      menu_item_id: this.itemForm.selectedMenuItemId
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

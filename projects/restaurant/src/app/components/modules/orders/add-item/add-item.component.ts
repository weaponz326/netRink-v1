import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { ItemFormComponent } from '../item-form/item-form.component'


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  @Output() saveItemEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  @ViewChild('itemFormComponentReference', { read: ItemFormComponent, static: false }) itemForm!: ItemFormComponent;

  ngOnInit(): void {
  }

  openModal(){
    this.buttonElement.nativeElement.click();
  }

  saveItem(){
    let data = {
      account: sessionStorage.getItem('restaurant_menu_item_id'),
      menu_item: this.itemForm.itemForm.controls.menuItem.value,
      price: this.itemForm.itemForm.controls.price.value,
      quantity: this.itemForm.itemForm.controls.quantity.value,
      menu_item_id: this.itemForm.selectedMenuItemId
    }

    this.saveItemEvent.emit(data);
  }

  resetForm(){
    this.itemForm.itemForm.controls.menuItem.setValue('');
    this.itemForm.itemForm.controls.price.setValue('');
    this.itemForm.itemForm.controls.quantity.setValue('');
  }

}

import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { MenuItemFormComponent } from '../menu-item-form/menu-item-form.component'


@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.scss']
})
export class AddMenuItemComponent implements OnInit {

  constructor() { }

  @Output() saveMenuItemEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  @ViewChild('menuItemFormComponentReference', { read: MenuItemFormComponent, static: false }) menuItemForm!: MenuItemFormComponent;

  ngOnInit(): void {
  }

  openModal(){
    this.buttonElement.nativeElement.click();
  }

  saveMenuItem(){
    let data = {
      account: sessionStorage.getItem('restaurant_menu_item_id'),
      transaction_date: this.menuItemForm.menuItemForm.controls.itemCode.value,
      description: this.menuItemForm.menuItemForm.controls.itemName.value,
      transaction_type: this.menuItemForm.menuItemForm.controls.price.value,
    }

    this.saveMenuItemEvent.emit(data);
  }

  resetForm(){
    this.menuItemForm.menuItemForm.controls.transactionDate.setValue('');
    this.menuItemForm.menuItemForm.controls.description.setValue('');
    this.menuItemForm.menuItemForm.controls.transactionType.setValue('');
  }

}

import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { MenuItemFormComponent } from '../menu-item-form/menu-item-form.component'

import { MenuItem } from 'projects/restaurant/src/app/models/modules/menu/menu.model';


@Component({
  selector: 'app-edit-menu-item',
  templateUrl: './edit-menu-item.component.html',
  styleUrls: ['./edit-menu-item.component.scss']
})
export class EditMenuItemComponent implements OnInit {

  constructor() { }

  @Output() saveMenuItemEvent = new EventEmitter<any>();
  @Output() deleteMenuItemEvent = new EventEmitter<any>();

  @ViewChild('editButtonElementReference', { read: ElementRef, static: false }) editButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('menuItemFormComponentReference', { read: MenuItemFormComponent, static: false }) menuItemForm!: MenuItemFormComponent;

  menuItemData: any;

  isMenuItemSaving = false;
  isMenuItemDeleting = false;

  ngOnInit(): void {
  }

  openModal(data: any){
    this.menuItemData = data;

    this.menuItemForm.menuItemForm.controls.itemCode.setValue(data.data().item_code);
    this.menuItemForm.menuItemForm.controls.itemName.setValue(data.data().item_name);
    this.menuItemForm.menuItemForm.controls.price.setValue(data.data().price);

    if (data.data().image != "") this.menuItemForm.image.imgSrc = data.data().image;
    else this.menuItemForm.image.setPlaceholderImage;

    this.editButton.nativeElement.click();
  }

  saveMenuItem(){
    let data = {
      item_code: this.menuItemForm.menuItemForm.controls.itemCode.value,
      item_name: this.menuItemForm.menuItemForm.controls.itemName.value,
      price: this.menuItemForm.menuItemForm.controls.price.value,
    }

    let menu_item = {
      id: this.menuItemData.id,
      data: data
    }

    this.saveMenuItemEvent.emit(menu_item);
  }

  deleteMenuItem(){
    this.deleteMenuItemEvent.emit(this.menuItemData.id);
  }

}

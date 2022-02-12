import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef, Input } from '@angular/core';

import * as firebase from 'firebase/compat/app';

import { MenuItemFormComponent } from '../menu-item-form/menu-item-form.component'

import { MenuItem, MenuGroup } from 'projects/restaurant/src/app/models/modules/menu/menu.model';


@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.scss']
})
export class AddMenuItemComponent implements OnInit {

  constructor() { }

  @Output() saveMenuItemEvent = new EventEmitter<any>();
  @Input() menuGroup!: MenuGroup;

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  @ViewChild('menuItemFormComponentReference', { read: MenuItemFormComponent, static: false }) menuItemForm!: MenuItemFormComponent;

  ngOnInit(): void {
  }

  openModal(){
    this.buttonElement.nativeElement.click();
  }

  saveMenuItem(){
    let data: MenuItem = {
      created_at: firebase.default.firestore.FieldValue.serverTimestamp(),
      item_code: this.menuItemForm.menuItemForm.controls.itemCode.value,
      item_name: this.menuItemForm.menuItemForm.controls.itemName.value,
      price: this.menuItemForm.menuItemForm.controls.price.value,
      menu_group: {
        id: sessionStorage.getItem('restaurant_menu_group_id') as string,
        data: this.menuGroup,
      }
    }

    this.saveMenuItemEvent.emit(data);
  }

  resetForm(){
    this.menuItemForm.menuItemForm.controls.itemCode.setValue('');
    this.menuItemForm.menuItemForm.controls.itemName.setValue('');
    this.menuItemForm.menuItemForm.controls.price.setValue('');
  }

}

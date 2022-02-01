import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-menu-item-form',
  templateUrl: './menu-item-form.component.html',
  styleUrls: ['./menu-item-form.component.scss']
})
export class MenuItemFormComponent implements OnInit {

  constructor() { }

  menuItemForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initMenuItemForm();
  }

  initMenuItemForm(){
    this.menuItemForm = new FormGroup({
      itemCode: new FormControl(''),
      itemName: new FormControl(''),
      price: new FormControl('')
    })
  }

}

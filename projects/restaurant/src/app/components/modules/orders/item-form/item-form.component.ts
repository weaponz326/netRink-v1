import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  constructor() { }

  itemForm: FormGroup = new FormGroup({});

  selectedMenuItemId: any;

  ngOnInit(): void {
    this.initItemForm();
  }

  initItemForm(){
    this.itemForm = new FormGroup({
      menuItem: new FormControl(''),
      price: new FormControl(''),
      quantity: new FormControl('')
    })
  }

}

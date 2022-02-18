import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor() { }

  @Output() basicEvent = new EventEmitter<any>();

  basicForm: FormGroup = new FormGroup({});

  isAccountLoading = false;
  isBasicSaving = false;

  ngOnInit(): void {
    this.initBasicForm();
  }

  initBasicForm(){
    this.basicForm = new FormGroup({
      name: new FormControl(''),
      about: new FormControl('')
    })
  }

  emitBasic(){
  	this.basicEvent.emit();
  }

}

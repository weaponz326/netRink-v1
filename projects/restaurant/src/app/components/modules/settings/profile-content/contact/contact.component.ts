import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  @Output() contactEvent = new EventEmitter<any>();

  contactForm: FormGroup = new FormGroup({});

  isContactSaving = false;

  ngOnInit(): void {
    this.initContactForm();
  }

  initContactForm(){
    this.contactForm = new FormGroup({
      email: new FormControl(),
      phone: new FormControl(),
      address: new FormControl(),
    })
  }

  emitContact(){
  	this.contactEvent.emit();
  }

}

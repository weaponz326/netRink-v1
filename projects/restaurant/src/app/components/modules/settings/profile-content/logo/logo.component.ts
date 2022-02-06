import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { ImageInputComponent } from 'projects/personal/src/app/components/module-utilities/image-input/image-input.component'


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor() { }

  @ViewChild('imageInputComponentReference', { read: ImageInputComponent, static: false }) imageInput!: ImageInputComponent;

  @Output() logoEvent = new EventEmitter<any>();

  isLogoSaving = false;

  ngOnInit(): void {
  }

  emitLogo(){
  	this.logoEvent.emit();
  }

}

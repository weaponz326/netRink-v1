import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import '@popperjs/core';

declare global {
  interface Window {
      bootstrap: any;
  }
}
window.bootstrap = require('bootstrap');


@Component({
  selector: 'app-access-toast',
  templateUrl: './access-toast.component.html',
  styleUrls: ['./access-toast.component.scss']
})
export class AccessToastComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  ngOnInit(): void {
  }

  openToast(){
    console.log("opening module access toast");

    const testToast = document.querySelector('.toast:last-child');
    new window.bootstrap.Toast(testToast).show();
  }

}

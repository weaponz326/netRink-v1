import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import '@popperjs/core';

declare global {
  interface Window {
      bootstrap: any;
  }
}
window.bootstrap = require('bootstrap');


@Component({
  selector: 'app-connection-toast',
  templateUrl: './connection-toast.component.html',
  styleUrls: ['./connection-toast.component.scss']
})
export class ConnectionToastComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  ngOnInit(): void {
  }

  openToast(){
    console.log("opening connection toast");

    const testToast = document.querySelector('.connection-toast:last-child');
    new window.bootstrap.Toast(testToast).show();
  }

}

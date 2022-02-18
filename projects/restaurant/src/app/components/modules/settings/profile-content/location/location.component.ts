import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor() { }

  @Output() locationEvent = new EventEmitter<any>();

  locationForm: FormGroup = new FormGroup({});

  isAccountLoading = false;
  isExtendedProfileLoading = false;
  isLocationSaving = false;

  ngOnInit(): void {
    this.initLocationForm();
  }

  initLocationForm(){
    this.locationForm = new FormGroup({
      location: new FormControl(),
      country: new FormControl(),
      state: new FormControl(),
      city: new FormControl(),
    })
  }

  emitLocation(){
  	this.locationEvent.emit();
  }

  onAddressChange(address: any) {
    this.locationForm.controls.location.setValue(address.formatted_address);
    console.log(address);
  }

}

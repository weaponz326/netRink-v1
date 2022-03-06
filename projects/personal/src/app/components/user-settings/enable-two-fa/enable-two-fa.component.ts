import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-enable-two-fa',
  templateUrl: './enable-two-fa.component.html',
  styleUrls: ['./enable-two-fa.component.scss']
})
export class EnableTwoFaComponent implements OnInit {

  tfaForm: FormGroup = new FormGroup({});

  isTfaSending = false;
  isTfaEnabled = false;

  ngOnInit(): void {
    this.initTfaForm();
  }

  initTfaForm(){
    this.tfaForm = new FormGroup({
      phone: new FormControl({value: "", disabled: true}),
    })
  }

  disablePhone(e: any){
    console.log(e);

    if(e.target.checked){
      this.tfaForm.controls.phone.enable();
      this.isTfaEnabled = true;
    }
    else{
      this.tfaForm.controls.phone.disable();
      this.isTfaEnabled = false;
    }
  }

}

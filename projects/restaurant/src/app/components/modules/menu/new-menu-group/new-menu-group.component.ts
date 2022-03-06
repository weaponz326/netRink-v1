import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';
import { MenuGroup } from 'projects/restaurant/src/app/models/modules/menu/menu.model';


@Component({
  selector: 'app-new-menu-group',
  templateUrl: './new-menu-group.component.html',
  styleUrls: ['./new-menu-group.component.scss']
})
export class NewMenuGroupComponent implements OnInit {

  constructor(
    private router: Router,
    private menuApi: MenuApiService
  ) { }

  @ViewChild('newButtonElementReference', { read: ElementRef, static: false }) newButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  menuGroupForm: FormGroup = new FormGroup({});

    isMenuGroupSaving = false;

  ngOnInit(): void {
    this.initMenuGroupForm();
  }

  openModal(){
    this.newButton.nativeElement.click();
  }

  initMenuGroupForm(){
    this.menuGroupForm = new FormGroup({
      menuGroup: new FormControl(''),
      category: new FormControl('')
    })
  }

  createMenuGroup(){
    let data: MenuGroup = {
      created_at: serverTimestamp(),
      account: localStorage.getItem('restaurant_id') as string,
      menu_group: this.menuGroupForm.controls.menuGroup.value,
      category: this.menuGroupForm.controls.category.value
    }

    console.log(data);
    this.isMenuGroupSaving = true;

    this.menuApi.createMenuGroup(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            sessionStorage.setItem('restaurant_menu_group_id', res.id);
            this.dismissButton.nativeElement.click();
            this.router.navigateByUrl('/home/menu/view-menu-group');
          }
          this.isMenuGroupSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isMenuGroupSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

}

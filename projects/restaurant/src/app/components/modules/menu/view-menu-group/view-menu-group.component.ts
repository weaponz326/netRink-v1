import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { MenuItemsComponent } from '../menu-items/menu-items.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';
import { MenuPrintService } from 'projects/restaurant/src/app/services/printing/menu-print/menu-print.service';

import { MenuGroup } from 'projects/restaurant/src/app/models/modules/menu/menu.model';


@Component({
  selector: 'app-view-menu-group',
  templateUrl: './view-menu-group.component.html',
  styleUrls: ['./view-menu-group.component.scss']
})
export class ViewMenuGroupComponent implements OnInit {

  constructor(
    private router: Router,
    private menuApi: MenuApiService,
    private menuPrint: MenuPrintService,
  ) { }

  @ViewChild('menuItemsComponentReference', { read: MenuItemsComponent, static: false }) menuItems!: MenuItemsComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Menu Groups", url: "/home/menu/all-menu-groups" },
    { text: "View Menu Group", url: "/home/menu/view-menu-group" },
  ];

  menuGroupForm: FormGroup = new FormGroup({});
  menuGroupFormData: any;

  isMenuGroupLoading: boolean = false;
  isMenuGroupSaving: boolean = false;
  isMenuGroupDeleting: boolean = false;

  ngOnInit(): void {
    this.initBudgetForm();
    this.getMenuGroup();
  }

  initBudgetForm(){
    this.menuGroupForm = new FormGroup({
      menuGroup: new FormControl(''),
      category: new FormControl('')
    })
  }

  getMenuGroup(){
    this.isMenuGroupLoading = true;

    this.menuApi.getMenuGroup()
      .then(
        (res: any) => {
          console.log(res);

          this.menuGroupFormData = res;
          this.menuItems.addMenuItem.menuGroupData = res.data();

          this.menuGroupForm.controls.menuGroup.setValue(this.menuGroupFormData.data().menu_group);
          this.menuGroupForm.controls.category.setValue(this.menuGroupFormData.data().category);

          this.isMenuGroupLoading = false;
        },
        (err: any) => {
          console.log(err);
          this.isMenuGroupLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateMenuGroup(){
    console.log("u are updating a menu group");

    let data = {
      menu_group: this.menuGroupForm.controls.menuGroup.value,
      category: this.menuGroupForm.controls.category.value
    }

    this.isMenuGroupSaving = true;

    this.menuApi.updateMenuGroup(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isMenuGroupSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isMenuGroupSaving = false;
          this.connectionToast.openToast();
        }
      )

    console.log(data);
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteMenuGroup(){
    this.isMenuGroupDeleting = true;

    this.menuApi.deleteMenuGroup()
      .then(
        (res: any) => {
          console.log(res);

          this.router.navigateByUrl('/home/menu/all-menu-group');
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
    this.menuPrint.printViewMenuGroup();
  }

}

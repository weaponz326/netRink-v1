import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { AngularFireStorage } from '@angular/fire/compat/storage';

import { AddMenuItemComponent } from '../add-menu-item/add-menu-item.component'
import { EditMenuItemComponent } from '../edit-menu-item/edit-menu-item.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';

import { MenuGroup } from 'projects/restaurant/src/app/models/modules/menu/menu.model';


@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {

  constructor(
    private storage: AngularFireStorage,
    private menuApi: MenuApiService
  ) { }

  @ViewChild('addMenuItemComponentReference', { read: AddMenuItemComponent, static: false }) addMenuItem!: AddMenuItemComponent;
  @ViewChild('editMenuItemComponentReference', { read: EditMenuItemComponent, static: false }) editMenuItem!: EditMenuItemComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  storageBasePath = "/restaurant/" + localStorage.getItem('restaurant_id') + "/module_menu/";

  menuItemsGridData: any[] = [];

  deleteId = "";

  isFetchingGridData = false;

  ngOnInit(): void {
    this.getMenuGroupMenuItem();
  }

  getMenuGroupMenuItem(){
    this.isFetchingGridData = true;

    this.menuApi.getMenuGroupMenuItem()
      .then(
        (res: any) => {
          console.log(res);
          this.menuItemsGridData = res.docs;
          this.isFetchingGridData = false;
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  createMenuItem(data: any){
    console.log(data);
    this.addMenuItem.isMenuItemSaving = true;

    this.menuApi.createMenuItem(data)
      .then(
        (res: any) => {
          console.log(res);

          if (!this.addMenuItem.menuItemForm.image.isImageSet){
            this.addMenuItem.isMenuItemSaving = false;
            this.addMenuItem.dismissButton.nativeElement.click();
            this.addMenuItem.resetForm();

            this.getMenuGroupMenuItem();
          }
          else{
            const storagePath = this.storageBasePath + res.id;
            const storageRef = this.storage.ref(storagePath);
            const task = this.storage.upload(storagePath, this.addMenuItem.menuItemForm.image.image);

            task.snapshotChanges().pipe(
                finalize(() => {
                  storageRef.getDownloadURL().subscribe(downloadUrl => {
                    this.updateImage(res.id, {image: downloadUrl});
                  });
                })
              ).subscribe();
          }
        },
        (err: any) => {
          console.log(err);

          this.addMenuItem.dismissButton.nativeElement.click();
          this.addMenuItem.isMenuItemSaving = false;

          this.connectionToast.openToast();
        }
      )
  }

  updateMenuItem(menu_item: any){
    this.editMenuItem.isMenuItemSaving = true;
    console.log(menu_item);

    this.menuApi.updateMenuItem(menu_item.id, menu_item.data)
      .then(
        (res: any) => {
          console.log(res);

          if (!this.editMenuItem.menuItemForm.image.isImageSet){
            this.editMenuItem.isMenuItemSaving = false;
            this.editMenuItem.dismissButton.nativeElement.click();
            this.getMenuGroupMenuItem();
          }
          else{
            const storagePath = this.storageBasePath + menu_item.id;
            const storageRef = this.storage.ref(storagePath);
            const task = this.storage.upload(storagePath, this.editMenuItem.menuItemForm.image.image);

            task.snapshotChanges().pipe(
                finalize(() => {
                  storageRef.getDownloadURL().subscribe(downloadUrl => {
                    this.updateImage(menu_item.id, {image: downloadUrl});
                  });
                })
              ).subscribe();
          }
        },
        (err: any) => {
          console.log(err);

          this.editMenuItem.dismissButton.nativeElement.click();
          this.editMenuItem.isMenuItemSaving = false;

          this.connectionToast.openToast();
        }
      )
  }

  deleteMenuItem(){
    this.editMenuItem.isMenuItemDeleting = true;

    this.menuApi.deleteMenuItem(this.deleteId)
      .then(
        (res: any) => {
          console.log(res);

          this.editMenuItem.isMenuItemDeleting = false;
          this.editMenuItem.dismissButton.nativeElement.click();

          this.getMenuGroupMenuItem()
        },
        (err: any) => {
          console.log(err);

          this.editMenuItem.isMenuItemDeleting = false;
          this.editMenuItem.dismissButton.nativeElement.click();

          this.connectionToast.openToast();
        }
      )
  }

  updateImage(id: any, data: any){
    console.log('u are updating menu item image url');
    console.log(data);

    this.menuApi.updateMenuItem(id, data)
      .then(
        (res: any) => {
          console.log(res);
          this.addMenuItem.dismissButton.nativeElement.click();
          this.editMenuItem.dismissButton.nativeElement.click();
          this.addMenuItem.resetForm();

          this.getMenuGroupMenuItem();
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditMenuItem(data: any){
    console.log(data);
    this.editMenuItem.openModal(data);
  }

  confirmDelete(id: any){
    this.deleteId = id;
    this.deleteModal.openModal();
  }

}

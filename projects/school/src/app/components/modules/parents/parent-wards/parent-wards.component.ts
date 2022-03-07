import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'
// import { SelectStudentComponent } from '../../../select-windows/wards-windows/select-student/select-student.component';

import { ParentsApiService } from 'projects/school/src/app/services/modules/parents-api/parents-api.service';

import { ParentWard } from 'projects/school/src/app/models/modules/parents/parents.model';


@Component({
  selector: 'app-parent-wards',
  templateUrl: './parent-wards.component.html',
  styleUrls: ['./parent-wards.component.scss']
})
export class ParentWardsComponent implements OnInit {

  constructor(
    private router: Router,
    private parentsApi: ParentsApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalTwoComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;
  // @ViewChild('selectStudentComponentReference', { read: SelectStudentComponent, static: false }) selectStudent!: SelectStudentComponent;

  parentWardsGridData: any[] = [];

  deleteId = "";

  isFetchingGridData = false;
  isWardDeleting = false;

  ngOnInit(): void {
    this.getParentParentWard();
  }

  getParentParentWard(){
    this.isFetchingGridData = true;

    this.parentsApi.getParentParentWard()
      .then(
        (res: any) => {
          console.log(res);
          this.isFetchingGridData = false;
          this.parentWardsGridData = res.docs;
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  createParentWard(wardData: any){
    let data: ParentWard = {
      created_at: serverTimestamp(),
      parent: sessionStorage.getItem('school_parent_id') as string,
      ward: {
        id: wardData.id,
        data: {

        }
      }
    }

    this.parentsApi.createParentWard(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.getParentParentWard();
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteParentWard(id: any){
    this.isWardDeleting = true;

    this.parentsApi.deleteParentWard()
      .then(
        (res: any) => {
          console.log(res);
          this.isWardDeleting = false;
          this.getParentParentWard();
        },
        (err: any) => {
          console.log(err);
          this.isWardDeleting = false;
          this.connectionToast.openToast();
        }
      )
  }

  gotoStudent(id: any){
    sessionStorage.setItem('school_student_id', id);
    this.router.navigateByUrl('/home/students/view-student');
  }

  confirmDelete(id: any){
    this.deleteId = id;
    this.deleteModal.openModal();
  }

}

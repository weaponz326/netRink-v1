import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { arrayUnion } from 'firebase/firestore';

import { AddDepartmentComponent } from '../add-department/add-department.component';
import { EditDepartmentComponent } from '../edit-department/edit-department.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component';
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component';
import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';

import { ActiveTermService } from 'projects/school/src/app/services/active-term/active-term.service';
import { ClassesApiService } from 'projects/school/src/app/services/modules/classes-api/classes-api.service';
// import { ClassesPrintService } from 'projects/school/src/app/services/printing/classes-print/classes-print.service';


@Component({
  selector: 'app-all-departments',
  templateUrl: './all-departments.component.html',
  styleUrls: ['./all-departments.component.scss']
})
export class AllDepartmentsComponent implements OnInit {

  constructor(
    private router: Router,
    private activeTerm: ActiveTermService,
    private classesApi: ClassesApiService,
    // private classesPrint: ClassesPrintService
  ) { }

  @ViewChild('addDepartmentComponentReference', { read: AddDepartmentComponent, static: false }) addDepartment!: AddDepartmentComponent;
  @ViewChild('editDepartmentComponentReference', { read: EditDepartmentComponent, static: false }) editDepartment!: EditDepartmentComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;
  @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;

  navHeading: any[] = [
    { text: "All Departments", url: "/home/departments/all-departments" },
  ];

  activeTermName: any;

  departmentsGridData: any[] = [];

  isFetchingGridData: boolean =  false;
  isDataAvailable: boolean =  true;

  firstInResponse: any = [];
  lastInResponse: any = [];
  nextStartAfter: any = [];
  prevStartAt: any = [];
  pageNumber = 0;
  disableNext: boolean = true;
  disablePrev: boolean = true;

  sortParams = {
    field: "created_at",
    direction: "desc"
  }

  deleteId: any;

  ngOnInit(): void {
    this.getActiveTerm();
    this.getAccountDepartment();
  }

  getActiveTerm(){
    this.activeTermName = this.activeTerm.getActiveTerm().data.term_name;
  }

  getAccountDepartment(){
    this.isFetchingGridData = true;

    this.classesApi.getAccountDepartment(this.sortParams, 20)
      .then(
        (res: any) => {
          console.log(res);
          this.departmentsGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber = 1;

          if (!res.docs.length) this.isDataAvailable = false;
          else this.isDataAvailable = true;

          if (!res.docs.length || res.docs.length < 20){
            this.disableNext = true;
            this.disablePrev = true;
          }
          else{
            this.disableNext = false;
            this.disablePrev = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  nextPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.classesApi.getAccountDepartmentNext(this.sortParams, 20, this.nextStartAfter)
      .then(
        (res: any) => {
          console.log(res);
          this.departmentsGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber++;

          if (res.docs.length < 20){
            this.disableNext = true;
            this.disablePrev = false;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  previousPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.classesApi.getAccountDepartmentPrev(this.sortParams, 20, this.prevStartAt)
      .then(
        (res: any) => {
          console.log(res);
          this.departmentsGridData = res.docs;

          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber--;

          if (this.pageNumber == 1){
            this.disableNext = false;
            this.disablePrev = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  sortDepartment(field: any, direction: any){
    this.sortParams.field = field;
    this.sortParams.direction = direction;

    this.getAccountDepartment();
  }

  createDepartment(data: any){
    console.log('u are saving a new department');

    console.log(data);
    this.addDepartment.isDepartmentSaving = true;

    this.classesApi.createDepartment(data)
      .then(
        (res: any) => {
          console.log(res);
          this.addDepartment.isDepartmentSaving = false;
          this.addDepartment.resetForm();
          this.addDepartment.dismissButton.nativeElement.click();
          this.isDataAvailable = false;

          this.getAccountDepartment();
        },
        (err: any) => {
          console.log(err);
          this.addDepartment.isDepartmentSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateDepartment(department: any){
    console.log('u are updating a department');

    console.log(department);
    this.editDepartment.isDepartmentSaving = true;

    this.classesApi.updateDepartment(department.id, department.data)
      .then(
        (res: any) => {
          console.log(res);
          this.editDepartment.dismissButton.nativeElement.click();
          this.updateTerm();
        },
        (err: any) => {
          console.log(err);
          this.editDepartment.isDepartmentSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateTerm(){
    console.log('u are adding new term to term');

    if (this.editDepartment.departmentData.data().terms.include({id: this.editDepartment.departmentForm.selectedTermId})){
      console.log('lets go ahead with term update');

      let data = {
        terms: {
          id: this.editDepartment.departmentForm.selectedTermId,
          data: arrayUnion(this.editDepartment.departmentForm.selectedTermData),
        }
      }

      this.classesApi.updateClass(data)
        .then(
          (res: any) => {
            console.log(res);
            this.editDepartment.isDepartmentSaving = false;
            this.getAccountDepartment();
          },
          (err: any) => {
            console.log(err);
            this.editDepartment.isDepartmentSaving = false;
            this.connectionToast.openToast();
          }
        )
    }
    else{
      console.log('no need to update term');
      this.editDepartment.isDepartmentSaving = false;
    }
  }

  confirmDelete(id: any){
    this.deleteId = id;
    this.deleteModal.openModal();
  }

  deleteDepartment(){
    this.editDepartment.isDepartmentDeleting = true;

    this.classesApi.deleteDepartment(this.deleteId)
      .then(
        (res: any) => {
          console.log(res);
          this.editDepartment.isDepartmentDeleting = false;
          this.editDepartment.editButton.nativeElement.click();
          this.getAccountDepartment();
        },
        (err: any) => {
          console.log(err);
          this.editDepartment.isDepartmentDeleting = false;
          this.connectionToast.openToast();
        }
      )
  }

  openTermWindow(){
    console.log("You are opening select term window")
    this.selectTerm.openModal();
  }

  onTermSelected(termData: any){
    console.log(termData);

    this.activeTerm.setActiveTerm(termData);
    this.getActiveTerm();
    this.getAccountDepartment();
  }

  onPrint(){
    console.log("lets start printing...");
    // this.classesPrint.printAllDepartments()
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { SectionStudentsComponent } from '../section-students/section-students.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'
import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';

import { SectionsApiService } from 'projects/school/src/app/services/modules/sections-api/sections-api.service';
// import { SectionsPrintService } from 'projects/school/src/app/services/printing/sections-print/sections-print.service';

import { Section } from 'projects/school/src/app/models/modules/sections/sections.model';


@Component({
  selector: 'app-view-section',
  templateUrl: './view-section.component.html',
  styleUrls: ['./view-section.component.scss']
})
export class ViewSectionComponent implements OnInit {

  constructor(
    private router: Router,
    private sectionsApi: SectionsApiService,
    // private sectionsPrint: SectionsPrintService
  ) { }

  @ViewChild('sectionStudentsComponentReference', { read: SectionStudentsComponent, static: false }) sectionStudents!: SectionStudentsComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;
  @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;

  navHeading: any[] = [
    { text: "All Sections", url: "/home/sections/all-sections" },
    { text: "View Section", url: "/home/sections/view-section" },
  ];

  sectionForm: FormGroup = new FormGroup({});
  sectionFormData: any;

  selectedTermId = "";
  selectedTermData = {};

  isSectionLoading = false;
  isSectionSaving = false;
  isSectionDeleting = false;

  ngOnInit(): void {
    this.initSectionsForm();
    this.getSection();
  }

  initSectionsForm(){
    this.sectionForm = new FormGroup({
      sectionCode: new FormControl(''),
      sectionName: new FormControl(''),
      term: new FormControl({value: "", disabled: true}),
    })
  }

  getSection(){
    this.isSectionLoading = true;

    this.sectionsApi.getSection()
      .then(
        (res: any) => {
          console.log(res);
          this.sectionFormData = res;
          this.isSectionLoading = false;

          this.sectionForm.controls.sectionCode.setValue(this.sectionFormData.data().section_code);
          this.sectionForm.controls.sectionName.setValue(this.sectionFormData.data().section_name);

          this.selectedTermId = this.sectionFormData.data().term.id;
          this.selectedTermData = this.sectionFormData.data().term.data;
          this.sectionForm.controls.term.setValue(this.sectionFormData.data().term.term_name);
        },
        (err: any) => {
          console.log(err);
          this.isSectionLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateSection(){
    let data = {
      section_code: this.sectionForm.controls.sectionCode.value,
      section_name: this.sectionForm.controls.sectionName.value,
      term: {
        id: this.selectedTermId,
        data: this.selectedTermData,
      },
    }

    console.log(data);
    this.isSectionSaving = true;

    this.sectionsApi.updateSection(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isSectionSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isSectionSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteSection(){
    this.isSectionDeleting = true;

    this.sectionsApi.deleteSection()
      .then(
        (res: any) => {
          console.log(res);

          this.router.navigateByUrl('/home/sections/all-sections');
        },
        (err: any) => {
          console.log(err);
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

    this.sectionForm.controls.term.setValue(termData.data().term.term_name);
    this.selectedTermId = termData.id;
    this.selectedTermData = termData.data();
  }

  onPrint(){
    console.log("lets start printing...");
    // this.sectionsPrint.printViewSection();
  }

}

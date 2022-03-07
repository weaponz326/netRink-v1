import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {

  constructor() { }

  subjectForm: FormGroup = new FormGroup({});

  selectedTermId = "";
  selectedTermData = {};

  ngOnInit(): void {
    this.initSubjectForm();
  }

  initSubjectForm(){
    this.subjectForm = new FormGroup({
      subjectCode: new FormControl(''),
      subjectName: new FormControl(''),
      term: new FormControl(''),
      department: new FormControl(''),
      description: new FormControl(''),
    });
  }

  openTermWindow(){
    console.log("You are opening select term window")
    // this.selectTerm.openModal();
  }

  onTermSelected(termData: any){
    console.log(termData);

    this.selectedTermId = termData.id;
    this.selectedTermData = termData.data();
  }

}

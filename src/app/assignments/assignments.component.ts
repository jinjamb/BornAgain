import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenduDirective } from '../rendu.directive';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Assignment } from './assignment.model';
import { MatNativeDateModule } from '@angular/material/core';
import { AssignmentDetailComponent } from "./assignment-detail/assignment-detail.component";
import { MatList } from '@angular/material/list';
import { MatListItem, MatDivider } from '@angular/material/list';
import { AddAssignmentComponent } from "./add-assignment/add-assignment.component";

@Component({
  selector: 'app-assignments',
  imports: [CommonModule,
    //RenduDirective, 
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule, AssignmentDetailComponent,
    MatList,
    MatListItem,
    MatDivider, AddAssignmentComponent],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})

export class AssignmentsComponent implements OnInit {
  ajoutActive = false
  titre = "App on assignments!"
  assignments: Assignment[] = [
    { nom: "TP1 Webcomp", dateRendu: new Date("2025-10-10"), rendu: true },
    { nom: "TP12 Stress", dateRendu: new Date("2025-10-11"), rendu: false },
    { nom: "TP3 Unstreesss", dateRendu: new Date("2025-10-12"), rendu: false }
  ];
  nomDevoir: string = "";
  dateRendu: Date = new Date();
  assignmentSelected!: Assignment;
  formVisible = false;

  ngOnInit(): void {
    setTimeout(() => { this.ajoutActive = true;}, 2000);
  }

  /*onSubmit(){
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateRendu = this.dateRendu;
    newAssignment.rendu = false;
    this.assignments.push(newAssignment);
  }*/

  assignmentClicked(assignment: Assignment) {
    this.assignmentSelected = assignment;
  }

  onAddAssignmentBtnClicked() {
    this.formVisible = true;
  }

  onAddedAssignment(event: Assignment) {
    this.assignments.push(event);
    this.formVisible = false;
  }
  
  constructor() {}
}

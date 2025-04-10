import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenduDirective } from '../rendu.directive';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { AssignmentDetailComponent } from "./assignment-detail/assignment-detail.component";
import { MatList } from '@angular/material/list';
import { MatListItem, MatDivider } from '@angular/material/list';
import { AddAssignmentComponent } from "./add-assignment/add-assignment.component";
import { DeleteAssignmentComponent } from "./delete-assignment/delete-assignment.component";
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';
import { Observable } from 'rxjs';

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
    MatDivider,
    AddAssignmentComponent],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})

export class AssignmentsComponent implements OnInit {
  ajoutActive = false
  titre = "App on assignments!"
  nomDevoir: string = "";
  dateRendu: Date = new Date();
  assignmentSelected!: Assignment;
  formVisible = false;
  assignments!: Assignment[];

  constructor (private AssignmentsService: AssignmentsService) {}

  ngOnInit(): void {
    //this.assignments = this.AssignmentsService.getAssignments();
    this.getAssignments();
  }

  getAssignments() {
    this.AssignmentsService.getAssignments().subscribe(assignments => this.assignments = assignments);
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

  onDeleteAssignment(event: Assignment) {
    const index = this.assignments.indexOf(event);
    if (index > -1) {
      this.assignments.splice(index, 1);
      this.assignmentSelected = undefined!;
    }
  }

  onNouvelAssignment(event: Assignment) {
    this.AssignmentsService.addAssignment(event).subscribe(message => console.log(message));
    this.formVisible = false;
  }
}

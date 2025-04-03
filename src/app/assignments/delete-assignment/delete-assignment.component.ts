import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-delete-assignment',
  imports: [
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  templateUrl: './delete-assignment.component.html',
  styleUrl: './delete-assignment.component.css'
})

export class DeleteAssignmentComponent implements OnInit {

  @Output() assignmentDeleted = new EventEmitter<Assignment>();

  nomDevoir: string = "";
  dateRendu: Date = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteAssignment() {
    const assignmentToDelete = new Assignment();
    assignmentToDelete.nom = this.nomDevoir;
    assignmentToDelete.dateRendu = this.dateRendu;
    assignmentToDelete.rendu = false;
    this.assignmentDeleted.emit(assignmentToDelete);
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  imports: [
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})

export class AddAssignmentComponent implements OnInit {
  @Output() assignmentAdded = new EventEmitter<Assignment>();

  nomDevoir: string = "";
  dateRendu: Date = new Date();

  ngOnInit(): void {
  }

  onSubmit() {
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateRendu = this.dateRendu;
    newAssignment.rendu = false;

    this.assignmentAdded.emit(newAssignment);
  }
}

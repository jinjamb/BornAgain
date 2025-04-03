import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Assignment } from '../assignment.model';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { DeleteAssignmentComponent } from '../delete-assignment/delete-assignment.component';

@Component({
  selector: 'app-assignment-detail',
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    DeleteAssignmentComponent
  ],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})

export class AssignmentDetailComponent implements OnInit {

  @Input() assignmentTransmis!: Assignment;
  @Output() deleteAssignment = new EventEmitter<Assignment>();

  constructor() { }

  ngOnInit(): void {

  }

  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;
  }

  onDeleteAssignment() {
    this.deleteAssignment.emit(this.assignmentTransmis);
  }
}

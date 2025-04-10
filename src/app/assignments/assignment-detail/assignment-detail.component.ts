import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Assignment } from '../assignment.model';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DeleteAssignmentComponent } from '../delete-assignment/delete-assignment.component';
import { AssignmentsService } from '../../shared/assignments.service';

@Component({
  selector: 'app-assignment-detail',
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})

export class AssignmentDetailComponent implements OnInit {

  @Input() assignmentTransmis!: Assignment;
  @Output() deleteAssignment = new EventEmitter<Assignment>();

  constructor(private assignmentService: AssignmentsService) { }

  ngOnInit(): void {

  }

  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;
    this.assignmentService.updateAssignment(this.assignmentTransmis).subscribe(message => console.log(message));
  }

  onDeleteAssignment() {
    this.assignmentService.deleteAssignment(this.assignmentTransmis).subscribe(message => console.log(message));
    this.assignmentTransmis = null;
  }
}

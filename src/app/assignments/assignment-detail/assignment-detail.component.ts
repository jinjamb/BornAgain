import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from '../assignment.model';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment-detail',
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule
  ],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})

export class AssignmentDetailComponent implements OnInit {

  @Input() assignmentTransmis!: Assignment;

  constructor() {}

  ngOnInit(): void {
      
  }

  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;
  }
}

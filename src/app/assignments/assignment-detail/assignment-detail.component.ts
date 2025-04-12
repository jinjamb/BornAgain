import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Assignment } from '../assignment.model';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DeleteAssignmentComponent } from '../delete-assignment/delete-assignment.component';
import { AssignmentsService } from '../../shared/assignments.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment-detail',
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    RouterModule,
    RouterLink,
  ],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})

export class AssignmentDetailComponent implements OnInit {

  /*@Input()*/ assignmentTransmis!: Assignment;
  @Output() deleteAssignment = new EventEmitter<Assignment>();

  constructor(private assignmentService: AssignmentsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getAssignment();
  }

  getAssignment() {
    const id = +this.route.snapshot.params['id'];
    this.assignmentService.getAssignment(id).subscribe(
      assignment => {
        this.assignmentTransmis = assignment;
      }
    );
  }

  onClickEdit(){
    this.router.navigate(['/assignment', this.assignmentTransmis.id, 'edit']);
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

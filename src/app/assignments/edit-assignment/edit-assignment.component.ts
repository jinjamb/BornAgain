import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-edit-assignment',
 standalone: true,
 providers: [provideNativeDateAdapter()],
 imports: [
   FormsModule,
   MatInputModule,
   MatFormFieldModule,
   MatDatepickerModule,
   MatButtonModule,
   MatProgressSpinnerModule,
   CommonModule,
 ],
 templateUrl: './edit-assignment.component.html',
 styleUrl: './edit-assignment.component.css',
})

export class EditAssignmentComponent implements OnInit {
  assignment: Assignment | undefined;
  nomAssignment = '';
  dateDeRendu?: Date = undefined;
  isLoading = true;
 
  constructor(
    private assignmentsService: AssignmentsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const routeId = this.route.snapshot.paramMap.get('id');
    const id = routeId ? parseInt(routeId) : undefined;
    
    if (id) {
      this.isLoading = true;
      this.assignmentsService.getAssignment(id).subscribe({
        next: (assignment) => {
          this.assignment = assignment;
          this.nomAssignment = assignment.nom;
          this.dateDeRendu = assignment.dateRendu;
          this.isLoading = false;
        },
        error: (err) => {
          console.error("Error loading assignment", err);
          this.isLoading = false;
        }
      });
    } else {
      this.isLoading = false;
      console.error("No assignment ID provided");
    }
  }
 
  onSaveAssignment() {
    if (!this.assignment) return;
    if (this.nomAssignment == '' || this.dateDeRendu === undefined) return;
 
    // on récupère les valeurs dans le formulaire
    this.assignment.nom = this.nomAssignment;
    this.assignment.dateRendu = this.dateDeRendu;
    this.assignmentsService
      .updateAssignment(this.assignment)
      .subscribe((message) => {
        console.log(message);
 
        // navigation vers la home page
        this.router.navigate(['/home']);
      });
  }
}

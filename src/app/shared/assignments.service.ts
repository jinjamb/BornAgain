import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments: Assignment[] = [
      { nom: "TP1 Webcomp", dateRendu: new Date("2025-10-10"), rendu: true },
      { nom: "TP2 Stress", dateRendu: new Date("2025-10-11"), rendu: false },
      { nom: "TP3 Unstreesss", dateRendu: new Date("2025-10-12"), rendu: false }
    ];

  constructor(private loggingService:LoggingService) { }

  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }
  
  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, "ajouté");
    return of("Assignment added successfully!");
  }

  updateAssignment(assignment: Assignment): Observable<string> {
    return of("Assignment updated successfully!");
  }

  deleteAssignment(assignment: Assignment): Observable<string> {
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);
    return of("Assignment deleted successfully!");
  }
}

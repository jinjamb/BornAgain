import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { AssignmentsComponent } from "./assignments/assignments.component";
import { Assignment } from "./assignments/assignment.model";
import { RenduDirective } from "./rendu.directive";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        AppComponent,
        AssignmentsComponent,
        RenduDirective,
    ],
})
export class AppModule {
    nomDevoir!: string;
    dateRendu!: Date;
    assignments: any;

    onSubmit() {
        const newAssignment = new Assignment();
        newAssignment.nom = this.nomDevoir;
        newAssignment.dateRendu = this.dateRendu;
        newAssignment.rendu = false;
        this.assignments.push(newAssignment);
    }
}   
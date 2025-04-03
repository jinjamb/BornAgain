import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AssignmentsComponent } from './assignments/assignments.component';

@Component({
  selector: 'app-root',
  imports: [ 
    MatButtonModule, 
    CommonModule,
    MatDividerModule,
    MatIconModule,
    AssignmentsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ass-born-again';
}

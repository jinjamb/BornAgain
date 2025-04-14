import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login-page',
  imports: [
    CommonModule,
    FormsModule,
],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {


  title = 'Login Page';
  usernames = ['admin', 'user1', 'user2'];
  passwords = ['admin', 'password1', 'password2'];
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    console.log('Logging in with', this.username, this.password);
    this.authService.logIn(this.username);
    if (this.username == "admin" && this.password == "admin") {
      this.authService.isAdmin();
      console.log('Login successful');
      this.router.navigate(['/home']);
    } else if (this.usernames.includes(this.username) && this.passwords.includes(this.password)) {
      console.log('Login successful');
      this.router.navigate(['/home']);
    }
    
  }

}

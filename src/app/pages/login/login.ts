import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './loginService';
import { LoginModel } from '../../models/LoginModel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  fb = inject(FormBuilder);
  loginService = inject(LoginService);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  })

  formIsValid(): boolean {
    if (this.loginForm.get('email')?.valid || this.loginForm.get('phone')?.valid) {
      if (this.loginForm.get('password')?.valid) {
        return true;
      }
    }
    return false;
  }

  setCookie(cookie: any) { }

  onLogin() {
    try {
      let user: LoginModel = this.loginForm.value as LoginModel;

      this.loginService.login(user).subscribe({
        next: (res: any) => {
          if (res.name) {
            cookieStore.set("name", "john")
            localStorage.setItem("local", "localJohn")

            localStorage.setItem("userToken", "token")
          }
          console.log("User logged in successfully:", res);
        },
        error: (err: any) => {
          console.log("Error loggin in:", err);
        }
      });
    } catch (error) {
      console.log('Error during login:', error);
    }
  }
}

import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from './registerService';
import { UserModel } from '../../models/UserModel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  fb = inject(FormBuilder);
  registerService = inject(RegisterService);

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    age: [0, [Validators.min(18), Validators.max(120)]],
    bio: ['']
  });

  onRegister() {
    try {
      let user: UserModel = this.registerForm.value as UserModel;
      this.registerService.register(user);

    } catch (error) {
      console.log('Error during registration:', error);
    }
  }
}

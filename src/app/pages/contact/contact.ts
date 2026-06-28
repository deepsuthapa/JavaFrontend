import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { ContactModel } from '../../models/ContactModel';
import { ContactService } from './contactService';
import { compatForm } from '@angular/forms/signals/compat';

@Component({
  selector: 'app-contact',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule, Footer, Navbar],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  fb = inject(FormBuilder);
  contactService = inject(ContactService);

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.pattern(/^\d{10}$/)]],
    category: ['General Inquiry', [Validators.required]],
    subject: ['', [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    attachment: [null],
  });

  selectedFile: File | null = null;

  categories = [
    'General Inquiry',
    'Technical Support',
    'Course Related',
    'Payment Issue',
    'Complaint',
    'Suggestion'
  ];
  
  submitForm() {
    try {
      if (this.contactForm.invalid) {
        this.contactForm.markAllAsTouched();
        return;
      }
      
      let contactData: ContactModel = this.contactForm.value as ContactModel;
      
      console.log(contactData);
  
      this.contactService.submit(contactData);
    } catch (error) {
      console.log('Error submitting contact form:', error);
    }

    this.contactForm.reset({
      category: 'General Inquiry'
    });

    this.selectedFile = null;
  }

}
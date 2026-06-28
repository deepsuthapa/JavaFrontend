import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  fb = inject(FormBuilder);
  contactForm: FormGroup;
  selectedFile: File | null = null;

  categories = [
    'General Inquiry',
    'Technical Support',
    'Course Related',
    'Payment Issue',
    'Complaint',
    'Suggestion'
  ];

  constructor() {

    this.contactForm = this.fb.group({

      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      phone: ['', [
        Validators.pattern('^[0-9]{10}$')
      ]],

      category: ['General Inquiry', Validators.required],

      subject: ['', Validators.required],

      message: ['', [
        Validators.required,
        Validators.minLength(10)
      ]]

    });

  }

  onFileSelected(event: any) {

    this.selectedFile = event.target.files[0];

  }

  submitForm() {

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();
      return;

    }

    const formData = new FormData();

    Object.keys(this.contactForm.value).forEach(key => {
      formData.append(key, this.contactForm.value[key]);
    });

    if (this.selectedFile) {
      formData.append('attachment', this.selectedFile);
    }

    console.log(this.contactForm.value);

    // this.contactService.submit(formData).subscribe(...);

    alert('Request submitted successfully!');

    this.contactForm.reset({
      category: 'General Inquiry'
    });

    this.selectedFile = null;

  }

  get f() {
    return this.contactForm.controls;
  }

}
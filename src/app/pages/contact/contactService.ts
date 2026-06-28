import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";


@Injectable({
    providedIn: "root"
})

export class ContactService {

    url = 'http://localhost:8080';
    http = inject(HttpClient)

    submit(formData: any){
        this.http.post(`${this.url}/contact`, formData).subscribe({
            next: (res) => {
                console.log('Contact form submitted successfully:', res);
            },
            error: (error) => {
                console.log('Error submitting contact form:', error);
            }
        });
    }
}
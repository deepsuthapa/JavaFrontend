import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class RegisterService {

    url = 'http://localhost:8080';
    http = inject(HttpClient);

    register(user: any) {
        this.http.post(`${this.url}/register`, user).subscribe({
            next: (response) => {
                console.log('User registered successfully:', response);
            },
            error: (error) => {
                console.log('Error registering user:', error);
            }
        });
    }
}
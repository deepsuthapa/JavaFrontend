import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class LoginService {

    url = 'http://localhost:8080';
    http = inject(HttpClient);

    login(user: any) {
        this.http.post(`${this.url}/login`, user).subscribe({
            next: (response) => {
                console.log('User logged in successfully:', response);
            },
            error: (error) => {
                console.log('Error logging in user:', error);
            }
        });
    }
}

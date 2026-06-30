import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class LoginService {

    url = 'http://192.168.1.233:8080'
    http = inject(HttpClient);

    login(user: any): any {
        return this.http.post(`${this.url}/login`, user, {withCredentials: true});
    }
}

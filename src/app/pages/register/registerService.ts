import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class RegisterService {

    url = 'http://192.168.1.233:8080'
    http = inject(HttpClient);

    register(user: any) {
        return this.http.post(`${this.url}/signup`, user);
    }
}
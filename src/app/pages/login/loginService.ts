import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../service/api-service';

@Injectable({
    providedIn: 'root',
})

export class LoginService {

    api = inject(ApiService)
    url = this.api.getApi()
    http = inject(HttpClient);

    login(user: any): any {
        return this.http.post(`${this.url}/login`, user, {withCredentials: true});
    }
}

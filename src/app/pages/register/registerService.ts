import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ApiService } from "../../service/api-service";

@Injectable({
    providedIn: 'root',
})

export class RegisterService {

    api = inject(ApiService)
    url = this.api.getApi()
    http = inject(HttpClient);

    register(user: any) {
        return this.http.post(`${this.url}/signup`, user);
    }
}
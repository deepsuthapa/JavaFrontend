import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'http://192.168.1.233:8080'
  getApi() {
    return this.url
  }
}

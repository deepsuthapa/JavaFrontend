import { Injectable, signal } from '@angular/core';
import { CurrentUserModel } from '../models/CurrentUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = signal<CurrentUserModel | null>(null)

  constructor() {

    const user = localStorage.getItem('userToken');

    if (user) {
      this.currentUser.set(JSON.parse(user));
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userToken');
  }

  logout() {
    this.currentUser.set(null)
    localStorage.removeItem("userToken")
  }
}

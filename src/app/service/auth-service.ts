import { Injectable, signal } from '@angular/core';
import { CurrentUserModel } from '../models/CurrentUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = signal<CurrentUserModel | null>(null)
  
  logout(){
    this.currentUser.set(null)
    localStorage.removeItem("userToken")
    localStorage.removeItem("local")
    cookieStore.delete("name")
  }
}

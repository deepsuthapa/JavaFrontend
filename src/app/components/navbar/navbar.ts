import { ChangeDetectorRef, Component, inject, Injectable, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {
  isLogin = localStorage.getItem("userToken");
  authService = inject(AuthService)
  cdr = inject(ChangeDetectorRef)

  logout(){
    this.authService.logout()
    this.cdr.detectChanges()
  }
}

import { Component, inject } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { RouterLink } from "@angular/router";
import { AuthService } from '../../service/auth-service';
import { CurrentUserModel } from '../../models/CurrentUser';

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, Footer, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  authService = inject(AuthService)
}

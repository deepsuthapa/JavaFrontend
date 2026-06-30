import { Component, Input } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, Footer, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}

import { Component } from '@angular/core';
import { PostCard } from "../../../components/post-card/post-card";
import { Navbar } from "../../../components/navbar/navbar";

@Component({
  selector: 'app-feed',
  imports: [PostCard, Navbar],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {}

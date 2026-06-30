import { Component } from '@angular/core';
import { PostCard } from "../../../components/post-card/post-card";

@Component({
  selector: 'app-my-posts',
  imports: [PostCard],
  templateUrl: './my-posts.html',
  styleUrl: './my-posts.css',
})
export class MyPosts {}

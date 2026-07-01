import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { PostCard } from "../../../components/post-card/post-card";
import { Navbar } from "../../../components/navbar/navbar";
import { FeedService } from '../../../service/feed-service';
import { PostCardModel } from '../../../models/PostCardModel';

@Component({
  selector: 'app-feed',
  imports: [PostCard, Navbar],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed implements OnInit{

  feedService = inject(FeedService)
  posts: PostCardModel[] = []
  cdr = inject(ChangeDetectorRef)

  ngOnInit(){
    this.getFeed()
  }

  getFeed(){
    return this.feedService.getFeed().subscribe({
      next: (posts: any) => {
        this.posts = posts
        this.cdr.detectChanges()
      },
      error: (err: any) => {
        console.log("Error while fetching feed: ", err)
      }
    })
  }
}

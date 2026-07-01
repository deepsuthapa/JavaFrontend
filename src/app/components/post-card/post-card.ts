import { Component, inject, Input } from '@angular/core';
import { PostCardModel } from '../../models/PostCardModel';
import { FeedService } from '../../service/feed-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-post-card',
  imports: [RouterLink],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css',
})

export class PostCard {

  @Input() post!: PostCardModel
  feedService = inject(FeedService)

  getPostByID(id: number){
    return this.feedService.getPostById(id)
  }
}

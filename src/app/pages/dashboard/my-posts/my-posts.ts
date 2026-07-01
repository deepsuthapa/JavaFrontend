import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { PostCard } from "../../../components/post-card/post-card";
import { UserService } from '../../../service/user-service';
import { PostCardModel } from '../../../models/PostCardModel';
import { AuthService } from '../../../service/auth-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-my-posts',
  imports: [PostCard, RouterLink],
  templateUrl: './my-posts.html',
  styleUrl: './my-posts.css',
})
export class MyPosts implements OnInit{

  userService = inject(UserService)
  authService = inject(AuthService)
  myPosts: PostCardModel[] = []
  cdr = inject(ChangeDetectorRef)

  ngOnInit(): void {
    this.getMyPosts(this.authService.currentUser.name)
  }

  getMyPosts(author: string){
    this.userService.getMyPosts(author).subscribe({
      next: (res: any) => {
        console.log(res)
        this.myPosts = res
        this.cdr.detectChanges()
      },
      error: (err: any) => {
        console.log("Error while fetching my posts: ", err)
      }
    })
  }
}

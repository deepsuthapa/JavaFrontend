import { Component, inject } from '@angular/core';
import { PostCardModel } from '../../../models/PostCardModel';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../service/user-service';

@Component({
  selector: 'app-create-post',
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.html',
  styleUrl: './create-post.css',
})
export class CreatePost {

  fb = inject(FormBuilder)
  userService = inject(UserService)

  newPostForm = this.fb.group({
    id: [''],
    author: [''],
    image: [''],
    url: [''],
    date: [''],
    title: ['', [Validators.required]],
    body: ['', [Validators.required]],
    like: 0,
    comments: [''],
  })
  selectedFile: File | null = null 

  
  onFileSelected(event: Event): void {
    
    const input = event.target as HTMLInputElement;
    
    if (input.files && input.files.length > 0) {
      
      this.selectedFile = input.files[0];

    }
  }
  
  createPost() {
    let newPostData: PostCardModel = this.newPostForm.value as PostCardModel

    this.userService.addPost(newPostData).subscribe({
      next: (res: any) => {
        console.log("post added", res)
      },
      error: (err: any) => {
        console.log("Error while creating post: ", err)
      }
    })
  }
}

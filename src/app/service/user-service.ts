import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  api = inject(ApiService)
  url = this.api.getApi()
  http = inject(HttpClient)

  addPost(post: any): any {
    console.log("postData: ", post)
    return this.http.post(`${this.url}/createPosts`, post, { withCredentials: true })
  }

  getMyPosts(author: string){
    return this.http.get(`${this.url}/posts/${author}`)
  }
}

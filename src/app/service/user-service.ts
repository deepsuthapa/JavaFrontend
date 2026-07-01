import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  url = 'http://192.168.1.233:8080'
  http = inject(HttpClient)

  addPost(post: any): any {
    console.log("postData: ", post)
    return this.http.post(`${this.url}/createPosts`, post, { withCredentials: true })
  }

  getMyPosts(author: string){
    return this.http.get(`${this.url}/getPosts/${author}`)
  }
}

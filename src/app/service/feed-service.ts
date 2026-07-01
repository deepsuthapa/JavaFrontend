import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeedService {

  url = 'http://192.168.1.233:8080'
  http = inject(HttpClient)

  getFeed() {
    return this.http.get(`${this.url}/getPosts`)
  }

  getPostById(id: number){
    return this.http.get(`${this.url}/posts/:id`)
  }
}

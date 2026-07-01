import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root',
})
export class FeedService {

  api = inject(ApiService)
  url = this.api.getApi()
  http = inject(HttpClient)

  getFeed() {
    return this.http.get(`${this.url}/getPosts`)
  }

  getPostById(id: number){
    return this.http.get(`${this.url}/posts/:id`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'https://jsonplaceholder';

  constructor(private _httpClient: HttpClient) { }

  public getPosts() : Observable<Post[]> {
    return this._httpClient.get<Post[]>(this.baseUrl).pipe(
      map((data: any[]) => data.map((item: any) =>
      this._createPostFromObject(item))),
    )
  }

  public getPost(id: number) : Observable<Post> {
    return this._httpClient.get(this.baseUrl + '/' + id).pipe(
      map((data: any) => this._createPostFromObject(data))
    )
  }

  public deletePost(id: number) : Observable<Post> {
    return this._httpClient.delete(this.baseUrl + '/' + id).pipe(
      map((data: any) => this._createPostFromObject(data))
    )
  }

  public createPost(post: Post) : Observable<Post> {
    return this._httpClient.post(this.baseUrl, post).pipe(
      map((data: any) => this._createPostFromObject(data))
    )
  }

  _createPostFromObject(item: any): any {
    return new Post(item.userId, item.title, item.body, item.id);
  }
}

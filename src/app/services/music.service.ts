import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../music.model';
import {Post2} from '../music.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }
  
    getPostsData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/posts");
    }

  addPost(name: string, content: string, album:string, stars:string): Observable<any> {
    const post: Post = {name: name,  content: content, album: album, stars: stars};
    return this.http.post("http://localhost:8081/api/posts",post);
  }

  addPost2(email: string, subject: string, comment: string): Observable<any> {
    const post: Post2 = {email: email,subject: subject, comment: comment};
    return this.http.post("http://localhost:8081/api/posts",post);
  }

  deletePost(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/posts/"+id);
  }

  getPost(id:String): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts/"+id);
  }

  updatePost(id:String, name: string, content: string, album: string, stars:string): Observable<any> {
    const post: Post = {name: name, content: content, album: album, stars: stars};
    return this.http.put("http://localhost:8081/api/posts/"+id, post);
  }

}

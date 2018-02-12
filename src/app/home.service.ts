import { Injectable } from '@angular/core';
import { UserModel } from './user-model';
import { PostModel } from './post-model';
import { AnnouncementModel } from './announcement-model';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HomeService {
  private PREFIX = 'http://localhost:8080/api/';

  constructor(private http: Http) { }

  getUsers(): Observable<UserModel[]> {
    return this.http.get(this.PREFIX + 'users').map((res: Response) => <UserModel[]>res.json());
  }

  getPosts(): Observable<PostModel[]> {
    return this.http.get(this.PREFIX + 'posts').map((res: Response) => <PostModel[]>res.json());
  }

  getPostByID(id: string): Observable<PostModel> {
    return this.http.get(this.PREFIX + 'posts/' + id).map((res: Response) => <PostModel>res.json());
  }

  //Adds a new post/event to the database
  addPost(post: PostModel): Observable<Object> {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.PREFIX + "posts", post, options)
      .map((res: Response) => res.json());
  }

  getAnnouncements(): Observable<AnnouncementModel[]> {
    return this.http.get(this.PREFIX + 'announcements').map((res: Response) => <AnnouncementModel[]>res.json());
  }

  addAnnouncement(announcement:AnnouncementModel): Observable<Object> {
     var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
     let options = new RequestOptions({ headers: headers });

      return this.http.post(this.PREFIX + "announcements", announcement, options)
       .map((res: Response) => res.json());
   }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}

import { Injectable } from '@angular/core';
import { UserModel } from './user-model';
import { PostModel } from './post-model';
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

}

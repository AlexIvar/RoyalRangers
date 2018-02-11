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

  addPost(post:PostModel): void {
     var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
     let options = new RequestOptions({ headers: headers });

      this.http.post(this.PREFIX + "posts", post, options)
       .subscribe(data => {
         console.log(data['_body']);
        }, error => {
         console.log(error);// Error getting the data
       });
   }

/*  addPost(post:PostModel): Observable<PostModel> {
    console.log(JSON.stringify(post));
    console.log(this.PREFIX + 'posts');
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

     return this.http.post(this.PREFIX + 'posts', JSON.stringify(post), options)
                 .map((res: Response) => res.json());

     //return this.http.post(this.PREFIX + 'posts', JSON.stringify(post), options)
    //                 .map(this.extractData)
    //                 .catch(this.handleErrorObservable);
 }
*/
 private extractData(res: Response) {
     let body = res.json();
     return body || {};
}

 private handleErrorObservable (error: Response | any) {
   console.error(error.message || error);
   return Observable.throw(error.message || error);
  }

}

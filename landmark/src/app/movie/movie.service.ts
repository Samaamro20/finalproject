import { Injectable } from '@angular/core';
import { Movie } from "./Movie";
import { Http, Response, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { Headers } from '@angular/http';

 
@Injectable()
export class MovieService {
 
  private apiUrl = 'http://localhost:3000/movies';
 
  constructor(private http: Http) {
  }
 
  findAll(): Observable<Movie[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

//   findById(id: number): Observable<Book> {
//     return null;
//   }

deleteUser(id:number)
{
    return this.http.delete(`${this.apiUrl}/${id}`)
}

  // create(book: Book): Observable<Book> {
  //  return this.http.post<Book>(this.apiUrl, book);
 // }
// deleteUserById(id: number): Observable<boolean> {
//     return null;
//   }
 
//   deleteUserById(id: number): Observable<boolean> {
//     return null;
//   }
 
//   updateUser(user: User): Observable<User> {
//     return null;
//   }
 
}
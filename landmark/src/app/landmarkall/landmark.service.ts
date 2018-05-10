import { Injectable } from '@angular/core';
import { Landmark } from "./Landmark";
import { Http, Response, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { Headers } from '@angular/http';

 
@Injectable()
export class LandmarkService {
    total:number;
  private apiUrl = 'http://localhost:3000/landmarks';
  private sumURL='http://localhost:3000/landmarks/sum';
  public landmarkList: Observable<Landmark[]>;
  showEditor = true;
  myName: string;
  landmark: Landmark;
  constructor(private http: Http) {
  }
  
 
  findAll(): Observable<Landmark[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
 


deleteUser(id:number)
{
    return this.http.delete(`${this.apiUrl}/${id}`)
}

 saveUser(landmark: Landmark): Observable<Landmark> {
    return this.http.post(this.apiUrl, landmark)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
 
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
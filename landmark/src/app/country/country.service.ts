import { Injectable } from '@angular/core';
import { Country } from "./country";
import { Http, Response, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { Headers } from '@angular/http';




 
@Injectable()
export class CountryService {
    total:number;
  private apiUrl = 'http://localhost:3000/countrys';
  constructor(private http: Http) {
  }
 
  findAll(): Observable<Country[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
 


deletecountry(id:number)
{
    return this.http.delete(`${this.apiUrl}/${id}`)
}

 addcountry(country) {
    return this.http.post(this.apiUrl,country).map( res=> res.json()); 
     
 
  }

  // getToDos(): Observable<Country[]>{
  //   return this.http.get(this.apiUrl)
  //   .map(res  => {
  //     //Maps the response object sent from the server
        
  //     return res["data"].docs as Country[];
  //   })
  // }
createTodo(country: Country): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.apiUrl}`, country);
  }
 
}
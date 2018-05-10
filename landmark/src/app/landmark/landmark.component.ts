import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-landmark',
  templateUrl: './landmark.component.html',
  styleUrls: ['./landmark.component.css']
})
export class LandmarkComponent implements OnInit {
name="husam shaheen"
isactive=true;
students=[{name : 'Ahmad',mojar:'IT',avg:90},
{name : 'SAMI',mojar:'CS',avg:80},
{name : 'NIDAL',mojar:'CE',avg:91},
{name : 'husam',mojar:'IT',avg:89},
{name : 'ali',mojar:'CS',avg:50},
{name : 'omer',mojar:'CE',avg:60},
{name : 'fisal',mojar:'IT',avg:30},
];
User=[];
img="https://previews.123rf.com/images/ssilver/ssilver1510/ssilver151000018/46574819-golden-star.jpg";
onSave(){

  console.log("button click");
}
Save(){

  console.log("input");
}
bc(){

  console.log("input");
}
email="husam@gmail.com"
onkeyup(){

  console.log(this.email);
}

email1="ali@gmail.com"
onkeyuptow(){

  console.log(this.email1);
}  
 private postsUrl = 'http://localhost:3000/books';
 constructor(private http:Http)  { 

}
  
  // http.post('http://jsonplaceholder.typicode.com/posts', {title: 'foo',body: 'bar',userId: 1})
  // .subscribe( response => {console.log(response);},
  //   ); 
  
  posts: Observable<any>;
  title = 'app';
  searchparam = 2;
  jsondata;
  

  // getBookDetails() {
  //   this.service.getBooks().subscribe(books => {
  //     this.books = books.json();
  //     console.log(this.books);
  //   });
  // }


  
  ngOnInit() {
    
  }
  

}

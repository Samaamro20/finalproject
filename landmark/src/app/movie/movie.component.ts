import { Component, OnInit } from '@angular/core';
import { Movie } from "./Movie";
import { MovieService } from "./movie.service";


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService]
})
export class MovieComponent implements OnInit {
  private movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {this.getAllUsers();

  }
  
  getAllUsers() {
    this.movieService.findAll().subscribe(
      movies => {
        this.movies = movies;
      },
      err => {
        console.log(err);
      }

    );
  }
  deleteItem(id:number, index:number) {
    this.movieService.deleteUser(id).subscribe(response =>{
         this.movies.splice(index, 1);
    });
 }

//  public create(book: Book): Observable<Book> {
//   return this.http
//     .post(this.apiUrl, book)
//     .map(this.);
// }



}

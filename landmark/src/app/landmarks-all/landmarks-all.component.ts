import { Component, OnInit } from '@angular/core';
import { Landmark } from "./Landmark";
import { LandmarkService } from "./landmark.service";


@Component({
  selector: 'app-landmarks-all',
  templateUrl: './landmarks-all.component.html',
  styleUrls: ['./landmarks-all.component.css'],
  providers: [LandmarkService]
})
export class LandmarksAllComponent implements OnInit {
  private landmark: Landmark[];

  constructor(private landmarkService: LandmarkService) { }

  ngOnInit() {this.getAllUsers();

  }
  getAllUsers() {
    this.landmarkService.findAll().subscribe(
      landmarks => {
        this.landmark = landmarks;
      },
      err => {
        console.log(err);
      }

    );
  }
//   deleteItem(id:number, index:number) {
//     this.landmarkService.deleteUser(id).subscribe(response =>{
//          this.landmark.splice(index, 1);
//     });
//  }

//  public create(book: Book): Observable<Book> {
//   return this.http
//     .post(this.apiUrl, book)
//     .map(this.);
// }



}

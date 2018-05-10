import { Component, OnInit } from '@angular/core';
import { Landmark } from "./Landmark";
import { LandmarkService } from "./landmark.service";

@Component({
  selector: 'app-landmarkall',
  templateUrl: './landmarkall.component.html',
  styleUrls: ['./landmarkall.component.css'],
  providers: [LandmarkService]

})
export class LandmarkallComponent implements OnInit {
  private landmarks: Landmark[];
  

  constructor(private landmarkService: LandmarkService) { }

  ngOnInit() {this.getAllUsers();

  }


  total: number = 0;
  landmark: Landmark[];

     counttotal() {
         this.total = 0;
         for (let p of this.landmark) {
           this.total += (p.visitors)
         }
          return this.total;
          }

  getAllUsers() {
    this.landmarkService.findAll().subscribe(
      landmarks => {
        this.landmarks = landmarks;
      },
      err => {
        console.log(err);
      } 

    );
  }
  deleteItem(id:number, index:number) {
    this.landmarkService.deleteUser(id).subscribe(response =>{
         this.landmarks.splice(index, 1);
    });
 }

//  public create(book: Book): Observable<Book> {
//   return this.http
//     .post(this.apiUrl, book)
//     .map(this.);
// }



}

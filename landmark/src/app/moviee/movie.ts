export class Movie {

    id: number;
    title: string;
    image: string;
    rating:number;
    releaseyear:number;
    genre: string;
  
    constructor(id: number, title: string, image: string,rating:number,releaseyear:number, genre: string){
      this.id = id;
      this.title = title;
      this.image = image;
      this.rating = rating;
      this.releaseyear = releaseyear;
      this.genre = genre;
    }
  
  }
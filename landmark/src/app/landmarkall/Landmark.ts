export class Landmark {

    id: number;
    name: string;
    visitors: number;
    country:string;
    continent: string;
  
    constructor(id: number, name: string, visitors: number,country:string, continent: string){
      this.id = id;
      this.name = name;
      this.visitors = visitors;
      this.country = country;
      this.continent = continent;
    }
  
  }
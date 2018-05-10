export class Country {

    id: number;
    country:string;
    continent: string;

    
  
    constructor(id: number,country:string, continent: string){
      this.id = id;
      this.country = country;
      this.continent = continent;
    }
  }
  export default Country;
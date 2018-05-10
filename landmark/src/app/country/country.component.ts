import { Component, OnInit } from '@angular/core';
import { Country } from "./country";
import { CountryService } from "./country.service";


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [CountryService]

})
export class CountryComponent implements OnInit {
  private countrys: Country[];
  country={
    id:0,
country:"",
continent:""

  }
  

  constructor(private countryService: CountryService) { }

  ngOnInit() {this.getAllUsers();

  }


  
  getAllUsers() {
    this.countryService.findAll().subscribe(
      countrys => {
        this.countrys = countrys;
      },
      err => {
        console.log(err);
      }

    );
  }
  deleteItem(id:number, index:number) {
    this.countryService.deletecountry(id).subscribe(response =>{
         this.countrys.splice(index, 1);
    });
 }

 onsave(){
   this.countryService.addcountry(this.country).subscribe(country=>{
     this.countrys.unshift(this.country);
   })
 }

}

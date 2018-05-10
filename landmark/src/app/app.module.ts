import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { LandmarkComponent } from './landmark/landmark.component';
import { HttpModule } from '@angular/http';
import { RateComponent } from './rate/rate.component';
//import { BookComponent } from './book/book.component';
import { MovieComponent } from './movie/movie.component';
import { MovieeComponent } from './moviee/moviee.component';
import { LandmarksAllComponent } from './landmarks-all/landmarks-all.component';
import { LandmarkallComponent } from './landmarkall/landmarkall.component';
import { TestComponent } from './test/test.component';
import { CountryComponent } from './country/country.component';
import { AddlandmarkComponent } from './addlandmark/addlandmark.component';



@NgModule({
  declarations: [
    AppComponent,
    LandmarkComponent,
    RateComponent,
   // BookComponent,
    MovieComponent,
   MovieeComponent,
   LandmarksAllComponent,
   LandmarkallComponent,
   TestComponent,
   CountryComponent,
   AddlandmarkComponent,

  ],
  imports: [
    BrowserModule,HttpModule,FormsModule
  
  ],
  providers: [
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

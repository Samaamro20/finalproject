import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  _avg:number;
  items=[];
  img="https://previews.123rf.com/images/ssilver/ssilver1510/ssilver151000018/46574819-golden-star.jpg";

  constructor() { }

  ngOnInit() {
  }
renderStars(){
let j :number;
j=Math.floor(this._avg/10);
for(let i=0;i<j;i++){

  this.items[i]=i;
}


}
@Input()
set avg(value:number){
  this._avg=value;
  this.renderStars();
}
// onSave(){

//   console.log("button click");
  
// }
// @Output()
// buttonclick(){
//   console.log("button clicked");

// }

}

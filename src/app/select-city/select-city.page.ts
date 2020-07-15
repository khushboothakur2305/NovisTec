import { Component, OnInit } from "@angular/core";
import { city } from "../select-club/club.model";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-select-city",
  templateUrl: "./select-city.page.html",
  styleUrls: ["./select-city.page.scss"],
})
export class SelectCityPage implements OnInit {
  city: city[] = [
    { cityname: "New york", Cvalue: "newyork" },
    { cityname: "Los Angeles", Cvalue: "losangeles" },
    { cityname: "Toronto", Cvalue: "toronto" },
    { cityname: "London", Cvalue: "london" },
    { cityname: "Montreal", Cvalue: "mpntreal" },
    { cityname: "Vancouver", Cvalue: "vancouver" },
  ];
  constructor() {}
  
  submit(f:NgForm){
console.log(f.value.cityname);

  }
  ngOnInit() {}
}

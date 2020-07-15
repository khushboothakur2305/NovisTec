import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-select-city",
  templateUrl: "./select-city.page.html",
  styleUrls: ["./select-city.page.scss"],
})
export class SelectCityPage implements OnInit {
  city = [
    "New york",
    "Los Angeles",
    "Toronto",
    "London",
    "Montreal",
    "Vancouver",
  ];
  constructor() {}

  onsubmit(f: NgForm) {
    console.log(f.value.select);
  }
  ngOnInit() {}
}

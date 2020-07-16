import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-select-city",
  templateUrl: "./select-city.page.html",
  styleUrls: ["./select-city.page.scss"],
})
export class SelectCityPage implements OnInit {
  Cities;

  constructor() {
    this.initializeCities();
  }

  initializeCities() {
    this.Cities = [
      "Amsterdam",
      "Bogota",
      "Buenos Aires",
      "Cairo",
      "Dhaka",
      "Edinburgh",
      "Geneva",
      "Genoa",
      "Glasglow",
      "Hanoi",
      "Hong Kong",
      "Islamabad",
      "Istanbul",
      "Jakarta",
      "Kiel",
      "Kyoto",
      "Le Havre",
      "Lebanon",
      "Lhasa",
      "Lima",
      "London",
      "Los Angeles",
      "Madrid",
      "Manila",
      "New York",
      "Olympia",
      "Oslo",
      "Panama City",
      "Peking",
      "Philadelphia",
      "San Francisco",
      "Seoul",
      "Taipeh",
      "Tel Aviv",
      "Tokio",
      "Uelzen",
      "Washington",
    ];
  }

  onsubmit(f: NgForm) {
    console.log(f.value.select);
  }
  ngOnInit() {}
}

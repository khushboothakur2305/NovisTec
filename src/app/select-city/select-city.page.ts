import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-select-city",
  templateUrl: "./select-city.page.html",
  styleUrls: ["./select-city.page.scss"],
})
export class SelectCityPage implements OnInit {
  Cities;

  constructor(private router: Router, private http: HttpClient) {
    // this.initializeCities();
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
    this.router.navigate(["select-club"]);
  }

  ngOnInit() {
    this.http
      .get<{ status: boolean; message: string; data: any }>(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/citylist"
      )
      .subscribe((re) => {
        console.log(re);
        if ((re.status = true)) {
          console.log("Successfull");
        }
      });
  }
}

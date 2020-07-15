import { Component, OnInit } from "@angular/core";
import { club } from "./club.model";
import { Router } from '@angular/router';

@Component({
  selector: "app-select-club",
  templateUrl: "./select-club.page.html",
  styleUrls: ["./select-club.page.scss"],
})
export class SelectClubPage implements OnInit {
  club: club[] = [
    { name: "Fiction Club1", address: "Kimgston Road", image_url: "" },
    { name: "Fiction Club2", address: "Kimgston Road", image_url: "" },
    { name: "Fiction Club3", address: "Kimgston Road", image_url: "" },
    { name: "Fiction Club4", address: "Kimgston Road", image_url: "" },
    { name: "Fiction Club5", address: "Kimgston Road", image_url: "" },  ];
  constructor(private router:Router) {}

  ngOnInit() {}
  enter(clubname:string){
this.router.navigate(['otp1']);
 }
}

import { Component, OnInit } from "@angular/core";
import { club } from "./club.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-select-club",
  templateUrl: "./select-club.page.html",
  styleUrls: ["./select-club.page.scss"],
})
export class SelectClubPage implements OnInit {
  Clubs;

  constructor(private router: Router) {
    this.initializeClubs();
  }

  ngOnInit() {}
  enter(clubname: string) {
    this.router.navigate(["otp1"]);
  }
  initializeClubs() {
    this.Clubs = [
      {
        name: "Fiction Club",
        address: "Kimgston Road",
        image_url: "/assets/lovechildLogo.png",
      },
      {
        name: "Neon Club",
        address: "828 South Ketch Harbour Lane",
        image_url: "/assets/lovechildLogo.png",
      },
      {
        name: "Rico's Club",
        address: "115 Oak Drive",
        image_url: "/assets/lovechildLogo.png",
      },
      {
        name: "Tamilarsi Club",
        address: "8103 Birchwood Street",
        image_url: "/assets/lovechildLogo.png",
      },
      {
        name: "Kim-Yu Club",
        address: "8881 homestead St.",
        image_url: "/assets/lovechildLogo.png",
      },
    ];
  }
  getClubs(ev) {
    this.initializeClubs();
    var val = ev.target.value;
    if (val && val.trim() != "") {
      this.Clubs = this.Clubs.filter((Club) => {
        return Club.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }
}

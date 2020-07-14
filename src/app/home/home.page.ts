import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  text = "Hello";
  constructor(private router:Router) {}
  hello() {
  this.router.navigate(["otp1"]);
   }
  
  }

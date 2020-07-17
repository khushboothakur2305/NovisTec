import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-password-reset",
  templateUrl: "./password-reset.page.html",
  styleUrls: ["./password-reset.page.scss"],
})
export class PasswordResetPage implements OnInit {
  constructor(private router: Router) {}
  pass1: string;
  pass2: string;
  ngOnInit() {}
  submit(f: NgForm) {
    this.pass1 = f.value.newpassword;
    this.pass2 = f.value.repassword;
    if (this.pass1 === this.pass2) {
      this.router.navigate(["/login"]);
      console.log("sucessfull");
      return true;
    } else {
      console.log("UNsucessfull");
      this.router.navigate(["/password-reset"]);
      return false;
    }
  }
}

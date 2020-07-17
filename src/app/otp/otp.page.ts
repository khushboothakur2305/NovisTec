import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-otp",
  templateUrl: "./otp.page.html",
  styleUrls: ["./otp.page.scss"],
})
export class OTPPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  submit(f: NgForm) {
    console.log(f.value.otp);
    this.router.navigate(["/password-reset"]);
  }
  back() {
    this.router.navigate(["/login"]);
  }
}

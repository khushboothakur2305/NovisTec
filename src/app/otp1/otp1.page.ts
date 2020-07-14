import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-otp1",
  templateUrl: "./otp1.page.html",
  styleUrls: ["./otp1.page.scss"],
})
export class OTP1Page implements OnInit {
  constructor() {}

  ngOnInit() {}
  submit(f: NgForm) {
    console.log(f.value.newpassword);
    console.log(f.value.repassword);
  }
}

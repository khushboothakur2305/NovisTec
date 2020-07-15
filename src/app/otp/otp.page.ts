import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-otp",
  templateUrl: "./otp.page.html",
  styleUrls: ["./otp.page.scss"],
})
export class OTPPage implements OnInit {
  constructor() {}

  ngOnInit() {}
  submit(f: NgForm) {
    console.log(f.value.otp);
  }
}

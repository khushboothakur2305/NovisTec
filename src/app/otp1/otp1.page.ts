import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-otp1",
  templateUrl: "./otp1.page.html",
  styleUrls: ["./otp1.page.scss"],
})
export class OTP1Page implements OnInit {
  constructor(private router:Router) {}

  ngOnInit() {}
  submit(f: NgForm) {
    console.log(f.value.mail);
    this.router.navigate(["/otp"]);
  }
}

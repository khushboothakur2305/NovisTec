import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  post = {};
  ngOnInit() {}
  onsubmit(f: NgForm) {
    this.post = {
      email: f.value.email,
      password: f.value.password,
      city: "Indore",
      club_name: "Child",
    };
    this.http
      .post<{ status: boolean; message: string; data: any[] }>(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/login",
        this.post
      )
      .subscribe((re) => {
        console.log(re.status);
        if (re.status == true) {
          this.router.navigate(["/home"]);
        }
        if (!re.status) {
          console.log("Return");
        }
      });
  }
  forgot() {
    this.router.navigate(["/otp1"]);
  }
}

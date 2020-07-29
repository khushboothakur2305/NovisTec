import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-confirmed",
  templateUrl: "./confirmed.component.html",
  styleUrls: ["./confirmed.component.scss"],
})
export class ConfirmedComponent implements OnInit {
  constructor(private http: HttpClient) {}
  token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk2MTMxOTgzLCJqdGkiOiJhODkyNjRlNDM4NjM0MWViYTMxZWE5ZTAyNjI5YzhjNSIsInV1aWQiOiIwYTc2MzI2ZC1jZWU4LTRjMzAtYmUyYy03NTgzZDE3ZTg5OGQifQ.rUDCaff48WlJz-RFoT-LE0taWpaOftNYh2El9alFbK0";
  ngOnInit() {
    let header = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    let data = {
      day: "Saturday",
      date: "2020-08-01",
    };
    this.http.post(
      "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/tablelist/confirms",
      data,
      { headers: header }
    ).subscribe(re=>{
      console.log(re);
      
    });
  }
}

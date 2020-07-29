import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-confirmed",
  templateUrl: "./confirmed.component.html",
  styleUrls: ["./confirmed.component.scss"],
})
export class ConfirmedComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private datePipe: DatePipe,
    private router: Router
  ) {}
  nowmonth = new Date();
  days: number[] = [];
  month: string;
  data: any[] = [];
  request: any[] = [];
  requestdetails: any[] = [];
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
    this.http
      .post(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/tablelist/confirms",
        data,
        { headers: header }
      )
      .subscribe((re) => {
        this.request = re.data;
        console.log(this.request);
      });
    this.month = this.datePipe.transform(this.nowmonth, "MMM");
    for (let i = 0; i < 7; i++) {
      let today = new Date();
      let data = today.setDate(today.getDate() + i);
      this.days.push(data);
    }
    console.log(this.days);
  }
  onCategoryChange(category: Date) {
    console.log(this.datePipe.transform(category, "EEEE"));
    console.log(this.datePipe.transform(category));
    this.month = this.datePipe.transform(category, "MMM");
  }
  groupdetails(details: string) {
    console.log(details);
    this.router.navigate(["table-page/confirmedgroup-details"]);
  }
}

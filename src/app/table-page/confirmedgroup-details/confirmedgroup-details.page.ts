import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-confirmedgroup-details',
  templateUrl: './confirmedgroup-details.page.html',
  styleUrls: ['./confirmedgroup-details.page.scss'],
})
export class ConfirmedgroupDetailsPage implements OnInit {
  details:any[]=[];
  constructor(private http: HttpClient) {}
token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk2MTMxOTgzLCJqdGkiOiJhODkyNjRlNDM4NjM0MWViYTMxZWE5ZTAyNjI5YzhjNSIsInV1aWQiOiIwYTc2MzI2ZC1jZWU4LTRjMzAtYmUyYy03NTgzZDE3ZTg5OGQifQ.rUDCaff48WlJz-RFoT-LE0taWpaOftNYh2El9alFbK0"
  ngOnInit() {
    let header = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    let data = {
      day: "Saturday",
      date: "2020-08-01",
    };
    this.http
      .get<{ status: Boolean; message: String; data: any }>(
        "https://4obg8v558d.execute-api.ap-south-1.amazonaws.com/dev/groupdetails/47314d75-eaef-4026-82c8-c07b342b9380",
        {headers:header}
      )
      .subscribe((re) => {
        this.details=re.data;
        console.log(this.details);
      });
  }
}

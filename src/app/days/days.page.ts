import { Component, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-days",
  templateUrl: "./days.page.html",
  styleUrls: ["./days.page.scss"],
})
export class DaysPage implements OnInit {
  today: number = Date.now();
  constructor(private datePipe: DatePipe, private http: HttpClient) {}
  date: Date;

  request = [];
  dates: number[] = [];
  ngOnInit() {
    this.date = new Date();
    for (let i = 0; i < 14; i++) {
      let data = this.date.setDate(this.date.getDate() + 1);
      this.dates.push(data);
    }
  }
  selectedday(date: Date) {
    console.log(this.datePipe.transform(date, "EEEE"));
  }
}

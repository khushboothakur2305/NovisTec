import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-week",
  templateUrl: "./week.page.html",
  styleUrls: ["./week.page.scss"],
})
export class WeekPage implements OnInit {
  days: number[] = [];
  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 7; i++) {
      let today = new Date();
      let data = today.setDate(today.getDate() + i);
      this.days.push(data);
    }
    console.log(this.days);
  }
}

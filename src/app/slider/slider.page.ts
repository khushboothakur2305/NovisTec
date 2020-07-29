import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {
  nowmonth=new Date();
  days: number[] = [];
  month:string;
  constructor(private datePipe:DatePipe) {
  }

  ngOnInit() {
    this.month=this.datePipe.transform(this.nowmonth,'MMM');
    for (let i = 0; i < 7; i++) {
      let today = new Date();
      let data = today.setDate(today.getDate() + i);
      this.days.push(data);
    }
    console.log(this.days);
  }
  onCategoryChange(category:Date){
    console.log(this.datePipe.transform(category, "EEEE"));
    console.log(this.datePipe.transform(category));
   this.month = this.datePipe.transform(category,"MMM");
    
    }
}

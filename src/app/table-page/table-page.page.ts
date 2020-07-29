import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { IonTabs } from '@ionic/angular';
import { SliderPage } from '../slider/slider.page';
import { SelectCityPage } from '../select-city/select-city.page';
import { SelectClubPage } from '../select-club/select-club.page';

@Component({
  selector: "app-table-page",
  templateUrl: "./table-page.page.html",
  styleUrls: ["./table-page.page.scss"],
})
export class TablePagePage implements OnInit {
  constructor(private router: Router) {
 
  }
  Table:string;
  ngOnInit() {
    this.Table="Request";
  }

}

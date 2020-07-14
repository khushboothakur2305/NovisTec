import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
text="Change the text";
  constructor() {}
  OnChangeText(){
this.text="Text Is Changed"
  }
}

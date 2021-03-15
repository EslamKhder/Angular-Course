import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myText: string = "";
  friends: string[] = ["Ahmed","Karim","Yaser","Natore","Eslam"];
  mycolorBackGround: string = "black";
  myColor: String = "white";
  myclass: string = "style1"

  doStyle1() {
    this.myclass = "style1"
  }

  doStyle2() {
    this.myclass = "style2"
  }
}

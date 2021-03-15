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


  doRedYellow() {
    this.mycolorBackGround = "red";
    this.myColor = "yellow";
  }

  doBrownWhite() {
    this.mycolorBackGround = "brown";
    this.myColor = "white";
  }
}

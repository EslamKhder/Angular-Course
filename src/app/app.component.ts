import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myText: string = "A simple primary alert—check it out!";
  doTask() {
    this.myText = "Hi Eslam";
  }
}

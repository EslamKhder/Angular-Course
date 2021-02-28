import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fName: string = "eslam";
  lName: string = "khder";
  age: number = 20;
  result: boolean = false;

  constructor() {

    setTimeout(() => {
      this.result = true
    },5000)
  }
  getAge(): number{
    return this.age;
  }

}

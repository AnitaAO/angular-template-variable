import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <p>Two was binding represented with [()] i.e [(ngModel)] known as banana in the box.<p>
    <input [(ngModel)] ="name" (keyup.enter) = "onKeyUp()">
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = "John Doe";
  title = "Two way binding";

  onKeyUp(email: any){
    console.log(email)
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <p>Two was binding is represented with [()] i.e [(ngModel)] known as banana in the box.<p>
    <input [(ngModel)] ="email" (keyup.enter) = "onKeyUp()">
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  email = "me@me.com";
  title = "Two way binding";

  onKeyUp(){
    console.log(this.email)
  }
}

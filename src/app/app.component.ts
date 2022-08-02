import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <input #email (keyup.enter) = "onKeyUp(email.value)">
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  title = "Template Variable";

  onKeyUp(email: any){
    console.log(email)
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</>
    <input #email (keyup.enter) = "onKeyUp(email.value)" >
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = "Variable Template";

  onKeyUp(email: any){
    console.log(email)
  }
}

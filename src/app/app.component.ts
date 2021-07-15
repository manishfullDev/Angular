import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login';
  //component property
  username =''
  password=''
  password1=''

  //componenet event
  login(){
    console.log(this.username+"  "+this.password)
  }
}

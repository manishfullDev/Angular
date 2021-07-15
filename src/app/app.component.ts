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
  success=false
  message=''

  //componenet event
  login(){
    if(this.username=="manish" && this.password=="1234"){
      this.success=true
      this.message='login successfully'
    }else{
       this.success=true
        this.message='plz check your credentials'
    }
  }
}

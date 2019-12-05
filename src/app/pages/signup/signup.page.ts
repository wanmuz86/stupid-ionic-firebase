import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/user/auth.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
	email = ""
	password = ""

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

  signUpPressed(){
  	this.authService.signUp(this.email,this.password)
  	.then(()=>{
  		console.log('user succesfully registered')
  	})
  	.catch(err=>{
  		console.log(err)
  	})
  }

}

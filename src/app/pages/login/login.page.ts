import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/user/auth.service'
import { Router } from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	email = ""
	password = ""

  constructor(public authService:AuthService, public router:Router) { }

  ngOnInit() {
  }

  loginPressed(){
  	this.authService.login(this.email,this.password)
  	.then((user)=>{
    
  		console.log('user logged in!')
  		this.router.navigate(['/event-list'])
  	})
  	.catch(err=>{
  		console.log(err)
  		
  	})

  }

}

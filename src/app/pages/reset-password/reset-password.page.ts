import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/user/auth.service'
import  {ToastController} from '@ionic/angular'
@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.page.html',
	styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
	email = ""

	constructor(public authService:AuthService,
		public toastController:ToastController) { }

	ngOnInit() {
	}

	resetPressed(){
		this.authService.forgetPassword(this.email)
		.then( async ()=>{
			let toastCtrl = await this.toastController.create({message:"Email sent. Please check to continue",
				duration:2000})
			toastCtrl.present()


		})
		.catch(async err=>{
			let toastCtrl = await this.toastController.create({message:"Error occured please check your email!",
				duration:2000})
			toastCtrl.present()
		})

	}

}

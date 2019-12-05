import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/user/profile.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
	userProfile

  constructor(public profileService:ProfileService) { 
  	

  }

  ngOnInit() {
  	 this.profileService
  	 .getUserProfile()
  	 .get()
  	 .then(
  	 	userProfileSnapshot=>{

  	 	this.userProfile = userProfileSnapshot.data();
  	 })
  }

}

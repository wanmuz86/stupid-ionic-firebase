import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
@Injectable({
	providedIn: 'root'
})
export class ProfileService {
	currentUser
	userProfile
	constructor() { 

		firebase.auth().onAuthStateChanged(user=>{
			if (user){
				this.currentUser = user
				this.userProfile = firebase.firestore()
				.doc(`/userProfile/${user.uid}`)
			}
		})

	}
	getUserProfile(){
		let userId = localStorage.getItem('userId')
		console.log(userId)
		return  firebase.firestore().collection('/userProfile')
				.doc(userId)
	}
}

import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email,password){
  	return firebase.auth().signInWithEmailAndPassword(email,password);
  }

  signUp(email,password){
  	return firebase.auth().createUserWithEmailAndPassword(email,password)
  	.then((newUserCredential)=>{
  		firebase
  		.firestore()
  		.doc(`/userProfile/${newUserCredential.user.uid}`)
  		.set({email})
  		
  	})
  	.catch(error=>{
  		console.error(error)
  		throw new Error(error);
  		
  	})
  }
  forgetPassword(email){
    return firebase.auth().sendPasswordResetEmail(email)
  }
}

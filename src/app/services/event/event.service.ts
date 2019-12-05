import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class EventService {
	public eventListRef: firebase.firestore.CollectionReference

  constructor() { 
  	// Check if user is logged in
  	firebase.auth().onAuthStateChanged(user=> {
      if(user) 
      {
        this.eventListRef=
        firebase.firestore().collection(`/userProfile/${user.uid}/eventList`);     
      }
    });

  }
  createEvent( eventName, eventDate, eventPrice, eventCost){
  	return this.eventListRef.add({
  		name:eventName,
  		date:eventDate,
  		price:eventPrice * 1,
  		cost:eventCost * 1,
  		revenue:eventCost * -1
  	})
  }

  getEventList():firebase.firestore.CollectionReference{
    let uid = localStorage.getItem('userId')
    return firebase.firestore().collection(`/userProfile/${uid}/eventList`);
        
  }

  getEventDetail(eventId){
  	return  this.eventListRef.doc(eventId)
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EventService } from '../../services/event/event.service'
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {

	currentEvent
  constructor(
  	public activatedRoute:ActivatedRoute,
  	public eventService:EventService) { }

  ngOnInit() {
  	let id = this.activatedRoute.snapshot.paramMap.get('id');
  	this.eventService.getEventDetail(id)
  	.get()
  	.then(eventSnapshot=>{
  		this.currentEvent = eventSnapshot.data();
  		this.currentEvent.id = eventSnapshot.id;
  		console.log(this.currentEvent)

  	})

  }

}

import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event/event.service'
@Component({
	selector: 'app-event-create',
	templateUrl: './event-create.page.html',
	styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage implements OnInit {

	name = ""
	price 
	cost 
	datetime = ""
	constructor(public eventService:EventService) { }

	ngOnInit() {
	}

	createPressed(){
		this.eventService.createEvent(this.name,this.datetime,this.price,this.cost)
		.then(()=>{
			console.log("succesfully added")
		})
		.catch((err)=>{
			console.log(err)
		})

	}

}

import { Component, OnInit } from '@angular/core';
import { TimeInSeconds } from './../../_pipes/time-in-seconds.pipe'

@Component({
	selector: 'pomodoro-chronometer',
	templateUrl: './pomodoro.component.html',
	styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {
	timer: number;

	constructor() { }

	ngOnInit() {
		this.timer = 12

		setInterval(() => this.timer--, 1000)	
	}

}

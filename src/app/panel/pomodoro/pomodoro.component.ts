import { Component, OnInit, NgModule } from '@angular/core';
import { TimeInSeconds } from './../../_pipes/time-in-seconds.pipe'

@Component({
	selector: 'pomodoro-chronometer',
	templateUrl: './pomodoro.component.html',
	styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {
	remainTime: number = 0;
	timer;

	timerSettings = {
		focus: 30,
		shortbreak: 15,
		longbreak: 20
	}

	constructor() { }

	ngOnInit() {

	}

	startFocus() {
		this.setTime('focus')
	}

	startShortBreak() {
		this.setTime('shortbreak')
	}

	startLongBreak() {
		this.setTime('longbreak')
	}

	timerStop() {
		this.stop()
		this.remainTime = 0;
	}

	private setTime(type: string) {
		this.remainTime = this.timerSettings[type] * 60
		this.resetTimer()
	}

	private stop() {
		if (this.timer)
			clearInterval(this.timer)
	}

	private resetTimer() {
		this.stop()
		this.timer = setInterval(() => this.remainTime--, 1000)
	}
}

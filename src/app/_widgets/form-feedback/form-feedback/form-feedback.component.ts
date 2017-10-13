import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'form-feedback',
	templateUrl: './form-feedback.component.html',
	styleUrls: ['./form-feedback.component.css']
})
export class FormFeedbackComponent implements OnInit {
	@Input() message:string|null = null;
	@Output() change: EventEmitter<string> = new EventEmitter<string>();

	constructor() { }

	ngOnInit() {
	}

	close() {
		this.message = null;
		this.change.emit(this.message);
	}
}

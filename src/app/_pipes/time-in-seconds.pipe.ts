import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'timeInSeconds'})
export class TimeInSeconds implements PipeTransform {
	transform(value: number, exponent: string): string {
		let minutes;
		let seconds;

		minutes = ('0' + String(Math.floor(value / 60))).slice(-2)
		seconds = ('0' + String(value % 60)).slice(-2)

		return `${minutes}:${seconds}`
	}
}
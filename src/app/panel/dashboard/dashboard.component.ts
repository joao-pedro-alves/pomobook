import { Component, OnInit } from '@angular/core';
import { PomodoroComponent } from './../pomodoro/pomodoro.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

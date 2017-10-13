import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { DashboardComponent } from './panel/dashboard/dashboard.component';

import { AuthGuard } from "./_guards/auth.guard";
import { FormFeedbackComponent } from './_widgets/form-feedback/form-feedback/form-feedback.component';
import { PanelLayoutComponent } from './_layouts/panel-layout/panel-layout.component';
import { PomodoroComponent } from './panel/pomodoro/pomodoro.component';

import { TimeInSeconds } from './_pipes/time-in-seconds.pipe'

const appRoutes: Routes = [
  {
    path: '',
    component: PanelLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' }
    ]
  },

  // Sem template
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    FormFeedbackComponent,
    PanelLayoutComponent,
    PomodoroComponent,
    TimeInSeconds
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    AngularFireAuth,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

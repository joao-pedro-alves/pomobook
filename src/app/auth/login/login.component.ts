import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FormFeedbackComponent } from './../../_widgets/form-feedback/form-feedback/form-feedback.component'
import { AngularFireAuth } from 'angularfire2/auth'
import { Router } from '@angular/router'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	form: FormGroup
	feedbackMessage: string

	constructor(private afAuth: AngularFireAuth, private router: Router) { }

	ngOnInit() {
		this.form = new FormGroup({
			email: new FormControl('', [Validators.required]),
			password: new FormControl('', [Validators.required]),
		});
	}

	submitLogin() {
		this.afAuth.auth.signInWithEmailAndPassword(this.form.value.email, this.form.value.password)
			.then(() => this.router.navigate(['/dashboard']))
			.catch((err) => {
				this.feedbackMessage = err
				this.form.get('password').setValue('')
			})
	}

	feedbackMessageChange(event) {
		this.feedbackMessage = event;
	}
}

import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from 'ngx-validators';
import { Router } from '@angular/router';


@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	myForm: FormGroup
	@Input() errorMsg: boolean = false;

	constructor(public auth: AngularFireAuth, public router: Router) { }

	ngOnInit() {
		this.myForm = new FormGroup({
			name: new FormControl('', [Validators.required]),
			email: new FormControl('', [
				Validators.required,
				Validators.pattern("[^ @]*@[^ @]*")
			]),
			password: new FormControl('', [Validators.required]),
			password_confirm: new FormControl('', [Validators.required]),
		}, PasswordValidators.mismatchedPasswords('password', 'password_confirm'))

		
		// this.auth.auth.signOut()
		// 	.then(a => console.info(a), err => console.error(err));

		// this.auth.authState.subscribe((a) => {
		// 	a.updateProfile({
		// 		displayName: 'João Pedro Alves',
		// 		photoURL: '',
		// 	});
		// });

		// this.auth.auth.createUserWithEmailAndPassword('joaopedroalv9@gmail.com', 'qweqweqwe')
		// 	.then(data => console.warn(data), err => console.error(err))
	}

	closeErrorMsg() {
		this.errorMsg = false;
	}

	submitRegistration() {
		let self = this;
		this.auth.auth.createUserWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password)
			.then(data => {
				this.router.navigate(['/dashboard'])
			}, (err) => {
				self.errorMsg = err;
			});
	}
}

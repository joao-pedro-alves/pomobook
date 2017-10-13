import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { AngularFireAuth } from 'angularfire2/auth'
import { Observable } from "rxjs/Rx";
import { Router } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
	constructor(public auth: AngularFireAuth, public router: Router) { }

	canActivate() {
		return this.auth.authState.map((auth) => {
			if (auth) return true;

			this.router.navigate(['/dashboard'])
			return false;
		})
	}
}
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, RouterEvent } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AuthGuardService {
    constructor(private auth: AuthService
        , private router: Router) {
    }


    canActivate() {
        const currentUser = this.auth.currentUserValue;
        if (!currentUser) {
            // if (!this.auth.isLoggedIn()) {
            this.router.navigate(['login']);
            return false
        }
        return true;
        // if (currentUser) {
        //     //TODO  : Uncomment when we implement authorization
        //     // alert('success')
        //     //logged in so return true
        //     // this.router.navigate(['/pages']);
        //     return true;
        // }

        // // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login']);
        // // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        // return false;
    }
}



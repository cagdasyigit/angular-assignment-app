import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../../core/services/auth-service';
import { Observable } from 'rxjs';

@Injectable()
export class GalleryGuard implements CanActivate {

    constructor(private authService: AuthService) {}

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isAuthenticated()) {
            // There may be some other logical control like permission, role with the help of some function like this:
            // this.authService.getUserContext().roles;

            return true;
        } else {
            return false;
        }
    }
}

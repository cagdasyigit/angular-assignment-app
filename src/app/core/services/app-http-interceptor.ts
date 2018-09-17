import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { AuthService } from './auth-service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({
            headers: req.headers.set('AuthenticationToken', this.authService.getToken())
        });

        return httpHandler.handle(authReq);
    }
}

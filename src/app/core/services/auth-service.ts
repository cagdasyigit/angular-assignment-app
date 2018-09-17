import { Injectable } from '@angular/core';
import { AppUser } from '../entities/AppUser';

@Injectable()
export class AuthService {

    userContext: AppUser;

    constructor() {
        this.userContext = new AppUser();
    }

    private parseJwt (token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');

        return JSON.parse(window.atob(base64));
    }

    getToken(): string {
        return localStorage.getItem('token') || '';
    }

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    getUserContext(): AppUser {
        return this.userContext;
    }

    setUserContext(userContext: AppUser) {
        this.userContext = userContext;
    }

    isAuthenticated(): boolean {
        const token = this.getToken();
        const decodedToken = this.parseJwt(token);

        console.log('Decoded Token: ', decodedToken);

        // Then some logic code that checks decoded token and return a value
        // There may be some another function like:
        // checkTokenExpire();
        return true;
    }

    login(username, password) {
        // tslint:disable-next-line:max-line-length
        this.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    }

    logout() {
        this.setToken('');
    }
}

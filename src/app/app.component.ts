import { Component } from '@angular/core';
import { AuthService } from './core/services/auth-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(private authService: AuthService) {
        // Pretend like there is actually someone logged into system who named 'John Doe'
        authService.login('john.doe', 'abc123');
    }
}

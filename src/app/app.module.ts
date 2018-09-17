import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { NgxModule } from './core/modules/ngx.module';
import { GalleryModule } from './content/gallery/gallery.module';
import { environment } from '../environments/environment';
import { AppHttpInterceptor } from './core/services/app-http-interceptor';
import { AuthService } from './core/services/auth-service';

const appRoutes: Routes = [{
    path: '**',
    redirectTo: 'gallery'
}];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        // Actually, there is no need for router for one page,
        // But if we want add new pages, we can make sure we are ready to extension (open-close principle)
        RouterModule.forRoot(appRoutes),
        // We don't need for root store for now, there is nothing be handled on top
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        // For debugging store on dev mode
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        StoreRouterConnectingModule,
        NgxModule,
        GalleryModule
    ],
    providers: [
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AppHttpInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

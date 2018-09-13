import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {MaterialModule} from './core/modules/material.module';
import {GalleryModule} from './content/gallery/gallery.module';
import {NgxModule} from './core/modules/ngx.module';

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
        RouterModule.forRoot(appRoutes),
        MaterialModule,
        NgxModule,
        GalleryModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

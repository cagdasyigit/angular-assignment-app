import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NgxDnDModule} from '@swimlane/ngx-dnd';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

import {AppComponent} from './app.component';
import {MaterialModule} from './core/modules/material.module';
import {GalleryModule} from './content/gallery/gallery.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
        NgxDnDModule,
        NgxDatatableModule,
        GalleryModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

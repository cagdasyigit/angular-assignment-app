import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users/users.component';
import { MaterialModule } from '../../core/modules/material.module';

const routes: Routes = [{
    path: 'gallery',
    component: GalleryComponent
}];

@NgModule({
    declarations: [
        GalleryComponent,
        AlbumsComponent,
        PhotosComponent,
        UsersComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MaterialModule
    ],
    exports: [
        GalleryComponent
    ]
})
export class GalleryModule {}

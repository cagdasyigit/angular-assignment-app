import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../../core/modules/shared.module';

import { GalleryComponent } from './gallery.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users/users.component';
import { UsersReducer } from './users/store/users.reducer';
import { UsersEffects } from './users/store/users.effects';
import { GalleryService } from './gallery.service';
import { AlbumsReducer } from './albums/store/albums.reducer';
import { AlbumsEffects } from './albums/store/albums.effects';

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
        StoreModule.forFeature('gallery', {
            usersState: UsersReducer,
            albumsState: AlbumsReducer
        }),
        EffectsModule.forFeature([
            UsersEffects,
            AlbumsEffects
        ]),
        SharedModule
    ],
    exports: [
        GalleryComponent
    ],
    providers: [
        GalleryService
    ]
})
export class GalleryModule {}

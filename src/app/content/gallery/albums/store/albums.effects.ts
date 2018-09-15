import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/internal/operators';
import { Observable, of } from 'rxjs/index';

import { GalleryService } from '../../gallery.service';
import * as AlbumsActions from './albums.actions';
import { Album } from '../../../../core/entities/Album';

@Injectable()
export class AlbumsEffects {

    constructor (
        private actions$: Actions,
        private galleryService: GalleryService
    ) {}

    @Effect()
    fetchAlbums = this.actions$
        .ofType<AlbumsActions.FetchGalleryAlbums>(AlbumsActions.FETCH_GALLERY_ALBUMS)
        .pipe(
            switchMap((action: AlbumsActions.FetchGalleryAlbums): Observable<Album[]> => {
                return this.galleryService.getAlbums(action.payload);
            }),
            map((albums: Album[]) => new AlbumsActions.FetchGalleryAlbumsSuccess(albums)),
            catchError(err => of(new AlbumsActions.FetchGalleryAlbumsFail(err)))
        );
}

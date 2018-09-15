import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/internal/operators';
import { Observable, of } from 'rxjs/index';

import { GalleryService } from '../../gallery.service';
import * as PhotosActions from './photos.actions';
import { Photo } from '../../../../core/entities/Photo';

@Injectable()
export class PhotosEffects {

    constructor (
        private actions$: Actions,
        private galleryService: GalleryService
    ) {}

    @Effect()
    fetchPhotos = this.actions$
        .ofType<PhotosActions.FetchGalleryPhotos>(PhotosActions.FETCH_GALLERY_PHOTOS)
        .pipe(
            switchMap((action: PhotosActions.FetchGalleryPhotos): Observable<Photo[]> => {
                return this.galleryService.getPhotos(action.payload);
            }),
            map((photos: Photo[]) => new PhotosActions.FetchGalleryPhotosSuccess(photos)),
            catchError(err => of(new PhotosActions.FetchGalleryPhotosFail(err)))
        );
}

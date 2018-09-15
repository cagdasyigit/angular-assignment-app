import { Action } from '@ngrx/store';
import { Photo } from '../../../../core/entities/Photo';

export const FETCH_GALLERY_PHOTOS = 'FETCH_GALLERY_PHOTOS';
export const FETCH_GALLERY_PHOTOS_SUCCESS = 'FETCH_GALLERY_PHOTOS_SUCCESS';
export const FETCH_GALLERY_PHOTOS_FAIL = 'FETCH_GALLERY_PHOTOS_FAIL';

export const RESET_PHOTOS = 'RESET_PHOTOS';

export class FetchGalleryPhotos implements Action {
    readonly type = FETCH_GALLERY_PHOTOS;

    constructor(public payload: string) {}
}

export class FetchGalleryPhotosSuccess implements Action {
    readonly type = FETCH_GALLERY_PHOTOS_SUCCESS;

    constructor(public payload: Photo[]) {}
}

export class FetchGalleryPhotosFail implements Action {
    readonly type = FETCH_GALLERY_PHOTOS_FAIL;

    constructor(public payload: string) {}
}

export class ResetPhotos implements Action {
    readonly type = RESET_PHOTOS;
}

export type GalleryPhotosActions = FetchGalleryPhotos |
    FetchGalleryPhotosSuccess |
    FetchGalleryPhotosFail |
    ResetPhotos;

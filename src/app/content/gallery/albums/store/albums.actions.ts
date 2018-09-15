import { Action } from '@ngrx/store';
import { Album } from '../../../../core/entities/Album';

export const FETCH_GALLERY_ALBUMS = 'FETCH_GALLERY_ALBUMS';
export const FETCH_GALLERY_ALBUMS_SUCCESS = 'FETCH_GALLERY_ALBUMS_SUCCESS';
export const FETCH_GALLERY_ALBUMS_FAIL = 'FETCH_GALLERY_ALBUMS_FAIL';

export class FetchGalleryAlbums implements Action {
    readonly type = FETCH_GALLERY_ALBUMS;

    constructor(public payload: string) {}
}

export class FetchGalleryAlbumsSuccess implements Action {
    readonly type = FETCH_GALLERY_ALBUMS_SUCCESS;

    constructor(public payload: Album[]) {}
}

export class FetchGalleryAlbumsFail implements Action {
    readonly  type = FETCH_GALLERY_ALBUMS_FAIL;

    constructor(public payload: string) {}
}

export type GalleryAlbumsActions = FetchGalleryAlbums |
    FetchGalleryAlbumsSuccess |
    FetchGalleryAlbumsFail;

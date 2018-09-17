import { Action } from '@ngrx/store';
import { Album } from '../../../../core/entities/Album';

export const FETCH_GALLERY_ALBUMS = 'FETCH_GALLERY_ALBUMS';
export const FETCH_GALLERY_ALBUMS_SUCCESS = 'FETCH_GALLERY_ALBUMS_SUCCESS';
export const FETCH_GALLERY_ALBUMS_FAIL = 'FETCH_GALLERY_ALBUMS_FAIL';

export const CREATE_GALLERY_ALBUM = 'CREATE_GALLERY_ALBUM';
export const CREATE_GALLERY_ALBUM_SUCCESS = 'CREATE_GALLERY_ALBUM_SUCCESS';
export const CREATE_GALLERY_ALBUM_FAIL = 'CREATE_GALLERY_ALBUM_FAIL';

export class FetchGalleryAlbums implements Action {
    readonly type = FETCH_GALLERY_ALBUMS;

    constructor(public payload: string) {}
}

export class FetchGalleryAlbumsSuccess implements Action {
    readonly type = FETCH_GALLERY_ALBUMS_SUCCESS;

    constructor(public payload: Album[]) {}
}

export class FetchGalleryAlbumsFail implements Action {
    readonly type = FETCH_GALLERY_ALBUMS_FAIL;

    constructor(public payload: string) {}
}

export class CreateGalleryAlbum implements Action {
    readonly type = CREATE_GALLERY_ALBUM;

    constructor(public payload: Album) {}
}

export class CreateGalleryAlbumSuccess implements Action {
    readonly type = CREATE_GALLERY_ALBUM_SUCCESS;

    constructor(public payload: Album) {}
}

export class CreateGalleryAlbumFail implements Action {
    readonly type = CREATE_GALLERY_ALBUM_FAIL;

    constructor(public payload: string) {}
}

export type GalleryAlbumsActions = FetchGalleryAlbums |
    FetchGalleryAlbumsSuccess |
    FetchGalleryAlbumsFail |
    CreateGalleryAlbum |
    CreateGalleryAlbumSuccess |
    CreateGalleryAlbumFail;

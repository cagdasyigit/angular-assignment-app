import { Action } from '@ngrx/store';
import { User } from '../../../../core/entities/User';

export const FETCH_GALLERY_USERS = 'FETCH_GALLERY_USERS';
export const FETCH_GALLERY_USERS_SUCCESS = 'FETCH_GALLERY_USERS_SUCCESS';
export const FETCH_GALLERY_USERS_FAIL = 'FETCH_GALLERY_USERS_FAIL';

export const SELECT_GALLERY_USER = 'SELECT_GALLERY_USER';

export class FetchGalleryUsers implements Action {
    readonly type = FETCH_GALLERY_USERS;
}

export class FetchGalleryUsersSuccess implements Action {
    readonly type = FETCH_GALLERY_USERS_SUCCESS;

    constructor(public payload: User[]) {}
}

export class FetchGalleryUsersFail implements Action {
    readonly  type = FETCH_GALLERY_USERS_FAIL;

    constructor(public payload: string) {}
}

export class SelectUser implements Action {
    readonly type = SELECT_GALLERY_USER;

    constructor(public payload: User) {}
}

export type GalleryUsersActions = FetchGalleryUsers |
    FetchGalleryUsersSuccess |
    FetchGalleryUsersFail |
    SelectUser;

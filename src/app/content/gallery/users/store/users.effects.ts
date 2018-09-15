import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/internal/operators';
import { Observable, of } from 'rxjs/index';

import { GalleryService } from '../../gallery.service';
import * as UsersActions from './users.actions';
import { User } from '../../../../core/entities/User';

@Injectable()
export class UsersEffects {

    constructor (
        private actions$: Actions,
        private galleryService: GalleryService
    ) {}

    @Effect()
    fetchUsers = this.actions$
        .ofType<UsersActions.FetchGalleryUsers>(UsersActions.FETCH_GALLERY_USERS)
        .pipe(
            switchMap((): Observable<User[]> => {
                return this.galleryService.getUsers();
            }),
            map((users: User[]) => new UsersActions.FetchGalleryUsersSuccess(users)),
            catchError(err => of(new UsersActions.FetchGalleryUsersFail(err)))
        );
}

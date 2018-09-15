import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { UsersAppState, usersSelector, usersStateSelector } from './store/users.selectors';
import { FetchGalleryUsers } from './store/users.actions';
import { User } from '../../../core/entities/User';
import { Observable } from 'rxjs/index';
import { UsersState } from './store/users.reducer';
import { AlbumsAppState } from '../albums/store/albums.selectors';
import { FetchGalleryAlbums } from '../albums/store/albums.actions';
import { ResetPhotos } from '../photos/store/photos.actions';
import { PhotosAppState } from '../photos/store/photos.selectors';

@Component({
    selector: 'app-gallery-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {

    users$: Observable<User[]>;

    usersState$: Observable<UsersState>;

    constructor(
        private usersStore: Store<UsersAppState>,
        private albumsStore: Store<AlbumsAppState>,
        private photosStore: Store<PhotosAppState>
    ) {
        this.users$ = this.usersStore.select(usersSelector);
        this.usersState$ = this.usersStore.select(usersStateSelector);
    }

    ngOnInit() {
        this.usersStore.dispatch(new FetchGalleryUsers());
    }

    onClickUser(userId) {
        this.albumsStore.dispatch(new FetchGalleryAlbums(userId));
        this.photosStore.dispatch(new ResetPhotos());
    }
}

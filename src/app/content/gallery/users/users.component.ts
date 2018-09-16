import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';

import { UsersAppState, usersSelector, usersStateSelector } from './store/users.selectors';
import { FetchGalleryUsers, FetchGalleryUsersSuccess } from './store/users.actions';
import { User } from '../../../core/entities/User';
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

    users: User[];

    usersState$: Observable<UsersState>;

    headerState: HeaderState;

    searchText = '';

    sortSelection = [
        { value: 'name', viewValue: 'Sort By Name (A-Z)' },
        { value: 'eman', viewValue: 'Sort By Name (Z-A)' },
        { value: 'username', viewValue: 'Sort By Username (A-Z)' },
        { value: 'emanresu', viewValue: 'Sort By Username (Z-A)' },
        { value: 'email', viewValue: 'Sort By Email (A-Z)' },
        { value: 'liame', viewValue: 'Sort By Email (Z-A)' }
    ];

    constructor(
        private usersStore: Store<UsersAppState>,
        private albumsStore: Store<AlbumsAppState>,
        private photosStore: Store<PhotosAppState>
    ) {
        this.users = [];
        this.usersState$ = this.usersStore.select(usersStateSelector);
        this.headerState = HeaderState.Title;
    }

    ngOnInit() {
        this.usersStore.dispatch(new FetchGalleryUsers());
        this.usersStore.select(usersSelector).subscribe((users: User[]) => {
            this.users = users;
        });
    }

    onClickUser(userId) {
        this.albumsStore.dispatch(new FetchGalleryAlbums(userId));
        this.photosStore.dispatch(new ResetPhotos());
    }

    onSort(value: string) {
        this.users = this.users.sort((prev: User, next: User) => {
            switch (value) {
                case 'name':
                    return prev.name > next.name ? 1 : -1;

                case 'eman':
                    return next.name > prev.name ? 1 : -1;

                case 'username':
                    return prev.username > next.username ? 1 : -1;

                case 'emanresu':
                    return next.username > prev.username ? 1 : -1;

                case 'email':
                    return prev.email > next.email ? 1 : -1;

                case 'liame':
                    return next.email > prev.email ? 1 : -1;

                default:
                    return 0;
            }
        });

        // Let everyone know sort is changed in state data
        this.usersStore.dispatch(new FetchGalleryUsersSuccess(this.users));
    }
}

enum HeaderState {
    Title = 'title',
    Search = 'search',
    Filter = 'filter'
}

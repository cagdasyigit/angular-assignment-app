import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';
import { Store } from '@ngrx/store';

import { Album } from '../../../core/entities/Album';
import { AlbumsAppState, albumsSelector, albumsStateSelector } from './store/albums.selectors';
import { AlbumsState } from './store/albums.reducer';
import { PhotosAppState } from '../photos/store/photos.selectors';
import { FetchGalleryPhotos, ResetPhotos } from '../photos/store/photos.actions';
import { UsersAppState, selectedUserSelector } from '../users/store/users.selectors';
import { User } from '../../../core/entities/User';
import { CreateGalleryAlbum } from './store/albums.actions';

@Component({
    selector: 'app-gallery-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

    albums: Album[];

    albums$: Observable<Album[]>;

    albumsState$: Observable<AlbumsState>;

    selectedUser: User;

    isSelectedAll: boolean;

    renderState: RenderState = RenderState.List;

    newAlbumTitle = '';

    constructor(
        private albumStore: Store<AlbumsAppState>,
        private photoStore: Store<PhotosAppState>,
        private usersStore: Store<UsersAppState>
    ) {
        this.albums = [];
        this.albums$ = this.albumStore.select(albumsSelector);
        this.albumsState$ = this.albumStore.select(albumsStateSelector);
    }

    ngOnInit() {
        this.albums$.subscribe((albums: Album[]) => {
            if (albums != null) {
                this.albums = albums;
                this.isSelectedAll = false;
                this.newAlbumTitle = '';
            }
        });

        this.usersStore.select(selectedUserSelector).subscribe((user: User) => {
            this.selectedUser = user;
        });
    }

    getPhotos() {
        if (this.albums.length === 0) {
            return;
        }

        let queryString = '';
        let countSelected = 0;

        for (const i in this.albums) {
            if (this.albums[i].isSelected) {
                const queryStringChar = (countSelected === 0 ? '?' : '&');
                queryString += queryStringChar + 'albumId=' + this.albums[i].id;
                countSelected++;
            }
        }

        if (countSelected === 0) {
            this.photoStore.dispatch(new ResetPhotos());
        } else {
            this.photoStore.dispatch(new FetchGalleryPhotos(queryString));
        }
    }

    saveAlbum() {
        this.renderState = RenderState.List;
        this.albumStore.dispatch(
            new CreateGalleryAlbum(
                new Album({
                    userId: this.selectedUser.id,
                    title: this.newAlbumTitle
                })));
    }

    onClickSelectAll() {
        // Read the comment in method: onClickAlbumCheckbox
        setTimeout(() => {
            if (this.isSelectedAll) {
                this.albums.map((album) => {
                    album.isSelected = true;
                    return album;
                });
                this.getPhotos();
            } else {
                this.albums.map((album) => {
                    album.isSelected = false;
                    return album;
                });
                this.photoStore.dispatch(new ResetPhotos());
            }
        });
    }

    onClickAlbumCheckbox() {
        // NgModel just updating the values,
        // So this is a quick workaround to waiting for update
        setTimeout(() => {
            this.getPhotos();
        });
    }
}

enum RenderState {
    List = 'list',
    Create = 'create'
}

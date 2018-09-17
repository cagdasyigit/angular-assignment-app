import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, PartialObserver } from 'rxjs/index';

import { Album } from '../../../core/entities/Album';
import { AlbumsAppState, albumsSelector, albumsStateSelector } from './store/albums.selectors';
import { Store } from '@ngrx/store';
import { AlbumsState } from './store/albums.reducer';
import { PhotosAppState } from '../photos/store/photos.selectors';
import { FetchGalleryPhotos, ResetPhotos } from '../photos/store/photos.actions';

@Component({
    selector: 'app-gallery-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

    albums: Album[];

    albums$: Observable<Album[]>;

    albumsState$: Observable<AlbumsState>;

    isSelectedAll: boolean;

    renderState: RenderState = RenderState.Create;

    constructor(
        private albumStore: Store<AlbumsAppState>,
        private photoStore: Store<PhotosAppState>
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
            }
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

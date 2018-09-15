import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';

import { Album } from '../../../core/entities/Album';
import { AlbumsAppState, albumsSelector, albumsStateSelector } from './store/albums.selectors';
import { Store } from '@ngrx/store';
import { AlbumsState } from './store/albums.reducer';

@Component({
    selector: 'app-gallery-albums',
    templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {

    albums$: Observable<Album[]>;

    albumsState$: Observable<AlbumsState>;

    constructor(private albumStore: Store<AlbumsAppState>) {
        this.albums$ = this.albumStore.select(albumsSelector);
        this.albumsState$ = this.albumStore.select(albumsStateSelector);
    }

    ngOnInit() {
    }

}

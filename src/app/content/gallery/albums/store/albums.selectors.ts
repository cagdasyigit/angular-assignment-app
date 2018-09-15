import { AlbumsState } from './albums.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AlbumsAppState {
    albumsState: AlbumsState;
}

export const gallerySelector = createFeatureSelector<AlbumsAppState>('gallery');

export const albumsStateSelector = createSelector(
    gallerySelector,
    (state: AlbumsAppState) => state.albumsState
);

export const albumsSelector = createSelector(
    albumsStateSelector,
    (state: AlbumsState) => state.albums
);

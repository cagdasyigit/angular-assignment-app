import { AlbumsState } from './albums.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AlbumsAppState {
    albumsState: AlbumsState;
}

export const albumsFeatureSelector = createFeatureSelector<AlbumsAppState>('gallery');

export const albumsStateSelector = createSelector(
    albumsFeatureSelector,
    (state: AlbumsAppState) => state.albumsState
);

export const albumsSelector = createSelector(
    albumsStateSelector,
    (state: AlbumsState) => state.albums
);

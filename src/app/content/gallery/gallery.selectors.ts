import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../core/entities/User';
import { Album } from '../../core/entities/Album';

export interface GalleryState {
    users: User[];
    albums: Album[];
    // photos: Photo[];
}

export interface GalleryAppState {
    galleryState: GalleryState;
}

export const galleryFeatureSelector = createFeatureSelector<GalleryAppState>('gallery');

export const galleryStateSelector = createSelector(
    galleryFeatureSelector,
    (state: GalleryAppState) => state.galleryState
);

export const usersSelector = createSelector(
    galleryStateSelector,
    (state: GalleryState) => state.users
);

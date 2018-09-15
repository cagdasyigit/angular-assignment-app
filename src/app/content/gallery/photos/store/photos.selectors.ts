import { PhotosState } from './photos.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface PhotosAppState {
    photosState: PhotosState;
}

export const gallerySelector = createFeatureSelector<PhotosAppState>('gallery');

export const photosStateSelector = createSelector(
    gallerySelector,
    (state: PhotosAppState) => state.photosState
);

export const photosSelector = createSelector(
    photosStateSelector,
    (state: PhotosState) => state.photos
);

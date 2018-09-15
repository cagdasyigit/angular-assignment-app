import { UsersState } from './users.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UsersAppState {
    usersState: UsersState;
}

export const gallerySelector = createFeatureSelector<UsersAppState>('gallery');

export const usersStateSelector = createSelector(
    gallerySelector,
    (state: UsersAppState) => state.usersState
);

export const usersSelector = createSelector(
    usersStateSelector,
    (state: UsersState) => state.users
);

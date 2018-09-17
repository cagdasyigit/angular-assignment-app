import { Album } from '../../../../core/entities/Album';
import * as Actions from './albums.actions';

export interface AlbumsState {
    albums: Album[];
    loading: boolean;
    error: string;
}

const initialState: AlbumsState = {
    albums: [],
    loading: false,
    error: null
};

export function AlbumsReducer(state = initialState, action: Actions.GalleryAlbumsActions) {
    switch (action.type) {
        case Actions.FETCH_GALLERY_ALBUMS:
            return {
                albums: [],
                error: null,
                loading: true
            };

        case Actions.FETCH_GALLERY_ALBUMS_SUCCESS:
            return {
                albums: [...action.payload],
                loading: false,
                error: null
            };

        case Actions.FETCH_GALLERY_ALBUMS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case Actions.CREATE_GALLERY_ALBUM:
            return {
                ...state,
                error: null,
                loading: true
            };

        case Actions.CREATE_GALLERY_ALBUM_SUCCESS:
            return {
                ...state,
                albums: [action.payload, ...state.albums],
                loading: false
            };

        case Actions.FETCH_GALLERY_ALBUMS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}

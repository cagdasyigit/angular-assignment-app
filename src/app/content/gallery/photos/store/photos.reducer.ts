import { Photo } from '../../../../core/entities/Photo';
import * as Actions from './photos.actions';

export interface PhotosState {
    photos: Photo[];
    loading: boolean;
    error: string;
}

const initialState: PhotosState = {
    photos: [],
    loading: false,
    error: null
};

export function PhotosReducer(state = initialState, action: Actions.GalleryPhotosActions) {
    switch (action.type) {
        case Actions.FETCH_GALLERY_PHOTOS:
            return {
                ...initialState,
                loading: true
            };

        case Actions.FETCH_GALLERY_PHOTOS_SUCCESS:
            return {
                photos: action.payload,
                loading: false,
                error: null
            };

        case Actions.FETCH_GALLERY_PHOTOS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case Actions.RESET_PHOTOS:
            return initialState;

        default:
            return state;
    }
}

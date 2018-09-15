import { User } from '../../../../core/entities/User';
import * as Actions from './users.actions';

export interface UsersState {
    users: User[];
    loading: boolean;
    error: string;
}

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null
};

export function UsersReducer(state = initialState, action: Actions.GalleryUsersActions) {
    switch (action.type) {
        case Actions.FETCH_GALLERY_USERS:
            return {
                ...initialState,
                loading: true
            };

        case Actions.FETCH_GALLERY_USERS_SUCCESS:
            return {
                users: action.payload,
                loading: false,
                error: null
            };

        case Actions.FETCH_GALLERY_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
    }
}

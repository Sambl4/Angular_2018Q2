import { Action } from '@ngrx/store';
import { initialAuthState, AuthState } from './auth.state';
import { Actions, AuthActionTypes } from './auth.actions';

export function AuthReducer (state = initialAuthState, action: Actions): AuthState {
    switch (action.type) {
        case AuthActionTypes.AUTH_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true,
                isAuthenticated: false
            };
        case AuthActionTypes.AUTH_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false,
                isAuthenticated: action.payload.state
            };
        case AuthActionTypes.AUTH_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
                isAuthenticated: false
            };
        default: {
            return state;
        }
    }
}
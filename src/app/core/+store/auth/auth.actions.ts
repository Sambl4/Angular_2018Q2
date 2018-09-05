import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    AUTH_REQUEST = 'Auth Request',
    AUTH_FAILURE = 'Auth Failure',
    AUTH_SUCCESS = 'Auth Success'
}

export class AuthRequestAction implements Action {
    readonly type = AuthActionTypes.AUTH_REQUEST;
}

export class AuthFailureAction implements Action {
    readonly type = AuthActionTypes.AUTH_FAILURE;
    constructor(public payload: {error: string}) {}
}

export class AuthSuccessAction implements Action {
    readonly type = AuthActionTypes.AUTH_SUCCESS;
    constructor(public payload: {state: boolean}) {}
}

export type Actions = AuthRequestAction | AuthFailureAction | AuthSuccessAction;
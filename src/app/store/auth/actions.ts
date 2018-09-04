import { Action } from '@ngrx/store';

export enum ActionTypes {
    AUTH_REQUEST = 'Auth Request',
    AUTH_FAILURE = 'Auth Failure',
    AUTH_SUCCESS = 'Auth Success'
}

export class AuthRequestAction implements Action {
    readonly type = ActionTypes.AUTH_REQUEST;
}

export class AuthFailureAction implements Action {
    readonly type = ActionTypes.AUTH_FAILURE;
    constructor(public payload: {error: string}) {}
}

export class AuthSuccessAction implements Action {
    readonly type = ActionTypes.AUTH_SUCCESS;
    constructor(public payload: {state: string}) {}
}

export type Actions = AuthRequestAction | AuthFailureAction | AuthSuccessAction;
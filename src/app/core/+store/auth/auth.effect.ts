import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { AuthorizationService } from '../../../authorization/authorization.service';
import * as authActions from './auth.actions';

@Injectable()
export class AuthEffects {
    // @Effect()
    // AuthRequestEffect$: Observable<Action> = this.actions$.pipe(
    //     ofType<authActions.AuthRequestAction>(
    //         authActions.AuthActionTypes.AUTH_REQUEST
    //     ),
    //     switchMap(action =>
    //         // this.authorizationService.isAuthenticated(action.payload.state)
    //         this.authorizationService.isAuthenticated(action.type)
    //     )
    // );

    constructor(private authorizationService: AuthorizationService, private actions$: Actions) {}
}
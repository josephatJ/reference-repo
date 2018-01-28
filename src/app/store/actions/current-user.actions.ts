import {Action} from '@ngrx/store';
import * as fromCurrentUser from '../reducers/current-user.reducer';

export enum CurrentUserActions {
  LOAD = '[Current User] Load current user',
  LOAD_SUCCESS = '[Current User] Load current user success',
  LOAD_FAIL = '[Current User] Load current user fail'
}

export class LoadAction implements Action {
  readonly type = CurrentUserActions.LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = CurrentUserActions.LOAD_SUCCESS;

  constructor(public payload: fromCurrentUser.CurrentUserState) {
  }
}

export class LoadFailAction implements Action {
  readonly type = CurrentUserActions.LOAD_FAIL;
}

export type CurrentUserAction = LoadAction | LoadSuccessAction | LoadFailAction;

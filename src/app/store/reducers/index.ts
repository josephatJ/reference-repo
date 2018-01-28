import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@env/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromRouterReducer from '@ngrx/router-store';
import * as fromCurrentUserReducer from './current-user.reducer';

export interface State {
  route: fromRouterReducer.RouterReducerState;
  currentUser: fromCurrentUserReducer.CurrentUserState;
}

export const reducers: ActionReducerMap<State> = {
  route: fromRouterReducer.routerReducer,
  currentUser: fromCurrentUserReducer.currentUserReducer
};

export const getRootState = (state: State) => state;

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];

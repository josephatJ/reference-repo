import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { currentUserReducer, CurrentUserState } from './current-user.reducer';

export interface AppState {
  route: RouterReducerState;
  currentUser: CurrentUserState;
}

export const reducers: ActionReducerMap<AppState> = {
  route: routerReducer,
  currentUser: currentUserReducer
};

export const getRootState = (state: AppState) => state;

/**
 * Get current user state
 */
export const getCurrentUserState = createSelector(
  getRootState,
  (state: AppState) => state.currentUser
);

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];

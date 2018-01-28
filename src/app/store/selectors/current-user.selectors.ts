import {createSelector} from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as fromCurrentUser from '../reducers/current-user.reducer';

const currentUser = (state: fromRoot.State) => state.currentUser;

export const getCurrentUser = createSelector(currentUser,
  (currentUserObeject: fromCurrentUser.CurrentUserState) => currentUserObeject);

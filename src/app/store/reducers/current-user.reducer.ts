import * as fromCurrentUserActions from '../actions';
export interface CurrentUserState {
  id: string;
  name: string;
  displayName: string;
  email: string;
  created: string;
  lastUpdated: string;
  dataViewOrganisationUnits: any[];
  userCredentials: any;
}

export function currentUserReducer(state: CurrentUserState = null, action: fromCurrentUserActions.CurrentUserActions) {
  switch (action.type) {
    case fromCurrentUserActions.LOAD_SUCCESS:
      return {...action.payload};
    default:
      return state;
  }
}

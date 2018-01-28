import * as fromCurrentUserAction from '../actions';
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

export function currentUserReducer(state: CurrentUserState = null, action: fromCurrentUserAction.CurrentUserAction) {
  switch (action.type) {
    case fromCurrentUserAction.CurrentUserActions.LOAD_SUCCESS:
      return {...action.payload};
    default:
      return state;
  }
}

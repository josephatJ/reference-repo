import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

import {HttpClientService} from '@app/core';
import * as fromCurrentUserActions from '../actions';
import * as fromCurrentUser from '../reducers/current-user.reducer';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CurrentUserEffects {

  @Effect()
  loadCurrentUser$ = this.actions$
    .ofType<fromCurrentUserActions.LoadAction>(fromCurrentUserActions.LOAD)
    .pipe(
      switchMap(() => this._load()),
      map((currentUserObject: fromCurrentUser.CurrentUserState) =>
        new fromCurrentUserActions.LoadSuccessAction(currentUserObject)),
      catchError((error) => of(new fromCurrentUserActions.LoadFailAction()))
    );

  constructor(private actions$: Actions,
              private httpClient: HttpClientService) {
  }

  private _load(): Observable<any> {
    return this.httpClient.get(`me.json?fields=id,name,displayName,created,lastUpdated,email,
    dataViewOrganisationUnits[id,name,level],userCredentials[username]`);
  }
}

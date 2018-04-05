import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/reducers';
import { LoadCurrentUserAction } from './store/actions/current-user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store<AppState>) {
    store.dispatch(new LoadCurrentUserAction());
  }
}

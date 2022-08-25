import { ActionReducerMap, createSelector } from '@ngrx/store';
import { CheckType } from 'src/app/Interfaces/Check';
import * as from_Check_Route from './Check_Route';
import { CheckRoute } from 'src/app/Interfaces/Check_Route';

export interface RootReducerState {
  Check_Route: CheckRoute;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  Check_Route: from_Check_Route.Check_Route,
};

export const getStateCheckRoute = (state: RootReducerState) =>
  state.Check_Route;
export const getRoute = createSelector(
  getStateCheckRoute,
  from_Check_Route.Route
);
export const getTitle = createSelector(
  getStateCheckRoute,
  from_Check_Route.Title
);

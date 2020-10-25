import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey, State } from './reducer';

export type AppState = {
  [featureKey]: State;
};

export const selectFeature = createFeatureSelector<AppState, State>(featureKey);

export const selectTask = createSelector(selectFeature, (s: State) => s.task);

import { createFeatureSelector, createSelector } from '@ngrx/store';

const getAppState = createFeatureSelector<any>('app');

export const getCar = createSelector(getAppState, state => state.carSearch);

export const getCarItinerariesData = createSelector(getAppState, state => state.carItineraries);
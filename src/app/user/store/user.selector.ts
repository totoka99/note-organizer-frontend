import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';
import { userFeature } from '../user-feature.constant';

export const selectUserState = (state: UserState) => state;
export const userFeatureSelector =
  createFeatureSelector<UserState>(userFeature);
export const userSelectorV2 = createSelector(
  userFeatureSelector,
  (user) => user.user
);

import { createFeatureSelector, createSelector } from '@ngrx/store';

import { noteFeature } from '../constants';
import { NoteState } from './note.reducer';

export const noteFeatureSelector =
  createFeatureSelector<NoteState>(noteFeature);

export const notesSelector = createSelector(
  noteFeatureSelector,
  (state: NoteState) => state.notes
);

export const selectedNoteSelector = createSelector(
  noteFeatureSelector,
  (state: NoteState) => state.selectedNote
);

import { createAction, props } from '@ngrx/store';
import { NoteCreate, SetSelectedNote } from '../interfaces';

export const createNoteAction = createAction(
  '[NOTE] Create note',
  props<NoteCreate>()
);
export const setSelectedNoteAction = createAction(
  '[NOTE] Set selected note',
  props<SetSelectedNote>()
);
export const createNoteWithDataAction = createAction(
  '[NOTE] Create note with data',
  props<NoteCreate>()
);
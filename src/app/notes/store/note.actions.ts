import { createAction, props } from '@ngrx/store';
import {
  DeleteNote,
  NoteCreate,
  SetSelectedNote
} from '../interfaces';
import { LoadedNotes } from '../interfaces/set-loaded-notes';
import { UpdateNote } from '../interfaces/update-note';

export const createNoteAction = createAction(
  '[NOTE] Create note',
  props<NoteCreate>()
);
export const createNoteWithDataAction = createAction(
  '[NOTE] Create note with data',
  props<NoteCreate>()
);
export const setNotesAction = createAction(
  '[NOTE] Set loaded notes',
  props<LoadedNotes>()
);
export const setSelectedNoteAction = createAction(
  '[NOTE] Set selected note',
  props<SetSelectedNote>()
);
export const updateNoteAction = createAction(
  '[NOTE] Update note details',
  props<UpdateNote>()
);
export const getNotesAction = createAction(
  '[NOTE] Load notes with data'
);
export const deleteSelectedNoteAction = createAction(
  '[NOTE] Delte note',
  props<DeleteNote>()
);

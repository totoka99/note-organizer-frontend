import { createReducer, on } from '@ngrx/store';
import { SetSelectedNote } from '../interfaces';
import { Note } from '../models';
import { setSelectedNoteAction } from './note.actions';

export interface NoteState {
  notes: Array<Note>;
  selectedNote: Note | null;
}

export const initialState: NoteState = {
  notes: [
    new Note(1, 'Text', false),
    { description: 'Ures' } as Note,
    new Note(3, 'Text 3', false),
  ],
  selectedNote: null,
};

export const noteReducer = createReducer(
  initialState,
  on(
    setSelectedNoteAction,
    (state: NoteState, setSelectedNote: SetSelectedNote) => ({
      ...state,
      selectedNote: setSelectedNote.selectedNote,
    })
  )
);

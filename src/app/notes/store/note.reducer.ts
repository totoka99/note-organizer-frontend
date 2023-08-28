import { State, createReducer, on } from '@ngrx/store';
import { SetSelectedNote } from '../interfaces';
import { Note } from '../models';
import {
  loadNotesAction,
  setNotesAction,
  setSelectedNoteAction
} from './note.actions';
import { LoadedNotes } from '../interfaces/set-loaded-notes';
import { state } from '@angular/animations';
import { Observable } from 'rxjs/internal/Observable';

export interface NoteState {
  notes: Note[] | null;
  selectedNote: Note | null;
}

export const initialState: NoteState = {
  notes: null,
  selectedNote: null
};

export const noteReducer = createReducer(
  initialState,
  on(
    setSelectedNoteAction,
    (state: NoteState, setSelectedNote: SetSelectedNote) => ({
      ...state,
      selectedNote: setSelectedNote.selectedNote
    })
  ),
  on(
    setNotesAction,
    (state: NoteState, loaded: LoadedNotes) => ({
      ...state,
      notes: loaded.notes
    })
  )
);

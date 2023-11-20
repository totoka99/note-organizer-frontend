import { State, createReducer, on } from '@ngrx/store';
import { DeleteNote, SetSelectedNote } from '../interfaces';
import { Note } from '../models';
import {
  deleteSelectedNoteAction,
  getNotesAction,
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
  // on(deleteSelectedNoteAction,
  //   (state: NoteState, delteNote:DeleteNote)=>({
  //     ...state,
  //     notes: notes.pipe()
  //   })
  //   )
);

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';

import { NoteCreate } from '../interfaces';
import { Note } from '../models';
import { NoteService } from '../services';
import {
  createNoteAction,
  loadNotesAction,
  setNotesAction,
  setSelectedNoteAction
} from './note.actions';

@Injectable()
export class NoteEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly noteService: NoteService
  ) {}

  public readonly createNote = createEffect(() =>
    this.actions$.pipe(
      ofType(createNoteAction.type),
      switchMap((action: NoteCreate) => {
        console.log(action);
        return this.noteService.createNote(action).pipe(
          map((createdNote: Note) => {
            return setSelectedNoteAction({
              selectedNote: createdNote
            });
          })
        );
      })
    )
  );
  public readonly LoadNote = createEffect(() =>
    this.actions$.pipe(
      ofType(loadNotesAction),
      switchMap((action) => {
        console.log('yes');
        return this.noteService
          .loadNotes()
          .pipe(map((data) => setNotesAction({ notes: data })));
      })
    )
  );
}

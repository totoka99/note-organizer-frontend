import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';

import { NoteCreate } from '../interfaces';
import { Note } from '../models';
import { NoteService } from '../services';
import { createNoteAction, setSelectedNoteAction } from './note.actions';

@Injectable()
export class NoteEffects {
  public readonly createNote = createEffect(() =>
    this.actions$.pipe(
      ofType(createNoteAction.type),
      switchMap((action: NoteCreate) =>
        this.noteService.createNote(action).pipe(
          map((createdNote: Note) => {
            console.log(createdNote);
            return setSelectedNoteAction({ selectedNote: createdNote });
          }),
          catchError((error: HttpErrorResponse) => {
            console.log(error);
            const fallbackNote = new Note(1, 'Test', true);
            return of(setSelectedNoteAction({ selectedNote: fallbackNote }));
          })
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly noteService: NoteService
  ) {}
}

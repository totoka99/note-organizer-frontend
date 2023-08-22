import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Note } from '../models';
import { createNoteAction } from './note.actions';
import { NoteState } from './note.reducer';
import { notesSelector, selectedNoteSelector } from './note.selector';

@Injectable({ providedIn: 'root' })
export class NoteFacade {
  public readonly notes$: Observable<Array<Note>>;
  public readonly selectedNote$: Observable<Note | null>;

  constructor(private readonly store: Store<NoteState>) {
    this.notes$ = this.store.select(notesSelector);
    this.selectedNote$ = this.store.select(selectedNoteSelector);
  }

  public createNote(newNote: Note): void {
    this.store.dispatch(createNoteAction({ newNote }));
  }
}

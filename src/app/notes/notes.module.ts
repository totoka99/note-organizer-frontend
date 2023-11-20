import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CreateNoteComponent } from './components/create-note/create-note.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { NoteItemComponent } from './components/note-list/note-item/note-item.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { noteFeature } from './constants';
import { NoteEffects } from './store/note.effects';
import { noteReducer } from './store/note.reducer';
import { NoteMenuComponent } from './components/note-menu/note-menu.component';
import { SharedModule } from '../shared-module';

@NgModule({
  declarations: [
    CreateNoteComponent,
    NoteListComponent,
    NoteDetailsComponent,
    NoteItemComponent,
    NoteMenuComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(noteFeature, noteReducer),
    EffectsModule.forFeature([NoteEffects])
  ],
  exports: [NoteMenuComponent],
  providers: []
})
export class NotesModule {}

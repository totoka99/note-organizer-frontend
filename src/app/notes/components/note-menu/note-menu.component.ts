import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { getNotesAction } from '../../store/note.actions';

@Component({
  selector: 'app-note-menu',
  templateUrl: './note-menu.component.html',
  styleUrls: ['./note-menu.component.scss']
})
export class NoteMenuComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}
  public onLoadNoteList() {
    this.store.dispatch(getNotesAction());
  }
}

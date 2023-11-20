import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../../models';
import { Store } from '@ngrx/store';
import {
  deleteSelectedNoteAction,
  setSelectedNoteAction
} from 'src/app/notes/store/note.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {
  @Input() public inNote!: Note | null;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  onEdit() {
    this.store.dispatch(
      setSelectedNoteAction({ selectedNote: this.inNote })
    );
    this.router.navigate([
      '/notes/note-menu/' + this.inNote?.id
    ]);
  }
  onDelete() {
    this.store.dispatch(
      deleteSelectedNoteAction({ selectedNote: this.inNote })
    );
  }
  get checked() {
    return this.inNote?.isChecked ? 'checked' : 'unchecked';
  }
}

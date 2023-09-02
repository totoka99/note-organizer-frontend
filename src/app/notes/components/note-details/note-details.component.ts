import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../models/note.model';
import { Store } from '@ngrx/store';
import { selectedNoteSelector } from '../../store/note.selector';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
  public inNote!: Note | null;

  constructor(private store: Store) {
    this.store
      .select(selectedNoteSelector)
      .subscribe((note) => (this.inNote = note));
  }

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../models/note.model';
import { Store } from '@ngrx/store';
import { selectedNoteSelector } from '../../store/note.selector';
import { updateNoteAction } from '../../store/note.actions';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
  public inNote!: Note;
  public detailsNote!: Note;

  constructor(private store: Store) {
    this.store
      .select(selectedNoteSelector)
      .subscribe((note) => (this.inNote = note!));
    this.copydata();
  }
  copydata() {
    this.detailsNote = new Note(
      this.inNote.id,
      this.inNote.name,
      this.inNote.description,
      this.inNote.isChecked
    );
  }
  ngOnInit(): void {}

  onUpdate() {
    this.store.dispatch(
      updateNoteAction({
        noteDetails: this.detailsNote
      })
    );
    console.log(this.detailsNote);
  }
  onCheckboxChange() {
    console.log(this.detailsNote.isChecked);
  }
}

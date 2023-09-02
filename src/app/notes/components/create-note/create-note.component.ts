import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../../models';
import { NoteFacade } from '../../store';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  title = '';
  description = '';
  public readonly selectedNote$: Observable<Note | null>;

  constructor(private readonly noteFacade: NoteFacade) {
    this.selectedNote$ = this.noteFacade.selectedNote$;
  }

  ngOnInit(): void {}

  public onCreateNote(): void {
    this.noteFacade.createNote({
      name: this.title,
      description: this.description
    });
  }
}

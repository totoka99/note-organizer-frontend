import { Component, OnInit } from '@angular/core';
import { NoteFacade } from '../../store';

import { Observable } from 'rxjs';
import { Note } from '../../models';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  public readonly notes$: Observable<Array<Note> | null>;

  public selectedPageNumber = 1;
  public pageSize = 2;

  constructor(private readonly noteFacade: NoteFacade) {
    this.notes$ = this.noteFacade.notes$;
  }

  ngOnInit(): void {}
}

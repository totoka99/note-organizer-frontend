import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NoteCreate } from '../interfaces';

import { Note } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private readonly httpClient: HttpClient) {}

  public createNote(noteCreate: NoteCreate): Observable<Note> {
    return this.httpClient.post<Note>(
      'http://localhost:8080/api/user/1/note',
      noteCreate
    );
  }

  public loadNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(
      'http://localhost:8080/api/note'
    );
  }
}

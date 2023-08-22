import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NoteCreate } from '../interfaces';

import { Note } from '../models';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private readonly httpClient: HttpClient) {}

  public createNote(noteCreate: NoteCreate): Observable<Note> {
    return this.httpClient
      .post<any>('https://httpbin.org/post', noteCreate)
      .pipe(
        map((response: any) => {
          console.log();

          return JSON.parse(response.data).newNote;
        })
      );
  }
}

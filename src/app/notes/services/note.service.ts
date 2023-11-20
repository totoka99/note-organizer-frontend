import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { NoteCreate } from '../interfaces';

import { Note } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private url = environment.backendUrl;

  constructor(private readonly httpClient: HttpClient) {}

  public createNote(noteCreate: NoteCreate): Observable<Note> {
    return this.httpClient.post<Note>(
      this.url + '/note',
      noteCreate
    );
  }
  public updateNote(noteDetails: Note) {
    console.log(noteDetails);

    return this.httpClient.put<Note>(
      this.url + '/note',
      noteDetails
    );
  }

  public loadNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(this.url + '/note');
  }
  public deleteNote(selectedNote: Note) {
    return this.httpClient.delete(
      this.url + '/note/' + selectedNote?.id
    );
  }
}

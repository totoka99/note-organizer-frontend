import { Observable } from 'rxjs/internal/Observable';
import { Note } from '../models';

export interface LoadedNotes {
  notes: Note[] | null;
}

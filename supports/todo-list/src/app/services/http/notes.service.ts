import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private _url = 'http://localhost:3000/notes';

  private _notes = new BehaviorSubject<Notes>([]);
  public notes$ = this._notes.asObservable();

  constructor(private http: HttpClient) {}

  loadNotes() {
    this.getNotes().subscribe((notes) => this._notes.next(notes));
  }

  getNotes() {
    return this.http.get<Notes>(this._url);
  }

  createNote(note: Note) {
    note.dateCreation = new Date().toISOString();
    note.fait = false;
    return this.http.post(this._url, note).pipe(tap(() => this.loadNotes()));
  }

  deleteNote(id: number) {
    return this.http
      .delete(this._url + '/' + id)
      .pipe(tap(() => this.loadNotes()));
  }

  toggleNote(note: Note) {
    return this.http
      .put(this._url + '/' + note.id, {
        ...note,
        fait: !note.fait,
      })
      .pipe(tap(() => this.loadNotes()));
  }
}

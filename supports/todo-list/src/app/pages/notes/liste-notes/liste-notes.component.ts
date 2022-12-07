import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotesService } from '../../../services/http/notes.service';

@Component({
  selector: 'app-liste-notes',
  templateUrl: './liste-notes.component.html',
  styleUrls: ['./liste-notes.component.scss'],
})
export class ListeNotesComponent implements OnInit {
  private sorting = new BehaviorSubject(1);
  public sorting$ = this.sorting.asObservable();

  notes$ = combineLatest([this.sorting$, this.service.notes$]).pipe(
    map(([sorting, notes]) =>
      notes.sort((a, b) => {
        return (
          sorting *
          (new Date(b.dateEcheance).getTime() -
            new Date(a.dateEcheance).getTime())
        );
      })
    )
  );

  constructor(private service: NotesService) {
    this.service.loadNotes();
  }

  ngOnInit(): void {}

  toggleOrder() {
    this.sorting.next(this.sorting.value * -1);
  }

  tracker(index: number, item: Note) {
    return item.id;
  }

  toggleFait(note: Note) {
    this.service.toggleNote(note).subscribe();
  }
}

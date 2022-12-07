import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNoteComponent } from './pages/notes/add-note/add-note.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('addTpl', { static: true, read: TemplateRef })
  addTpl!: TemplateRef<any>;

  constructor(private dialog: MatDialog) {}

  openAdd() {
    const ref = this.dialog.open(AddNoteComponent);
  }
}

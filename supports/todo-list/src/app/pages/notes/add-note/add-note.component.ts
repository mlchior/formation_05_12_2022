import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NotesService } from '../../../services/http/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  form: FormGroup = new FormGroup({
    titre: new FormControl('', [Validators.required, Validators.maxLength(64)]),
    texte: new FormControl('', [
      Validators.required,
      Validators.maxLength(256),
    ]),
    dateEcheance: new FormControl(null, [
      Validators.required,
      Validators.min(Date.now()),
    ]),
  });

  minDate = new Date();

  constructor(
    private service: NotesService,
    private ref: MatDialogRef<AddNoteComponent>
  ) {}

  ngOnInit(): void {}

  submit() {
    if (!this.form.valid) return;

    this.service.createNote(this.form.value).subscribe(() => {
      this.ref.close();
    });
  }
}

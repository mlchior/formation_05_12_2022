import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form = this.fb.group({
    title: ['', [Validators.required]],
    time: [null, [Validators.required, Validators.min(0)]],
  });

  @Output()
  private create = new EventEmitter<Recipe>();
  @Output()
  private edit = new EventEmitter<Recipe>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit() {
    if (!this.form.valid) return;
    const payload = this.form.value;
    this.create.emit(payload);
    this.edit.emit(payload);
  }
}

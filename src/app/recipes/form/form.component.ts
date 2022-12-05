import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  // Create a reactive forms module.
  // Group = JSON object, control = simple input, array = array of controls/groups
  // You can give a value directly (title: ''), or set it up with validators ([VALUE, [ARRAY_OF_VALIDATORS]])
  form = this.fb.group({
    title: ['', [Validators.required]],
    time: [null, [Validators.min(0)]],
  });

  // Use @Output to emit an event back to the parent
  // Be careful to import EventEmitter from angular core
  @Output()
  private create = new EventEmitter<Recipe>();
  @Output()
  private edit = new EventEmitter<Recipe>();

  @Input()
  recipe?: Recipe;

  // Inject the form builder to ease the form construction
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.form.patchValue(this.recipe!);
  }

  submit() {
    if (!this.form.valid) return;
    const payload = this.form.value;

    // if (this.recipe) this.edit.emit(payload);
    // else this.create.emit(payload);

    this.create.emit(payload);
    this.edit.emit(payload);
  }
}

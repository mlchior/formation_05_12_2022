import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IngredientsService } from '../../providers/http/ingredients.service';

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
    // We add a form array, which will hold our new form controls.
    // Make it empty to start, and call the function to add a form group to it once in the constructor
    ingredients: this.fb.array([]),
  });

  // Create a getter that will return the list of form groups in our form array, so that the HTML can loop over it
  get ingredientsControls() {
    return (this.form.get('ingredients') as FormArray).controls as FormGroup[];
  }

  // Use @Output to emit an event back to the parent
  // Be careful to import EventEmitter from angular core
  @Output()
  private create = new EventEmitter<Recipe>();
  @Output()
  private edit = new EventEmitter<Recipe>();

  // Use @Input to get data from the parent
  @Input()
  recipe?: Recipe;

  ingredients$ = this.ingredientsService.ingredients$;

  // Inject the form builder to ease the form construction
  constructor(
    private fb: FormBuilder,
    private ingredientsService: IngredientsService
  ) {
    // Add a new form group to our form array
    this.addIngredientForm();
  }

  ngOnInit(): void {}

  // Triggered when the inputs of the component change
  ngOnChanges() {
    // When the input changes, we want to reset our form array
    // The quickest way to do this is to remove the original control from the form, then add it back
    this.form.removeControl('ingredients');
    this.form.addControl('ingredients', this.fb.array([]));

    // For each ingredient in the recipe, we then add a line to our form array
    for (let i = 0; i < (this.recipe?.ingredients?.length ?? 0); i++) {
      this.addIngredientForm();
    }

    // The patchValue method will update the form value, and if the line count of the form array matches the number of ingrdients, it will automatically update the whole form
    // This is only possible because form & recipe have the SAME model, and the SAME # of ingredients.
    this.form.patchValue(this.recipe!);
  }

  addIngredientForm() {
    // We create a new form group that we will push into our form array
    const form = this.fb.group({
      name: ['', [Validators.required]],
      qty: [undefined, [Validators.required]],
      unit: ['', [Validators.required]],
    });

    (this.form.get('ingredients') as FormArray).push(form);
  }

  removeIngredient(index: number) {
    (this.form.get('ingredients') as FormArray).removeAt(index);
  }

  submit() {
    if (!this.form.valid) return;
    const payload = this.form.value;

    // "Clean" way : check if the recipe is provided
    // if (this.recipe) this.edit.emit(payload);
    // else this.create.emit(payload);

    // "Quick & dirty" way : since add listens to create, and edit to edit, simply emit everything at once.
    this.create.emit(payload);
    this.edit.emit(payload);

    this.form.reset();
    this.form.markAsPristine();
  }
}

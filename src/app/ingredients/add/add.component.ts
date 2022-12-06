import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IngredientsService } from '../../providers/http/ingredients.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  // Since we only have a single input (name), we only need a control, not a group
  control = new FormControl('', [Validators.required]);

  // We create a view child to be able to manipulate it in the HTML
  // We declare it as static because there is no *ngIf around it : the button will always be here, hence static
  // We ask to read the ElementRef, otherwise it will return the first directive applied on the button (here MatButton)
  // ElementRef is an Angular's internal, it give "nativeElement", which gives the real HTML Element. We can use generic typing to get the correct type, button
  @ViewChild('submitBtn', { static: true, read: ElementRef })
  submitButton!: ElementRef<HTMLButtonElement>;

  constructor(private service: IngredientsService) {}

  ngOnInit(): void {}

  submit() {
    if (!this.control.valid) return;

    const name = this.control.value;

    this.service.addIngredient({ name }).subscribe(() => {
      // We reset the control for user convenience
      this.control.reset();
    });
  }
}

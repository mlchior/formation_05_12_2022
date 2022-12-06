import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './common/error/error.component';
import { ListComponent } from './recipes/list/list.component';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AddComponent } from './recipes/add/add.component';
import { FormComponent } from './recipes/form/form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TimePipe } from './common/pipes/time.pipe';
import { EditComponent } from './recipes/edit/edit.component';
import { ListItemDirective } from './recipes/list/list-item.directive';

@NgModule({
  // UI Elements : components, directives, pipes ...
  declarations: [
    AppComponent,
    ListComponent,
    ErrorComponent,
    AddComponent,
    FormComponent,
    EditComponent,
    TimePipe,
    ListItemDirective,
  ],
  // Mainly modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatSelectModule,
    MatListModule,
    FormsModule,
  ],
  // Data providers : services, guards, interceptors ...
  // Also used for provider overriding, which will be explained in every library's documentation
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  // Run this component as the main component when the applications start
  bootstrap: [AppComponent],
})
export class AppModule {}

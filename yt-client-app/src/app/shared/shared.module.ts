// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// ================

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReduceNumberPipe } from './pipes/reduce-number.pipe';
import { CardBorderColorDirective } from './directives/border-color.directive';

@NgModule({
  declarations: [ReduceNumberPipe, CardBorderColorDirective],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatChipsModule,
    MatTooltipModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  exports: [
    ReduceNumberPipe,
    CardBorderColorDirective,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatChipsModule,
    MatTooltipModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
})
export class SharedModule {}

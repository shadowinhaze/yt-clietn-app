import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBorderColorDirective } from './directives/border-color.directive';
import { ReduceNumberPipe } from './pipes/reduce-number.pipe';
import { DirectionIconDirective } from './directives/direction-icon.directive';

@NgModule({
  declarations: [
    ReduceNumberPipe,
    CardBorderColorDirective,
    DirectionIconDirective,
  ],
  exports: [ReduceNumberPipe, CardBorderColorDirective, DirectionIconDirective],
  imports: [CommonModule],
})
export class SharedModule {}

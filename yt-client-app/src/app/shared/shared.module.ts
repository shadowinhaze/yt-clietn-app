import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReduceNumberPipe } from './pipes/reduce-number.pipe';
import { CardBorderColorDirective } from './directives/border-color.directive';

@NgModule({
  declarations: [ReduceNumberPipe, CardBorderColorDirective],
  exports: [ReduceNumberPipe, CardBorderColorDirective],
  imports: [CommonModule],
})
export class SharedModule {}

import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';
import { CountDiffAmongDays } from '../utils/date';

enum CardBorderColorMods {
  red = 'red',
  blue = 'blue',
  green = 'green',
  default = 'transparent',
}

enum CalendarConstants {
  month = 31,
  week = 7,
  halfYear = 182,
}

@Directive({
  selector: '[ytCardBorderColor]',
})
export class CardBorderColorDirective implements OnChanges {
  @Input() public publishedDate: string = '';

  private cardBorderColorMod: string = CardBorderColorMods.default;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.countDate();
    this.renderer.addClass(
      this.elementRef.nativeElement,
      `${this.elementRef.nativeElement.className}_${this.cardBorderColorMod}`
    );
  }

  countDate(): void {
    const diffDays = CountDiffAmongDays(this.publishedDate);
    if (diffDays > CalendarConstants.halfYear + 1)
      this.cardBorderColorMod = CardBorderColorMods.red;
    if (diffDays < CalendarConstants.month + 1)
      this.cardBorderColorMod = CardBorderColorMods.green;
    if (diffDays < CalendarConstants.week + 1)
      this.cardBorderColorMod = CardBorderColorMods.blue;
  }
}

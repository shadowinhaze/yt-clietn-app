import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';
import { CountDiffAmongDays } from '../shared/utils';

export enum CardBorderColors {
  red = '#EB5757',
  blue = '#2F80ED',
  green = '#27AE60',
  default = 'transparent',
}

@Directive({
  selector: '[ytCardBorderColor]',
})
export class CardBorderColorDirective implements OnChanges {
  @Input() publishedDate: string = '';

  private cardBorderColor = CardBorderColors.default;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.countDate();
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.cardBorderColor
    );
  }

  countDate() {
    const diffDays = CountDiffAmongDays(this.publishedDate);
    if (diffDays < 32) this.cardBorderColor = CardBorderColors.green;
    if (diffDays < 8) this.cardBorderColor = CardBorderColors.blue;
    if (diffDays > 183) this.cardBorderColor = CardBorderColors.red;
  }
}

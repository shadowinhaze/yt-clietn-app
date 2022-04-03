import {
  Directive,
  Input,
  OnChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ytDirectionIcon]',
})
export class DirectionIconDirective implements OnChanges {
  @Input() condition: boolean = false;

  @Input() isDirAsc: boolean = false;

  @Input() thumbDown: TemplateRef<Element> | null = null;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<Element>
  ) {}

  ngOnChanges(): void {
    this.viewContainerRef.clear();
    if (this.condition) {
      if (this.isDirAsc) {
        this.viewContainerRef.createEmbeddedView(this.template);
      } else if (this.thumbDown) {
        this.viewContainerRef.createEmbeddedView(this.thumbDown);
      }
    } else {
      this.viewContainerRef.clear();
    }
  }
}

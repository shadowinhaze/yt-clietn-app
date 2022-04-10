import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'yt-filter-activator',
  templateUrl: './filter-activator.component.html',
})
export class FilterActivatorComponent {
  @Input() disabled: boolean = false;

  @Output() toggleSettings = new EventEmitter();

  action() {
    this.toggleSettings.emit();
  }
}

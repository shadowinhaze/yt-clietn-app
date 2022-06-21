import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'yt-filter-activator',
  templateUrl: './filter-activator.component.html',
})
export class FilterActivatorComponent {
  @Output() toggleSettings = new EventEmitter();

  action() {
    this.toggleSettings.emit();
  }
}

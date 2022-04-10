import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SettingsService } from 'src/app/core/services/settings.service';

@Component({
  selector: 'yt-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Input() disabled: boolean = true;

  @Output() readonly searchValueSubmit = new EventEmitter();

  constructor(public settingsService: SettingsService) {}

  action() {
    this.searchValueSubmit.emit();
  }
}

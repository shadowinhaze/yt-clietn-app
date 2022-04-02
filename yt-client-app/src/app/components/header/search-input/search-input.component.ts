import { Component, EventEmitter, Output } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.sevice';

@Component({
  selector: 'yt-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Output() searchValueSubmit = new EventEmitter();

  constructor(public settingsService: SettingsService) {}

  action() {
    this.searchValueSubmit.emit();
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'yt-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Output() readonly searchValueSubmit = new EventEmitter();

  constructor(public settingsService: SettingsService) {}

  action() {
    this.searchValueSubmit.emit();
  }
}

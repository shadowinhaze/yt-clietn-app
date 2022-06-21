import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'yt-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Input() searchValue = '';

  @Output() readonly searchValueSubmit = new EventEmitter<string>();

  onSearchValueChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.searchValue = target.value;
  }

  onSearchValueSubmit() {
    this.searchValueSubmit.emit(this.searchValue);
  }
}

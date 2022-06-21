import { Component, Input, OnInit } from '@angular/core';
import { Path } from 'src/app/shared/constants/shared-constants';
import { CustomItem } from '../../models/custom-item.model';
import { SearchItemShort } from '../../models/search-item.model';

@Component({
  selector: 'yt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() public card: CustomItem | SearchItemShort | null = null;

  private isCustomItem: boolean = false;

  ngOnInit(): void {
    if (this.card) {
      this.isCustomItem = 'imageLink' in this.card;
    }
  }

  get id() {
    return `${Path.video}/${this.card!.id}`;
  }

  get imageLink(): string {
    return this.card && this.isCustomItem
      ? (this.card! as CustomItem).imageLink
      : (this.card! as SearchItemShort).thumbnails['medium'].url;
  }

  get cardDate(): Date {
    if (this.card) {
      return this.isCustomItem
        ? (this.card! as CustomItem).creationDate
        : (this.card! as SearchItemShort).publishedAt;
    }

    return new Date();
  }

  get apiCard(): SearchItemShort | null {
    if (this.card && !this.isCustomItem) return this.card as SearchItemShort;

    return null;
  }
}

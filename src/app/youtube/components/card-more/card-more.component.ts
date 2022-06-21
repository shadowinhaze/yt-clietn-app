import { Component, Input, OnInit } from '@angular/core';
import { Path } from 'src/app/shared/constants/shared-constants';
import { CustomItem } from '../../models/custom-item.model';
import { SearchItemShort, Thumbnails } from '../../models/search-item.model';

@Component({
  selector: 'yt-card-more',
  templateUrl: './card-more.component.html',
  styleUrls: ['./card-more.component.scss'],
})
export class CardMoreComponent implements OnInit {
  readonly thumbType = {
    max: 'maxres',
    def: 'default',
  };

  readonly backLink = `/${Path.main}`;

  @Input() public card: SearchItemShort | CustomItem | null = null;

  private isCustomItem: boolean = false;

  ngOnInit(): void {
    if (this.card) {
      this.isCustomItem = 'imageLink' in this.card;
    }
  }

  get imageLink(): string {
    return this.card && this.isCustomItem
      ? (this.card! as CustomItem).imageLink
      : this.checkAndGetImg((this.card! as SearchItemShort).thumbnails);
  }

  get cardDate(): Date {
    return this.card && this.isCustomItem
      ? (this.card! as CustomItem).creationDate
      : (this.card! as SearchItemShort).publishedAt;
  }

  get apiCard(): SearchItemShort | null {
    if (this.card && !this.isCustomItem) return this.card as SearchItemShort;

    return null;
  }

  get videoLink(): string {
    return this.isCustomItem
      ? (this.card! as CustomItem).videoLink
      : `https://www.youtube.com/watch?v=${(this.card! as SearchItemShort).id}`;
  }

  private checkAndGetImg(thumbs: Thumbnails): string {
    return this.thumbType.max in thumbs
      ? thumbs[this.thumbType.max].url
      : thumbs[this.thumbType.def].url;
  }
}

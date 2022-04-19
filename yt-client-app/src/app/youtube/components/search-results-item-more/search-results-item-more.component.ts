import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Paths } from 'src/app/shared/constants/shared-constants';
import { SearchItemShort, Thumbnails } from '../../models/search-item.model';

@Component({
  selector: 'yt-search-results-item-more',
  templateUrl: './search-results-item-more.component.html',
  styleUrls: ['./search-results-item-more.component.scss'],
})
export class SearchResultsItemMoreComponent {
  readonly thumbsTypes = {
    max: 'maxres',
    def: 'default',
  };

  readonly backLink = `/${Paths.main}`;

  @Input() public card: Observable<SearchItemShort> | null = null;

  checkImg(thumbs: Thumbnails): string {
    return this.thumbsTypes.max in thumbs
      ? thumbs[this.thumbsTypes.max].url
      : thumbs[this.thumbsTypes.def].url;
  }
}

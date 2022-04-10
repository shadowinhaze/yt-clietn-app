import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchItem } from '../../models/search-item.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'yt-search-results-item-page',
  templateUrl: './search-results-item-page.component.html',
})
export class SearchResultsItemPageComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  private card: SearchItem | null = null;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        const newCard = this.dataService.getItem(params['id']);
        if (newCard) {
          this.card = newCard;
        } else {
          this.router.navigate(['**']);
        }
      }
    });
  }

  get cardInfo() {
    return this.card;
  }
}

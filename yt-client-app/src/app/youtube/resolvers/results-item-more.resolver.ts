import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { SearchItem } from '../models/search-item.model';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root',
})
export class ResultsItemMoreResolver implements Resolve<SearchItem> {
  constructor(private dataService: DataService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): SearchItem {
    const item = this.dataService.getItemById(route.params['id']);
    return item || this.router.navigate(['**']);
  }
}

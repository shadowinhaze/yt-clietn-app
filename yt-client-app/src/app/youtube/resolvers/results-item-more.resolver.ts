import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchItemShort } from '../models/search-item.model';
import { DataService } from '../../core/services/data.service';

@Injectable({
  providedIn: 'root',
})
export class ResultsItemMoreResolver implements Resolve<SearchItemShort> {
  constructor(private dataService: DataService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): SearchItemShort | Observable<SearchItemShort> {
    const item = this.dataService.getItemById(route.params['id']);
    return item || this.router.navigate(['**']);
  }
}

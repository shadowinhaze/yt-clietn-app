import { Injectable, OnDestroy } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { AppStore } from 'src/app/store/store.model';
import { CustomItem } from '../models/custom-item.model';
import { SearchItemShort } from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class ResultsItemMoreResolver
  implements
    Resolve<
      | CustomItem
      | SearchItemShort
      | Observable<SearchItemShort>
      | Promise<boolean>
    >,
    OnDestroy
{
  private customItems: CustomItem[] = [];

  private rawApiItems: SearchItemShort[] = [];

  private subscription = new Subscription();

  constructor(
    private router: Router,
    private store: Store<AppStore>,
    private apiService: ApiService
  ) {
    this.subscription.add(
      this.store.select('apiItems').subscribe((apiItems) => {
        this.rawApiItems = [...apiItems.raw];
      })
    );

    this.subscription.add(
      this.store.select('customItems').subscribe((customItems) => {
        this.customItems = [...customItems];
      })
    );
  }

  resolve(
    route: ActivatedRouteSnapshot
  ):
    | CustomItem
    | SearchItemShort
    | Observable<SearchItemShort>
    | Promise<boolean> {
    const { id } = route.params;
    const apiItem = this.getApiItemById(id);
    const customItem = this.getCustomItemById(id);

    return customItem || apiItem || this.router.navigate(['**']);
  }

  getApiItemById(
    id: string
  ): SearchItemShort | Observable<SearchItemShort> | undefined {
    return this.rawApiItems.length > 0
      ? this.rawApiItems.find((item) => item.id === id)!
      : this.apiService.getItemById(id).pipe(
          tap((data) => {
            if (!data) this.router.navigate(['**']);
          })
        );
  }

  getCustomItemById(id: string): CustomItem | undefined {
    return this.customItems.find((item) => item.id === id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

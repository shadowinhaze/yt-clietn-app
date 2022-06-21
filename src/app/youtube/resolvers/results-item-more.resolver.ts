import { Injectable, OnDestroy } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, take } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { selectApiItems, selectCustomItems } from 'src/app/store';
import { AppStore } from 'src/app/store/models/store.model';
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
      | Promise<boolean>
      | Observable<SearchItemShort>
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
      this.store.select(selectApiItems).subscribe((apiItems) => {
        this.rawApiItems = [...apiItems.raw];
      })
    );

    this.subscription.add(
      this.store.select(selectCustomItems).subscribe((customItems) => {
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

    return (
      this.getCustomItemById(id) ||
      this.getApiItemById(id) ||
      this.goToNotFoundPage()
    );
  }

  private getApiItemById(
    id: string
  ): SearchItemShort | Observable<SearchItemShort> {
    return this.rawApiItems.length > 0
      ? this.rawApiItems.find((item) => item.id === id)!
      : this.apiService.getItemById(id).pipe(take(1));
  }

  private getCustomItemById(id: string): CustomItem | undefined {
    return this.customItems.find((item) => item.id === id);
  }

  private goToNotFoundPage(): Promise<boolean> {
    return this.router.navigate(['**']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
